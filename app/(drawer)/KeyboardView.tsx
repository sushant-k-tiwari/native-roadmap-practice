import { FlashList } from "@shopify/flash-list";
import React, { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";

const messages = Array.from({ length: 20 }, (_, i) => `Message ${i + 1}`);

export default function ChatScreen() {
  const [text, setText] = useState("");

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-50"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80} // adjusts for header if using navigation
    >
      <FlashList
        data={messages}
        renderItem={({ item }) => (
          <Text className="p-3 border-b border-gray-200 rounded-r-lg">
            {item}
          </Text>
        )}
        estimatedItemSize={50}
      />

      <View className="flex-row items-center p-3 border-t border-gray-300 bg-white">
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-md p-2 mr-2"
        />
        <Button
          title="Send"
          onPress={() => {
            setText("");
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
