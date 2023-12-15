# spec/controllers/api/v1/clients_controller_spec.rb
require 'rails_helper'

RSpec.describe Api::V1::ClientsController, type: :controller do
  describe "GET #index" do
    it "returns a successful response" do
      get :index
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "with valid parameters" do
      it "creates a new client" do
        expect {
          post :create, params: { client: { full_name: "John Doe", email: "john@example.com", phone_number: "123456789" } }
        }.to change(Client, :count).by(1)
        expect(response).to have_http_status(:created)
      end
    end

    context "with invalid parameters" do
      it "does not create a new client" do
        expect {
          post :create, params: { client: { full_name: nil, email: nil, phone_number: nil } }
        }.not_to change(Client, :count)
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  # Similar tests for other actions (destroy, edit, update) can be added here.

end
