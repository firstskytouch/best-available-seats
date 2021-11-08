class Api::GenreController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        render json: Genre.all
    end

    def create
        @genre = Genre.create(
            name: params[:name]
        )
        render json: @genre
    end

    def show
        render json: Genre.find(params[:id])
    end

    def destroy
        begin
            @genre = Genre.find(params[:id])
            @genre.destroy
        rescue ActiveRecord::RecordNotFound  
            render json: {message: "Can't find the genre"}, :status => 404
            return
        end
        render json: {message: "Successfully deleted book"}, :status => 200
    end
end
