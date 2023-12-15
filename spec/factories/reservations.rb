# # spec/factories/reservations.rb
# FactoryBot.define do
#   factory :reservation do
#     party { 2 } # Asegúrate de que estás creando una reserva con la cantidad correcta de personas
#     date { DateTime.now }
#     hour { DateTime.now }
#     association :client, factory: :client

#     # Asegúrate de que la mesa esté disponible antes de crear la reserva
#   #   after(:build) do |reservation|
#   #     rest_table = FactoryBot.create(:rest_table, spaces: reservation.party, status: "available")
#   #     reservation.rest_tables << rest_table
#   #   end
#   end
# end
# spec/factories/reservations.rb
FactoryBot.define do
  factory :reservation do
    party { 2 } # Asegúrate de que estás creando una reserva con la cantidad correcta de personas
    date { DateTime.now }
    hour { DateTime.now }
    association :client, factory: :client

    # Asegúrate de que la mesa esté disponible antes de crear la reserva
    after(:build) do |reservation|
      rest_table = FactoryBot.create(:rest_table, spaces: reservation.party, status: "available")
      reservation.rest_tables << rest_table
    end
  end
end
