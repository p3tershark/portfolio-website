import React from "react";

const TableHead = () => {
  return (
    <thead className="user-select-none">
      <tr className="text-center">
        <th scope="col-md-1"></th>
        <th scope="col-md-5">
          <h4 className="pt-2">Treat Type</h4>
        </th>
        <th scope="col-md-3">
          <h4 className="pt-2">Amount</h4>
        </th>
        <th scope="col-md-3">
          <h4 className="pt-2">Calories</h4>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
