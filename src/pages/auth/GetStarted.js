import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import { scale, verticalScale } from "../../Helpers";
import Button from "../../components/common/Button";
class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleNext = () => {
    this.props.navigation.navigate("Login");
  };
  render() {
    const { imageStyle, desText, slide1 } = styles;
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dotStyle={{ marginTop: verticalScale(-230) }}
        activeDotStyle={{ marginTop: verticalScale(-230) }}
        dotColor="#4A90E2"
        activeDotColor="#0DBBB6"
      >
        <View style={slide1}>
          <Image
            source={require("../../assets/started1.png")}
            style={imageStyle}
          />
          <Text style={styles.text}>Money Pool</Text>
          <View>
            <Text numberOfLines={3} style={desText}>
              Join or create a circle to save money with friends for short-term
              goals using the concept of a money pool.
            </Text>
          </View>
          <Button text="Next" wideButton={true} onPress={this.handleNext} />
        </View>
        <View style={slide1}>
          <Image
            source={require("../../assets/started2.png")}
            style={imageStyle}
          />
          <Text style={styles.text}>Trust Score</Text>
          <View>
            <Text numberOfLines={3} style={desText}>
              Each on time contribution adds 1 point to your score. Each late
              contribution deducts your score by 3 points.
            </Text>
          </View>
          <Button text="Next" wideButton={true} onPress={this.handleNext} />
        </View>
        <View style={slide1}>
          <Image
            source={require("../../assets/started3.png")}
            style={imageStyle}
          />
          <Text style={styles.text}>Fees and Rewards</Text>
          <View>
            <Text numberOfLines={3} style={desText}>
              Payouts for positions 1 and 2 require a fee, while the last
              position earns a cash reward..
            </Text>
          </View>
          <Button text="Next" wideButton={true} onPress={this.handleNext} />
        </View>
      </Swiper>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {},
  imageStyle: {
    width: scale(217),
    height: verticalScale(223),
    resizeMode: "contain",
    marginBottom: verticalScale(30)
  },
  desText: {
    color: "#C7D0D7",
    fontSize: 14,
    marginBottom: verticalScale(90)
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: scale(277),
    alignSelf: "center"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#73899C",
    fontSize: 24,
    marginBottom: verticalScale(30)
  }
});
export default GetStarted;
