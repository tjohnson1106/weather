import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChangeText = text => {
    this.setState({ text });
  };

  render() {
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          value={text}
          placeholder={placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          style={styles.textInputSearch}
          clearButtonMode="always"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: "#666",
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  textInputSearch: {
    flex: 1,
    color: "white"
  }
});

export default SearchInput;
