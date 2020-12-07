import React from "react";

import "./register.css";
import LOGO from "./img/logo.png";

export default function RegisterComponent() {
  return (
    <div className="RegisterBody">
      <div className="row">
        <div className="col-md-6 d-none d-lg-block RegisterTitle">
          <img src={LOGO} style={{ width: "300px", padding: "0px" }} />
          <h1>Hexagon Acadamy</h1>
          <p>
            We are a leading non-state degree awarding institute approved by the
            University Grants Commission (UGC) under the Universities Act. We
            are also members of the Association of Commonwealth Universities
            (ACU), as well as the International Association of Universities
            (IAU), and the first Sri Lankan institute to be accredited by the
            Institution of Engineering & Technology, UK.
          </p>
        </div>

        <div className="col-md-6 col-lg-6 col-sm-12 RegisterForm">
          <h3 className="text-center">JOIN WITH US</h3>

          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Student ID</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Student ID"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">NIC</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Enter NIC"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm Password"
              />
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn btn-outline-primary loginButon">SIGN IN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
