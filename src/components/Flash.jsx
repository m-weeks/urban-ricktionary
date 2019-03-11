import React, { Component } from 'react';
import style from './Flash.module.css';
import appStyle from '../App.module.css';

class Flash extends Component {
  render() {
    const { message } = this.props;
    if(!message) {
      return null;
    }

    return (
      <div className={`${style.flash} ${appStyle.container}`}>
        {message}
      </div>
    );
  }
}

export default Flash;
