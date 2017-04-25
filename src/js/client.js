import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { HashRouter as Router, Route, Link, Switch, NavLink, Redirect } from 'react-router-dom'


import Layout from "./pages/Layout"
import Search from "./pages/Search"
import Contact from "./pages/Contact"
import Index from "./pages/Index"
import Home from "./pages/Home"

import store from "./store"



const app = document.getElementById('app')

ReactDOM.render(
<Provider store={store}>
  <Router>
    <div>
      <Redirect from="/" to="/home" />
      <Route path="/" component={Layout}/>
      <Route path="/home" component={Home}/>
      <Route path="/index" component={Index} />
      <Route path="/search" component={Search} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
</Provider>
, app);
