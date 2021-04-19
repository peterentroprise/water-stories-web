import { useColorMode, Switch, Box } from "@chakra-ui/react";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box p="1rem" pl={["1rem", "2rem"]}>
      <Switch
        colorScheme="blue"
        isChecked={isDark}
        onChange={toggleColorMode}
      />
    </Box>
  );
};

export default DarkModeSwitch;
