import React from 'react';
import './sms.css';
// import { twilioServer } from '../../../redux/actions';

class SMSForm extends React.PureComponent {
  state = {
    message: {
      to: '',
      body: '',
    },
    submitting: false,
    error: false,
  };

  onHandleChange = (event) => {
    const name = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [name]: event.target.value },
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitting: true });
    fetch(`http://localhost:9000/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.message),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              to: '',
              body: '',
            },
          });
        } else {
          this.setState({
            error: true,
            submitting: false,
          });
        }
      });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className={this.state.error ? 'error sms-form' : 'sms-form'}
      >
        <div>
          <label htmlFor="to">To:</label>
          <input
            className=""
            type="tel"
            name="to"
            id="to"
            value={this.state.message.to}
            onChange={this.onHandleChange}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            name="body"
            id="body"
            value={this.state.message.body}
            onChange={this.onHandleChange}
          />
        </div>
        <button type="submit" disabled={this.state.submitting}>
          Send message
        </button>
      </form>
    );
  }
}

export default SMSForm;
