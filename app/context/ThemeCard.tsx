import { Moon, Sun } from "lucide-react-native";
import React, { createContext, useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CardContext = createContext<{
  theme: "light" | "dark";
  toggle: () => void;
} | null>(null);

function useCard() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCard must be used within a CardProvider");
  }
  return context;
}

function Card({
  children,
  defaultTheme = "light",
}: React.PropsWithChildren & { defaultTheme?: "light" | "dark" }) {
  const [theme, setTheme] = useState(defaultTheme);

  const toggle = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <CardContext.Provider value={{ theme, toggle }}>
      <View
        className={`rounded-xl p-4 m-4 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
      >
        {children}
      </View>
    </CardContext.Provider>
  );
}

function CardHeader({ children }: React.PropsWithChildren) {
  const { theme } = useCard();
  return (
    <Text
      className={`text-lg font-bold mb-2 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      {children}
    </Text>
  );
}

function CardBody({ children }: React.PropsWithChildren) {
  const { theme } = useCard();
  return (
    <Text
      className={`text-base mb-2 ${
        theme === "dark" ? "text-gray-300" : "text-gray-700"
      }`}
    >
      {children}
    </Text>
  );
}

function CardFooter({ children }: React.PropsWithChildren) {
  const { theme } = useCard();
  return (
    <Text
      className={`text-sm text-right ${
        theme === "dark" ? "text-gray-400" : "text-gray-600"
      }`}
    >
      {children}
    </Text>
  );
}

function CardThemeToggle() {
  const { theme, toggle } = useCard();
  return (
    <TouchableOpacity onPress={toggle} className="self-end p-2 rounded-full">
      {theme === "dark" ? (
        <Sun size={20} color="white" />
      ) : (
        <Moon size={20} color="black" />
      )}
    </TouchableOpacity>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.ThemeToggle = CardThemeToggle;

const ThemeCard = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4">
      <Card defaultTheme="light">
        <Card.ThemeToggle />
        <Card.Header>Toggle Theme Card</Card.Header>
        <Card.Body>
          Tap the sun/moon to switch themes! Here we are using compound
          components to learn and practice the concepts of Context API.
        </Card.Body>
        <Card.Body>
          Check out the code in the app/(drawer)/ThemeCard.tsx
        </Card.Body>
        <Card.Footer>© 2025 Sushant Learning</Card.Footer>
      </Card>
    </SafeAreaView>
  );
};

export default ThemeCard;
