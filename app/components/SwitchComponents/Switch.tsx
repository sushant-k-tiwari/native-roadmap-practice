import React, { useState } from "react";
import { ScrollView, Switch, Text, View } from "react-native";

const SwitchView = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    location: false,
    wifi: false,
  });

  const toggleSwitch = (key: keyof typeof settings) => {
    // console.log("Before Toggling: ", settings);
    // console.log("Toggling Key: ", key);
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ScrollView className="flex-1 bg-neutral-50 p-6">
      {Object.entries(settings).map(([key, value]) => (
        <View
          key={key}
          className="flex-row justify-between items-center mb-3 p-4 bg-white rounded-xl shadow-sm"
        >
          <Text className="text-lg capitalize">{key}</Text>
          <Switch
            value={value}
            onValueChange={() => toggleSwitch(key as keyof typeof settings)}
            trackColor={{ false: "#d1d5db", true: "#3b82f6" }}
            thumbColor={value ? "#1d4ed8" : "#f9fafb"}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default SwitchView;
