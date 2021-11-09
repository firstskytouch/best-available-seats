import React, { useCallback, useEffect, useState } from "react";

import MovieModal from "../../modals/MovieModal";
import { deleteMovie, getAllMovies } from "../../services/movie";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  const [open, setOpen] = useState(false);

  const updateMovies = useCallback(async () => {
    const movies = await getAllMovies();
    setMovies(movies);
  }, [setMovies]);

  useEffect(() => {
    updateMovies();
  }, [updateMovies]);

  const removeMovie = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    await deleteMovie(id);
    await updateMovies();
  };

  const onNewMovie = async (movie) => {
    setSelectedMovie(movie);
    setOpen(true);
  };

  const handleMovieCreated = async () => {
    await updateMovies();
  };

  return (
    <div>
      <button
        onClick={() => onNewMovie()}
        className="w-16 h-16 absolute bg-blue-500 text-white p-2 rounded-full hover:bg-blue-800 m-2 text-3xl right-4 bottom-4"
      >
        +
      </button>
      <ul className="list-outside bg-rose-200">
        {movies.map((movie) => {
          return (
            <li
              className="flex items-center bg-gray-100 mb-10 shadow cursor-pointer"
              key={movie.id}
              onClick={() => onNewMovie(movie)}
            >
              <div className="flex-auto text-left px-4 py-2 m-2">
                <p className="text-gray-900 leading-none">
                  {movie.title} - {movie.year}
                </p>
                <p className="text-gray-600">{movie.summary}</p>
                <p className="text-gray-600">{movie.imdb}</p>
              </div>
              <div className="flex-auto text-right px-4 py-2 m-2">
                <button
                  onClick={(e) => removeMovie(e, movie.id)}
                  className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <MovieModal
        movie={selectedMovie}
        open={open}
        setOpen={setOpen}
        onMovieCreated={handleMovieCreated}
      />
    </div>
  );
};

export default Movie;
