class Doc < ApplicationRecord
  belongs_to :group
  belongs_to :user
  has_many :comments, as: :attached_to
  has_attached_file :document,
      :url => "/uploads/docs/documents/:id/:style/:basename.:extension",
      :path => ":rails_root/uploads/docs/documents/:id/:style/:basename.:extension"
  validates_attachment :document, presence: true,
      content_type: { content_type: [
          /image/,
          "application/pdf",
          "text/plain",
          "application/octet-stream",
          "application/x-zip-compressed"
      ]}
  do_not_validate_attachment_file_type :document
  scope :for_group, -> (group_id) { Group.find(group_id).docs }
end
