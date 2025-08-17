import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

const FirstAnimation = () => {
  const width = useSharedValue(150);
  const height = useSharedValue(150);

  const handlePress = () => {
    width.value =
      width.value < 350 ? withSpring(width.value + 50) : (width.value = 150);
    height.value =
      height.value < 350 ? withSpring(height.value + 50) : (height.value = 150);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={{
          height,
          width,
          backgroundColor: "#fca5a5",
        }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 100,
          backgroundColor: "#0891b2",
          padding: 12,
          borderRadius: 8,
        }}
        onPress={handlePress}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Expand
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstAnimation;

const styles = StyleSheet.create({});
