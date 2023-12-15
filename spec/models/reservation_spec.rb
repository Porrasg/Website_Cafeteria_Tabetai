require 'rails_helper'
require 'factory_bot_rails'

RSpec.describe Reservation, type: :model do
  it "is valid with valid attributes" do
    reservation = Reservation.new(
      party: 4,
      date: Date.today,
      hour: "18:00",
      client_id: 1
    )
    expect(reservation).to_not be_valid
  end

  it "is not valid without a party size" do
    reservation = Reservation.new(
      date: Date.today,
      hour: "18:00",
      client_id: 1
    )
    expect(reservation).not_to be_valid
  end

  it "is not valid without a date" do
    reservation = Reservation.new(
      party: 4,
      hour: "18:00",
      client_id: 1
    )
    expect(reservation).not_to be_valid
  end

  it "is not valid without an hour" do
    reservation = Reservation.new(
      party: 4,
      date: Date.today,
      client_id: 1
    )
    expect(reservation).not_to be_valid
  end

  it "is not valid without a client" do
    reservation = Reservation.new(
      party: 4,
      date: Date.today,
      hour: "18:00"
    )
    expect(reservation).not_to be_valid
  end
end

# ---------------------