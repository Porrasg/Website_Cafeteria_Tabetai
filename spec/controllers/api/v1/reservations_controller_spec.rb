# spec/controllers/api/v1/reservations_controller_spec.rb
require 'rails_helper'

RSpec.describe Api::V1::ReservationsController, type: :controller do
    # bueno---------
  describe 'GET #index' do
    it 'returns a successful response' do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

#   buenooo----
  describe 'POST #create' do
    it 'creates a new reservation' do
      reservation_attributes = FactoryBot.attributes_for(:reservation)
      # Asegúrate de que las mesas estén disponibles antes de crear la reserva
      # Crea mesas disponibles en tu fábrica o en esta prueba
      post :create, params: { reservation: reservation_attributes }
    end
  
    it 'returns unprocessable entity for invalid data' do
      post :create, params: { reservation: { party: nil } }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end