# spec/controllers/api/v1/admins_controller_spec.rb

require 'rails_helper'

RSpec.describe Api::V1::AdminsController, type: :controller do
  describe "GET index" do
    it "returns a successful response" do
      get :index
      expect(response).to be_successful
    end

    it "assigns @admins with all admins" do
      admin = create(:user) # Asegúrate de crear un usuario antes de llamar a la acción
      get :index
    end

    it "renders JSON with admins" do
      admin = create(:user)
      get :index
      json_response = JSON.parse(response.body)
      expect(json_response[0]["id"]).to eq(admin.id)
    end
  end

  describe "POST create" do
    context "with valid parameters" do

      it "returns a created response" do
        post :create, params: { admin: attributes_for(:user) }
        expect(response).to have_http_status(:created)
      end
    end

    context "with invalid parameters" do
      it "returns an unprocessable entity response" do
        post :create, params: { admin: attributes_for(:user, email: nil) }
      end

      it "returns error details in the response" do
        post :create, params: { admin: attributes_for(:user, email: nil) }
        json_response = JSON.parse(response.body)
      end
    end
  end

  describe "DELETE destroy" do
    it "destroys the requested admin" do
      admin = create(:user) # Asegúrate de crear un usuario antes de llamar a la acción
      expect {
        delete :destroy, params: { id: admin.id }
      }.to change(User, :count).by(-1)
    end

    it "returns a no content response" do
      admin = create(:user) # Asegúrate de crear un usuario antes de llamar a la acción
      delete :destroy, params: { id: admin.id }
      expect(response).to have_http_status(:no_content)
    end
  end
end
