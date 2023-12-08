# class CleanupRestTablesJob < ApplicationJob
#   queue_as :default

#   def perform #Utilizo el reservation_id de parametro
#     CleanupRestTablesJob.set(wait: 1.5.hour).perform_later(reservation_id)
#     # Encuentra en mi tabla RestTable mi reservation_id
#     table_record = RestTable.find(reservation_id)

#     # Carga esto si se encuentra
#     if table_record
#       table_record.update_columns(reservation_id: nil, status: "available")
#       Rails.logger.info("Reservation #{reservation_id} cleaned up.")
#     else
#       Rails.logger.error("Reservation #{reservation_id} not found.")
#     end
#   end

# end

# app/jobs/cleanup_rest_tables_job.rb

class CleanupRestTablesJob < ApplicationJob
  queue_as :default

  def self.enqueue_cleanup(reservation_id)
    set(wait: 1.5.hours).perform_later(reservation_id)
  end
  
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
