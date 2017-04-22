import React from "react"
import { Link } from "react-router-dom"


export default class Nav extends React.Component {
    render() {
        return <ul>
        <li><Link to="/index">Index</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    }
}