# class DeleteReservationJob < ApplicationJob
#   queue_as :default

#   def self.perform
#     # Elimina las reservas vencidas
#     Reservation.where('hour < ?', 1.5.hours.ago).destroy_all
#   end


# end
