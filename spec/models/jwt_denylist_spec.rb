# spec/models/jwt_denylist_spec.rb

require 'rails_helper'

RSpec.describe JwtDenylist, type: :model do
  it 'is valid with valid attributes' do
    denylist_entry = JwtDenylist.new(jti: 'some_jti')
    expect(denylist_entry).to be_valid
  end

  it 'is not valid without a jti' do
    denylist_entry = JwtDenylist.new(jti: nil)
    expect(denylist_entry).not_to be_valid
  end

end

