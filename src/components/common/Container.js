import React from "react";
import { View, SafeAreaView } from "react-native";
//import AppNetInfo from "../AppNetInfo";
import { width } from "../../Helpers";

export default (Container = props => {
  return (
    <View
      style={[
        { flex: 1, backgroundColor: "#FFFFFF", alignItems: "center" },
        props.style
      ]}
    >
      <SafeAreaView style={[{ flex: 1, width }, props.style]}>
        {
          //!props.withoutNetInfo && <AppNetInfo />
        }
        {props.children}
      </SafeAreaView>
    </View>
  );
});
