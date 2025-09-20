import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Animated } from "react-native";
import { useRef, useEffect } from "react";

function AnimatedIcon({
  name,
  color,
  focused,
}: {
  name: any;
  color: string;
  focused: boolean;
}) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: focused ? 1.1 : 1, // subtle bounce
      useNativeDriver: true,
      friction: 5,
    }).start();
  }, [focused]);

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <AntDesign name={name} size={22} color={color} /> 
    </Animated.View>
  );
}

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true, // ✅ text below icon
        tabBarStyle: {
          backgroundColor: "rgba(10, 10, 10, 0.95)",
          height: 100, // safe height for icons + labels
          borderTopLeftRadius: 0, // ✅ full rectangle
          borderTopRightRadius: 0,
          borderTopWidth: 0.5,
          borderTopColor: "rgba(255,255,255,0.15)", // subtle divider
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 10, // Android shadow
          shadowColor: "#000", // iOS shadow
          shadowOpacity: 0.2,
          shadowRadius: 6,
          shadowOffset: { width: 0, height: -2 },
        },
        tabBarActiveTintColor: "#ff2d75",
        tabBarInactiveTintColor: "#9ca3af",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 4,
        },
        tabBarItemStyle: {
          paddingTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon name="home" color={color} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "My Events",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon
              name="clockcircle"
              color={color}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="check"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon name="user" color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
