import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const EventDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const dummyOptions = [
    {
      id: "a",
      title: "Early Dinner at 7 PM",
      icon: "restaurant",
      bg: require("../../assets/dinner4.png"),
    },
    {
      id: "b",
      title: "Late Dinner at 9 PM",
      icon: "moon",
      bg: require("../../assets/dinner2.png"),
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-black">
      {/* Background Gradient */}
      <LinearGradient
        colors={["#0f0c29", "#302b63", "#24243e"]}
        style={StyleSheet.absoluteFillObject}
      />

      {/* Header */}
      <View className="flex-row items-center px-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="p-2 rounded-full bg-white/10"
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView contentContainerClassName="px-4 pb-16">
        <Text className="text-center text-4xl font-extrabold text-pink-400 my-6">
          Choose a Time
        </Text>

        {dummyOptions.map((opt) => (
          <TouchableOpacity
            key={opt.id}
            activeOpacity={0.9}
            className="mb-8 rounded-3xl overflow-hidden shadow-2xl"
            style={{ height: 200 }}
            onPress={() => alert(`Booked: ${opt.title}`)}
          >
            {/* 🔹 Background Image */}
            <ImageBackground
              source={opt.bg}
              style={{ flex: 1 }}
              imageStyle={{ borderRadius: 24 }}
            >
              {/* 🔹 Blur + Gradient */}
              <BlurView intensity={40} tint="dark" className="flex-1 rounded-3xl">
                <LinearGradient
                  colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.3)"]}
                  start={[0, 0]}
                  end={[1, 1]}
                  className="flex-1 relative items-center justify-center"
                >
                  {/* Icon at top-right */}
                  <Ionicons
                    name={opt.icon as any}
                    size={28}
                    color="white"
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                    }}
                  />

                  {/* Centered Text */}
                  <View className="items-center">
                    <Text className="text-2xl font-extrabold text-white text-center">
                      {opt.title}
                    </Text>
                    <Text className="text-base text-white/80 mt-2 text-center">
                      Tap to reserve your spot 🚀
                    </Text>
                  </View>
                </LinearGradient>
              </BlurView>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetails;
