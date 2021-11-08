class Genre < ApplicationRecord
    self.primary_key = "name"
    validates :name, uniqueness: true
end
