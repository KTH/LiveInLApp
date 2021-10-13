import '../../node_modules/kth-style/dist/css/kth-bootstrap.css'
import '../style/Home.css';
import { Link } from "react-router-dom";
function AboutApp() {
    return (
        <div className="AboutPage">
            <div className="container">
                <main id="mainContent" className="mainContent">
                <h1>About this app</h1>
                <a href="https://www.liveinlab.kth.se/en/om-kth-live-in-lab" target="https://www.liveinlab.kth.se/en/om-kth-live-in-lab" className="external-link">For information about the Live-in-lab project please follow this link</a>
                <p>This app has been produced to help individual researchers export data from the KTH Live-in-lab project. All the data has been collected within the KTH Live-in-lab project, more information about this can be found in the about page from the projects main webpage linked above.</p>
                <p>A KTH account is required to request a export of data and all data will be vetted before you gain access to the export.</p>
                <p>Use the form linked below to make a request.</p>
                <div className="btn-group-lg">
                    <Link to="/form" className="btn btn-primary next mr-1">Go to request form</Link>
                </div>

                <p>For more information about this app please contact KTH live-in-lab, more information is available in the above link.</p>
                </main>
            </div>
        </div>
    );
}
export default AboutApp