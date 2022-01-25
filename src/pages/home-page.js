import React, { Component } from 'react';
import { Link } from 'components/Router';
import './sass/home-page.scss';

class MainPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <h1 className="mt-2 mb-2 line-right">Home Page</h1>
          <Link to="/about-us">Click here to navigate</Link>

          <div className="text-color">
          TEXT RED FOR HOME PAGE
        </div>
        </div>
      </div>
    );
  }
}
export default MainPage