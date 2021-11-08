class Movie < ApplicationRecord
    has_many :genreship, dependent: :destroy
    has_many :genres, through: :characterizations
end
