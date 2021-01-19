import React from "react"
import Joinus from "../joinus"
import { BrowserRouter as Router, Link, NavLink, Switch, Route } from 'react-router-dom';
// import Form from "./Form";
import Layout from "./layout";
import Form from "./Form";
// import Home from "./home"


function Nav() {
    return (



    
            <Router>
            <div className="navigation">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/joinus">Join us</Link></li>
                        <li><Link to="/contact">About us</Link></li>
                        <li> <Link to="/contact">Contact</Link></li>
                    </ul>

                </nav>



                <Switch>
                    <Route exact path="/">
                        <Layout />
                    </Route>

                    <Route exact path="/joisus">
                        <Joinus />
                    </Route>
                </Switch>
            </div>
            </Router>
    
    )
}
export default Nav;