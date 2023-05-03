import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import './autocomplete.css';

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
  };

  static defaultProps = {
    suggestions: [],
  };

  state = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: '',
  };

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion
          .toString()
          .toLowerCase()
          .indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput,
    });
    this.props.onInputChange(userInput);
  };

  onClick = val => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: val,
    });
    // console.log(val)
    this.props.onInputChange(val);
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({
        activeSuggestion: activeSuggestion - 1,
      });
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  onBlur = (e) => {
    // const { currentTarget: { value } } = e;
    // this.setState({ showSuggestions: false, userInput: value });
    // this.onClick(value);
  }

  render() {
    const {
      onChange, 
      onClick,
      onKeyDown,
      onBlur,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
      props: { emptylisttext, value },
    } = this;
    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, i) => {
              let className;
              if (i === activeSuggestion) {
                className = 'suggestion-active';
              }

              return (
                <li
                  className={className}
                  key={i}
                  onClick={() => onClick(suggestion)}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>{emptylisttext}</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <input
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          value={userInput.length ? userInput : value}
          {...this.props}
        />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Autocomplete;
