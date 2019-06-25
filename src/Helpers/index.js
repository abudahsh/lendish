export * from "./Scaling";
export * from "./NavigationService";
import Snackbar from "react-native-snackbar";

export const showSnackbar = (message, action) => {
  Snackbar.show({
    title: message,
    duration: action ? Snackbar.LENGTH_INDEFINITE : Snackbar.LENGTH_LONG,
    backgroundColor: "#0A3D62",
    action
  });
};
