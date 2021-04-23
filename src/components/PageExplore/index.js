import { Heading } from "@chakra-ui/react";
import MapGraph from "./MapGraph";
import data from "../../data/mapNodes.json";

const PageExplore = ({ pageName }) => {
  return (
    <>
      <Heading px="1rem" pt="3rem" pb="2rem" size="3xl" fontWeight="extrabold">
        {pageName}
      </Heading>
      <MapGraph data={data} />
    </>
  );
};

export default PageExplore;
