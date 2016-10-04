class GroupsController < ApplicationController
  before_filter :authenticate_user
  def create
    @group = Group.new(app_params)
    render :json => @group.save
  end
  def index
    @groups = Group.current_user(session[:user_id])
    render :json => @groups
  end
  private
  def app_params
    params.permit(:name, :description, emails:[])
  end
end
