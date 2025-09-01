import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

const CustomSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View
      className={`flex-1 items-center justify-center ${darkMode ? "bg-black" : "bg-white"}`}
    >
      <Text
        className={`mb-6 text-xl font-medium ${
          darkMode ? "text-white" : "text-neutral-600"
        }`}
      >
        {" "}
        {darkMode
          ? "This is dark mode theme 🌙"
          : "This is a light mode theme ☀️"}
      </Text>
      <Pressable
        className={`w-16 h-8 rounded-full p-1 
        ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
        onPress={() => setDarkMode(!darkMode)}
      >
        <View
          className={`w-6 h-6 rounded-full 
            ${darkMode ? "bg-yellow-300 ml-8" : "bg-black ml-0"}`}
        />
      </Pressable>
    </View>
  );
};

export default CustomSwitch;
