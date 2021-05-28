
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contact from "./containers/Contact";
import Home from "./containers/Home";
import Portfolio from "./containers/Portfolio";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path='/home'>
                        <Home></Home>
                    </Route>
                    <Route path='/contact'>
                        <Contact></Contact>
                    </Route>
                    <Route path='/portfolio'>
                        <Portfolio></Portfolio>
                    </Route>
                    <Route path='/'>
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
