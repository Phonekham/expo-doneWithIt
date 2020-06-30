import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./app/components/Screen";
import { Text } from "react-native";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets}></Stack.Screen>
    <Stack.Screen name="TweetsDetails" component={TweetDetails}></Stack.Screen>
  </Stack.Navigator>
);

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
);
const TweetDetails = () => (
  <Screen>
    <Text>Tweets details</Text>
  </Screen>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
}
