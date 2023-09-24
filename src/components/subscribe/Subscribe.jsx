import React from "react";
import "./subscribe.scss";

function Subscribe() {
  return (
    <>
      <div className="container subscribe">
        <div className="row">
          <div className="col-lg-6">
            <h2>
              Sign up and get up to <span>20%</span> off your first purchase
            </h2>
            <p className="pb-4">
              Receive offers, product alerts, styling inspiration and more. By
              signing up, you agree to our Privacy Policy.
            </p>
          </div>
          <div className="col-lg-6 my-auto sub">
            <form className="form-sub d-flex">
              <input
                className="form-control"
                type="text"
                placeholder="Enter your email"
              />
              <input
                className="btn btn-subscribe"
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
