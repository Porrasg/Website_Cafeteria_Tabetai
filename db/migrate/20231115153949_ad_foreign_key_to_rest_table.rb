class AdForeignKeyToRestTable < ActiveRecord::Migration[7.0]
  def change
    add_reference :rest_tables, :reservations, foreign_key: true
  end
end