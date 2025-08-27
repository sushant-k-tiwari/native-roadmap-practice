import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Card({ children }: React.PropsWithChildren) {
  return (
    <View className="border-1 border-[#ccc] rounded-md p-12 m-8 bg-neutral-100 shadow-black shadow-md elevation-3 ">
      {children}
    </View>
  );
}

function CardHeader({ children }: React.PropsWithChildren) {
  return (
    <View className="mb-8">
      <Text className="text-lg font-bold">{children}</Text>
    </View>
  );
}

function CardBody({ children }: React.PropsWithChildren) {
  return (
    <View className="mb-8">
      <Text className="text-md text-neutral-400 flex-wrap">{children}</Text>
    </View>
  );
}

function CardFooter({ children }: React.PropsWithChildren) {
  return (
    <View className="mb-8 items-start absolute bottom-0 left-12">
      <Text className="text-sm text-[#666]"> {children} </Text>
    </View>
  );
}
const SecondAnimation = () => {
  return (
    <SafeAreaView>
      <Card>
        <CardHeader>Demo Card</CardHeader>
        <CardBody>
          This is a demo card created for the purpose of learning compound
          components. Now i am just testing this.
        </CardBody>
        <CardFooter>© 2025 Sushant Learning</CardFooter>
      </Card>

      <Card>
        <CardHeader>Second Card</CardHeader>
        <CardBody>
          This is a demo card created for the purpose of learning compound
          components. Now i am just testing this.
        </CardBody>
        <CardFooter>© 2025 Sushant Learning</CardFooter>
      </Card>
    </SafeAreaView>
  );
};

export default SecondAnimation;
