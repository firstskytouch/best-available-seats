class Movie < ApplicationRecord
    has_many :genreship, dependent: :destroy
end
