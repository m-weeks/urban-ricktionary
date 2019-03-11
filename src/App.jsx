import React, { Component } from 'react';
import Header from './components/Header';
import Words from './components/Words';
import SubmissionForm from './components/SubmissionForm';
import style from './App.module.css';
import Flash from './components/Flash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flashMessage: ''
    }

    this.setFlashMessage = this.setFlashMessage.bind(this);
  }

  setFlashMessage(message) {
    this.setState({flashMessage: message });
    setTimeout(() => {
      this.setState({flashMessage: '' });
    }, 3000);
  }

  render() {
    const { flashMessage } = this.state;
    return (
      <div className="App">
        <Header />
        <Flash message={flashMessage} />
        <div className={`${style.container} ${style.body}`}>
          <Words />
          <SubmissionForm setFlashMessage={this.setFlashMessage} />
        </div>
      </div>
    );
  }
}

export default App;
