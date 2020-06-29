import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted) {
      alert("U need to enable permission");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (err) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage}></Button>
      <Image
        source={{ uri: imageUri }}
        style={{ width: 200, height: 200 }}
      ></Image>
      <ImageInput imageUri={imageUri}></ImageInput>
    </Screen>
  );
}
