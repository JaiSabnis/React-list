import React, { useState } from "react";
import {
  View,
  Modal,
  Button,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
} from "react-native";

function InputBar(props) {
  const [goal, setGoal] = useState("");
  const goalInputer = (text) => {
    setGoal(text);
  };
  return (
    <View style={styles.inputBox}>
      <TextInput
        placeholder="New task"
        style={styles.input}
        onChangeText={goalInputer}
        value={goal}
      ></TextInput>
      <Button title="Add" onPress={props.onAddGoal.bind(this, goal)} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  input: {
    flex: 1,
    width: "80%",
    padding: 10,
    borderBottomColor: "black",
    padding: 10,
    borderBottomWidth: 1,
  },
});

export default InputBar;
