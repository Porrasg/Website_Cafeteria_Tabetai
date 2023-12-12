class AddOnDeleteCascadeToForeignKeys < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :rest_tables, :reservations
    remove_foreign_key :reservations, :clients

    add_foreign_key :rest_tables, :reservations, on_delete: :cascade
    add_foreign_key :reservations, :clients, on_delete: :cascade
  end
end
