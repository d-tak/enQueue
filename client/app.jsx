import React from 'react';
import BusinessProfile from './components/business-profile';
import WaitList from './components/waitList';
import ViewBusinessProfile from './components/view-business-profile';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <BusinessProfile />;
    }
    if (route.path === 'waitList') {
      const businessId = route.params.get('businessId');
      return <WaitList businessId={businessId} />;
    }
    if (route.path === 'viewbusinessprofile') {
      const businessId = route.params.get('businessId');
      return <ViewBusinessProfile businessId={businessId} />;
    }
    return <null />;
  }

  render() {
    return (
      <>
        {this.renderPage()}
      </>
    );
  }
}
