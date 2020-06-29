import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ImageInput = ({ imageUri }) => {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons color={colors.medium} name="camera" />
      )}
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.image}></Image>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
