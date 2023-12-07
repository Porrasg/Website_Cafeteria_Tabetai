class AddColumnNameToRestTable < ActiveRecord::Migration[7.0]
  def change
    add_column :rest_tables, :name_table, :string
    add_column :rest_tables, :spaces, :integer
    add_column :rest_tables, :status, :string
  end
end
