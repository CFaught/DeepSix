class CreateDives < ActiveRecord::Migration[5.0]
  def change
    create_table :dives do |t|
      t.integer :dive_number
      t.string :date
      t.string :location
      t.boolean :first_dive, default: false
      t.string :time_in
      t.string :time_out
      t.integer :psi_in
      t.integer :psi_out
      t.string :pg_in
      t.string :pg_out
      t.integer :depth
      t.integer :time_at_depth
      t.integer :rnt
      t.integer :abt
      t.integer :tnt
      t.string :equipment
      t.string :notes
      t.string :buddy
      t.integer :vis_surface
      t.integer :vis_bottom
      t.integer :air_temp
      t.integer :water_temp
      t.string :dive_type

      t.timestamps
    end
  end
end
