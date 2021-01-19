import React from "react"
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Volunteer from "../components/volunteer";
import Values from "../components/ourValues";
import Social from "../components/social"
import "../styles/style.css"
// import Social from "../components/social";
export default () => {
    return (
        <div className="site-wrapper">
            <header className="site-header">
                <div className="site-title">
                    <a to="/"></a>
                </div>
                <div className="footer-navigation">
                    {/* <Navigation /> */}

                </div>
            </header>
            <section>
                <Hero />
            </section>
            <section>
                <Volunteer />
            </section>
            {/* {children} */}
            <section>
                <Values />
            </section>
            <footer className="site-footer">
                {/* <div className="footer-nav">
                    <Navigation />
                </div> */}
                <div className="copy-right">
                    <p>&copy; {new Date().getFullYear()} R.K &bull;  <span role="img" aria-label="love">❤️</span> by <a href="https://w3layouts.com">Reyam</a></p>

                </div>
                <Social />



            </footer>
        </div>
    )
}