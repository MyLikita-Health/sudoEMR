import React, { Component } from 'react';
import { Card, CardBody, Collapse, CardText } from 'reactstrap';
import { FaBed } from 'react-icons/fa';

class Bed extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="col-xs-8 col-sm-4">
        <FaBed
          size={70}
          fontWeight="bold"
          style={{ marginRight: 5, color: this.props.color }}
          onClick={this.toggle}
        />
        <br />
        {this.props.name}
        <i class="fa fa-fw fa-arrow-down" aria-hidden="true" />
        <Collapse isOpen={this.state.isOpen}>
          <Card>
            <CardBody>
              <CardText>({this.props.status})</CardText>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Bed;
