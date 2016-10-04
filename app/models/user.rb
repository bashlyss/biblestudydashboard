require 'digest/sha1'

class User < ApplicationRecord
  has_and_belongs_to_many :groups
  has_many :groups, foreign_key: "owner_id"
  attr_accessor :password
  EMAIL_REGEX = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i
  validates :name, :presence => true
  validates :email, :presence => true, :uniqueness => true, :format => EMAIL_REGEX
  validates :password, :confirmation => true #password_confirmation attr
  validates_length_of :password, :in => 6..20, :on => :create
  before_save :encrypt_password
  after_save :clear_password
  def encrypt_password
    if password.present?
      self.salt= Digest::SHA1.hexdigest(email + Time.now.to_s)
      self.encrypted_password= Digest::SHA1.hexdigest(salt + password)
    end
  end
  def clear_password
    self.password = nil
  end
  def self.authenticate(email="", login_password="")
    if  EMAIL_REGEX.match(email)    
      user = User.find_by_email(email)
    end
    if user && user.match_password(login_password)
      return user
    else
      return false
    end
  end   
  def match_password(login_password="")
    encrypted_password == Digest::SHA1.hexdigest(salt + login_password)
  end
end
