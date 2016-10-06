class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :attached_to, polymorphic: true
    scope :for_object, -> (type, obj_id) {
        Comment.find_by(attached_to_type: type, attached_to_id: obj_id)
    }
end
