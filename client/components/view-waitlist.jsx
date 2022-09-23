import React from 'react';
export default class ViewWaitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWaiting: true,
      business: null,
      waitList: null
    };
  }

  componentDidMount() {
    fetch(`/api/business/${this.props.businessId}`)
      .then(response => response.json())
      .then(businessId => {
        this.setState({ businessId, isWaiting: false });
      });
    fetch(`/api/business/${this.props.businessId}/patron-info`)
      .then(response => response.json())
      .then(patronWaitId => {
        this.setState({ patronWaitId, isWaiting: false });
      });
  }

  render() {
    if (!this.state.businessId) return null;
    const { businessName, businessLocation, businessEmail, businessHours } = this.state.businessId[0];
    if (!this.state.patronWaitId) return null;
    // const { patronFirstName, patronPartySize } = this.state.patronWaitId;
    // console.log(this.state.patronWaitId);
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

              <h2>WaitingFuze</h2>
            </div>
          </div>

          <div className="row center">
            <p className="subheader">Current Wait</p>
          </div>

          <div className="">
            {this.state.patronWaitId.map((patron, index) =>
              <li key = {index} className="patron-info"> {patron.patronFirstName} - {patron.patronPartySize}</li>)}
          </div>

          <div className="center">
            <a href={`#waitList?businessId=${this.props.businessId}`} className='return'>Return</a>
          </div>
        </div>
      </>
    );
  }
}
