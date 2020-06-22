import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Alert,
  Image,
  StatusBar,
  Platform,
} from "react-native";

import GoalItem from "./components/GoalItem";
import InputBar from "./components/InputBar";

export default function App() {
  const [goals, setGoals] = useState([]);

  const goalAdder = (goal) => {
    if (goal.length > 0)
      setGoals((goals) => [
        ...goals,
        { key: Math.random.toString(), val: goal },
      ]);
  };

  const goalRemover = (goalKey) => {
    setGoals((goals) => {
      return goals.filter((item) => item.key !== goalKey);
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <InputBar onAddGoal={goalAdder} />
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            goal={itemData.item.val}
            onRemoveGoal={goalRemover.bind(this, itemData.item.key)}
          />
        )}
      />

      {/*
      <ScrollView>
        {goals.map((goal) => (
          <View style={styles.list}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
        */}
    </SafeAreaView>
  );
}
