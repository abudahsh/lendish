import React from "react";
import { createStackNavigator, View } from "react-navigation";
import { Home } from "../pages";
import { scale, verticalScale, moderateScale, width } from "../Helpers";

const HomeStack = createStackNavigator({
  Home: { screen: Home }
});

export default HomeStack;
