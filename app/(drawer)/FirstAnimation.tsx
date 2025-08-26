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
    <View className="flex-1 justify-center items-center">
      <Animated.View
        style={{
          height,
          width,
        }}
        className="bg-[#fca5a5]"
      />
      <TouchableOpacity
        className="absolute bottom-24 bg-[#74d4ff] py-2 px-4 rounded-md"
        onPress={handlePress}
      >
        <Text className="text-white font-semibold text-2xl">Expand</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstAnimation;

const styles = StyleSheet.create({});
