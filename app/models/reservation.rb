class Reservation < ApplicationRecord
    #---Relación que tienen estre tablas---#
    belongs_to :client
    has_many :rest_tables, dependent: :destroy

    # validaciónes de los metodos
    # Validaciones para la columna 'party'
    validates :party, presence: true, length: { maximum: 255 }

    # Validaciones para la columna 'date'
    validates :date, presence: true

    # Validaciones para la columna 'hour'
    validates :hour, presence: true

    # Validaciones para la columna 'client_id'
    validates :client_id, presence: true

    # Validaciones personalizadas (pueden ser adaptadas según tus necesidades)
    validate :date_cannot_be_in_the_past

    validate :table_is_available, on: :create

    after_create :update_rest_table_status

    private

    # Este metodo se ejecuta cuando todas las mesas (RestTable) se encuentran en estado "reserve"
    def table_is_available
        rest_table = RestTable.where(spaces: party, status: "available").first
        # Esto da una validación de no poder reservar si el asiento está reservado
        if rest_table.status == "reserved"
            errors.add(:rest_table_id, "This table is already reserved")
        end
    end

    # Cuando se crea una reserva, se valida que spaces sea = status y el estado esté available
    def update_rest_table_status
        # Encuentra el primer registro en RestTable con spaces igual a 2 y estado "available"
        rest_table = RestTable.where(spaces: party, status: "available").first
        # Actualiza el estado si se encontró un registro
        if rest_table
            rest_table.update(status: "reserved", reservation_id: id)
        end
    end

    def date_cannot_be_in_the_past
        if date.present? && date < Date.today
            errors.add(:date, "no puede estar en el pasado")
        end
    end

end