class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :full_name
      t.string :email
      t.integer :phone_number

      t.timestamps
    end
  end
end
