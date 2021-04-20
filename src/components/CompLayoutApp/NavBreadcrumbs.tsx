import * as React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";

type NavBreadcrumbsProps = {};

export const NavBreadcrumbs: React.FC<NavBreadcrumbsProps> = () => {
  return (
    <Breadcrumb
      m={"calc((1rem)*-1)"}
      pr="1rem"
      fontSize="sm"
      separator={
        <Box as={HiChevronRight} fontSize="md" top=".1rem" pos="relative" />
      }
    >
      <BreadcrumbItem color="inherit">
        <BreadcrumbLink>Stories</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem color="inherit" isCurrentPage>
        <BreadcrumbLink>Hello Universe</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
