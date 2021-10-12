import "kth-style/dist/css/kth-bootstrap.css";
//import '../style/Home.css';
import { Link } from "react-router-dom";
import DataTable from "./DataTable";
function DataCatalog() {
    return (
        <div className="App">
            <div className="container">
                <main id="mainContent" className="mainContent">
                    <h1>About the data</h1>
                    <p>This app has been produced to help individual researchers export data from the KTH Live-in-lab project.</p>
                    <p>A KTH account is required to request a export of data and all data will be vetted before you gain access to the export.</p>
                    <br/>
                    <br/>
                    <h2>Available data</h2>
                    <DataTable />
                    <br/>
                    <br/>
                    <div className="btn-group-lg">
                        <Link to="/form" className="btn btn-primary next mr-1">Go to request form</Link>
                    </div>
                </main>
            </div>
            <div className="separator gray" />
        </div>
    );
}
export default DataCatalog