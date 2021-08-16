import { values } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";

const TreeItem = observer((props) => {
  const handleClick = () => {
    props.item.active ? props.item.deactivate() : props.item.activate();
  };

  const ItemChildren = ({ children }) => {
    return (
      <ul>
        {children.map((child) => (
          <TreeItem key={child.id} item={child} />
        ))}
      </ul>
    );
  };

  return (
    <React.Fragment>
      <li onClick={handleClick}>{props.item.id}</li>
      {props.item.active && (
        <ItemChildren children={values(props.item.children)} />
      )}
    </React.Fragment>
  );
});

export default TreeItem;
