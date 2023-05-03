import React, { Component } from "react";
import { Button } from "reactstrap";
import BedAllocation from "./BedAllocation";

class BedToggle extends Component {
  state = {
      isFormOpened: false
    };
  

  render() {
    return (
      <center>
        <div>
          {!this.state.isFormOpened ? (
            <div>
              <Button
              
                outline
                size="sm"
                color="primary"
                onClick={() => this.setState({ isFormOpened: true })}
              >
                get started
              </Button>
            </div>
          ) : (
            <BedAllocation />
          )}
        </div>
      </center>
    );
  }
}

export default BedToggle;
