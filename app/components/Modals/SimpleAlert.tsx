import React, { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";

const SimpleAlert = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Pressable
        onPress={() => setVisible(true)}
        className="bg-blue-500 px-6 py-3 rounded-xl"
      >
        <Text className="text-white text-lg font-semibold">
          Show Alert Modal
        </Text>
      </Pressable>

      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View className="flex-1 items-center justify-center bg-black/50">
          <View className="w-96 p-6 bg-white rounded-2xl">
            <Text className="text-lg font-bold mb-4">Delete Item?</Text>
            <Text className="mb-6 text-gray-600">
              Are you sure you want to delete this item? This action can’t be
              undone.
            </Text>

            <View className="flex-row justify-end space-x-4 gap-4">
              <Pressable onPress={() => setVisible(false)}>
                <Text className="text-gray-600">Cancel</Text>
              </Pressable>
              <Pressable onPress={() => setVisible(false)}>
                <Text className="text-red-600 font-semibold">Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SimpleAlert;
