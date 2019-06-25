import React from "react";
import { Text, View } from "react-native";
import { width, verticalScale, scale, moderateScale } from "../../Helpers";

export default (HeadTitleSubTitle = props => {
  const { title, subTitle } = props;
  const { containerStyle, titleTextStyle, subTitleTextStyle } = styles;
  return (
    <View style={[containerStyle, props.containerStyle]}>
      <Text style={titleTextStyle}>{title}</Text>
      <Text style={subTitleTextStyle}>{subTitle}</Text>
    </View>
  );
});

const styles = {
  containerStyle: {
    alignSelf: "stretch",
    paddingTop: verticalScale(8),
    paddingBottom: verticalScale(5),
    alignItems: "center"
  },
  titleTextStyle: {
    color: "#0A3D62",
    fontSize: moderateScale(17),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: verticalScale(8)
  },
  subTitleTextStyle: {
    color: "#0A3D62",
    fontSize: moderateScale(12),
    textAlign: "center",
    opacity: 0.75
  }
};
