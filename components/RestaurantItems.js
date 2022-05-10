import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url: "https://www.thebalancesmb.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
        categories: ['Cafe', 'Bar'],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url: "https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg",
        categories: ['Cafe', 'Bar'],
        price: "$$",
        reviews: 1244,
        rating: 3.5,
    },
    
]

const RestaurantItem = (props) => {
  return (
      props.restaurantData.map((r, index) => (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
        <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
          <RestaurantImage image={r.image_url} />
          <RestaurantInfo name={r.name} rating={r.rating} reviews={r.reviews}/>
        </View>
      </TouchableOpacity>
  ))
    
  );
};

export default RestaurantItem;

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>
        {props.name}
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 * min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
      }}
    >
      <Text style={{ color: "black" }}>{props.rating}</Text>
    </View>
  </View>
);
