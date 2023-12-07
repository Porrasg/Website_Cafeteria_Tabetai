class RestTable < ApplicationRecord
    belongs_to :reservation

    # validates :name_table, presence: true
    # validates :spaces, presence: true, numericality: { only_integer: true }
    # validates :status, presence: true

    scope :available_tables, ->(num_people) { where("spaces >= ?", num_people).where(status: "available") }

    def reserve!(num_people)
        update(status: "reserved") if spaces >= num_people && status == "available"
    end
    
end
