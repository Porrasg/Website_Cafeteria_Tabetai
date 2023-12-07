require 'rails_helper'

RSpec.describe Client, type: :model do
    describe Client do
        it "is valid with a full_name, email and phone_number" do
            client = Client.new(
            full_name: 'Kianny Porras',
            email: 'tester@example.com',
            phone_number: '60602020')
            expect(client).to be_valid
        end

        it "is invalid without a full_name" do
            client = Client.new(full_name: nil)
            client.valid?
            expect(client.errors[:full_name]).to include("can't be blank")
        end

        it "is invalid without an email address" do
            client = Client.new(email: nil)
            client.valid?
            expect(client.errors[:email]).to include("can't be blank")
        end

        it "is invalid without a phone_number" do
            client = Client.new(phone_number: nil)
            client.valid?
            expect(client.errors[:phone_number]).to include("can't be blank")
        end
    end
end

