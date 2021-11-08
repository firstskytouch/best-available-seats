class Api::BestSeatsController < ApplicationController
    Api::BestSeatsController::AVAILABLE = "AVAILABLE"
    Api::BestSeatsController::RESERVED = "RESERVED"
    Api::BestSeatsController::STATUS = "status"
    Api::BestSeatsController::ROW_LIMIT_MAX = 26

    skip_before_action :verify_authenticity_token
    ActionController::Parameters.permit_all_parameters = true
    before_action :set_venue,:set_seats

    def create
        parse_params

        mid = (@columns + 1).to_f / 2
        sortedSeats = @available_seats.sort { |a, b| (a["row"] == b["row"]) ? (mid - a["column"].to_f).abs() <=> (mid - b["column"].to_f).abs() : a["row"] <=> b["row"] }
        bestSeats = sortedSeats[0..(@number_of_seats.to_i - 1)]
        render json: bestSeats.map { |seat| seat['id'] }
    end

    def parse_params
        @rows = set_venue[:layout][:rows].to_i
        @columns = set_venue[:layout][:columns].to_i

        @available_seats = []
        @seats.each do |key, value|
            if (@seats[key][Api::BestSeatsController::STATUS] == Api::BestSeatsController::AVAILABLE)
                @available_seats.push(@seats[key])
            end
        end
        
        @number_of_seats = params[:number_of_seats].nil? ? 1 : params[:number_of_seats]
    end
    
    protected
    def set_venue
        @venue = params[:venue]
    end

    def set_seats
        @seats = params[:seats]
    end

end
