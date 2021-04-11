import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./common/Header/Header";
import Home from "./routes/Home/Home";

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

export default App;
