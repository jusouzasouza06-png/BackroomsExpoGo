import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.title}>Backrooms</Text>
      <Text style={styles.subtitle}>
        Projeto convertido para Expo (em desenvolvimento)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold"
  },
  subtitle: {
    color: "#aaa",
    marginTop: 20,
    fontSize: 16
  }
});