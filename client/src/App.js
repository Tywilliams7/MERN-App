import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Books} />
          <Route path="/books" exact component={Books} />
          <Route path="/books/:id" exact component={Detail} />
          <Route component={NoMatch} />
        </Switch>
        <Books />
      </div>
    </Router>
  );
}

export default App;
