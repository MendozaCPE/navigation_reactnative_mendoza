import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import React from "react";
import CustomDrawerContent from "../components/CustomDrawerContent";

export const unstable_settings = {
  anchor: "home",
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#8a2be2", // Vibrant purple header
          },
          headerTintColor: "#ffffff", // White header buttons/hamburger
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerTitleAlign: "center",
          drawerActiveTintColor: "#8a2be2",
          drawerInactiveTintColor: "#333333",
        }}
      >
        <Drawer.Screen
          name="home"
          options={{
            title: "Home",
            headerTitle: "Stack Navigation",
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
            headerTitle: "Account Settings",
          }}
        />
      </Drawer>
      <StatusBar style="light" />
    </GestureHandlerRootView>
  );
}
