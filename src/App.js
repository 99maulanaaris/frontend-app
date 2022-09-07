import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routers from "./config/Routers";
import { Provider, useSelector } from "react-redux";
import store from "./config/redux/store";
import { Loading } from "./components";

const MainApp = () => {
  const { isLoading } = useSelector((state) => state.globalReducer);
  return (
    <>
      <Routers />
      <div className="d-flex justify-content-center">
        {isLoading && <Loading />}
      </div>
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
