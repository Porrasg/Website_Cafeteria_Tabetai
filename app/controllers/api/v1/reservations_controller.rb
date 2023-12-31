class Api::V1::ReservationsController <ApplicationController
    before_action :set_reservation, only: [:edit, :update, :destroy]
    
    def index
        @reservations = Reservation.all
        render json: @reservations
    end

    def new
        @reservation = Reservation.new
    end


    def create
        @reservation = Reservation.new(reservation_params)
      
        if @reservation.save
          render json: @reservation, status: :created
        else
          render json: { errors: @reservation.errors.full_messages }, status: :unprocessable_entity
        end
      end

    def destroy
        @reservation.destroy
        head :no_content
    end

    def edit
        # Renderiza la vista de edición (puedes personalizar según tus necesidades)
        render json: @reservation
    end
    
    def update
        if @reservation.update(reservation_params)
            render json: @reservation
        else
            render json: @reservation.errors, status: :unprocessable_entity
        end
    end

    def send_email
        # Lógica para enviar el correo electrónico basado en los parámetros recibidos
        # Obtén el cliente recién creado

  
        
        client = Client.find(params[:reservation][:client_id])
        
        # Utiliza el mailer que ya has configurado en Rails
        NotifierMailer.new_account(client.email,client.full_name).deliver_now
        render json: { message: 'Correo electrónico enviado con éxito.' }
    end


# -----------------------------------------------------------------------------#

    private
    
    def reservation_params
        params.require(:reservation).permit(:party, :date, :hour, :client_id)
    end 

    def set_reservation
        @reservation = Reservation.find(params[:id])
    end
    
end
