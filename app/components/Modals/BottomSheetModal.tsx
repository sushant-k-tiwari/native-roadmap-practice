import React, { useState } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";

const BottomSheetModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View className="flex-1 items-center justify-center bg-neutral-50">
      <Pressable
        onPress={() => setVisible(true)}
        className="bg-violet-400 px-6 py-3 rounded-xl"
      >
        <Text className="text-white text-lg font-semibold">
          Open Bottom Sheet
        </Text>
      </Pressable>

      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/40">
          <View className="h-1/3 bg-white rounded-t-2xl p-6">
            <Text className="text-xl font-bold mb-4">Choose an Option</Text>

            {["Profile", "Settings", "Edit", "Logout"].map((item) => (
              <Pressable
                key={item}
                onPress={() => setVisible(false)}
                className="py-3 border-b border-gray-200"
              >
                <Text className="text-lg">{item}</Text>
              </Pressable>
            ))}
          </View>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Text className="text-lg text-red-500 absolute bottom-4 right-12">
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default BottomSheetModal;
