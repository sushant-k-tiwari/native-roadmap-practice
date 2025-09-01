import React, { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";

const FullScreenModal = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Pressable
        onPress={() => setVisible(true)}
        className="bg-[#8C4853] px-6 py-3 rounded-xl"
      >
        <Text className="text-[#F0EFED] text-lg font-semibold">Open Form</Text>
      </Pressable>

      <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View className="flex-1 bg-white p-8">
          <Text className="text-2xl font-bold mb-4">Enter Your Name</Text>

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Type here..."
            className="border border-gray-300 rounded-lg px-4 py-4 mb-6"
          />

          <Pressable
            onPress={() => setVisible(false)}
            className="bg-[#8C4853] px-6 py-3 rounded-xl"
          >
            <Text className="text-[#F0EFED] text-lg font-semibold text-center">
              Submit
            </Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default FullScreenModal;
