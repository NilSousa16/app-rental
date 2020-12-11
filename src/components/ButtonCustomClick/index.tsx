import React, { Component } from 'react';
// 
import {
StyleSheet,
View,
PropTypes,
Text,
TouchableHighlight
} from "react-native";

export default class Home extends Component {
constructor(props) {
    super(props);
    this.state = { pressStatus: false };
}
_onHideUnderlay() {
    this.setState({ pressStatus: false });
}
_onShowUnderlay() {
    this.setState({ pressStatus: true });
}
render() {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                activeOpacity={1}
                style={
                    this.state.pressStatus
                        ? styles.buttonPress
                        : styles.button
                }
                onHideUnderlay={this._onHideUnderlay.bind(this)}
                onShowUnderlay={this._onShowUnderlay.bind(this)}
            >
                <Text
                    style={
                        this.state.pressStatus
                            ? styles.welcomePress
                            : styles.welcome
                    }
                >
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        </View>
    );
}
}

Home.propTypes = {  
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
},
welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#000066"
},
welcomePress: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff"
},
button: {
    borderColor: "#000066",
    borderWidth: 1,
    borderRadius: 10
},
buttonPress: {
    borderColor: "#000066",
    backgroundColor: "#000066",
    borderWidth: 1,
    borderRadius: 10
}
});