import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./app/components/Screen";
import { Text, Button } from "react-native";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets}></Stack.Screen>
    <Stack.Screen
      name="TweetsDetails"
      component={TweetDetails}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
      }}
    ></Stack.Screen>
  </Stack.Navigator>
);

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetsDetails", { id: 1 })}
    ></Button>
  </Screen>
);
const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweets details {route.params.id}</Text>
  </Screen>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
}
