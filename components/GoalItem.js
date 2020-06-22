import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.list}>
      <Text style={styles.text}>{props.goal}</Text>
      <Button title="Done!" onPress={props.onRemoveGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    borderColor: "red",
    margin: 10,
    borderWidth: 3,
    padding: 10,
  },
  text: {
    fontSize: 20,
    flex: 1,
  },
});

export default GoalItem;
