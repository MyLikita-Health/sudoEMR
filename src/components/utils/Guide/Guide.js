import React from 'react';
import { Alert } from 'reactstrap';

class Guide extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert color="secondary" isOpen={this.state.visible} toggle={this.onDismiss}>
        {this.props.title}
        {this.props.content()}
      </Alert>
    );
  }
}

export default Guide;
