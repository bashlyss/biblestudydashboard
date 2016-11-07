class UsersController < ApplicationController
  before_filter :authenticate_user, :only => [:logout]
  before_filter :save_login_state, :only => [:create, :login]
  def index
    render :json => User.all()
  end
  def create
    @user = User.new(app_params)
    render :json => @user.save
  end
  def logout
    session[:user_id] = nil
    render :json => true
  end
  def login
    user = User.authenticate(params[:email], params[:password])
    if user
      session[:user_id] = user.id
      render :json => true
    else
      render :json => false
    end
  end
  private
  def app_params
    params.permit(:email, :name, :password, :password_confirmation)
  end
end
