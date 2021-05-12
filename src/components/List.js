import React from "react";

function List(props) {
  console.log(props);
  return (
    <ul className="list-group">
      {props.groceries.map((grocery) => {
        return (
          <li className="list-group-item" key={grocery.id}>
            {grocery.name}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
