import { I18nManager, Platform } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AuthStack from "./AuthStack";
import MainDrawer from "./MainDrawer";
export const RootStack = createAppContainer(
  createSwitchNavigator(
    {
      AuthStack: {
        screen: AuthStack
      },
      MainDrawer: MainDrawer
    },
    {
      //initialRouteName: 'AuthStack'
    }
  )
);
