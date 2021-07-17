import React from 'react';

import { Link } from "react-router-dom";

export const ContactUs = () => {
  return (
    <>
      <div className="alert bg-success text-white" role="alert">
        <h4 className="alert-heading text-center">About Us</h4>
        <br />
        <p className="text-center">
          this is an exam portal in which one can take exams , post exams.
        </p>

        <p className="text-center">Dont wait start our objective exam today</p>
      </div>

      <div className="d-flex justify-content-center">
        <Link to="/">
          <button className="btn-center btn-sm  btn-light ">
            BAck to home ↩️
          </button>
        </Link>
      </div>
    </>
  );
};


