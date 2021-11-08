import React, { useCallback, useEffect, useState } from "react";
import {
  createNewGenre,
  deleteGenre,
  getAllGenres,
} from "../../services/genre";

const Genre = () => {
  const [genres, setGenres] = useState([]);
  const [newGenre, setNewGenre] = useState("");

  const updateGenres = useCallback(async () => {
    const genres = await getAllGenres();
    setGenres(genres);
  }, [setGenres]);

  useEffect(() => {
    updateGenres();
  }, [updateGenres]);

  const removeGenre = async (id) => {
    await deleteGenre(id);
    await updateGenres();
  };

  const onNewGenre = async () => {
    await createNewGenre({ name: newGenre });
    setNewGenre("");
    await updateGenres();
  };

  return (
    <div>
      <div className="p-3">
        <form className="w-full">
          <div className="flex items-center border-b border-green-500 py-2">
            <input
              value={newGenre}
              onChange={(e) => setNewGenre(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Genre Name"
              aria-label="Genre Name"
            />
            <button
              disabled={!newGenre}
              className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
              onClick={onNewGenre}
            >
              New Genre
            </button>
          </div>
        </form>
      </div>

      <ul className="list-outside bg-rose-200">
        {genres.map((genre) => {
          return (
            <li
              className="flex items-center bg-gray-100 mb-10 shadow"
              key={genre.id}
            >
              <div className="flex-auto text-left px-4 py-2 m-2">
                <p className="text-gray-900 leading-none">{genre.name}</p>
              </div>
              <div className="flex-auto text-right px-4 py-2 m-2">
                <button
                  onClick={() => removeGenre(genre.id)}
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

export default Genre;
