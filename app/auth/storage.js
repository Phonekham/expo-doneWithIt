import * as SecureStore from "expo-secure-store";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("error storing token", error);
  }
};

const getToken = async () => {
  try {
    await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("error getting token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("error remove token", error);
  }
};

export default { storeToken, getToken, removeToken };
