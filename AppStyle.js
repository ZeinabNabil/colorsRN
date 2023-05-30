import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  show: {
    marginTop: Platform.OS === "android" ? 20 : 0,
    marginHorizontal: 30,
  },
  header: { fontWeight: "bold", fontSize: 16 },
});
