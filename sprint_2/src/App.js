import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "./common/Header/Header";
import Home from "./routes/Home/Home";
import Upload from "./routes/Upload/Upload";

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
          <Route
            path="/upload"
            render={(routerProps) => <Upload {...routerProps} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
