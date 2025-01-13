import { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import styles from "./styles";
type LoadingProps = {
  visible: boolean;
};

const Loading: React.FC<LoadingProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1707f2" />
      </View>
    </View>
  );
};

export default Loading;
