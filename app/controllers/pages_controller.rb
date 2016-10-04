class PagesController < ApplicationController
  before_filter :authenticate_user, :only => [:index]
  before_filter :save_login_state, :only => [:noauth]
  def index
  end
  def noauth
  end
end
