class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.string :party
      t.datetime :date
      t.datetime :hour

      t.references :client, foreign_key: true
      #  {on_delete: :cascade}
      t.references :rest_tables, foreign_key: true

      t.timestamps
    end
  end
end
