import { useDispatch } from "react-redux";
import "./App.css";
import Data from "./components/Data";
import { GET_PRODUCT_PANDING } from "./redux_saga/admin/action/action";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_PRODUCT_PANDING,
    });
  }, []);

  return (
    <div className="App">
      <Data />
    </div>
  );
}

export default App;
