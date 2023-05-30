import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styles from "./BoxStyle";

const Box = ({ colorName, hexCode }) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        { backgroundColor: hexCode },
      ])}
    >
      <Text style={styles.title}>{colorName}</Text>
    </View>
  );
};

export default Box;
