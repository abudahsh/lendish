import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
class Login extends Component {
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
      mainButton
    } = styles;
    return (
      <View style={container}>
        <View>
          <Text style={headTextStyle}>Lendish</Text>
        </View>

        <Formik
          initialValues={{ email: "", password: "" }}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={() => {
            setTimeout(() => {
              this.props.navigation.navigate("Home");
            }, 1000);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email("Invalid Email"),
            password: Yup.string().required("Password Required")
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
              <Input placeholder="Email" name="email" type={"email"} />
              <View style={separatorStyle} />
              <Input
                placeholder={"Password"}
                name="password"
                type={"password"}
              />

              <Button
                disabled={!isValid || isSubmitting}
                text={"LOGIN"}
                //style={{marginTop: verticalScale(20)}}
                onPress={handleSubmit}
                loading={isSubmitting}
                style={mainButton}
              />
            </React.Fragment>
          )}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          <Text style={signupStyle}>I don't have an account</Text>
        </TouchableOpacity>
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
    opacity: 0.3
  },
  mainButton: {
    marginVertical: verticalScale(30)
  }
});
export default Login;
