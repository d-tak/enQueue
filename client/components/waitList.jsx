import React from 'react';
export default class WaitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patronETA: '',
      patronPartySize: '',
      patronFirstName: '',
      patronLastName: '',
      patronMobile: '',
      patronComments: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const action = 'patron-info';
    const request = { ...this.state, businessId: 1 };

    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    };
    fetch(`/api/${action}`, req)
      .then(res => res.json())
      .then(result => {
      });
  }

  render() {
    const { handleChange, handleSubmit } = this;

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="column-full">
              <div className="graphic">
                <div className="overlay">
                </div>
                {/* <div className="text"> */}
                  <h1 className="h1-title">filoKitchen oc</h1>
                  <p className="location">Irvine, CA</p> <br></br>
                  <p className="email">togetherisbetter@filoKitchen.eats</p>
                {/* </div> */}
              </div>
            </div>
          </div>

          <div className="row row-wrap">
            <div className="column-half">
              <p className="hours-header"> Operating Hours:</p>
              <p className="hours">
                Monday - Friday &nbsp;11:00 AM - 10:00 PM <br></br>
                Saturdays &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;11:00 AM - 11:00 PM <br></br>
                Sundays   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Closed <br></br>
              </p>
            </div>

            <div className="column-half">
            <h2>Join the Waitlist</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <h3 className="arrival">Enter your arrival time</h3>
              <label>
                <input required type="text" name="patronETA" className='patron-eta' onChange={handleChange} placeholder='Enter Time' />
              </label>
              <h3>Enter your party size</h3>
              <label>
                <input required type="text" name="patronPartySize" className='party-size' onChange={handleChange} placeholder='Enter Number in Party' />
              </label>
            </div>
            <div>
            <h3>Your Information</h3>
            <label>
              <p> First Name</p>
              <input required type="text" name="patronFirstName" className='' onChange={handleChange} placeholder='' />
            </label>
            <label>
              <p> Last Name</p>
              <input required type="text" name="patronLastName" className='' onChange={handleChange} placeholder='' />
            </label>
            <div>
              <label>
                <p> Mobile Number</p>
                <input required type="text" name="patronMobile" className='' onChange={handleChange} placeholder='' />
              </label>
            </div>
            <div>
              <label>
                <p> Comments / Remarks</p>
                <input required type="text" name="patronComments" className='patron-comments' onChange={handleChange} placeholder='' />
              </label>
              </div>
            <div className="center">
              <button className='confirm'>Confirm</button>
            </div>
          </div>
          </form>
        </div>
      </>
    );
  }
}
