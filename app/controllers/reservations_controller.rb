class ReservationsController < ApplicationController
    #     def create
    #         num_people = params[:num_people].to_i # Suponiendo que recibes la cantidad de personas como parámetro
    #         table = RestTable.available_tables(num_people).first
        
    #     if table
    #         table.reserve!(num_people)
    #         # Aquí puedes agregar lógica adicional, como crear un registro en la tabla de reservas, enviar confirmación por correo, etc.
    #         render json: { message: "Reserva exitosa", table: table }
    #     else
    #         render json: { error: "No hay mesas disponibles para #{num_people} personas" }, status: :unprocessable_entity
    #     end
    # end

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
