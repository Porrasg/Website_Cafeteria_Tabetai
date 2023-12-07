class Reservation < ApplicationRecord
    belongs_to :client
    has_many :rest_tables

    # validates :hour, format: { with: /\A\d{2}:\d{2}\z/, message: "should be in the format HH:MM" }

    # validate :table_is_available, on: :create

    after_create :update_rest_table_status

    private

    def update_rest_table_status
        # Encuentra el primer registro en RestTable con spaces igual a 2 y estado "available"
        rest_table = RestTable.where(spaces: party, status: "available").first
    
        # Actualiza el estado si se encontró un registro
        if rest_table
            rest_table.update(status: "reserved", reservation_id: id)
        end
    end
            
    # def table_is_available
    #     if rest_table.status == "reserved"
    #         errors.add(:rest_table_id, "This table is already reserved")
    #     end
    # end


end