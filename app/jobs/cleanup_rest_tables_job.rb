require "resque"

class CleanupRestTablesJob < ApplicationJob
  queue_as :default
  
  def perform
    # Encuentra todos los registros en RestTable donde reservation_id no es nulo
    table_records = RestTable.where.not(reservation_id: nil)

    # Itera sobre los registros y limpia cada uno
    table_records.each do |table_record|
      table_record.update(reservation_id: nil, status: "available")
      Rails.logger.info("Reservation #{table_record.reservation_id} cleaned up.")
    end

    Rails.logger.info("#{table_records.count} reservations cleaned up.")
  end
end
