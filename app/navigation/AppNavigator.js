import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

import navigation from "./rootNavigation";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  useNotifications();
  return (
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
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
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
};

export default AppNavigator;
