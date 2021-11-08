import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const a = 1;
  return (
    <nav className="flex items-center justify-between flex-wrap bg-green-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Best Available Seat
        </span>
      </div>
      <div className="flex-grow flex items-center w-auto">
        <div className="text-sm flex-grow">
          <Link
            to="/"
            className="inline-block mt-0 text-green-200 hover:text-white mr-4"
          >
            Seats
          </Link>
          <Link
            to="/genre"
            className="inline-block mt-0 text-green-200 hover:text-white mr-4"
          >
            Movie Genre
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
