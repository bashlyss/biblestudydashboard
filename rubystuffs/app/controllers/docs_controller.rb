class DocsController < ApplicationController
    before_filter :authenticate_user
    def create
        doc = Doc.new(app_params)
        doc.user = @current_user
        render :json => doc.save
    end

    def index
        docs = Doc.for_group(params[:group_id])
        render :json => docs
    end

    def show
        doc = Doc.find(params[:id])
        group = Group.find(doc.group_id)
        if Group.for_user(session[:user_id]).include?(group)
            render :json => doc.to_json(
                :include => [
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
        else
            render :json => {}
        end
    end

    def getDocument
        doc = Doc.find(params[:id])
        group = Group.find(doc.group_id)
        if Group.for_user(session[:user_id]).include?(group)
            send_file doc.document.path, :type => doc.document.content_type
        end
    end

    private
    def app_params
        params.permit(:title, :description, :document, :group_id)
    end
end
