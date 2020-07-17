import React, { useContext, useState } from "react";
import { MunchContext } from "../../../../contexts/MunchContext";

const AddTreatForm = () => {
  const { dispatch } = useContext(MunchContext);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TREAT", treat: { name, calories } });
    setName("");
    setCalories("");
  };

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="container table text-white my-5 user-select-none">
      <div className="d-flex justify-content-around">
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="font-weight-bold">
            <h5 className="my-auto">Add Your Treat: </h5>
          </div>
          <div className="form-group mx-sm-3 m-2">
            <input
              type="text"
              placeholder="Treat name"
              value={name}
              onChange={(e) => setName(capitalize(e.target.value.trim()))}
              required
            />
          </div>
          <div className="form-group mx-sm-3 m-2">
            <input
              type="number"
              placeholder="Calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-secondary m-2">
            Add To The List
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTreatForm;
