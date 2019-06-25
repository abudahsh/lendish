import React from "react";
import { createStackNavigator, View } from "react-navigation";
import { Signup, GetStarted, Login } from "../pages";
import { scale, verticalScale, moderateScale, width } from "../Helpers";

const AuthStack = createStackNavigator({
  GetStarted,
  Signup: Signup,
  Login: Login
});

export default AuthStack;
