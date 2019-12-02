'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prop-types: 0 */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _const = require('./const');

var _context = require('./context');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component, selectRowEnabled) {
  var renderWithCellEdit = function renderWithCellEdit(props, cellEdit) {
    var key = props.value;
    var editableRow = !(cellEdit.nonEditableRows.length > 0 && cellEdit.nonEditableRows.indexOf(key) > -1);

    var attrs = {};

    if (selectRowEnabled && cellEdit.mode === _const.DBCLICK_TO_CELL_EDIT) {
      attrs.DELAY_FOR_DBCLICK = _const.DELAY_FOR_DBCLICK;
    }

    return _react2.default.createElement(Component, _extends({}, props, attrs, {
      editingRowIdx: cellEdit.ridx,
      editingColIdx: cellEdit.cidx,
      editable: editableRow,
      onStart: cellEdit.onStart,
      clickToEdit: cellEdit.mode === _const.CLICK_TO_CELL_EDIT,
      dbclickToEdit: cellEdit.mode === _const.DBCLICK_TO_CELL_EDIT
    }));
  };
  function withConsumer(props) {
    return _react2.default.createElement(
      _context.Consumer,
      null,
      function (cellEdit) {
        return renderWithCellEdit(props, cellEdit);
      }
    );
  }

  withConsumer.displayName = 'WithCellEditingRowConsumer';
  return withConsumer;
};