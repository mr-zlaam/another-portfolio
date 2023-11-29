import Portfolio from "./Components/Portfolio/Portfolio";
import Cursor from "./Components/Cursor/Cursor";
const App = () => {
  return (
    <>
      <Cursor />
      <div className="port-none">
        <Portfolio />
      </div>
    </>
  );
};

export default App;
