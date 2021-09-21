import Navbar from './featured/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // importing all router modules
// import all our pages
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Journal from './pages/Journal';
import AboutUs from './pages/AboutUs';
// import our Context Provider
import { ProjectProvider } from './store/Context';
function App() 
{
  return (
	<ProjectProvider>
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/men" component={Men} />
					<Route path="/women" component={Women} />
					<Route path="/journal" component={Journal} />
					<Route path="/aboutus" component={AboutUs} />
				</Switch>
			</div>
		</Router>
	</ProjectProvider>

  );
}

export default App;
