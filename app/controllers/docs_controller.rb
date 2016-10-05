class DocsController < ApplicationController
    before_filter :authenticate_user
    def create
        doc = Doc.new(app_params)
        render :json => doc.save
    end

    def index
        docs = Doc.for_group(params[:group_id])
        render :json => docs
    end

    def show
        doc = Doc.find(:id)
        group = Group.find(doc.group_id)
        if Group.for_user(session[:user_id]).include?(group)
            render :json => doc
        else
            render :json => {}
        end
    end

    private
    def app_params
        params.permit(:title, :description, :document, :group_id)
    end
end
