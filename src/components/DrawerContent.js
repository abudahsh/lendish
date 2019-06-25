import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";
import { DrawerItems, withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { width, verticalScale, moderateScale } from "../Helpers";
class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, overflow: "hidden" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 30,
            marginVertical: 10
          }}
        >
          <Image
            source={require("./../assets/register1.png")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginBottom: verticalScale(20)
            }}
          />
          <Text
            style={{
              color: "#73899C",
              fontSize: moderateScale(14),
              textAlign: "center"
            }}
          >
            Sebastián
          </Text>
          <Text
            style={{
              color: "#73899C",
              fontSize: moderateScale(14),
              textAlign: "center"
            }}
          >
            sebastian@gmail.com
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: verticalScale(180),
            marginHorizontal: 10,
            borderTopColor: "black",
            borderTopWidth: 1,
            width: 0.8 * width
          }}
        >
          <ScrollView>
            <DrawerItems {...this.props} />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default DrawerContent;
