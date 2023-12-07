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
        @reservation= Reservation.new(reservation_params)
    
        if @reservation.save
            render json:   @reservation, status: :created
        else
            render json:  @reservation.errors, status: :unprocessable_entity
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

# -----------------------------------------------------------------------------#

    private
    
    def reservation_params
        params.require(:reservation).permit(:party, :date, :hour, :client_id)
    end 

    def set_reservation
        @reservation = Reservation.find(params[:id])
    end
    
end