import logo from '../logo.svg';
import '../style/Home.css';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <div className="container">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="alert alert-success" role="alert">
                        This is a success alert—check it out!
                    </div>
                    <Link to="/form" className="btn btn-primary">Go to Form</Link>
                    <Button size="sm" color="primary" href="/api/helloWorld" >Test API</Button>
                    <button className="btn btn-primary">Primary button</button>
                    <button className="btn btn-secondary">Secondary</button>
                </header>
            </div>
        </div>
    );
}
export default App