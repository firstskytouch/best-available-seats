import React from "react";

const Grid = (props) => {
  const { seat, bestSeats, available, setSeatAvailable } = props;

  const removeElement = (arr, element) => {
    let index = arr.indexOf(element);
    arr.splice(index, 1);
    return arr;
  };

  const onClickSeat = (seat) => {
    if (available.includes(seat)) {
      let seatAvailable_update = removeElement([...available], seat);
      setSeatAvailable(seatAvailable_update);
    } else {
      let newSeatAvailable = [...available];
      newSeatAvailable.push(seat);
      setSeatAvailable(newSeatAvailable);
    }
  };

  return (
    <table>
      <tbody>
        {seat.map((row, i) => (
          <tr key={i}>
            {row.map((col, j) => {
              const isAvailable = available.includes(seat[i][j]);
              const isBest = bestSeats.includes(seat[i][j]);
              return (
                <td
                  className={`cursor-pointer inline-block text-center rounded w-12 h-9 p-1 m-1 ${
                    isAvailable ? "bg-green-500" : "bg-gray-500"
                  } ${isBest ? "border-2 border-red-500" : ""}`}
                  key={col}
                  onClick={(e) => onClickSeat(seat[i][j])}
                >
                  <span>{seat[i][j]}&nbsp;</span>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Grid;
