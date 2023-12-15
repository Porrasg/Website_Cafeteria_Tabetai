# --------------------------------------------------------------------------------------------------------
# Aqui se crea el cliente ->
# Client.create(full_name: "Bairon Juarez", email: "baironj@gmail.com", phone_number: "60601233")
# ---------------------------------------------------------------------------------------------------------

# ------------------------------------------------------------------------------
# Aqui se crea la reservación ->
# Reservation.create(party: 2, date: Date.today, hour: '18:00:00', client_id: 1)
# --------------------------------------------------------------------------------

# rest_table = RestTable.available_tables(8)
# # Crea la reserva si se encontró una mesa disponible
# if rest_table.present?
#   reservation = Reservation.new(party: 4, date: Date.today, hour: '15:00:00', client_id: 1, rest_table: 4)

#   if reservation.save
#     puts "Reserva creada con éxito"
#   else
#     puts "Error al crear la reserva: #{reservation.errors.full_messages.join(', ')}"
#   end
# else
#   puts "No hay mesas disponibles para la reserva."
# end

# ---------------------------------------------------------------------------
# Aqui se crea una mesa nueva (Objeto) ->
# RestTable.create(name_table: "Familiar", spaces: 6, status: "available")
# ----------------------------------------------------------------------------

# ---------------------------------------------------------------------
# Aquí se hace un update de la mesa con el id de la reservación ->
# Encuentra el objeto con id 1 en la tabla rest_table
# rest_table = RestTable.find(7)
# # Actualiza el reservation_id
# rest_table.update(reservation_id: 14)
# puts "Se actualizó el objeto con id 2 en la tabla rest_table con reservation_id 11."
# -----------------------------------------------------------------------

# Reservation.destroy_all
# RestTable.where('id >= ?', 15).delete_all

# Client.destroy_all
# rest_table = RestTable.where(spaces: 6, status: "available").first
# rest_table.update(status: 'nuevo_estado')