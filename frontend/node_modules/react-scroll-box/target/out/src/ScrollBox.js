import React from 'react';
import {AbstractScrollBox} from './AbstractScrollBox';

export class ScrollBox extends React.Component {

  render() {
    return (
      <AbstractScrollBox {...this.props}>
        <div className="scroll-box__viewport">
          {this.props.children}
        </div>
      </AbstractScrollBox>
    );
  }
}
