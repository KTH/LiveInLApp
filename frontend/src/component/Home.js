import logo from '../logo.svg';
import '../style/Home.css';
import { Button } from 'reactstrap';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Link } from "react-router-dom";
import Footer from "./Footer";
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
                <Link to="/form" className="btn btn-primary">Go to Form</Link>
                <Button size="sm" color="primary" href="/api/helloWorld" >Test API</Button>
                <button className="btn btn-primary">Primary button</button>
                <button className="btn btn-secondary">Secondary</button>
            </header>

            <Footer />
        </div>
    );
}
export default App