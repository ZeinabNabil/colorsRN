import { FlatList, SafeAreaView, Text } from "react-native";
import appStyles from "./AppStyle";
import Box from "./components/Box/Box";

export default function App() {
  const colors = [
    { colorName: "HotPink", hexCode: "#FF69B4" },
    { colorName: "MediumVioletRed", hexCode: "#C71585" },
    { colorName: "DarkViolet", hexCode: "#9400D3" },
    { colorName: "MediumSlateBlue", hexCode: "#7B68EE" },
    { colorName: "Salmon", hexCode: "#FA8072" },
    { colorName: "OrangeRed", hexCode: "#FF4500" },
    { colorName: "Gold", hexCode: "#FFD700" },
    { colorName: "LimeGreen", hexCode: "#32CD32" },
    { colorName: "OliveDrab", hexCode: "#6B8E23" },
    { colorName: "DarkCyan", hexCode: "#008B8B" },
    { colorName: "DarkTurquoise", hexCode: "#00CED1" },
    { colorName: "SteelBlue", hexCode: "#4682B4" },
    { colorName: "CornflowerBlue", hexCode: "#6495ED" },
    { colorName: "MediumBlue", hexCode: "#0000CD" },
    { colorName: "GoldenRod", hexCode: "#DAA520" },
    { colorName: "SaddleBrown", hexCode: "#8B4513" },
    { colorName: "Maroon", hexCode: "#800000" },
    { colorName: "DimGray", hexCode: "#696969" },
    { colorName: "DarkSlateGray", hexCode: "#2F4F4F" },
  ];
  return (
    <SafeAreaView style={appStyles.show}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={colors}
        renderItem={({ item }) => <Box {...item}></Box>}
        keyExtractor={(color) => color.hexCode}
        ListHeaderComponent={
          <Text style={appStyles.header}>
            Here are some boxs with different colors
          </Text>
        }
        ListEmptyComponent={
          <Text style={appStyles.header}>There is no colors to show</Text>
        }
      ></FlatList>
    </SafeAreaView>
  );
}
