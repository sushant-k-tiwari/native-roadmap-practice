import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const Switch = () => {
  return (
    <View className="flex-1 bg-neutral-50 p-8 items-center ">
      <View className="flex-col gap-4">
        <Link
          href={"../components/SwitchComponents/Switch"}
          className="text-lg px-6 py-3 bg-neutral-800 text-white rounded-lg"
        >
          Simple Switch
        </Link>

        <Link
          href={"../components/SwitchComponents/CustomSwitch"}
          className="text-lg px-6 py-3 bg-neutral-800 text-white rounded-lg"
        >
          Custom Switch
        </Link>

        <Link
          href={"../components/SwitchComponents/AnimatedSwitch"}
          className="text-lg px-6 py-3 bg-neutral-800 text-white rounded-lg"
        >
          Animated Switch
        </Link>
      </View>
    </View>
  );
};

export default Switch;
