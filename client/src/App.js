import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home  from "./components/Home/Home";
import About from "./components/About/About";
import Shop  from "./components/Shop/Shop";
import Help  from "./components/Help/Help";
import Cart  from "./components/Cart/Cart";
import Detail   from './components/Detail/Detail';
import Error404 from './components/Error404/Error404';

import './App.css';

function App() {
	return (
	<BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path='/'           component = {Home}/>
    <Route exact path='/detail/:id' component = {Detail}/>
    <Route exact path='/shop'       component = {Shop}/>
    <Route exact path='/cart'       component = {Cart}/>
    <Route exact path='/about'      component = {About}/>
    <Route exact path= '/help'      component = {Help}/>
    <Route path= '*'                component = {Error404}/>
    </Switch>
      
    </div>
    </BrowserRouter>
	);
}

export default App;
