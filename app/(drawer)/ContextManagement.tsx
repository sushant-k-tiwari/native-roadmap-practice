import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const ContextManagement = () => {
  return (
    <View className="flex-1 items-center bg-white">
      <Link
        href="../context/SimpleCard"
        className=" font-semibold text-2xl text-blue-400 mt-4"
      >
        Simple Card
      </Link>

      <Link
        href="../context/ThemeCard"
        className=" font-semibold text-2xl text-blue-400 mt-4"
      >
        Theme Card Card
      </Link>
    </View>
  );
};

export default ContextManagement;
