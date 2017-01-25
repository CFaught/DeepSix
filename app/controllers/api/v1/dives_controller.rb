class Api::V1::DivesController < ApplicationController
  skip_before_action :authenticate_request
  def index
    render json: Dive.all
  end

end
