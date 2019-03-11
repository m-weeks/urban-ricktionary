import React, { Component } from 'react';
import app from '../firebase';
import appStyle from '../App.module.css';

class Words extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    }
  }

  componentDidMount() {
    var db = app.firestore();
    
    db.collection('words').where("approved", "==", true).get().then((querySnapshot) => {
      let words = []
      querySnapshot.forEach((doc) => {
        words.push(doc.data());
      })
      this.setState({ words: words })
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }

  render() {
    const { words } = this.state;
    return (
      <div>
        {words.map((word, index) => (
          <div key={index} className={appStyle.box}>
            <h2>{word.word}</h2>
            <p>{word.definition}</p>
            <p>{word.example}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Words;
