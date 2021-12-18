import Navheader from "./components/Naviagation/NavHeader";
import Layout from "./components/Layout/Layout";
import Aux from "./components/Auxiliary/Auxillary";
import classes from "./App.module.css";

function App() {
  return (
    <Aux>
      <div className={classes.Layout}>
        <Layout />
      </div>
    </Aux>
  );
}

export default App;
