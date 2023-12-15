# spec/models/rest_table_spec.rb

require 'rails_helper'

RSpec.describe RestTable, type: :model do
  let(:valid_attributes) do
    {
      name_table: 'Table 1',
      spaces: 4,
      status: 'available'
    }
  end

  it 'is valid with valid attributes' do
    rest_table = RestTable.new(valid_attributes)
    expect(rest_table).to be_valid
  end

  it 'is not valid without a name_table' do
    rest_table = RestTable.new(valid_attributes.except(:name_table))
    expect(rest_table).not_to be_valid
  end

  it 'is not valid without spaces' do
    rest_table = RestTable.new(valid_attributes.except(:spaces))
    expect(rest_table).not_to be_valid
  end

  it 'is not valid without a status' do
    rest_table = RestTable.new(valid_attributes.except(:status))
    expect(rest_table).not_to be_valid
  end

end
