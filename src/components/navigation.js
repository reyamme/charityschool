import React from "react"
import { Link } from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation">
    <Link to="/contact">Home</Link>
    <Link to="/studentform">Join us</Link>
    <Link to="/contact">About us</Link>
    <Link to="/contact">Contact</Link>
    {/* <Link to="/contact">Contact</Link> */}
    <ThemeChanger />
  </nav>

)