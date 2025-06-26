export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-md-mid">
      <div className="container d-flex justify-content-center">
        <a className="navbar-brand" href="/">
          <img
            alt=""
            src="icons8-dumbbell-50.png"
            width="45"
            height="45"
            className="d-inline-block align-top"
          />{" "}
          Fit Connect
        </a>
        <ul className="navbar-nav ms-md-auto fw-bold flex-row gap-2 align-items-center mb-0">
          <li className="nav-item">
            <a className="nav-link text-dark" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="/sponsors">Sponsors</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="/contact">Contact</a>
          </li>
          <li className="nav-item">
            <a href="#">
              <i className="text-dark fa-solid fa-search fs-5 px-2"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="/account">
              <i className="text-dark fa-solid fa-circle-user fs-4 px-2"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
