import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Input, Button, Spinner } from "../../components/common";

import {
  verticalScale,
  scale,
  width,
  height,
  moderateScale
} from "../../Helpers";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      headTextStyle,
      container,
      separatorStyle,
      signupStyle,
      mainButton,
      highlightText,
      imageStyle
    } = styles;
    return (
      <View style={container}>
        <View>
          <Image
            source={require("../../assets/register1.png")}
            style={imageStyle}
          />
        </View>

        <Formik
          initialValues={{ email: "", password: "", name: "", phone: "" }}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={null}
          validationSchema={Yup.object().shape({
            email: Yup.string().email("Invalid Email"),
            password: Yup.string().required("Password Required"),
            name: Yup.string().required("Name Required"),
            phone: Yup.string().required("Phone Required")
          })}
          render={({
            values,
            handleSubmit,
            handleChange,
            setFieldValue,
            errors,
            touched,
            setFieldTouched,
            isValid,
            isSubmitting
          }) => (
            <React.Fragment>
              <Input placeholder="Your Name" name="name" />
              <View style={separatorStyle} />
              <Input placeholder="Mobile Number" name="phone" />
              <View style={separatorStyle} />
              <Input placeholder="Email" name="email" type={"email"} />
              <View style={separatorStyle} />
              <Input
                placeholder={"Password"}
                name="password"
                type={"password"}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Signup")}
              >
                <Text style={signupStyle}>
                  Pressing "Register" you accept the
                </Text>
                <Text style={highlightText}>Terms and Conditions</Text>
              </TouchableOpacity>
              <Button
                disabled={!isValid || isSubmitting}
                text="Register"
                //style={{marginTop: verticalScale(20)}}
                onPress={handleSubmit}
                loading={isSubmitting}
                style={mainButton}
              />
            </React.Fragment>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    width: scale(120),
    height: scale(120),
    resizeMode: "contain",
    marginBottom: verticalScale(30)
  },
  headTextStyle: {
    fontSize: moderateScale(48),
    textAlign: "center",
    color: "#009CDB",
    marginBottom: verticalScale(120)
  },
  separatorStyle: {
    height: 1,
    width: scale(270),
    backgroundColor: "gray",
    opacity: 0.3
  },
  signupStyle: {
    opacity: 0.3,
    marginTop: verticalScale(30)
  },
  mainButton: {
    marginVertical: verticalScale(30)
  },
  highlightText: {
    fontSize: moderateScale(14),
    color: "#009CDB",
    textAlign: "center"
  }
});
export default Signup;
