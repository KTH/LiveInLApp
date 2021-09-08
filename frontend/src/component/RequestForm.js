import '../style/RequestForm.css';
import { Button } from 'reactstrap';
import {Navbar, NavbarBrand} from 'reactstrap';
const RequestForm = () => (
        <div className="RequestForm">
            <Navbar color="dark" dark expand="md">
                <NavbarBrand to="/">Home</NavbarBrand>
            </Navbar>
            <header className="App-header">
                <p>
                    RequestForm
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
                <Button size="sm" color="primary" href="/testing/helloWorld" >Test API</Button>
                <button className="btn btn-primary">Primary button</button>
                <button className="btn btn-secondary">Secondary</button>
            </header>
        </div>
    )
export default RequestForm