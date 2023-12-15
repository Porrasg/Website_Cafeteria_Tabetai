class RestTable < ApplicationRecord
    belongs_to :reservation

    validates :name_table, presence: true
    validates :spaces, presence: true, numericality: { only_integer: true }
    validates :status, presence: true

end
