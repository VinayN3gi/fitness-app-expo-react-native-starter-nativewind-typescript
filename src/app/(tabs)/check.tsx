import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ProfileScreen() {
  const user = {
    name: "Vinay Negi",
    location: "New Delhi, India",
    email: "vinay@example.com",
    subscription: {
      plan: "Premium Monthly",
      expiry: "Oct 30, 2025",
    },
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <LinearGradient
        colors={["#0f0c29", "#302b63", "#24243e"]}
        style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 28 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Title */}
          <Text className="text-4xl font-extrabold text-center text-white mb-10">
            Profile
          </Text>

          {/* Avatar */}
          <View className="items-center mb-8">
            <LinearGradient
              colors={["#ff49c0", "#7b5cff"]}
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#ff49c0",
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.5,
                shadowRadius: 16,
                elevation: 10,
              }}
            >
              <Text className="text-4xl font-extrabold text-white">
                {user.name[0]}
              </Text>
            </LinearGradient>
            <Text className="mt-4 text-lg text-gray-300 font-semibold">
              {user.name}
            </Text>
            <Text className="text-sm text-gray-400">{user.location}</Text>
          </View>

          {/* Personal Info */}
          <LinearGradient
            colors={["#1b1630", "#2a1f4d"]}
            style={{
              padding: 24,
              borderRadius: 28,
              marginBottom: 20,
              shadowColor: "#7b5cff",
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.3,
              shadowRadius: 14,
              elevation: 6,
            }}
          >
            <Text className="text-xl font-bold text-white mb-6">
              Personal Info
            </Text>
            <View style={{ gap: 18 }}>
              {/* Name */}
              <View className="flex-row items-center gap-3">
                <Ionicons name="person-circle" size={22} color="#7b5cff" />
                <TextInput
                  style={{
                    flex: 1,
                    backgroundColor: "#00000040",
                    color: "white",
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    borderRadius: 16,
                  }}
                  value={user.name}
                  editable={false}
                />
              </View>

              {/* Location */}
              <View className="flex-row items-center gap-3">
                <Ionicons name="location" size={22} color="#7b5cff" />
                <TextInput
                  style={{
                    flex: 1,
                    backgroundColor: "#00000040",
                    color: "white",
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    borderRadius: 16,
                  }}
                  value={user.location}
                  editable={false}
                />
              </View>

              {/* Email */}
              <View className="flex-row items-center gap-3">
                <Ionicons name="mail" size={22} color="#7b5cff" />
                <TextInput
                  style={{
                    flex: 1,
                    backgroundColor: "#00000040",
                    color: "white",
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    borderRadius: 16,
                  }}
                  value={user.email}
                  editable={false}
                />
              </View>
            </View>
          </LinearGradient>

          {/* Subscription */}
          <LinearGradient
            colors={["#1b1630", "#2a1f4d"]}
            style={{
              padding: 24,
              borderRadius: 28,
              marginBottom: 20,
              shadowColor: "#ff49c0",
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.35,
              shadowRadius: 14,
              elevation: 6,
            }}
          >
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-xl font-bold text-white">
                Subscription
              </Text>
              <LinearGradient
                colors={["#ff49c0", "#7b5cff"]}
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 6,
                  borderRadius: 14,
                }}
              >
                <Text className="text-white text-xs font-bold uppercase">
                  Premium
                </Text>
              </LinearGradient>
            </View>
            <Text className="text-gray-300 text-sm">
              Plan: {user.subscription.plan}
            </Text>
            <Text className="text-gray-300 text-sm mb-6">
              Expires: {user.subscription.expiry}
            </Text>

            <TouchableOpacity
              onPress={() => router.push("/(subscription)")}
              style={{
                backgroundColor: "#ff49c0",
                paddingVertical: 14,
                borderRadius: 20,
                alignItems: "center",
              }}
            >
              <Text className="text-white font-bold">
                Manage Subscription
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          {/* Actions */}
          <View style={{ gap: 16 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#7b5cff",
                paddingVertical: 16,
                borderRadius: 24,
                alignItems: "center",
              }}
            >
              <Text className="text-white font-bold text-lg">Log Out</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#ff3b30",
                paddingVertical: 16,
                borderRadius: 24,
                alignItems: "center",
              }}
            >
              <Text className="text-white font-bold text-lg">
                Delete Account
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: 40 }} />
          
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}
