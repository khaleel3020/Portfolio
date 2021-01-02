import React, { useState } from "react";

const Contact = () => {
  const [item, setItem] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const formSubmit = (event) => {
    event.preventDefault();
   alert(`Hello ${item.fullname} ,this is your mail address ${item.email} and phone number" ${item.phone}. your message is "${item.message}"`)
  };

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setItem((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  return (
    <>
      <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  flex-column homecontentDiv"></div>
                <h1 className="contacth1">Contact Us</h1>
                <form onSubmit={formSubmit} className="contactForm">
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Enter your FullName
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullname"
                      value={item.fullname}
                      onChange={InputEvent}
                      placeholder="ex.bablu"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={item.email}
                      onChange={InputEvent}
                      placeholder="ex.khab@12.gmail.com"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Phone
                    </label>
                    <input
                      type="number"
                      name="phone"
                      value={item.phone}
                      onChange={InputEvent}
                      className="form-control"
                      placeholder="Mobile Number"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your detail with anyone else.
                    </div>
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      name="message"
                      value={item.message}
                      onChange={InputEvent}
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                    <label for="floatingTextarea">Message</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
