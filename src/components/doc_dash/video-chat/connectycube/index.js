import React, { Component } from 'react';
import ConnectyCube from 'connectycube';

const config = [
  {
    appId: 19,
    authKey: 'JHjjDn53msUDzX3',
    authSecret: 'AAnMKH7N3b4xX79'
  },
  {
    debug: {
      mode: 1
    }
  }
];

const user = {
  id: 38120,
  login: "lemma",
  password: "youaintguessmypwd"
};

class ConnectyCubeVideo extends Component {
  state = {
    session: null,
    isConnectedToChat: false
  }

  componentWillMount() {
    ConnectyCube.init(...config);
    
    ConnectyCube.createSession(user, (error, session) => {
      if (session && !error) {
        this.setState({ session: session });
      } else {
        this.setState({ session: null });
      }
    });
  }

  componentWillUpdate(nextProps, nextState) {
    const { isConnectedToChat } = this.state;

    if (nextState.session && nextState.session.user && !isConnectedToChat) {
      ConnectyCube.chat.connect({
        userId: user.id,
        password: user.password
      }, (error, contacts) => {
        if (contacts && !error) {
          this.setState({ isConnectedToChat: true });
        } else {
          this.setState({ isConnectedToChat: false });
        }
      });
    }
  }

  render() {
    const {
      session,
      isConnectedToChat
    } = this.state;

    return (
      <div>
        <header>
          <p>
            <u>Create session</u>: { session ? 'SUCCESS' : 'FAIL' },
            <br/>
            <u>Session token</u>: { session ? session.token : '?' },
            <br/>
            <u>User ID</u>: { session && session.user ? session.user.id : '?' }
            <br/>
            <u>User login</u>: { session && session.user ? session.user.login : '?' }
          </p>
          <p>
            <u>ConnectyCube chat state</u>: { isConnectedToChat ? 'ONLINE' : 'OFFLINE' }
          </p>
          <a
            className="App-link"
            href="https://github.com/ConnectyCube/connectycube-js-samples/tree/master/sample-init-react-js-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Sample Init React JS App with ConnectyCube JS SDK
          </a>
        </header>
      </div>
    );
  }
}

export default ConnectyCubeVideo;