import { RootWrapper } from "./RootWrapper";

type LayoutAppProps = {
  pageName: string;
};

const LayoutApp: React.FC<LayoutAppProps> = ({
  children,
  pageName = "Water Stories",
}) => {
  return <RootWrapper pageName={pageName}>{children}</RootWrapper>;
};

export default LayoutApp;
