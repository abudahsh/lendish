import { createDrawerNavigator } from "react-navigation";
import HomeStack from "./HomeStack";
import DiscoverStack from "./DiscoverStack";
import HistoryStack from "./HistoryStack";
import { scale } from "../Helpers";
import DrawerContent from "../components/DrawerContent";

export default (MainDrawer = createDrawerNavigator(
  {
    HomeStack: { screen: HomeStack },
    DiscoverStack: { screen: DiscoverStack, navigationOptions: {} },
    HistoryStack: { screen: HistoryStack }
  },
  {
    drawerWidth: scale(270),
    contentComponent: DrawerContent,
    contentOptions: {
      activeTintColor: "#029CDA",
      inactiveTintColor: "#FFFFFF"
    }
  }
));
