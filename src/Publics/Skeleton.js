import React from "react";
import { useRouteError } from "react-router-dom";
import "./skeleton.css";
import brand from "../asset/asset-07.svg";
import brandwhite from "../asset/logo-white-09.svg";

export function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-white rounded shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={brand}
              alt="Logo"
              width="70"
              className="d-inline-block align-text-top"
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <button className="btn btn-primary">Daftar/Masuk</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export function Footer() {
  console.log("patok@!");
  const tahun = new Date().getFullYear();
  return (
    <div className="container-fluid bg--papier__prime">
      <footer
        className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
        style={{ height: "10rem" }}
      >
        <div className="col-md-4">
          <span className="text-white d-inline-flex">Connect with us:</span>
          <ul className="nav justify-content-start list-unstyled d-flex">
            <li className="me-3">
              <button
                className="btn btn-primary rounded-circle"
                href="#"
                target="_blank"
              >
                <i className="bi bi-facebook"></i>
              </button>
            </li>
            <li className="me-3">
              <button
                className="btn btn-primary rounded-circle"
                href="#"
                target="_blank"
              >
                <i className="bi bi-twitter"></i>
              </button>
            </li>
            <li className="me-3">
              <button
                className="btn btn-primary rounded-circle"
                href="#"
                target="_blank"
              >
                <i className="bi bi-line"></i>
              </button>
            </li>
            <li className="me-3">
              <button
                className="btn btn-primary rounded-circle"
                href="#"
                target="_blank"
              >
                <i className="bi bi-instagram"></i>
              </button>
            </li>
            <li className="me-3">
              <button
                className="btn btn-primary rounded-circle"
                href="#"
                target="_blank"
              >
                <i className="bi bi-youtube"></i>
              </button>
            </li>
          </ul>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none ms-auto lh-1"
          >
            <img src={brandwhite} width="70" alt="brand oimage" />
          </a>
          <span
            className="mb-3 mb-md-0 text-white justify-content-end"
            style={{ fontSize: "0.7rem" }}
          >
            Copyright © {tahun}
            <br />
            PT. Papier Flieger &#40;Persero&#41; Tbk.
            <br />
            All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export function Notfound() {
  const error = useRouteError();
  return (
    <div className="container-fluid">
      <img src={brand} className="d-block mx-auto" alt="logo" />
      {error.statusText || error.message}
    </div>
  );
}
