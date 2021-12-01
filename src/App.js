import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menubar from "./Pages/Home/Menubar/Menubar";

import Home from "./Pages/Home/Home/Home";
import AboutMe from "./Pages/Home/AboutMe/AboutMe";
import Blogss from "./Pages/Home/Blogss/Blogss";
import Contact from "./Pages/Home/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/home/about">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/home/blog">
            <Blogss></Blogss>
          </Route>
          <Route path="/home/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
