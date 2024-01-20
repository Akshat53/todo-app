import React from "react";

const Items = (props) => {
  const { onDelete ,name,key} = props;

 

  return (
    <li >
      <div
        className="row d-fle justify-content-between w-100 py-2 text-left"
        style={{ borderBottom: "1px solid #e3e3e3" }}
      >
        <div className="col-4 py-2"> {name}</div>

        <div className="col-4">
          <button className="btn btn-dark" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};


export default Items;
