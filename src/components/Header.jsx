import React, { Component } from 'react';
import style from './Header.module.css';
import appStyle from '../App.module.css';
import rick from '../assets/rick.jpg';

class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <div className={appStyle.container}>
          <h1 className={style.title}>Urban Ricktionary</h1>

          <img src={rick} alt="Rick" className={style.rick} />
        </div>
      </header>
    );
  }
}

export default Header;
