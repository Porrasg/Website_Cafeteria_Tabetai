# spec/jobs/cleanup_rest_tables_job_spec.rb
require 'rails_helper'

RSpec.describe CleanupRestTablesJob, type: :job do
  describe '#perform' do
    it 'cleans up reservations in RestTable' do
      # Crear un cliente
      client = FactoryBot.create(:client)

      # Crear un registro de RestTable con reservation_id inicialmente nulo
      rest_table = RestTable.create(name_table: "name table", spaces: 4, status: "available", reservation_id: nil)

      # Crear una reserva con reservation_id no nulo
      reservation = Reservation.create(party: 4, date: DateTime.now, hour: DateTime.now + 1.hour, client_id: client.id)

      # Asignar el reservation_id de la reserva al RestTable
      rest_table.update(reservation_id: reservation.id, status: "reserved")

      # Verificar que el RestTable tiene el reservation_id y el estado esperados
      expect(rest_table.reservation_id).to eq(reservation.id)
      expect(rest_table.status).to eq("reserved")

      # Ejecutar el job de forma síncrona
      CleanupRestTablesJob.perform_now

      # Verificar que el RestTable ha sido actualizado correctamente por el job
      expect(RestTable.find(rest_table.id).reservation_id).to be_nil
      expect(RestTable.find(rest_table.id).status).to eq("available")

    end
  end
end
