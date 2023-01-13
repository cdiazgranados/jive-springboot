import React from "react";

export default function navbar() {
  return (
    //position: fixed
    <div style={{ width: "100%" }}>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Jive
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

          {/* <button className="btn btn-outline-light">Add User</button> */}
        </div>
      </nav>
    </div>
  );
}
