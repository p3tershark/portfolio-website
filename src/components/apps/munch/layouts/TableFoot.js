import React, { useContext } from "react";
import { MunchContext } from "../../../../contexts/MunchContext";

const TableFoot = () => {
  const { treats } = useContext(MunchContext);

  let caloriesSumArray = treats.map((el, i) => {
    return parseInt(el.amount) * parseInt(el.calories);
  });

  let allCalories = caloriesSumArray.reduce((a, b) => a + b, 0);

  return (
    <tfoot className="user-select-none">
      <tr className="p-2">
        <td></td>
        <td>
          <h4>
            Total <span className="text-danger">extra</span> calories:
          </h4>
        </td>
        <td colSpan="2" className="text-center">
          <h3 className="text-danger">{allCalories}</h3>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFoot;
