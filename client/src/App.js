import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Error404 from './components/Error404/Error404';

import './App.css';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="*" component={Error404} />
			</Switch>
		</div>
	);
}

export default App;
