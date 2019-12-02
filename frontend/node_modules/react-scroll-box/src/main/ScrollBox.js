import React from 'react';
import {GenericScrollBox} from './GenericScrollBox';

export class ScrollBox extends React.Component {

  render() {
    return (
      <GenericScrollBox {...this.props}>
        <div className="scroll-box__viewport">
          {this.props.children}
        </div>
      </GenericScrollBox>
    );
  }
}
