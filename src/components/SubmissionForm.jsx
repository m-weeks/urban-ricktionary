import React, { Component } from 'react';
import app from '../firebase';
import style from './SubmissionForm.module.css';
import appStyle from '../App.module.css'

class SubmissionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: '',
      definition: '',
      example: '',
      author: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  onSubmit(e) {
    e.preventDefault();

    const { setFlashMessage } = this.props;
    const { word, definition, example, author } = this.state;
    const db = app.firestore()


    if (word && definition && example) {
      db.collection('words').add({
        word: word,
        definition: definition,
        example: example,
        author: author
      })
      .then(() => {
        this.setState({
          word: '',
          definition: '',
          example: '',
          author: ''
        })
        setFlashMessage('Submission is pending approval.');
      })
      .catch((error) => {
        setFlashMessage('Submission could not be sent.');
        console.log(error);
      });
    }
  }

  render() {
    const { word, example, definition, author } = this.state;
    return (
      <div className={style.formWrapper}>
        <form onSubmit={this.onSubmit} className={`${appStyle.box} ${style.form}`}>
          <div className={style.field}>
            <label>Phrase</label>
            <input value={word} required name="word" placeholder="Rick-ism" onChange={this.onChange} />
          </div>

          <div className={style.field}>
            <label>Example</label>
            <textarea value={example} required name="example" placeholder="The meaning of your phrase" rows={5} onChange={this.onChange} />
          </div>

          <div className={style.field}>
            <label>Definition</label>
            <textarea value={definition} required name="definition" placeholder="An example of your phrase" rows={5} onChange={this.onChange} />
          </div>

          <div className={style.field}>
            <label>Author</label>
            <input value={author} name="author" onChange={this.onChange} />
          </div>

          <div className={`${style.field} ${style.submitWrapper}`}>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default SubmissionForm;
