import React from 'react';
export default class BusinessProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessLocation: '',
      businessEmail: '',
      businessHours: '',
      businessName: '',
      hashedPassword: ''
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

    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch('/api/business', req)
      .then(res => res.json())
      .then(result => {
        window.location.hash = 'viewbusinessprofile?businessId=' + result.businessId;
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
                <h1 className="h1-title">WaitingFuze</h1>
                <p className="location">Business Profile</p> <br></br>
                <p className="email"></p>
              </div>
            </div>
          </div>

          <div className="row row-wrap">
            <div className="column-half">
            </div>
            <div className="column-half">
              <h2>Join the Waitlist</h2>
            </div>
          </div>
        </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Location</label>
        </div>
          <input required type="text" name="businessLocation" className="" onChange={handleChange} placeholder='City, State' />

        <div>
          <label>Enter E-Mail Address</label>
        </div>
          <input required type="text" name="businessEmail" className="" onChange={handleChange} placeholder='abc123@gmail.com' />

        <div>
          <label>Enter Hours of Operation</label>
        </div>
          <input required type="text" name="businessHours" className='business-hours' onChange={handleChange} placeholder='' />

        <h3>Your Information</h3>
        <label>
          <p> Business Name</p>
            <input required type="text" name="businessName" className='business-name' onChange={handleChange} placeholder='' />
        </label>
        <div>
          <label>
            <p> Create Password</p>
              <input required type="password" name="hashedPassword" className='' onChange={handleChange} placeholder='' />
          </label>
        </div>
        <div className="center">
            <button className='confirm'>Confirm</button>
        </div>

      </form>
    </>
    );
  }
}
