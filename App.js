import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  View
} from "react-native";

import getImageForWeather from "./utils/getImageForWeather";

import SearchInput from "./src/components/SearchInput";

export default class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ImageBackground
          source={getImageForWeather("clear")}
          style={styles.imageContainer}
        >
          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>
              San Francisco
            </Text>
            <Text style={[styles.smallText, styles.textStyle]}>
              Light Cloud
            </Text>
            <Text style={[styles.largeText, styles.textStyle]}>24°</Text>

            <SearchInput placeholder="Search any city" />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto"
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  },
  imageContainer: {},
  detailsContainer: {}
});
