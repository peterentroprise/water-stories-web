import { RootWrapper } from "./RootWrapper";

type CompLayoutAppProps = {
  pageName: string;
};

const CompLayoutApp: React.FC<CompLayoutAppProps> = ({
  children,
  pageName = "Default Page Name",
}) => {
  return <RootWrapper pageName={pageName}>{children}</RootWrapper>;
};

export default CompLayoutApp;
