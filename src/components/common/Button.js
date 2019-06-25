import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { width, verticalScale, scale, moderateScale } from "../../Helpers";

export default (Button = props => {
  const {
    text,
    onPress,
    wideButton,
    transparent,
    style,
    loading,
    disabled,
    textStyle,
    small
  } = props;
  const {
    containerStyle,
    textStyle: defultTextStyle,
    wideButtonContainerStyle,
    containerDisabledStyle,
    disabledTextStyle,
    wideButtonTextStyle,
    transparentContainerStyle,
    transparentTextStyle,
    smallContainerStyle
  } = styles;
  return (
    <TouchableOpacity
      style={[
        containerStyle,
        wideButton && wideButtonContainerStyle,
        transparent && transparentContainerStyle,
        disabled && containerDisabledStyle,
        small && smallContainerStyle,
        style
      ]}
      onPress={!disabled ? onPress : undefined}
      activeOpacity={disabled ? 1 : undefined}
    >
      <Text
        style={[
          defultTextStyle,
          textStyle,
          wideButton && wideButtonTextStyle,
          transparent && transparentTextStyle,
          disabled && disabledTextStyle
        ]}
      >
        {text}
      </Text>
      {loading && <Spinner style={{ marginLeft: scale(15) }} size={"small"} />}
    </TouchableOpacity>
  );
});

const styles = {
  containerStyle: {
    width: scale(180),
    height: verticalScale(40),
    borderRadius: verticalScale(6),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009CDB",
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 4,
    flexDirection: "row"
  },
  textStyle: {
    color: "#FFFFFF",
    fontSize: moderateScale(15)
  },
  wideButtonContainerStyle: {
    width: scale(324),
    height: verticalScale(48)
  },
  wideButtonTextStyle: {
    fontSize: moderateScale(17),
    fontWeight: "bold"
  },
  containerDisabledStyle: {
    backgroundColor: "#ECE9F1"
  },
  disabledTextStyle: {
    color: "#D0C9D6"
  },
  transparentContainerStyle: {
    backgroundColor: "transparent",
    opacity: 0.5
  },
  transparentTextStyle: {
    color: "#0A3D62"
  },
  smallContainerStyle: {
    width: scale(66),
    height: verticalScale(23)
  }
};
