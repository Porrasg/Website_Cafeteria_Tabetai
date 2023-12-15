class RestTable < ApplicationRecord
    belongs_to :reservation
    attr_accessor :name, :spaces, :status
    validates :name_table, presence: true
    validates :spaces, presence: true, numericality: { only_integer: true }
    validates :status, presence: true

    # scope :available_tables, ->(num_people) { where("spaces >= ?", num_people).where(status: "available") }

    # def reserve!(num_people)
    #     update(status: "reserved") if spaces >= num_people && status == "available"
    # end
    

    # scope :available_tables, ->(party) { where("spaces >= ?", party).where(status: "available") }

    # def reserve!(party)
    #     update(status: "reserved") if spaces >= party || spaces - 1 >= party && status == "available"
    # end

end
