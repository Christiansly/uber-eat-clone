import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../assets/images/shopping.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/soft_drinks.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/fast_food.png"),
    text: "Fast Food",
  },
  {
    image: require("../assets/images/bakery.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/dessert.png"),
    text: "Dessert",
  },
];

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((i, index) => (
          <View key={index} style={{ marginRight: 30, alignItems: "center" }}>
            <Image
              source={i.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text>{i.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
