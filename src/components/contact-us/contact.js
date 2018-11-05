import React from "react";

function Contact() {
  return (
    <div id="contactus">
      <div className="row">
        <div className="col-md-6">
          <h2>Collabrate With Us</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="col-md-6">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="Name">NAME</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="Name">SURNAME</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter SurName"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="Phone No">PHONE NU</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Ex. 9540703110"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="Phone No">EMAIL</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ex. shubh@abc.com"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="Name">EXPERIENCE</label>
                <select className="form-control" name="expierience" id="">
                  <option>--select--</option>
                  <option value="0">Very Good</option>
                  <option value="1">Good</option>
                  <option value="2">Poor</option>
                  <option value="3">Very Poor</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="Name">WHERE DID YOU HEAR ABOUT US?</label>
                <select className="form-control" name="expierience" id="">
                  <option>--select--</option>
                  <option value="0">Collegues</option>
                  <option value="1">Online</option>
                  <option value="2">Ads</option>
                  <option value="3">Yourself</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
