import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      {/* <HeaderButton text="Delivery" />
      <HeaderButton text="Pickup"  /> */}
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingHorizontal: 16,
      paddingVertical: 6,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text style={{ fontSize: 15, fontWeight: "bold", color: props.activeTab === props.text ? "white" : "black" }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
