import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/homeImg.jpg';

const Home = () => {
  return (
    <>
      <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto ">
            <div className='row'>
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  flex-column homecontentDiv">
                <h1 className='homeh1'>
                  Khaleelullah <strong>(B.E-CSE)</strong>
                </h1>
                <h2 className="my-3 homeh2">Frontend and Backend developer </h2>
                <div className="mt-3">
                  <NavLink to="/contact" className="btn-get-started">
                    Get in touch
                  </NavLink>
                </div>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img src={web} className='img-fluid animated homeImg' alt='Home Image'/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
