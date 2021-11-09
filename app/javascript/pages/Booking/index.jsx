import React, { useEffect, useState } from "react";

import Grid from "../../components/Grid";
import Legend from "../../components/Legend";
import Mapper from "../../components/Mapper";
import { getBestSeats } from "../../services/seats";

const Booking = () => {
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(12);
  const [numberSeats, setNumberSeats] = useState(1);
  const [seatAvailable, setSeatAvailable] = useState([]);
  const [bestSeats, setBestSeats] = useState([]);
  const [seat, setSeat] = useState([]);

  const buildMapSeats = (rows, columns) => {
    let matrix = [[]];
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < columns; j++) {
        matrix[i][j] = alphabet[i] + (j + 1);
      }
    }
    return matrix;
  };

  useEffect(() => {
    const seat_matrix = buildMapSeats(rows, columns);
    setSeat(seat_matrix);
  }, [rows, columns, seatAvailable]);

  const getSuggestion = async () => {
    const seats = {};
    seatAvailable.forEach((element) => {
      seats[element] = {
        id: element,
        row: element[0],
        column: parseInt(element.substring(1, element.length)),
        status: "AVAILABLE",
      };
    });
    let data = {
      venue: {
        layout: {
          rows: rows,
          columns: columns,
        },
      },
      seats,
      number_of_seats: numberSeats,
    };

    const res = await getBestSeats(data);
    setBestSeats(res);
  };

  return (
    <div>
      <div className="flex mx-2 mt-8">
        <div className="mx-4">
          <Mapper
            numberSeats={numberSeats}
            available={seatAvailable}
            rows={rows}
            columns={columns}
            setNumberSeats={setNumberSeats}
            setRows={setRows}
            setColumns={setColumns}
          />
        </div>
        <div className="flex items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => getSuggestion()}
          >
            Get Best Seats
          </button>
        </div>
      </div>
      <div className="flex">
        <Grid
          seat={seat}
          bestSeats={bestSeats}
          available={seatAvailable}
          setSeatAvailable={setSeatAvailable}
        />
      </div>
      <Legend />
    </div>
  );
};

export default Booking;
