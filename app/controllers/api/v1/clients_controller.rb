class Api::V1::ClientsController <ApplicationController
  before_action :set_client, only: [:edit, :update, :destroy]

  def index
    @clients = Client.all
    render json: @clients
  end

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

  def destroy
    @client.destroy
    head :no_content
  end

  def edit
    # Renderiza la vista de edición (puedes personalizar según tus necesidades)
    render json: @client
  end

  def update
    if @client.update(client_params)
        render json: @client
    else
        render json: @client.errors, status: :unprocessable_entity
    end
  end

#---------------------------------------------------------------------------------#

  private

  def client_params
    params.require(:client).permit(:full_name, :email, :phone_number)
  end

  def set_client
    @client = Client.find(params[:id])
  end

end