import PageText from "../../components/PageText";
import CompLayoutApp from "../../components/CompLayoutApp";

const App = () => {
  const pageName = "Hello Universe";
  return (
    <CompLayoutApp pageName={pageName}>
      <PageText pageName={pageName} />
    </CompLayoutApp>
  );
};

export default App;
