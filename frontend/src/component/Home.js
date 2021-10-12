import '../../node_modules/kth-style/dist/css/kth-bootstrap.css'
import '../style/Home.css';
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="HomePage">
            <div className="container">
                <h1>Welcome to KTH Live-in-lab data export</h1>
                <p>Through this website you can view a catalog over the data that is contained within the Live-in-lab Project as well as request a extraction of data to a file using the request form.</p>
                <p>To request a export of data to file you will have to be logged in with your KTH account.</p>
                <div className="btn-group-lg">
                    <Link to="/form" className="btn btn-primary next mr-1">Go to the request form</Link>
                    <Link to="/catalog" className="btn btn-primary next mr-1">Go to the data catalog</Link>
                </div>
                <a href="/about" className="link-to">For more information about this App please visit the About the app page</a>
            <div className="separator gray" />
            </div>
        </div>
    );
}
export default Home