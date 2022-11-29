import "./App.css";
import MainScreen from "./components/MainScreen";
import Toolbar from "./components/Toolbar";

const App = () => {
  return (
    <>
      <div className="main">
        <div className="left">
          <Toolbar />
        </div>
        <div className="right">
          <MainScreen />
        </div>
      </div>
    </>
  );
};
export default App;
