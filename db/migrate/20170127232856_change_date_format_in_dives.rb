class ChangeDateFormatInDives < ActiveRecord::Migration[5.0]
  def change
    change_column :dives, :date, :datetime
  end
end
