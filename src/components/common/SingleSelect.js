import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Image,
  FlatList,
  TextInput
} from "react-native";
import { Container } from "./index";
import strings from "../../strings";
import { scale, verticalScale, moderateScale } from "../../Helpers";
import Fuse from "fuse.js";
import PropTypes from "prop-types";
import { withFormikControl } from "react-native-formik";

class SingleSelect extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.handleItemSelection = this.handleItemSelection.bind(this);
    this.renderSelectionList = this.renderSelectionList.bind(this);
    this.toggleSelectionModal = this.toggleSelectionModal.bind(this);
  }

  state = {
    searchResults: [],
    modalOpen: false
  };

  handleTextChange(value) {
    var options = {
      shouldSort: true,
      threshold: 0.6,
      keys: ["name"]
    };
    var fuse = new Fuse(this.props.data, options);
    var searchResults = fuse.search(value);
    this.setState({
      searchResults
    });
  }

  renderItem({ item, index }) {
    const { itemContainerStyle, itemTextStyle } = styles;

    return (
      <TouchableOpacity
        onPress={() => this.handleItemSelection(item)}
        style={itemContainerStyle}
      >
        <Text style={itemTextStyle}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  handleItemSelection(value) {
    this.props.setFieldValue(value);
    this.toggleSelectionModal();
  }

  toggleSelectionModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  renderSelectionList() {
    const { title, subTitle, data, setFieldTouched } = this.props;

    const { searchResults, modalOpen } = this.state;

    const {
      doneButtonStyle,
      doneTextStyle,
      containerStyle,
      titleTextStyle,
      subTitleStyle,
      inputContainerStyle,
      textInputStyle,
      optionsContainerStyle
    } = styles;

    return (
      <Modal
        transparent={true}
        visible={modalOpen}
        onRequestClose={this.toggleSelectionModal}
        animationType={"slide"}
        onDismiss={setFieldTouched}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,.4)",
            alignItems: "center",
            justifyContent: "flex-end"
          }}
        >
          <View
            style={{
              width: scale(375),
              height: verticalScale(611),
              borderTopLeftRadius: verticalScale(6),
              borderTopRightRadius: verticalScale(6),
              paddingTop: verticalScale(16),
              backgroundColor: "#FAFAFA"
            }}
          >
            <Container>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  style={doneButtonStyle}
                  onPress={this.toggleSelectionModal}
                >
                  <Text style={doneTextStyle}>{strings.cancel}</Text>
                </TouchableOpacity>
                <Text style={titleTextStyle}>{title}</Text>
              </View>
              {subTitle && <Text style={subTitleStyle}>{subTitle}</Text>}
              <View style={containerStyle}>
                <View style={[inputContainerStyle]}>
                  <TextInput
                    style={textInputStyle}
                    onChangeText={this.handleTextChange}
                    placeholder={strings.filter}
                    placeholderTextColor={"#D0C9D6"}
                    underlineColorAndroid={"transparent"}
                  />
                </View>
                <View style={optionsContainerStyle}>
                  <FlatList
                    style={{ flex: 1 }}
                    data={searchResults.length > 0 ? searchResults : data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItem}
                  />
                </View>
              </View>
            </Container>
          </View>
        </View>
      </Modal>
    );
  }

  render() {
    const { placeholder, modalInput, value, error, style } = this.props;

    const {
      triggerContainerStyle,
      triggerTextStyle,
      triggerArrowStyle,
      errorTriggerContainerStyle,
      errorTriggerTextStyle
    } = styles;
    return (
      <View>
        <TouchableOpacity
          style={[
            triggerContainerStyle,
            style,
            modalInput && { width: scale(322) },
            error && errorTriggerContainerStyle
          ]}
          onPress={this.toggleSelectionModal}
        >
          <Text style={[triggerTextStyle, error && errorTriggerTextStyle]}>
            {value ? value.title : placeholder}
          </Text>
          {
            // <Image style={triggerArrowStyle} source={require('../../assets/icons/arrowDown.png')} />
          }
        </TouchableOpacity>
        {error && <Text style={styles.errorTextStyle}>{error}</Text>}
        {this.renderSelectionList()}
      </View>
    );
  }
}

SingleSelect.propTypes = {
  data: PropTypes.array.isRequired,
  value: PropTypes.object,
  title: PropTypes.string
};

SingleSelect.defaultProps = {
  value: null
};

const styles = StyleSheet.create({
  doneButtonStyle: {
    paddingHorizontal: scale(16),
    height: verticalScale(44),
    justifyContent: "center",
    alignSelf: "flex-start"
  },
  doneTextStyle: {
    color: "#1C1C1C",
    fontSize: moderateScale(16)
  },
  containerStyle: {
    flex: 1,
    alignItems: "center",
    paddingBottom: verticalScale(25),
    paddingTop: verticalScale(5)
  },
  titleTextStyle: {
    color: "#0A3D62",
    fontSize: moderateScale(17),
    fontWeight: "bold",
    textAlign: "center",
    width: scale(210)
  },
  subTitleStyle: {
    marginTop: verticalScale(5),
    color: "#0A3D62",
    opacity: 0.5,
    textAlign: "center",
    fontSize: moderateScale(12)
  },
  inputContainerStyle: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(8),
    width: scale(343),
    backgroundColor: "#FFFFFF",
    borderColor: "#ECEBED",
    borderWidth: 1,
    minHeight: verticalScale(48),
    borderRadius: verticalScale(6)
  },
  textInputStyle: {
    paddingLeft: scale(12),
    color: "#3F3356",
    fontSize: moderateScale(11),
    height: verticalScale(48)
  },
  errorTriggerContainerStyle: {
    borderColor: "#FF647C",
    borderWidth: 1
  },
  errorTriggerTextStyle: {
    color: "#FF647C"
  },
  errorTextStyle: {
    color: "#FF647C",
    fontSize: moderateScale(12),
    marginTop: verticalScale(10)
  },
  optionsContainerStyle: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOpacity: 0.07,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowRadius: 64,
    elevation: 2,
    paddingTop: verticalScale(10),
    borderRadius: verticalScale(6),
    width: scale(343),
    flex: 1
  },
  itemContainerStyle: {
    height: verticalScale(40),
    width: scale(343),
    paddingLeft: scale(15),
    justifyContent: "center"
  },
  itemTextStyle: {
    color: "#3F3356",
    fontSize: moderateScale(15),
    textAlign: "left"
  },
  triggerContainerStyle: {
    paddingHorizontal: scale(15),
    height: verticalScale(48),
    width: scale(343),
    backgroundColor: "#fff",
    borderRadius: verticalScale(6),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  triggerTextStyle: {
    fontSize: moderateScale(15),
    textAlign: "left",
    color: "#D0C9D6"
  },
  triggerArrowStyle: {
    width: scale(12),
    height: verticalScale(7),
    resizeMode: "contain"
  }
});

export default withFormikControl(SingleSelect);
