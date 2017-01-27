class DiveSerializer < ActiveModel::Serializer
  attributes :id, :dive_number, :date, :location, :first_dive, :time_in, :time_out, :psi_in, :psi_out, :pg_in, :pg_out, :depth, :time_at_depth, :rnt, :abt, :tnt, :equipment, :notes, :buddy, :vis_surface, :vis_bottom, :air_temp, :water_temp, :dive_type
end
