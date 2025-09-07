import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";

const Simple = () => {
  const [refresh, setRefresh] = useState(false);
  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };

  return (
    <ScrollView
      className="flex-1 bg-gray-100"
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
    >
      {[...Array(20).keys()].map((i) => (
        <View key={i} className="p-4 m-2 bg-white rounded-xl shadow-sm">
          <Text className="text-lg">Item {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Simple;
