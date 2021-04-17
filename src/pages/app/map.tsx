import dynamic from "next/dynamic";

import LayoutApp from "../../components/LayoutApp";

const PageMap = dynamic(() => import("../../components/PageMap"), {
  ssr: false,
});

const Map = () => {
  return (
    <LayoutApp>
      <PageMap />
    </LayoutApp>
  );
};

export default Map;
