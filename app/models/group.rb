class Group < ApplicationRecord
    has_and_belongs_to_many :users
    belongs_to :owner, class_name: "User"
    scope :for_user, -> (user_id) { User.find(user_id).groups }
end
