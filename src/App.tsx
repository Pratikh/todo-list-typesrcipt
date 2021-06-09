import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/reducer";
import { TodoHomePage } from "./components";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoHomePage />
      </div>
    </Provider>
  );
}

export default App;
