import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Title from './components/Title';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import TVShows from "./components/TvShows";
import React from "react";
import Actor from "./components/Actor";

function App() {

    const [title, setTitle] = React.useState('');
    const [actor, setActor] = React.useState('');

    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/top250"} exact component={() => <Movies handleClick={setTitle}/>}/>
                    <Route path={"/tvshows"} component={TVShows}/>
                    <Route path={"/movies/:id"} component={() => <Title item={title} handleClick={setActor}/>}/>
                    <Route path={"/actor/:id"} component={() => <Actor item={actor}/>}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
