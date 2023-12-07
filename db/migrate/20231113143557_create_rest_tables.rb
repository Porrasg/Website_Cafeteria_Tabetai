class CreateRestTables < ActiveRecord::Migration[7.0]
  def change
    create_table :rest_tables do |t|
      t.string :name_table
      t.spaces :integer
      t.string :status

      t.timestamps
    end
  end
end
