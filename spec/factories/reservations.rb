# spec/factories/reservations.rb
FactoryBot.define do
  factory :reservation do
    party { 4 }
    date { Date.today }
    hour { "18:00" }
    association :client, factory: :client

  end
end

  