import '../../node_modules/kth-style/dist/css/kth-bootstrap.css'
import '../style/Home.css';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
function AboutPage() {
    return (
        <div className="App">
            <div className="container">
                <main id="mainContent" className="mainContent">
                    <h1>About this app</h1>
                    <p>This app has been produced to help individual researchers export data from the KTH Live-in-lab project.</p>
                    <p>A KTH account is required to request a export of data and all data will be vetted before you gain access to the export.</p>
                    <div className="btn-group-lg">
                        <Link to="/form" className="btn btn-primary next mr-1">Go to request form</Link>
                    </div>
                </main>
            </div>
            <div className="separator gray" />
        </div>
    );
}
export default AboutPage