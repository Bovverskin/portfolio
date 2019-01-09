import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"
import Projects from "./Projects"
import About from "./About"
import {Helmet} from 'react-helmet';
import './css/tailwind.css';


const App = () => {
    return (
        <div className="page-wrapper">
        <img src="./src/images/programmerFound.png" id="bg" alt=""></img>
            <div className="page-content">
                <Header />
                <div className="content-wrapper">
                <Helmet>
                    <style>{'body { background-color: #20504f; }'}</style>
                </Helmet>
                    <Switch>
                        <Route exact path='/' component={Hello}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/projects' component={Projects}></Route>
                        <Route exact path='/' component={Hello}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/projects' component={Projects}></Route>
                    </Switch>
                </div>
                <Footer />
            </div >
        </div >
    )

};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));