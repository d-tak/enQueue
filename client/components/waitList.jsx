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
      patronComments: '',
      isWaiting: true,
      business: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(`/api/business/${this.props.businessId}`)
      .then(response => response.json())
      .then(businessId => this.setState({ businessId, isWaiting: false }));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const businessIdprop = this.props.businessId;
    const request = { ...this.state, businessId: businessIdprop };

    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    };
    fetch('/api/patron-info', req)
      .then(res => res.json())
      .then(result => {
        window.location.hash = 'viewwaitlist?businessId=' + result.businessId;
      });
  }

  render() {
    if (!this.state.businessId) return null;
    const { businessName, businessLocation, businessEmail, businessHours } = this.state.businessId[0];
    const { handleChange, handleSubmit } = this;

    return (
      <>

        <div className="container">
          <div className="row">
            <div className="column-full">
              <div className="graphic">
                <div className="overlay">
                </div>
                  <h1 className="h1-title">{businessName}</h1>
                  <p className="location">{businessLocation}</p> <br></br>
                  <p className="email">{businessEmail}</p>
              </div>
            </div>
          </div>

          <div className="row row-wrap">
            <div className="column-half">
              <p className="hours-header"> Operating Hours:</p>
              <p className="hours">{businessHours}</p>
            </div>

            <div className="column-half">
              <h2 className="right">Waitlist</h2>
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
                <textarea required type="text" name="patronComments" className='patron-comments' onChange={handleChange} placeholder='' />
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
