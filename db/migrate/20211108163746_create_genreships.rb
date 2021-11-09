class CreateGenreships < ActiveRecord::Migration[6.1]
  def change
    create_table :genreships do |t|
      t.references :movie, null: false, foreign_key: true
      t.references :genre, null: false, foreign_key: true
      t.index [:movie_id, :genre_id], unique: true

      t.timestamps
    end
  end
end
