class BestSeatController < ApplicationController
    BestSeatController::AVAILABLE = "AVAILABLE"
    BestSeatController::RESERVED = "RESERVED"
    BestSeatController::EXCEPTION_HANDLER = ""
    BestSeatController::STATUS = "status"
    BestSeatController::ROW_LIMIT_MAX = 26
    BestSeatController::CORRIDOR_PRIORITY = 1
    BestSeatController::EXCEPTION_PRIORITY = -1

    skip_before_action :verify_authenticity_token
    ActionController::Parameters.permit_all_parameters = true
    before_action :check_row_limit,:set_venue,:set_seats

    def create
        parse_params

        mid = (@columns + 1).to_f / 2
        sortedSeats = @available_seats.sort { |a, b| (a["row"] == b["row"]) ? (mid - a["column"].to_f).abs() <=> (mid - b["column"].to_f).abs() : a["row"] <=> b["row"] }

        render json: sortedSeats[0..(@number_of_seats.to_i - 1)]
    end

    def parse_params
        @rows = set_venue[:layout][:rows].to_i
        @columns = set_venue[:layout][:columns].to_i

        @available_seats = []
        @seats.each do |key, value|
            if (@seats[key][BestSeatController::STATUS] == BestSeatController::AVAILABLE)
                @available_seats.push(@seats[key])
            end
        end
        
        @number_of_seats = params[:number_of_seats].nil? ? 1 : params[:number_of_seats]
    end
    
    protected
    def check_row_limit
        if (set_venue[:layout][:rows].to_i > BestSeatController::ROW_LIMIT_MAX)
            render json: {error:"Row limit exceeded."}
        end
    end

    def set_venue
        @venue = params[:venue]
    end

    def set_seats
        @seats = params[:seats]
    end

end
