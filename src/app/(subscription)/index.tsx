import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

type SubscriptionPlan = {
  id: number;
  name: string;
  price: string;
  perks: string[];
  gradient: readonly [string, string];
  badge: { text: string; color: string };
};

const subscriptions: SubscriptionPlan[] = [
  {
    id: 2,
    name: "Standard",
    price: "₹999/month",
    perks: ["All Basic perks", "Priority booking", "Exclusive events"],
    gradient: ["#ff758c", "#ff7eb3"],
    badge: { text: "Most Popular", color: "#ffb347" },
  },
  {
    id: 3,
    name: "Premium",
    price: "₹1999/month",
    perks: ["All Standard perks", "VIP access", "1-on-1 support"],
    gradient: ["#43cea2", "#185a9d"],
    badge: { text: "Premium Choice", color: "#43cea2" },
  },
];

const SubscriptionScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#0f0c29]">
      {/* Background Gradient */}
      <LinearGradient
        colors={["#0f0c29", "#302b63", "#24243e"]}
        className="absolute inset-0"
      />

      {/* Header */}
      <View className="flex-row items-center px-4 py-3">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text className="ml-3 text-2xl font-bold text-white">
          Subscriptions
        </Text>
      </View>

      <ScrollView contentContainerClassName="px-4 pb-10">
        {subscriptions.map((plan, idx) => (
          <View
            key={plan.id}
            className={`relative mb-8 rounded-3xl bg-[#1c1c1c] p-6 overflow-hidden ${
              idx === 0 ? "mt-6" : ""
            }`}
            style={{
              shadowColor: plan.badge.color,
              shadowOpacity: 0.6,
              shadowOffset: { width: 0, height: 8 },
              shadowRadius: 15,
              elevation: 12,
            }}
          >
            {/* Gradient background */}
            <LinearGradient
              colors={plan.gradient}
              start={[0, 0]}
              end={[1, 1]}
              className="absolute inset-0 opacity-25"
            />

            {/* Badge */}
            <View
              className="absolute top-4 right-4 rounded-xl px-3 py-1 z-10"
              style={{ backgroundColor: plan.badge.color }}
            >
              <Text className="text-xs font-bold text-white">
                {plan.badge.text}
              </Text>
            </View>

            {/* Content */}
            <View className="space-y-2">
              <Text className="text-3xl font-extrabold text-white">
                {plan.name}
              </Text>
              <Text className="text-xl font-semibold text-gray-200">
                {plan.price}
              </Text>

              {/* Divider line */}
              <View className="h-[1px] bg-gray-700 my-3" />

              {/* Perks */}
              <View className="space-y-2">
                {plan.perks.map((perk, idx) => (
                  <Text key={idx} className="text-base text-gray-300">
                    • {perk}
                  </Text>
                ))}
              </View>
            </View>

            {/* Subscribe Button */}
            <TouchableOpacity
              className="mt-6 rounded-full py-4"
              style={{
                backgroundColor: plan.badge.color,
                shadowColor: plan.badge.color,
                shadowOpacity: 0.5,
                shadowOffset: { width: 0, height: 6 },
                shadowRadius: 10,
              }}
            >
              <Text className="text-center text-lg font-bold text-black">
                Subscribe 🚀
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubscriptionScreen;
