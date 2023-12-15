# spec/models/user_spec.rb

require 'rails_helper'

RSpec.describe User, type: :model do
  let(:valid_attributes) do
    {
      email: 'test@example.com',
      password: 'password123',
      password_confirmation: 'password123'
    }
  end

  it 'is valid with valid attributes' do
    user = User.new(valid_attributes)
    expect(user).to be_valid
  end

  it 'is not valid without an email' do
    user = User.new(valid_attributes.except(:email))
    expect(user).not_to be_valid
  end

  it 'is not valid without a password' do
    user = User.new(valid_attributes.except(:password))
    expect(user).not_to be_valid
  end

  # Add more tests as needed

  it 'is database authenticatable' do
    user = User.create(valid_attributes)
    expect(User.find_for_database_authentication(email: valid_attributes[:email])).to eq(user)
  end

  # Add more tests related to devise functionality if needed
end
