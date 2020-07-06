import React from "react";
import { StyleSheet, View, Modal } from "react-native";
import * as Progress from "react-native-progress";

import AppText from "../components/Text";
import colors from "../config/colors";

const UploadScreen = ({ progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar
          color={colors.primary}
          progress={progress}
          width={200}
        ></Progress.Bar>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadScreen;
