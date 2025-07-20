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
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-dark">
      <div class="container">
        <a class="navbar-brand me-2 p-0" href="/">
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

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <form class="d-flex align-items-center w-100 form-search">
            <div class="input-group">
              <ul class="dropdown-menu dropdown-menu-dark fa-ul">
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="fa-li pe-2">
                      <i class="fas fa-search"></i>
                    </span>
                    All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="fa-li pe-2">
                      <i class="fas fa-film"></i>
                    </span>
                    Titles
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="fa-li pe-2">
                      <i class="fas fa-tv"></i>
                    </span>
                    TV Episodes
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="fa-li pe-2">
                      <i class="fas fa-user-friends"></i>
                    </span>
                    Celebs
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="fa-li pe-2">
                      <i class="fas fa-building"></i>
                    </span>
                    Companies
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="fa-li pe-2">
                      <i class="fas fa-key"></i>
                    </span>
                    Keywords
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="fa-li pe-2">
                      <i class="fas fa-search-plus"></i>
                    </span>
                    Advanced search<i class="fas fa-chevron-right ps-2"></i>
                  </a>
                </li>
              </ul>
              <input
                type="search"
                class="form-control"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <a href="#!" class="text-white">
              <i class="fas fa-search ps-3"></i>
            </a>
          </form>

          <ul class="navbar-nav ms-3">
            <li class="nav-item me-3">
              <a class="nav-link d-flex align-items-center" href="#!">
                IMDbPro
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center me-3" href="#!">
                <i class="fas fa-bookmark pe-2"></i> Watchlist
              </a>
            </li>
            <li class="nav-item" style={{width: "65px"}}>
              <a class="nav-link d-flex align-items-center" href="/login">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
