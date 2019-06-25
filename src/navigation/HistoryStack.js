import React from "react";
import { createStackNavigator, View } from "react-navigation";
import { History } from "../pages";
import { scale, verticalScale, moderateScale, width } from "../Helpers";

const HistoryStack = createStackNavigator({
  History: { screen: History }
});

export default HistoryStack;
