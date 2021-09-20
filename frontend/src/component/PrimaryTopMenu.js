import "kth-style/dist/css/kth-bootstrap.css";
import "kth-style/public/js/menus.js";

const PrimaryTopMenu = () => (
    <div className="PrimaryTopmenu">
        <div className="container-fluid">
            <div className="container">
                <nav
                    aria-label="Primary top menu"
                    className="block megaMenu navbar navbar-expand-lg navbar-light"
                    data-cid="1.1064540"
                    lang="sv-SE"
                >
                    <span id="propertiesMegaMenu"></span>
                    <div className="collapse navbar-collapse" id="megaMenuContent">
                        <ul className="menu navbar-nav mr-auto" id="megaMenu">
                            <li
                                className="item nav-item megaItem homeItem"
                                data-content-id="1.1064617"
                                data-id="menu-group-1-1064540-759229842"
                            >
                                <div className="headerItem showLabel">
                                    <a className="nav-link" href="/">
                                        KTH Live-In Labs
                                    </a>
                                </div>
                            </li>
                            <li
                                className="item nav-item megaItem"
                                data-content-id="1.1064608"
                                data-id="menu-group-1-1064540-823766152"
                            >
                                <div className="headerItem">
                                    <a className="nav-link" href="/form">
                                        {" "}
                                        Request data
                                    </a>
                                </div>
                            </li>
                            <li
                                className="item nav-item megaItem"
                                data-content-id="1.1064550"
                                data-id="menu-group-1-1064540-850826453"
                            >
                                <div className="headerItem">
                                    <a className="nav-link" href="/about-data">
                                        {" "}
                                        About the data
                                    </a>
                                </div>
                            </li>
                            <li className="item nav-item megaItem" data-content-id="1.1064542">
                                <div className="headerItem">
                                    <a className="nav-link" href="/">
                                        {" "}
                                        About Live-in Labs
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <div id="gradientBorder"></div>
    </div>
)
export default PrimaryTopMenu
