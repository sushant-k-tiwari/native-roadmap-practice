import { Link } from "expo-router";
import { View } from "react-native";
export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Link
        href="./animations/FirstAnimation"
        className=" font-semibold text-2xl text-[#0891b2]"
      >
        First Animation
      </Link>
    </View>
  );
}
