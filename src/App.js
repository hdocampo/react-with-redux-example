import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ImageContainer from './components/ImageContainer/imageContainer'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appExtraClass: false
    }

    this.handleClickOnImg = this.handleClickOnImg.bind(this);
    this.handleClassesAfterClick = this.handleClassesAfterClick.bind(this);
  }

  handleClickOnImg() {
    this.setState({ appExtraClass: true })
  }

  handleClassesAfterClick() {
    this.handleClickOnImg();
  }

  render() {
    const appContainerClasses = `App ${this.state.appExtraClass ? 'App-clicked' : ''}`;

    const imgConfig = {
      className: 'App-logo',
      alt: 'logo',
      src: logo
    }
    return (
      <div className={appContainerClasses}>
        <header className="App-header">
          <ImageContainer
            onClick={this.handleClassesAfterClick}
            {...imgConfig}
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
