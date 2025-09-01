import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const Modals = () => {
  return (
    <View className="flex-1 bg-neutral-50 p-8 items-center justify-center">
      <View className="flex-col gap-4">
        <Link
          href={"../components/Modals/SimpleAlert"}
          className="text-lg px-6 py-3 bg-neutral-800 text-white rounded-lg text-center"
        >
          Alert Modal
        </Link>

        <Link
          href={"../components/Modals/BottomSheetModal"}
          className="text-lg px-6 py-3 bg-neutral-800 text-white rounded-lg"
        >
          Bottom Sheet Modal
        </Link>

        <Link
          href={"../components/Modals/FullScreenModal"}
          className="text-lg px-6 py-3 bg-neutral-800 text-white rounded-lg"
        >
          Full Screen Modal
        </Link>
      </View>
    </View>
  );
};

export default Modals;
