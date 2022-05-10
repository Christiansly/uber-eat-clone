import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import React, { useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItem, {
  localRestaurants,
} from "../components/RestaurantItems";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
        <RestaurantItem restaurantData={restaurantData} />
        <RestaurantItem restaurantData={restaurantData} />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
