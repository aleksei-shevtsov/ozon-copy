import React from "react";
import { Input, Icon, Stack, Box } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Search = () => {
  return (
    <Box style={{ backgroundColor: "#fff", borderRadius: 15 }} w="86%">
      <Input
        w={{
          base: "100%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<EvilIcons name="search" size={24} color="black" />}
            size={7}
            ml="2"
            color="rgb(82, 93, 111)"
          />
        }
        variant="unstyled"
        placeholder="Искать на OZON"
        placeholderTextColor="rgb(82, 93, 111)"
        InputRightElement={
          <Icon
            as={<FontAwesome name="barcode" size={24} color="black" />}
            size={5}
            ml="2"
            mr="3"
            color="rgb(82, 93, 111)"
          />
        }
      />
    </Box>
  );
};

export default Search;
