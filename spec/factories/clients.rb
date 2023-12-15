# spec/factories/clients.rb
FactoryBot.define do
    factory :client do
      email { 'test@example.com' }
      full_name { 'John Doe' }
      phone_number { '12345678' }
    end
  end
  