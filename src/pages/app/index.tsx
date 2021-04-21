import PageApp from "../../components/PageApp";
import CompLayoutApp from "../../components/CompLayoutApp";

const App = () => {
  return (
    <CompLayoutApp pageName="Hello Universe">
      <PageApp />
    </CompLayoutApp>
  );
};

export default App;
