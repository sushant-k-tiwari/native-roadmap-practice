import React, { useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import * as Contacts from "expo-contacts";

export default function App() {
  const [contacts, setContacts] = useState<any[]>([]);

  const getContacts = async () => {
    // 1. Request permission
    const { status } = await Contacts.requestPermissionsAsync();

    if (status === "granted") {
      console.log("✅ Contacts permission granted");

      // 2. Get all contacts
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
      });

      // 3. Save & log
      setContacts(data);
      console.log("Total Contacts:", data.length);
      data.forEach((c, i) => {
        console.log(`${i + 1}. ${c.name}`);
        if (c.phoneNumbers) console.log("   Phone:", c.phoneNumbers[0].number);
        if (c.emails) console.log("   Email:", c.emails[0].email);
      });
    } else {
      console.log("❌ Contacts permission denied");
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold mb-4">Contacts Permission Example</Text>
      <Button title="Get Contacts" onPress={getContacts} />

      <ScrollView className="mt-4">
        {contacts.map((c, i) => (
          <Text key={i} className="text-base">
            {c.name} - {c.phoneNumbers?.[0].number}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
