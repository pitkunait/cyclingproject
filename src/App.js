import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import IndexPage from "./containers/IndexPage/IndexPage";
import Footer from "./components/Footer/Footer";
import Gallery from "./containers/Gallery/Gallery";
import Locations from "./containers/Locations/Locations";
import Riders from "./containers/Riders/Riders";
import Contest from "./containers/Contest/Contest";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <Switch>
                    <Route path="/gallery"><Gallery/></Route>
                    <Route path="/locations"><Locations/></Route>
                    <Route path="/riders"><Riders/></Route>
                    <Route path="/contest"><Contest/></Route>
                    <Route path="/"><IndexPage/></Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
