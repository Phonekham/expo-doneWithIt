import React from "react";
import { View, StyleSheet } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <View key={uri} style={styles.image}>
          <ImageInput
            imageUri={uri}
            key={uri}
            onChangeImage={() => onRemoveImage(uri)}
          ></ImageInput>
        </View>
      ))}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)}></ImageInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
