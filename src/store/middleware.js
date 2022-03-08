import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist } from "zustand/middleware";

export const logMiddleware = config => (set, get, api) => config(args => {
  console.log("  applying", args)
  set(args)
  console.log("SET", set);
  console.log("GET", get);
  console.log("API", api);

}, get, api);

export const persistMiddleware = config => (set, get, api) => persist(set, get, api, {
  name: "@todoList", // name of item in the storage (must be unique)
  getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
});
// export const persistMiddleware = config => (set, get, api) => persist(config(set, get, api), {
//   name: "@todoList", // name of item in the storage (must be unique)
//   getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
// });
// config(persist((set, get) => ({
//   set(args);
// }, {
//   name: "@todoList", // name of item in the storage (must be unique)
//   getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
// }));

/*
name: "@todoList", // name of item in the storage (must be unique)
getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
}
*/
