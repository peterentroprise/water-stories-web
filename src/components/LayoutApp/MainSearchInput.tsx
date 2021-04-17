import * as React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

type MainSearchInputProps = {};

export const MainSearchInput: React.FC<MainSearchInputProps> = () => {
  return (
    <InputGroup
      maxW="2xs"
      size="sm"
      variant="filled"
      display={{ base: "none", lg: "block" }}
    >
      <InputLeftElement pointerEvents="none">
        <BsSearch />
      </InputLeftElement>
      <Input placeholder="Search" rounded="md" />
    </InputGroup>
  );
};
