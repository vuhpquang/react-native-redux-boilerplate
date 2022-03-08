import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFromObject = async (key) => {
  const storedValue = await AsyncStorage.getItem(key);
  const res = JSON.parse(storedValue);
  return res;
}

export const saveObject = async (key, obj) => {
  AsyncStorage.setItem(key, JSON.stringify(obj));
}