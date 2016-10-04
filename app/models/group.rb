class Group < ApplicationRecord
    attr_accessor :emails
    has_and_belongs_to_many :users
    belongs_to :owner, class_name: "User"
    before_create :set_owner
    before_save :validate_emails
    after_save :clear_email
    scope :current_user, -> (user_id) { where owner_id: user_id }
    def set_owner
        self.owner = session[:user_id]
    end
    def clear_emails
        self.emails = nil
    end
    def validate_emails
        if emails.present?
            self.users = emails.map { |email| User.find_by_email(email) }
        end
    end
end
