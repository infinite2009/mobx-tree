import { types } from "mobx-state-tree";
import App from "./App";

const AppStore = types
  .model("AppModel", {
    applications: types.array(App),
    currentAppIndex: types.optional(types.integer, 0)
  })
  .views((store) => ({
    get currentApp() {
      return store.applications[store.currentAppIndex];
    }
  }));

let appStore;
const useApp = () => {
  if (!appStore) {
    appStore = AppStore.create({
      applications: [
        {
          id: "test"
        }
      ]
    });
  }

  return appStore;
};

export default useApp;
