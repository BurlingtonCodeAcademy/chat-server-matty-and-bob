import React from 'react';
import ReactDOM from 'react-dom';

class ChatMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    this.getMessages()
  }

  getMessages = () => {
    fetch('/main')
    .then((response) => {
      console.log('the response is: ' + response.json());
      return response.json()})
    .then(room => room.messages.stringify())
    .then(messages => this.setState({messages}))
  }

  displayMessages = () => {
    let messages = this.messages
    for (let message of messages){
      return(`${message.name || 'anonymous'}: ${message.body || 'oops! Nothing here'}`)
    }
  }

  render() {
    return(
      <div>
        <div id='main-messages'>
          {this.displayMessages()}
        </div>
    <form method="POST">
      <input type="text" name="name" placeholder="user name"></input>
      <input type="text" name="body"></input>
      <input type="submit" value="SUBMIT"></input>
    </form>
    </div>
    )}
}

const container = document.getElementById('root');
ReactDOM.render(<ChatMain />, container)