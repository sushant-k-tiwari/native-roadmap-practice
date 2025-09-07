import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const RefreshControl = () => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50">
      <Link href="../components/RefreshControls/Simple" className="px-4 py-2 bg-black text-white rounded-md">
        <Text>RefreshControl</Text>
      </Link>
    </View>
  );
};

export default RefreshControl;
