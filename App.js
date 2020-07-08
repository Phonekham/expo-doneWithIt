import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import jwtDecode from "jwt-decode";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/hooks/context";
import authStorage from "./app/auth/storage";
import { AppLoading } from "expo";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const storeToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };

  if (isReady)
    return (
      <AppLoading
        startAsync={storeToken}
        onFinish={() => setIsReady(false)}
      ></AppLoading>
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice></OfflineNotice>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator></AppNavigator> : <AuthNavigator></AuthNavigator>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
