import { Flex, Heading, useColorMode } from "@chakra-ui/react";

import { useElementScrollPosition } from "../../hooks/useElementScrollPosition";
import { AccountButton } from "./AccountButton";
import { NavBreadcrumbs } from "./NavBreadcrumbs";
import { bgColor, textColor } from "./constants";

type AppBarProps = {
  pageName: string;
};

export const AppBar: React.FC<AppBarProps> = ({
  pageName = "Default Page Name",
}) => {
  const { colorMode } = useColorMode();
  const isScrolledTop = useElementScrollPosition() <= 240;

  return (
    <Flex
      position="sticky"
      top="0rem"
      height="3.5rem"
      w="full"
      p="1rem"
      pl={"calc(var(--sidebar-width) + 1rem)"}
      align="center"
      color={textColor[colorMode]}
      bg={isScrolledTop ? "none" : bgColor[colorMode]}
      sx={{
        transition: isScrolledTop ? "1s" : "1s",
        boxShadow: isScrolledTop
          ? "none"
          : "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: isScrolledTop ? "none" : "blur( 8px )",
        WebkitBackdropFilter: isScrolledTop ? "none" : "blur( 8px )",
      }}
      zIndex={1}
    >
      <Heading
        pr="1rem"
        position="absolute"
        display={["none", "block"]}
        m={"calc((var(--sidebar-width) - 1rem)*-1)"}
        size="md"
        fontWeight="extrabold"
        transition="0.5s"
      >
        Water Stories
      </Heading>
      {!isScrolledTop && <NavBreadcrumbs />}

      <Flex flexGrow={1} />
      <AccountButton />
    </Flex>
  );
};
