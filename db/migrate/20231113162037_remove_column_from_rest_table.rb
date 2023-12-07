class RemoveColumnFromRestTable < ActiveRecord::Migration[7.0]
  def change
    remove_column :rest_tables, :quantity, :string
  end
end
