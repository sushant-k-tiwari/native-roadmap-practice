import { useTheme } from "@react-navigation/native";
import Drawer from "expo-router/drawer";
import React from "react";

const Layout = () => {
  const theme = useTheme();

  return (
    <Drawer
      screenOptions={{
        headerTitleAlign: "center",
        drawerStyle: {
          borderTopRightRadius: 28,
          borderBottomRightRadius: 28,
          backgroundColor: theme.colors.card,
          elevation: 8,
          width: 300,
        },
        drawerActiveTintColor: "#0084d1",
        drawerInactiveTintColor: "#a1a1a1",
        drawerActiveBackgroundColor: "#b8e6fe",
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "800",
        },
      }}
    >
      <Drawer.Screen name="AnimationOne" />
      <Drawer.Screen name="ContextManagement" />
    </Drawer>
  );
};

export default Layout;
