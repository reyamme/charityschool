import React from "react"
import { Link } from "gatsby"


const Social = class extends React.Component {
    render() {
        return (
            <div className="social-menu">
                <ul className="menu-footer">
                    <li><a>Facebook</a></li>
                    <li><a>Instagram</a></li>
                    <li><a>LinkedIn</a></li>
                    <li><a>R</a></li>
                </ul>

            </div>
        )
    }
}
export default Social;