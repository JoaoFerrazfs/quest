import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar custom-navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/img/brand/QuestForm.png"
            className="rounded"
            alt="Logo"
            width="50"
            height="50"
          />
        </a>

        <div className="">
          <ul className="navbar-nav">
            <li className=" dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                João Pedro
              </a>
              <ul
                className="dropdown-menu dropdown-menu-left"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Perfil
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sair
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
