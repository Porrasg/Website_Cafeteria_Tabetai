class RemoveForeignKeyFromReservation < ActiveRecord::Migration[7.0]
  def change
    remove_reference :reservations, :rest_tables, null: false, foreign_key: true
  end
end
