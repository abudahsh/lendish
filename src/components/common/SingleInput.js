import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  I18nManager,
  Image
} from "react-native";
import { scale, verticalScale, moderateScale, width } from "../../Helpers";

const SingleInput = props => {
  const {
    placeholder,
    style,
    rightIcon,
    height,
    hint,
    keyboardType,
    rightIconStyle,
    error,
    value,
    modalInput,
    secureTextEntry,
    multiline,
    returnKeyType,
    onSubmitEditing,
    refFun,
    name,
    disabled = false,
    onChangeText
  } = props;

  return (
    <View>
      <View
        style={[
          styles.inputContainerStyle,
          style,
          disabled && styles.disabledStyle,
          error && styles.errorInputContainerStyle,
          modalInput && { width: scale(322) },
          rightIcon && { flexDirection: "row", alignItems: "center" },
          height && { height }
        ]}
      >
        <TextInput
          underlineColorAndroid={"transparent"}
          style={[
            styles.inputStyle,
            style,
            error && styles.errorInputStyle,
            secureTextEntry && { color: "rgba(10,61,98,.7)" },
            height && { height }
          ]}
          placeholder={placeholder}
          placeholderTextColor={error ? "#FF647C" : "rgba(10,61,98,.7)"}
          autoCorrect={false}
          keyboardType={keyboardType || undefined}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          value={value}
          autoCapitalize="none"
          enablesReturnKeyAutomatically={true}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          ref={refFun}
          //onFocus={() => onTouch(name)}
          editable={!disabled}
          multiline={multiline}
        />
        {rightIcon && (
          <Image
            source={rightIcon}
            style={[styles.rightIconStyle, rightIconStyle]}
          />
        )}
      </View>
      {error && <Text style={styles.errorTextStyle}>{error}</Text>}
      {!error && hint && <Text style={styles.hintTextStyle}>{hint}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    width: scale(343),
    height: verticalScale(48),
    backgroundColor: "#fff",
    borderColor: "#ECEBED",
    borderRadius: verticalScale(6)
  },
  inputStyle: {
    fontSize: moderateScale(15),
    textAlign: "left",
    paddingHorizontal: scale(15),
    height: verticalScale(48),
    flex: 1,
    textAlignVertical: "center",
    color: "#000000"
  },
  errorInputContainerStyle: {
    borderColor: "#FF647C",
    borderWidth: 1
  },
  errorInputStyle: {
    color: "#FF647C"
  },
  errorTextStyle: {
    color: "#FF647C",
    fontSize: moderateScale(12),
    marginTop: verticalScale(10)
  },
  disabledStyle: {
    backgroundColor: "#ECEBED"
  },
  rightIconStyle: {
    marginRight: scale(15),
    resizeMode: "contain"
  },
  hintTextStyle: {
    color: "#000000",
    opacity: 0.45,
    marginLeft: scale(16),
    textAlign: "left",
    marginTop: verticalScale(10)
  }
});

export default SingleInput;
