import React from "react";

function Login() {
  return (
    <div className="wrapper">
      <div className="conatiner">
        <div className="d-flex justify-content-center">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body  p-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  Sign in
                </h5>
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememeberPassword"
                      placeholder="name@example.com"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="rememeberPassword"
                    >
                      Remember password
                    </label>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-login text-uppercase fw-bold">
                      Sign in
                    </button>
                  </div>
                  <hr />
                  <div className="d-grid bg-primary mb-2">
                    <button className="btn text-white btn-google btn-login text-uppercase fw-bold">
                      Sign in with google
                    </button>
                  </div>
                  <div className="d-grid bg-danger mb-2">
                    <button className="btn btn-google text-white btn-login text-uppercase fw-bold">
                      Sign in with facebook
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
