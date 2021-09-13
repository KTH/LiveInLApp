import kthlogo from "kth-style/public/img/kth-style/KTH_Logotyp_RGB_2013-2.svg";
import "kth-style/dist/css/kth-bootstrap.css";
import "kth-style/public/js/menus.js";

const Header = () => (
    <div className="Header">
        <header>
            <div className="container-fluid">
                <div className="container">
                    <div className="header-container__top">
                        <figure
                            className="block figure defaultTheme mainLogo"
                            data-cid="1.77257"
                            lang="en-GB"
                        >
                            <a href="/">
                                <img
                                    className="figure-img img-fluid"
                                    src={kthlogo}
                                    alt="To KTH startpage"
                                    height="70"
                                    width="70"
                                />
                            </a>
                        </figure>

                        <h1 className="block siteName" data-cid="1.1099341">
                            <a href="/">KTH Live-In Labs</a>
                        </h1>

                        <div
                            className="block list links secondaryMenu"
                            data-cid="1.1099340"
                            lang="en-GB"
                        ></div>

                        <div id="mobileMenuWrapper">
                            <button
                                id="nav-icon"
                                className="navbar-toggler nav-icon"
                                type="button"
                                title="Open/close the mobile menu"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <nav
                                id="mobileMenu"
                                aria-label="Mobile menu"
                                className="block navbar navbar-expand-lg navbar-light"
                            >
                                <div id="mobileMenuContent" className="navbar-collapse collapse">
                                    <ul
                                        id="mobileMenuList"
                                        className="menu navbar-nav mr-auto"
                                    ></ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="header-container__bottom">
                        <div
                            className="block separator space"
                            data-cid="1.1099338"
                            lang="en-GB"
                        ></div>
                    </div>
                </div>
            </div>
        </header>
    </div>
)
export default Header