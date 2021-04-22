import * as React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";

import Link from "../CompLink";

type NavBreadcrumbsProps = {
  pageName: string;
};

export const NavBreadcrumbs: React.FC<NavBreadcrumbsProps> = ({ pageName }) => {
  return (
    <Breadcrumb
      m={"calc((1rem)*-1)"}
      // ml={[
      //   "calc((1rem)*-1)",
      //   "calc((1rem)*-1)",
      //   "calc((var(--sidebar-width) - 1rem)*-1)",
      // ]}
      pr="1rem"
      fontSize="sm"
      separator={
        <Box as={HiChevronRight} fontSize="md" top=".1rem" pos="relative" />
      }
    >
      {/* <BreadcrumbItem color="inherit">
        <BreadcrumbLink as={Link} href="/app/stories">
          Stories
        </BreadcrumbLink>
      </BreadcrumbItem> */}
      <BreadcrumbItem fontWeight="bold" fontFamily="Canela" isCurrentPage>
        <BreadcrumbLink as={Link} href="#">
          {pageName}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
