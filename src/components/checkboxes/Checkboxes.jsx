import React from "react";

const Checkboxes = ({ isChecked, handleChange, item, index }) => {
  return (
    <div key={index} className="flex gap-4 main">
      <input
        onClick={(e) => handleChange(e, item)}
        type="checkbox"
        value={isChecked}
      ></input>
      <label className="text-xs">{item.name}</label>
    </div>
  );
};

export default Checkboxes;
