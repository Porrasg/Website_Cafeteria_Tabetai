class ReservationsController < ApplicationController

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


# -----------------------------------------------------------------------------#

    private
    
    def reservation_params
        params.require(:reservation).permit(:party, :date, :hour, :client_id)
    end 
end
