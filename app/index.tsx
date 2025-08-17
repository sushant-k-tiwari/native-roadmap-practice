import { Link } from "expo-router";
import { View } from "react-native";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        href="./animations/FirstAnimation"
        style={{
          fontSize: 24,
          color: "#0891b2",
          fontWeight: "semibold",
        }}
      >
        First Animation
      </Link>
    </View>
  );
}
