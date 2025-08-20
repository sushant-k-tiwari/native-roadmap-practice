import React from "react";
import { StyleSheet, View } from "react-native";
import { useSharedValue, withSpring } from "react-native-reanimated";
import Rive from "rive-react-native";

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
      {/* <Animated.View
        style={{
          height,
          width,
        }}
        className="bg-[#fca5a5]"
      />
      <TouchableOpacity
        className="absolute bottom-24 bg-[#0891b2] py-2 px-4 rounded-md"
        onPress={handlePress}
      >
        <Text className="text-white font-semibold text-2xl">Expand</Text>
      </TouchableOpacity> */}
      <Rive
        url="https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv"
        artboardName="Avatar 1"
        stateMachineName="avatar"
        style={{ width: 400, height: 400 }}
      />
      ;
    </View>
  );
};

export default FirstAnimation;

const styles = StyleSheet.create({});
