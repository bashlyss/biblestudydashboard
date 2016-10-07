class GroupsController < ApplicationController
    before_filter :authenticate_user
    def create
        group = Group.new(app_params)
        group.owner_id = session[:user_id]
        group.active = true
        if !group.users.include?(@current_user)
            group.users.push(@current_user)
        end
        render :json => group.save
    end
    
    def index
        @activegroups = Group.for_user(session[:user_id]).where(active: true)
        @inactivegroups = Group.inactive(session[:user_id])
        render :json => @activegroups + @inactivegroups
    end
    
    def show
        @group = Group.find(params[:id])
        if params[:owner]
            render :json => @group.to_json(:only => [:id, :active, :owner_id]) 
        else
            render :json => @group.to_json(
                :include => [
                    {:users => {:only => [:name, :email, :id]}},
                    {:owner => {:only => [:name, :email, :id]}},
                    :docs,
                    {
                        :comments =>
                            {
                                :only => [:title, :comment, :id],
                                :include => {
                                    :user => {:only => :name}
                                }
                            }
                    },
                ])
        end
    end

    def update
        group = Group.find(params[:id])
        if group.owner_id == session[:user_id] && params[:activate]
            group.active = true
            group.save
        end
        render :json => true
    end

    def destroy
        group = Group.find(params[:id])
        if group.owner_id == session[:user_id]
            group.active = false
            group.save
        end
        render :json => true
    end 

    private
    def app_params
        params.permit(:name, :description, user_ids:[])
    end
end
