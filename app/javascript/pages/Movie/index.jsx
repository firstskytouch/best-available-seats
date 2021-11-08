import React, { useCallback, useEffect, useState } from "react";
import {
  createNewMovie,
  deleteMovie,
  getAllMovies,
} from "../../services/movie";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [year, setYear] = useState(0);
  const [imdb, setImdb] = useState("");

  const updateMovies = useCallback(async () => {
    const movies = await getAllMovies();
    setMovies(movies);
  }, [setMovies]);

  useEffect(() => {
    updateMovies();
  }, [updateMovies]);

  const removeMovie = async (id) => {
    await deleteMovie(id);
    await updateMovies();
  };

  const onNewMovie = async () => {
    await createNewMovie({ title, year, imdb, summary, genre: [] });
    setTitle("");
    setYear(0);
    setImdb("");
    setSummary("");
    await updateMovies();
  };

  return (
    <div>
      <div className="p-3">
        <form className="w-full">
          <div className="md:flex md:items-center mb-6">
            <div className="w-48">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="title"
              >
                Title
              </label>
            </div>
            <div className="w-full">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="title"
                type="text"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="w-48">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="year"
              >
                Year
              </label>
            </div>
            <div className="w-full">
              <input
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="year"
                type="number"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="w-48">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="imdb"
              >
                IMDB
              </label>
            </div>
            <div className="w-full">
              <input
                value={imdb}
                onChange={(e) => setImdb(e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="imdb"
                type="text"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="w-48">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="summary"
              >
                Summary
              </label>
            </div>
            <div className="w-full">
              <input
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="summary"
                type="text"
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="w-48"></div>
            <div className="w-full">
              <button
                onClick={onNewMovie}
                className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                New Movie
              </button>
            </div>
          </div>
        </form>
      </div>

      <ul className="list-outside bg-rose-200">
        {movies.map((movie) => {
          return (
            <li
              className="flex items-center bg-gray-100 mb-10 shadow"
              key={movie.id}
            >
              <div className="flex-auto text-left px-4 py-2 m-2">
                <p className="text-gray-900 leading-none">{movie.title}</p>
                <p className="text-gray-600">{movie.summary}</p>
                <p className="text-gray-600">{movie.imdb}</p>
                <span className="inline-block text-sm font-semibold mt-1">
                  {movie.year}
                </span>
              </div>
              <div className="flex-auto text-right px-4 py-2 m-2">
                <button
                  onClick={() => removeMovie(movie.id)}
                  className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movie;
