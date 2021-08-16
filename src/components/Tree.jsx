import React from "react";
import useApp from "../store/AppStore";
import { observer } from "mobx-react-lite";
import { values } from "mobx";
import TreeItem from "./TreeItem";

const Tree = () => {
  const app = useApp();

  return (
    <ul>
      {values(app.currentApp.tree).map((item) => (
        <TreeItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default observer(Tree);
