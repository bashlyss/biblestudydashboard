class AddUserRefToGroup < ActiveRecord::Migration[5.0]
  def change
    add_reference :groups, :owner, foreign_key: true
  end
end
