import React, { useState, useEffect } from "react";

const PlusMinus = (props) => {
  const { label, heading, hasPadding = true, className = "" } = props;

  const { unit, number, defaultValue, setNumber, min = 0, max } = props;
  const [value, setValue] = useState(defaultValue || 0);
  let integer = unit;

  useEffect(() => {
    if (number == undefined) {
      return;
    }
    setValue(Math.max(number, min));
  }, [number]);

  const handleMinus = (e) => {
    let newValue = value - integer;
    if (newValue < min) {
      newValue = min;
    }
    setValue(newValue);
    setNumber && setNumber(newValue);
  };

  const handlePlus = (e) => {
    let newValue = value + integer;
    if (newValue > max) {
      newValue = max;
    }
    setValue(newValue);
    setNumber && setNumber(newValue);
  };

  return (
    !!integer && (
      <div
        className={`${className} ${!!hasPadding ? "px-3" : ""} flex flex-col`}
      >
        <p
          className={`font-bold text-tertiary text-sm ${
            !!hasPadding ? "pb-2" : ""
          }`}
        >
          {heading ? heading : ""}
        </p>

        <div className="w-full border-none bg-greylightest rounded-10 px-4 py-4 flex flex-row items-center justify-between">
          <p className="font-bold text-tertiary text-lg">
            {label ? label : ""}
          </p>
          <div className="text-primary text-xl flex flex-row items-center text-center">
            <div
              className=" bg-white rounded-full border-primary border-2 cursor-pointer pb-0.5"
              style={{ width: "30px", height: "30px" }}
              onClick={handleMinus}
            >
              -
            </div>
            <span className="pt-1" style={{ width: "40px" }}>
              {value}
            </span>
            <div
              className="bg-white rounded-full border-primary border-2 cursor-pointer p-0.5"
              style={{ height: "30px", width: "30px" }}
              onClick={handlePlus}
            >
              +
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PlusMinus;
