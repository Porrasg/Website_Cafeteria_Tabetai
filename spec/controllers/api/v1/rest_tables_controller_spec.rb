# spec/controllers/api/v1/rest_tables_controller_spec.rb
require 'rails_helper'

RSpec.describe Api::V1::RestTablesController, type: :controller do
  describe 'GET #index' do
    it 'returns a successful response' do
      get :index
      expect(response).to have_http_status(:success)
    end

    it 'assigns all tables to @tables' do
    #   table = create(:rest_table)
      get :index
    #   expect(assigns(:tables)).to eq([table])
    end
  end

  describe 'POST #create' do
    context 'with valid parameters' do
      it 'creates a new table' do
        #   post :create, params: { rest_tables: attributes_for(:rest_table) }
      end

      it 'returns a created response' do
        post :create, params: { rest_tables: attributes_for(:rest_table) }
        # expect(response).to have_http_status(:created)
      end
    end

    context 'with invalid parameters' do
      it 'does not create a new table' do
        expect do
          post :create, params: { rest_tables: { name_table: '' } }
        end.not_to change(RestTable, :count)
      end

      it 'returns an unprocessable entity response' do
        post :create, params: { rest_tables: { name_table: '' } }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'DELETE #destroy' do
    it 'destroys the requested table' do
    #   table = create(:rest_table)
      expect do
        # delete :destroy, params: { id: table.to_param }
      end
    end

    it 'returns a no content response' do
    end
  end

  # Add similar examples for other actions like edit, update, etc.
end
