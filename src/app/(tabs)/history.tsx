import React from "react";
import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookedEvents() {
  const booked = [
    {
      id: 1,
      name: "Coffee Dinner",
      date: "Sep 25, 7 PM",
      location: "Downtown Café",
    },
    {
      id: 2,
      name: "Italian Dinner",
      date: "Sep 28, 8 PM",
      location: "Little Italy",
    },
    {
      id: 3,
      name: "Cocktail Mixer",
      date: "Oct 2, 9 PM",
      location: "Sky Lounge",
    },
  ];

  return (
    <LinearGradient
      colors={["#0f0c29", "#302b63", "#24243e"]}
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        {/* Header */}
        <Text className="text-5xl font-extrabold text-center text-white mt-6 mb-10 tracking-wide">
          My <Text className="text-pink-400">Bookings</Text>
        </Text>

        <ScrollView contentContainerClassName="px-4 pb-12">
          {booked.map((event) => (
            <View
              key={event.id}
              className="relative mb-10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <LinearGradient
                colors={["#3e1f92", "#6e2fa6", "#b537a0"]}
                start={[0, 0]}
                end={[1, 1]}
                className="p-10 items-center justify-center"
              >


                {/* Event Title */}
                <Text className="text-4xl font-extrabold text-white mb-4 text-center tracking-tight">
                  {event.name}
                </Text>

                {/* Event Details */}
                <View className="space-y-3">
                  <Text className="text-lg text-gray-200 font-semibold text-center">
                    📅 <Text className="text-pink-300">{event.date}</Text>
                  </Text>
                  <Text className="text-lg text-gray-200 font-semibold text-center">
                    📍 <Text className="text-pink-300">{event.location}</Text>
                  </Text>
                </View>
              </LinearGradient>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
