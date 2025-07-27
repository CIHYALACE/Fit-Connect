import { useEffect, useState } from "react";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const handleRouteChange = () => {
      setActiveLink(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  const isActive = (path) => (activeLink === path ? "active" : "");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-dark">
      <div className="container">
        <a className="navbar-brand me-2 p-0" href="/">
          <img
            id="MDB-logo"
            src="/Logo3.png"
            alt="FinConect Logo"
            draggable="false"
            width="150"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <form className="d-flex align-items-center w-100 form-search">
            <div className="input-group">
              <ul className="dropdown-menu dropdown-menu-dark fa-ul">
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="fa-li pe-2">
                      <i className="fas fa-search"></i>
                    </span>
                    All
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="fa-li pe-2">
                      <i className="fas fa-film"></i>
                    </span>
                    Titles
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="fa-li pe-2">
                      <i className="fas fa-tv"></i>
                    </span>
                    TV Episodes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="fa-li pe-2">
                      <i className="fas fa-user-friends"></i>
                    </span>
                    Celebs
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="fa-li pe-2">
                      <i className="fas fa-building"></i>
                    </span>
                    Companies
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="fa-li pe-2">
                      <i className="fas fa-key"></i>
                    </span>
                    Keywords
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="fa-li pe-2">
                      <i className="fas fa-search-plus"></i>
                    </span>
                    Advanced search<i className="fas fa-chevron-right ps-2"></i>
                  </a>
                </li>
              </ul>
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <a href="#!" className="text-white">
              <i className="fas fa-search ps-3"></i>
            </a>
          </form>

          <ul className="navbar-nav ms-3">
            <li className="nav-item me-3">
              <a className="nav-link d-flex align-items-center" href="#!">
                IMDbPro
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center me-3" href="#!">
                <i className="fas fa-bookmark pe-2"></i> Watchlist
              </a>
            </li>
            <li className="nav-item" style={{width: "65px"}}>
              <a className="nav-link d-flex align-items-center" href="/login">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
