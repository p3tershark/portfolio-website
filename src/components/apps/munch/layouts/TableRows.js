import React, { useContext } from "react";
import { MunchContext } from "../../../../contexts/MunchContext";

const TableRows = ({ treat }) => {
  const { dispatch } = useContext(MunchContext);

  return (
    <tr className="text-center user-select-none">
      <th>
        <i
          className="far fa-trash-alt"
          onClick={() => {
            dispatch({ type: "REMOVE_TREAT", id: treat.id });
          }}
        ></i>
      </th>
      <td>{treat.name}</td>
      <td>
        <div className="row justify-content-center">
          <i
            className="far fa-minus-square my-auto"
            onClick={() => {
              treat.amount > 0
                ? dispatch({ type: "DECREASE_AMOUNT", id: treat.id })
                : alert("Can't be negative number!");
            }}
          ></i>
          <span className="px-3">{treat.amount}</span>
          <i
            className="far fa-plus-square text-danger my-auto"
            onClick={() => dispatch({ type: "INCREASE_AMOUNT", id: treat.id })}
          ></i>
        </div>
      </td>
      <td>{treat.calories}</td>
    </tr>
  );
};

export default TableRows;
