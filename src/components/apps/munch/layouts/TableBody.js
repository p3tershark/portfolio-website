import React, { useContext } from "react";
import { MunchContext } from "../../../../contexts/MunchContext";

import TableRows from "./TableRows";

const TableBody = () => {
  const { treats } = useContext(MunchContext);

  return (
    <tbody className="user-select-none">
      {treats.map((treat) => {
        return <TableRows treat={treat} key={treat.id} />;
      })}
    </tbody>
  );
};

export default TableBody;
