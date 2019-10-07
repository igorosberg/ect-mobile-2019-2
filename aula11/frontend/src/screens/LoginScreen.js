import * as React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import colors from "../config/colors";
import strings from "../config/strings";

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      telefone: ""
    };
  }

  handleEmailChange = (telefone) => {
    this.setState({ telefone });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={strings.TELEFONE_PLACEHOLDER}
          />
          <Button label={strings.LOGIN} onPress={this.handleLoginPress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

export default LoginScreen;
