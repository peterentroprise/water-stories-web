import MapGraph from "./MapGraph";
import data from "../../data/mapNodes.json";

const PageMap = () => {
  return <MapGraph data={data} />;
};

export default PageMap;
