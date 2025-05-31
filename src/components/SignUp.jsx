import React from 'react';

const SignUp = () => {
    return (
      <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <form className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            <label className="label">Address</label>
            <input
              type="text"
              name="address"
              className="input"
              placeholder="Address"
            />
            <label className="label">Phone</label>
            <input
              type="text"
              name="phone"
              className="input"
              placeholder="Phone NUmber"
            />
            <label className="label">photo</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Sign up</button>
          </form>
        </div>
      </div>
    );
};

export default SignUp;