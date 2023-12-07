class CleanupRestTableJob < ApplicationJob
  queue_as :default

  def perform(reservation_id) #Utilizo el reservation_id de parametro
    # Encuentra en mi tabla RestTable mi reservation_id
    table_record = RestTable.find_by(reservation_id: reservation_id)

    # Carga esto si se encuentra
    if table_record
      table_record.update_columns(reservation_id: nil, status: "available")
      Rails.logger.info("Reservation #{reservation_id} cleaned up.")
    else
      Rails.logger.error("Reservation #{reservation_id} not found.")
    end
  end
end
