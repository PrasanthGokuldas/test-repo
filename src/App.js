import React, { Component, useEffect } from 'react'
import { Root, Routes } from 'react-static'
import { Router } from 'components/Router'
import 'bootstrap/dist/css/bootstrap.min.css';
import TagManager from 'react-gtm-module';

class App extends Component {
  componentDidMount() {
    TagManager.initialize({
      gtmId: 'GTM-T7FPMNs',
    });
  }
  render() {

    return (
      <Root>
        <React.Suspense fallback="Loading" >
          <div className="app-top-container">
            <div className="content app-container">
              <Router>
                <Routes path="*" />
              </Router>
            </div>
          </div>
        </React.Suspense>
      </Root>
    )
  }
}
export default App
