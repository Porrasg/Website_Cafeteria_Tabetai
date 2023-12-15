class RestTable < ApplicationRecord
    belongs_to :reservation
    attr_accessor :name, :spaces, :status
    validates :name_table, presence: true
    validates :spaces, presence: true, numericality: { only_integer: true }
    validates :status, presence: true

end
