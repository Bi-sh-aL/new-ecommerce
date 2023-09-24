import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <>
      <div className="bg-body-tertiary text-center py-5 info">
        <p>NEED HELP?</p>
        <h2>Haven't found what you're looking for?</h2>
        <h2>Contact Us</h2>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58271.645863430815!2d-81.41416640085517!3d35.587436789617215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856d2948d052daf%3A0xe3fa19c20612b365!2sNC-10%20Hwy%2C%20North%20Carolina%2C%20USA!5e0!3m2!1sen!2snp!4v1695563986197!5m2!1sen!2snp" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />


      <div className="container py-5 contact">
        <div className="row">
          <div className="col-lg-5">
            <div>
              <h3>Address</h3>
              <p>8425 Melrose Ave, Los Angeles, CA 90069</p>
            </div>
            <div className="my-5">
              <h3>Contact</h3>
              <p>Phone. +1 970 429 4170</p>
              <p>Email. hello@uxper.co</p>
            </div>
            <div className="pb-5">
              <h3>Hour of Operation</h3>
              <p>Mon - Fri: 08:30 - 20:00</p>
              <p>Sat & Sun: 09:30 - 21:30</p>
            </div>
          </div>
          <div className="col-lg-7">
            <h3>Get in Touch</h3>
            <p className="pb-3">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form action="">
              <div className="row gy-3">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name *"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email *"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Website"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Contents"
                      rows={6}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="text-center mt-10">
                    <button className="btn btn-dark">Post Comment</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
