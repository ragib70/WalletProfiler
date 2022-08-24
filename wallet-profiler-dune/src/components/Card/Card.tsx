import { FC, useState } from "react";

interface CardProps {}

const Card: FC<CardProps> = (props) => {
  const [value, setValue] = useState(160000); // Get this predefined value by calling a function.
  return (
    <div className="card w-auto p-5" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Estimated Wallet Value</h5>
        <p className="card-text">${value}</p>
        <button
          className="btn btn-outline-success me-3"
          onClick={() => {
            // Do  Loading of Tables
          }}
        >
          Load
        </button>
      </div>
    </div>
  );
};

export default Card;
