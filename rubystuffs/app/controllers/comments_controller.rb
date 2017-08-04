class CommentsController < ApplicationController
    before_filter :authenticate_user

    def create
        comment = Comment.new(app_params)
        comment.user_id = session[:user_id]
        success = comment.save
        if success
            render :json => comment.to_json(
                :only => [:title, :comment, :id],
                :include => {
                    :user => {:only => :name}
                }
            )
        else
            render :json => false
        end
    end

    private
    def app_params
        params.permit(:comment, :title, :attached_to_type, :attached_to_id)
    end
end
