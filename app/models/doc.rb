class Doc < ApplicationRecord
  belongs_to :group
  has_attached_file :document
end
