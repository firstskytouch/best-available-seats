class Api::MovieController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        render json: Movie.all
    end

    def create
        @genres = params[:genre]
        @movie = Movie.create(
            title: params[:title],
            summary: params[:summary],
            year: params[:year],
            imdb: params[:imdb]
        )
        @genres.each do |genre|
            begin
                @genre = Genre.find(genre)
            rescue ActiveRecord::RecordNotFound  
                next
            end
            @genreship = Genreship.new
            @genreship.movie = @movie
            @genreship.genre = @genre
        end

        render json: @movie
    end

    def update
        @movie = Movie.find(params[:id])
        @movie.update(movie_params)
        render json: @movie
    end
    
    def show
        render json: Movie.find(params[:id])
    end

    def destroy
        begin
            @genre = Movie.find(params[:id])
            @genre.destroy
        rescue ActiveRecord::RecordNotFound  
            render json: {message: "Can't find the genre"}, :status => 404
            return
        end
        render json: {message: "Successfully deleted book"}, :status => 200
    end

    private
    def movie_params
      params.require(:movie).permit(:title, :year, :summary, :imdb)
    end

end
