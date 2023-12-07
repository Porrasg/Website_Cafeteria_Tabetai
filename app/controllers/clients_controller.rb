# app/controllers/clients_controller.rb
class ClientsController < ApplicationController

    def new
      @client = Client.new
    end
  
    def create
      @client = Client.new(client_params)
  
      if @client.save
        render json: @client, status: :created
        else
            render json: @client.errors, status: :unprocessable_entity
        end
    end
  
    private
  
    def client_params
      params.require(:client).permit(:full_name, :email, :phone_number)
    end
  end
  