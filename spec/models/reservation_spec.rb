require 'rails_helper'

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

it "is not valid with a party size less than 1" do
  reservation = Reservation.new(
    party: 0,
    date: Date.today,
    hour: "18:00",
    client_id: 1
  )
  expect(reservation).not_to be_valid
end

it "is not valid with a non-integer party size" do
  reservation = Reservation.new(
    party: "invalid",
    date: Date.today,
    hour: "18:00",
    client_id: 1
  )
  expect(reservation).not_to be_valid
end

it "is not valid without a unique combination of date, hour, and client_id" do
  existing_reservation = create(:reservation, date: Date.today, hour: "18:00", client_id: 1)
  reservation = Reservation.new(
    party: 4,
    date: Date.today,
    hour: "18:00",
    client_id: 1
  )
  expect(reservation).not_to be_valid
end

it "is not valid if the associated client does not exist" do
  reservation = Reservation.new(
    party: 4,
    date: Date.today,
    hour: "18:00",
    client_id: nil
  )
  expect(reservation).not_to be_valid
end

it "is not valid without a corresponding rest_table" do
  reservation = Reservation.new(
    party: 4,
    date: Date.today,
    hour: "18:00",
    client_id: 1
  )
  expect(reservation).not_to be_valid
end

it "is not valid if the associated rest_table is not in 'available' status" do
  rest_table = create(:rest_table, spaces: 4, status: "reserved")
  reservation = Reservation.new(
    party: 4,
    date: Date.today,
    hour: "18:00",
    client_id: 1,
    rest_table: rest_table
  )
  expect(reservation).not_to be_valid
end

it "updates the associated rest_table status to 'reserved' after creation" do
  reservation = create(:reservation, party: 4, date: Date.today, hour: "18:00", client_id: 1)
  expect(reservation.rest_table.status).to eq("reserved")
end
end