import { types } from "mobx-state-tree";
import TreeItem from "./TreeItem";

export default types
  .model("App", {
    id: types.string,
    tree: types.map(TreeItem),
    treeData: types.array(types.array(types.string))
  })
  .actions((store) => ({
    afterCreate() {
      store.tree = {
        l1i1: {
          id: "l1i1",
          children: {
            l2i1: {
              id: "l2i1",
              children: {
                l3i1: {
                  id: "l3i1",
                  children: {
                    l4i1: {
                      id: "l4i1",
                      children: {
                        l5i1: {
                          id: "l5i1",
                          children: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };
    }
  }));
