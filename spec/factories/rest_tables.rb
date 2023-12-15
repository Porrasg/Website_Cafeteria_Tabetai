# spec/factories/rest_tables.rb
FactoryBot.define do
    factory :rest_table do
    #   name_table { Faker::Lorem.word }
      spaces { 6 }
      status { 'available' } # Puedes ajustar según tus necesidades
      reservation_id { nil }
  
      trait :reserved do
        status { 'reserved' }
        association :reservation
      end
    end
  end

#   # spec/factories/rest_tables.rb
# FactoryBot.define do
#   factory :rest_table do
#     spaces { 2 }
#     status { 'available' }
#   end
# end

  