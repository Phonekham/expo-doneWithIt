import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
const Account = ({ route }) => (
  <Screen>
    <Text>account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets}></Tab.Screen>
    <Tab.Screen name="Account" component={Account}></Tab.Screen>
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator></TabNavigator>
    </NavigationContainer>
  );
}
