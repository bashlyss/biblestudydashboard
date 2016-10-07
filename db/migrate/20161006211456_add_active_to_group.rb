class AddActiveToGroup < ActiveRecord::Migration[5.0]
  def change
    add_column :groups, :active, :boolean
  end
end
