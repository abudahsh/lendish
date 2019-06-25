import React, { Component } from "react";
import { View, Text } from "react-native";

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}>
        <Text> Discover </Text>
        <Text>Still in progress...</Text>
      </View>
    );
  }
}

export default Discover;
