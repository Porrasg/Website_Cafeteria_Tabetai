class RenameReservationsIdToReservationId < ActiveRecord::Migration[7.0]
  def change
    rename_column :rest_tables, :reservations_id, :reservation_id
  end
end
