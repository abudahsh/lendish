import React from "react";
import { createStackNavigator, View } from "react-navigation";
import { Discover } from "../pages";
import { scale, verticalScale, moderateScale, width } from "../Helpers";

const DiscoverStack = createStackNavigator({
  Discover: { screen: Discover }
});

export default DiscoverStack;
