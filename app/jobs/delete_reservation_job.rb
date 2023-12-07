class DeleteReservationJob < ApplicationJob
  queue_as :default

  def perform(reservation_id)
    # Find the record in the Rest_tables table by reservation_id
    table_record = RestTable.find_by(reservation_id: reservation_id)

    # Update the record if found
    if table_record
      table_record.update_columns(reservation_id: nil, status: "available")
      Rails.logger.info("Reservation #{reservation_id} cleaned up.")
    else
      Rails.logger.error("Reservation #{reservation_id} not found.")
    end
  end
  
end
