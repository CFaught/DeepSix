class Api::V1::DivesController < ApplicationController
  skip_before_action :authenticate_request
  def index
    render json: Dive.all
  end

  def create
    dive = Dive.new(dive_params)
    if dive.save
      render json: dive
    else
      render json: { error: "Dive not saved", status: 500 }, status: 500
    end
  end

  def update
    dive = Dive.find_by_id(params[:id])
    if dive.update(dive_params)
      render json: dive
    else
      render json: { error: "Dive not saved", status: 500 }, status: 500
    end
  end


  def destroy
    dive = Dive.find_by_id(params[:id])
    dive.destroy
    render json: {message: "Dive destroyed", status: 200}, status: 200
  end

  private
    def dive_params
      params.require(:dive).permit(:dive_number, :date, :location, :first_dive, :time_in, :time_out, :psi_in, :psi_out, :pg_in, :pg_out, :depth, :time_at_depth, :rnt, :abt, :tnt, :equipment, :notes, :buddy, :vis_surface, :vis_bottom, :air_temp, :water_temp, :dive_type)
    end
end
