class GroupsController < ApplicationController
    before_filter :authenticate_user
    def create
        group = Group.new(app_params)
        group.owner_id = session[:user_id]
        render :json => group.save
    end
    
    def index
        @groups = Group.for_user(session[:user_id])
        render :json => @groups
    end
    
    def show
        @group = Group.find(params[:id])
        render :json => @group.to_json(
            :include => [
                {:users => {:only => [:name, :email, :id]}},
                {:owner => {:only => [:name, :email, :id]}},
                :docs
            ])
    end

    private
    def app_params
        params.permit(:name, :description, user_ids:[])
    end
end
