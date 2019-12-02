'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Type = undefined;

var _context = require('./src/context');

var _context2 = _interopRequireDefault(_context);

var _rowConsumer = require('./src/row-consumer');

var _rowConsumer2 = _interopRequireDefault(_rowConsumer);

var _editingCellConsumer = require('./src/editing-cell-consumer');

var _editingCellConsumer2 = _interopRequireDefault(_editingCellConsumer);

var _const = require('./src/const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    createContext: _context2.default,
    createEditingCell: _editingCellConsumer2.default,
    withRowLevelCellEdit: _rowConsumer2.default,
    DBCLICK_TO_CELL_EDIT: _const.DBCLICK_TO_CELL_EDIT,
    DELAY_FOR_DBCLICK: _const.DELAY_FOR_DBCLICK,
    options: options
  };
};

var Type = exports.Type = _const.EDITTYPE;