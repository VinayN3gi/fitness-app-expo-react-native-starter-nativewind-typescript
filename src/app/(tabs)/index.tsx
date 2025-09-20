import React, { useRef } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const events = [
  { id: 3, name: "Dinner", img: require("../../assets/drinks.png") },
  { id: 2, name: "Drinks", img: require("../../assets/dinner.png") },
  { id: 1, name: "Coffee", img: require("../../assets/coffee2.png") },
];

const RaisedCard = ({ event, onPress }: any) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.94,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 5,
      tension: 120,
      useNativeDriver: true,
    }).start();
    onPress();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[
          {
            transform: [{ scale }],
            borderRadius: 24,
            marginBottom: 28,
            overflow: "hidden", // ✅ ensures no square corners
            shadowColor: "#000",
            shadowOpacity: 0.5,
            shadowOffset: { width: 0, height: 14 },
            shadowRadius: 24,
            elevation: 22,
          },
        ]}
      >
        <ImageBackground
          source={event.img}
          className="h-64 w-full justify-end"
          resizeMode="cover"
        >
          {/* Blur overlay */}
          <BlurView
            intensity={30}
            tint="dark"
            style={StyleSheet.absoluteFillObject}
          />

          {/* Gradient overlay */}
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "70%",
            }}
          />

          {/* Title */}
          <View className="p-6">
            <Text className="text-3xl font-extrabold text-white tracking-tight drop-shadow-lg">
              {event.name}
            </Text>
          </View>
        </ImageBackground>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const HomeScreen = () => {
  const router = useRouter();

  return (
    <LinearGradient
      // brighter gradient in same tone
      colors={["#1a1446", "#3e358a", "#2d2b65"]}
      start={[0, 0]}
      end={[0, 1]}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          {/* Heading */}
          <Text className="text-5xl font-extrabold text-center mb-12">
            <Text className="text-white">Our </Text>
            <Text className="text-pink-400">Events</Text>
          </Text>

          {/* Raised Event Cards */}
          {events.map((event) => (
            <RaisedCard
              key={event.id}
              event={event}
              onPress={() => router.push(`/event/${event.id}`)}
            />
          ))}

          <View className="h-14" />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;
