import React, { Component } from "react";
import PlusMinus from "./PlusMinus";

const Mapper = (props) => {
  const {
    rows,
    setRows,
    numberSeats,
    setNumberSeats,
    columns,
    setColumns,
    available,
  } = props;

  return (
    <div className="flex mx-2">
      <div>
        <PlusMinus
          heading="Seats"
          unit={1}
          defaultValue={numberSeats}
          setNumber={setNumberSeats}
          min={1}
          max={available.length}
        />
      </div>
      <div>
        <PlusMinus
          heading="Rows"
          unit={1}
          defaultValue={rows}
          setNumber={setRows}
          min={1}
        />
      </div>
      <div>
        <PlusMinus
          heading="Columns"
          unit={1}
          defaultValue={columns}
          setNumber={setColumns}
          min={1}
        />
      </div>
    </div>
  );
};
export default Mapper;
