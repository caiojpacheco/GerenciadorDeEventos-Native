import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// npm install @react-navigation/bottom-tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// npm install lucide-react-native
import { Home, Library, Users } from "lucide-react-native";
import CadastroScreen from "../screens/CadastroScreens/CadastroScreens";
import LoginScreen from "../screens/LoginScreens/LoginScreens";
import HomeScreen from "../screens/HomeScreens/index";
import { StackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e5e5e5",
          height: 80,
        },
        tabBarActiveTintColor: "#6200ee",
        tabBarInactiveTintColor: "#757575",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginBottom: 4,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Home size={size} color={color} strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const Rotas = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={CadastroScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
