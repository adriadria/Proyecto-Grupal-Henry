import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Help from "./components/Help/Help";
import Cart from "./components/Cart/Cart";
import './App.css';

function App() {
	return (
	<BrowserRouter>
    <div className="App">
    <Switch>
    <Route path='/' component = {Home}/>
    <Route path='/Shop' component = {Shop}/>
    <Route exact path='/Cart' component = {Cart}/>
    <Route exact path='/About' component = {About}/>
    <Route exact path= '/Help' component = {Help}/>
    </Switch>
      
    </div>
    </BrowserRouter>
	);
}

export default App;
