import React, { useEffect, useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";

const AnimatedSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);
  const anim = useRef(new Animated.Value(0)).current;

  //Animatig Thumb position
  useEffect(() => {
    Animated.timing(anim, {
      toValue: darkMode ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [darkMode]);

  const translateX = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 28],
  });

  return (
    <View
      className={`flex-1 items-center justify-center 
    ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <Text
        className={`mb-6 text-xl font-medium 
      ${darkMode ? "text-white" : "text-neutral-700"}`}
      >
        {darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </Text>

      <Pressable
        className={`w-16 h-8 rounded-full p-1
        ${darkMode ? "bg-gray-600" : "bg-gray-300"}`}
        onPress={() => setDarkMode(!darkMode)}
      >
        <Animated.View
          style={{ transform: [{ translateX }] }}
          className={`w-6 h-6 rounded-full
        ${darkMode ? "bg-yellow-200" : "bg-violet-600"}`}
        />
      </Pressable>
    </View>
  );
};

export default AnimatedSwitch;
