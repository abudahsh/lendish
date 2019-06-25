import { Dimensions } from "react-native";
export const { width, height } = Dimensions.get("window");
export const guidelineBaseWidth = 360;
export const guidelineBaseHeight = 640;
export const scale = size => (width / guidelineBaseWidth) * size;
export const verticalScale = size => (height / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
