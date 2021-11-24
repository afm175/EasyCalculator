import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { BsCalculator, BsFileEarmarkBinaryFill } from "react-icons/bs";
import { HiCurrencyDollar,HiHome } from "react-icons/hi";
import { FaInfoCircle } from "react-icons/fa";

import "./App.css";
import Currency from "./calculator/currency";
import Info from "./profile/info";
import BaseConvertor from "./calculator/BaseConverter"
import Calculator from "./calculator/calculator";
import ApiInfo from "./profile/apiInfo";
import Author from "./profile/author";
import Home from "./home";
function App() {
  return (
    <BrowserRouter>
      {/* <header>
        <p id="titleGroup">Kelompok 30</p>
      </header> */}
      <Switch>
      <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/currency">
          <Currency />
        </Route>
        <Route path="/base">
          <BaseConvertor />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/API">
          <ApiInfo />
        </Route>
        <Route path="/author">
          <Author />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <footer>
        <NavLink to="/calculator" className="iconWrapper">
          <BsCalculator className="icon" />
        </NavLink>
        <NavLink to="/currency" className="iconWrapper">
          <HiCurrencyDollar className="icon" />
        </NavLink>
        <NavLink to="/" className="iconWrapper">
          <HiHome className="icon" />
        </NavLink>
        <NavLink to="/base" className="iconWrapper">
          <BsFileEarmarkBinaryFill className="icon" />
        </NavLink>
        <NavLink to="/info" className="iconWrapper">
          <FaInfoCircle className="icon" />
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
