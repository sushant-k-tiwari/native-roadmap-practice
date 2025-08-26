import { Ionicons } from "@expo/vector-icons";
import { Accordion, useTheme } from "heroui-native";
import { Text, View } from "react-native";

export default function AccordionExample() {
  const { colors } = useTheme();

  const accordionData = [
    {
      id: "1",
      title: "How do I place an order?",
      icon: (
        <Ionicons name="bag-outline" size={16} color={colors.mutedForeground} />
      ),
      content:
        "Lorem ipsum dolor sit amet consectetur. Netus nunc mauris risus consequat. Libero placerat dignissim consectetur nisl.",
    },
    {
      id: "2",
      title: "What payment methods do you accept?",
      icon: (
        <Ionicons
          name="card-outline"
          size={16}
          color={colors.mutedForeground}
        />
      ),
      content:
        "Lorem ipsum dolor sit amet consectetur. Netus nunc mauris risus consequat. Libero placerat dignissim consectetur nisl.",
    },
    {
      id: "3",
      title: "How much does shipping cost?",
      icon: (
        <Ionicons
          name="cube-outline"
          size={16}
          color={colors.mutedForeground}
        />
      ),
      content:
        "Lorem ipsum dolor sit amet consectetur. Netus nunc mauris risus consequat. Libero placerat dignissim consectetur nisl.",
    },
  ];

  return (
    <Accordion
      selectionMode="single"
      variant="border"
      defaultValue="2"
      className="m-3 border-neutral-400 rounded-md p-4 border-[0.5px] bg-sky-50"
    >
      {accordionData.map((item) => (
        <Accordion.Item key={item.id} value={item.id}>
          <Accordion.Trigger>
            <View className="flex-row items-center flex-1 gap-3">
              {item.icon}
              <Text className="text-foreground text-base flex-1">
                {item.title}
              </Text>
            </View>
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            <Text className="text-muted-foreground text-base/relaxed px-[25px]">
              {item.content}
            </Text>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
