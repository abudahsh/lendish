import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { width, verticalScale, scale, moderateScale } from "../../Helpers";

export default (AddMoreButton = props => {
  const { text, onPress, style } = props;
  const { buttonContianerStyle, buttonIconStyle, buttonTextStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[buttonContianerStyle, style]}>
      {
        // <Image source={require('../../assets/icons/plus.png')} style={buttonIconStyle} />
      }
      <Text style={buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
});

const styles = {
  buttonContianerStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(11),
    alignSelf: "flex-start",
    paddingLeft: scale(17)
  },
  buttonIconStyle: {
    width: scale(14),
    height: verticalScale(14),
    resizeMode: "contain",
    marginRight: scale(5)
  },
  buttonTextStyle: {
    color: "#0A3D62",
    fontSize: moderateScale(13),
    textAlign: "left"
  }
};
