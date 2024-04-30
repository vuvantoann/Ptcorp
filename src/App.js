import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import {createBrowserHistory} from 'history'
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Marketing from "./pages/Marketing/Marketing";
import Success from "./pages/Success/Success";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";

export const history = createBrowserHistory()
function App() {
  return (
    <Router history ={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/service" exact component={Service} />
        <Route path="/product" exact component={Product} />
        <Route path="/about" exact component={About} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/marketing" exact component={Marketing} />
        <Route path="/succcess" exact component={Success} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
