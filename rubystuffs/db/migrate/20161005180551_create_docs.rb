class CreateDocs < ActiveRecord::Migration[5.0]
  def change
    create_table :docs do |t|
      t.text :description
      t.string :title
      t.references :group, foreign_key: true

      t.timestamps
    end
  end
end
