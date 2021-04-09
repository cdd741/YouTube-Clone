import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/video/:id"
            render={(routerProps) => <Home {...routerProps} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export const url = "https://project-2-api.herokuapp.com";
export const api_key = "?api_key=ba88a64d-5269-47da-aa69-dac14769135d";
export default App;
