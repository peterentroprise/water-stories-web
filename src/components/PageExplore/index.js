import MapGraph from "./MapGraph";
import data from "../../data/mapNodes.json";

const PageExplore = () => {
  return <MapGraph data={data} />;
};

export default PageExplore;
