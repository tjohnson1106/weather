import React from "react";
import {
  StyleSheet,
  Text,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
  View,
  ActivityIndicator,
  StatusBar
} from "react-native";

import getImageForWeather from "./utils/getImageForWeather";
import { fetchLocationId, fetchWeather } from "./utils/api";

import SearchInput from "./src/components/SearchInput";

export default class App extends React.Component {
  state = {
    loading: false,
    error: false,

    location: "",
    temperature: 0,
    weather: ""
  };

  componentDidMount() {
    this.handleUpdateLocation("San Francisco");
  }

  handleUpdateLocation = async city => {
    if (!city) return;

    this.setState({ loading: true }, async () => {
      try {
        const locationID = await fetchLocationId(city);
        const { location, weather, temperature } = await fetchWeather(locationID);

        this.setState({
          loading: false,
          error: false,
          location,
          temperature,
          weather
        });
      } catch (e) {
        console.log(e);

        this.setState({
          loading: false,
          error: true
        });
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={getImageForWeather(this.state.weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <ActivityIndicator
              animating={this.state.loading}
              color="white"
              size="large"
            />

            {!this.state.loading && (
              <View>
                {this.state.error && (
                  <Text style={[styles.smallText, styles.textStyle]}>
                    Could not load weather, please try a different city.
                  </Text>
                )}

                {!this.state.error && (
                  <View>
                    <Text style={[styles.textStyle, styles.largeText]}>
                      {this.state.location}
                    </Text>
                    <Text style={[styles.textStyle, styles.smallText]}>
                      {this.state.weather}
                    </Text>
                    {/* why do these braces do anything around Math.round? */}
                    <Text style={[styles.textStyle, styles.largeText]}>{`${Math.round(
                      this.state.temperature * (9 / 5) + 32
                    )}° F`}</Text>
                  </View>
                )}

                <SearchInput
                  location={this.state.location}
                  placeholder="Search any City"
                  onSubmit={this.handleUpdateLocation}
                />
              </View>
            )}
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
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
    color: "white"
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
  container: {
    flex: 1,
    backgroundColor: "#34495E"
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
    backgroundColor: "rgba(0, 0, 0, .2)",
    paddingHorizontal: 20
  }
});
