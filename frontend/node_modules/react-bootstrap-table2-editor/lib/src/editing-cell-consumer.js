'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prop-types: 0 */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _context = require('./context');

var _editingCell = require('./editing-cell');

var _editingCell2 = _interopRequireDefault(_editingCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_, onStartEdit) {
  var EditingCell = (0, _editingCell2.default)(_, onStartEdit);
  var renderWithEditingCell = function renderWithEditingCell(props, cellEdit) {
    var content = _.get(props.row, props.column.dataField);
    var editCellstyle = props.column.editCellStyle || {};
    var editCellclasses = props.column.editCellClasses;
    if (_.isFunction(props.column.editCellStyle)) {
      editCellstyle = props.column.editCellStyle(content, props.row, props.rowIndex, props.columnIndex);
    }
    if (_.isFunction(props.column.editCellClasses)) {
      editCellclasses = props.column.editCellClasses(content, props.row, props.rowIndex, props.columnIndex);
    }

    return _react2.default.createElement(EditingCell, _extends({}, props, {
      className: editCellclasses,
      style: editCellstyle
    }, cellEdit));
  };

  return function (props) {
    return _react2.default.createElement(
      _context.Consumer,
      null,
      function (cellEdit) {
        return renderWithEditingCell(props, cellEdit);
      }
    );
  };
};