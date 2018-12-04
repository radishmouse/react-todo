import React from "react";

const List = props => {
  return (
    <ul>
      {props.items.map((item, index) => {
        console.log(item);
        return (
          <li 
            key={index} 
            className="single-todo"
            onClick={() => props.handleClick(index)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
