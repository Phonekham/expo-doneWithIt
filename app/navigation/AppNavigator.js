import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingsScreen from "../screens/ListingsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="home"
            size={size}
            color={color}
          ></MaterialCommunityIcons>
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate("ListingEdit")}
          ></NewListingButton>
        ),
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            size={size}
            color={color}
          ></MaterialCommunityIcons>
        ),
      })}
    ></Tab.Screen>
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="account"
            size={size}
            color={color}
          ></MaterialCommunityIcons>
        ),
      }}
    ></Tab.Screen>
  </Tab.Navigator>
);

export default AppNavigator;
