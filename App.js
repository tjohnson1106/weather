import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  View
} from "react-native";

import SearchInput from "./src/components/SearchInput";
import getImageForWeather from "./utils/getImageForWeather";

export default class App extends Component {
  super(props) {
    constructor(props);

    this.state = {
      location: "San Francisco"
    };
  }

  componentDidMount() {
    console.log("Component has mounted");
  }

  handleUpdateLocation = city => {
    this.setState({
      location: city
    });
  };

  render() {
    const { location } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForWeather}
          style={styles.imageContainer}
          imageStyle={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
          <Text style={[styles.smallText, styles.textStyle]}>{location}</Text>
          <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>

          <SearchInput
            placeholder="Search any city"
            onSubmit={this.handleUpdateLocation}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495E"
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
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba( 0, 0, 0, 0.2 )",
    paddingHorizontal: 20
  }
});
