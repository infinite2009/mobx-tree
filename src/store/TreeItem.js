import { values } from "mobx";
import { types } from "mobx-state-tree";

const TreeItem = types
  .model("TreeItem", {
    id: types.string,
    active: types.optional(types.boolean, false),
    children: types.late(() => types.map(TreeItem))
  })
  .actions((store) => ({
    activate() {
      store.active = true;
    },
    deactivate() {
      const children = values(store.children);

      store.active = false;
      children
        .filter((child) => child.active)
        .forEach((activeChild) => activeChild.deactivate());
    }
  }));

export default TreeItem;
