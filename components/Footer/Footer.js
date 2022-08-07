import React from "react";
import { FlatList } from "react-native";
import { Box, View, HStack, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { menu } from "./menu";

const Footer = () => {
  const renderItem = ({ item, index }) => (
    <View
      key={`footer ${index}`}
      style={{
        alignSelf: "auto",
      }}
      mx="2%"
    >
      {index === 2 ? (
        <Box
          style={{
            position: "absolute",
            zIndex: 2,
            top: 0,
            right: 0,
            backgroundColor: "#4EBB62",
            borderRadius: 10,
            padding: 2,
            paddingRight: 5,
            paddingLeft: 5,
          }}
          _text={{
            color: "white",
            fontWeight: "bold",
            fontSize: 12,
          }}
        >
          10
        </Box>
      ) : null}
      <MaterialIcons
        name={item.icon}
        size={32}
        style={{ textAlign: "center" }}
        color={index === 0 ? "#4539FA" : "#525D6F"}
      />
      <Text color={index === 0 ? "#4539FA" : "#525D6F"}>{item.title}</Text>
    </View>
  );

  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 15,
        paddingTop: 5,
        borderColor: "B3B3B3",
        borderTopWidth: 1,
      }}
    >
      <HStack alignItems="center">
        <FlatList
          numColumns={5}
          data={menu}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </HStack>
    </View>
  );
};

export default Footer;
