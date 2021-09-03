import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import {Navbar, NavbarBrand} from 'reactstrap';
function App() {
	return (
		<div className="App">
			<Navbar color="dark" dark expand="md">
			<NavbarBrand to="/">Home</NavbarBrand>
			</Navbar>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				lägga till frontend: step-by-step 2
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div className="alert alert-success" role="alert">
					This is a success alert—check it out!
				</div>
				<Button size="sm" color="primary" href="/testing/helloWorld" >Test API</Button>
				<button className="btn btn-primary">Primary button</button>
				<button className="btn btn-secondary">Secondary</button>
			</header>
		</div>
	);
}
export default App