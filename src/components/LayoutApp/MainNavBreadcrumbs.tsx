import * as React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";

type MainNavBreadcrumbsProps = {};

export const MainNavBreadcrumbs: React.FC<MainNavBreadcrumbsProps> = () => {
  return (
    <Breadcrumb
      fontSize="sm"
      separator={
        <Box as={HiChevronRight} fontSize="md" top=".1rem" pos="relative" />
      }
    >
      <BreadcrumbItem color="inherit">
        <BreadcrumbLink>Stories</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem color="inherit" isCurrentPage>
        <BreadcrumbLink>Take Me There</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
