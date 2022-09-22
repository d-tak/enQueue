import React from 'react';
export default class ViewBusinessProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWaiting: true,
      business: null
    };
  }

  componentDidMount() {
    fetch(`/api/business/${this.props.businessId}`)
      .then(response => response.json())
      .then(businessId => this.setState({ businessId, isWaiting: false }));
  }

  render() {
    if (!this.state.businessId) return null;
    const { businessName, businessLocation, businessEmail, businessHours } = this.state.businessId[0];

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
              <h2>Join the Waitlist</h2>
            </div>
          </div>

            <div className="center">
              <a href="#" className='return'>Return</a>
            </div>
        </div>
      </>
    );
  }
}
