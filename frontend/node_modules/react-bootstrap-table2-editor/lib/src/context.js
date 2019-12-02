'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consumer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = require('./const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */


var CellEditContext = _react2.default.createContext();

exports.default = function (_, dataOperator, isRemoteCellEdit, handleCellChange) {
  var CellEditProvider = function (_React$Component) {
    _inherits(CellEditProvider, _React$Component);

    function CellEditProvider(props) {
      _classCallCheck(this, CellEditProvider);

      var _this = _possibleConstructorReturn(this, (CellEditProvider.__proto__ || Object.getPrototypeOf(CellEditProvider)).call(this, props));

      _this.doUpdate = _this.doUpdate.bind(_this);
      _this.startEditing = _this.startEditing.bind(_this);
      _this.escapeEditing = _this.escapeEditing.bind(_this);
      _this.completeEditing = _this.completeEditing.bind(_this);
      _this.handleCellUpdate = _this.handleCellUpdate.bind(_this);
      _this.state = {
        ridx: null,
        cidx: null,
        message: null
      };
      return _this;
    }

    _createClass(CellEditProvider, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.cellEdit && isRemoteCellEdit()) {
          if (nextProps.cellEdit.options.errorMessage) {
            this.setState(function () {
              return {
                message: nextProps.cellEdit.options.errorMessage
              };
            });
          } else {
            this.escapeEditing();
          }
        }
      }
    }, {
      key: 'handleCellUpdate',
      value: function handleCellUpdate(row, column, newValue) {
        var _this2 = this;

        var cellEdit = this.props.cellEdit;
        var beforeSaveCell = cellEdit.options.beforeSaveCell;

        var oldValue = _.get(row, column.dataField);
        var beforeSaveCellDone = function beforeSaveCellDone() {
          var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          if (result) {
            _this2.doUpdate(row, column, newValue);
          } else {
            _this2.escapeEditing();
          }
        };
        if (_.isFunction(beforeSaveCell)) {
          var result = beforeSaveCell(oldValue, newValue, row, column, beforeSaveCellDone);
          if (_.isObject(result) && result.async) {
            return;
          }
        }
        this.doUpdate(row, column, newValue);
      }
    }, {
      key: 'doUpdate',
      value: function doUpdate(row, column, newValue) {
        var _props = this.props,
            keyField = _props.keyField,
            cellEdit = _props.cellEdit,
            data = _props.data;
        var afterSaveCell = cellEdit.options.afterSaveCell;

        var rowId = _.get(row, keyField);
        var oldValue = _.get(row, column.dataField);
        if (isRemoteCellEdit()) {
          handleCellChange(rowId, column.dataField, newValue);
        } else {
          dataOperator.editCell(data, keyField, rowId, column.dataField, newValue);
          if (_.isFunction(afterSaveCell)) afterSaveCell(oldValue, newValue, row, column);
          this.completeEditing();
        }
      }
    }, {
      key: 'completeEditing',
      value: function completeEditing() {
        this.setState(function () {
          return {
            ridx: null,
            cidx: null,
            message: null
          };
        });
      }
    }, {
      key: 'startEditing',
      value: function startEditing(ridx, cidx) {
        var _this3 = this;

        var editing = function editing() {
          _this3.setState(function () {
            return {
              ridx: ridx,
              cidx: cidx
            };
          });
        };

        var selectRow = this.props.selectRow;

        if (!selectRow || selectRow.clickToEdit || !selectRow.clickToSelect) editing();
      }
    }, {
      key: 'escapeEditing',
      value: function escapeEditing() {
        this.setState(function () {
          return {
            ridx: null,
            cidx: null
          };
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props$cellEdit = this.props.cellEdit,
            _props$cellEdit$optio = _props$cellEdit.options,
            nonEditableRows = _props$cellEdit$optio.nonEditableRows,
            errorMessage = _props$cellEdit$optio.errorMessage,
            optionsRest = _objectWithoutProperties(_props$cellEdit$optio, ['nonEditableRows', 'errorMessage']),
            cellEditRest = _objectWithoutProperties(_props$cellEdit, ['options']);

        var newCellEdit = _extends({}, optionsRest, cellEditRest, this.state, {
          nonEditableRows: _.isDefined(nonEditableRows) ? nonEditableRows() : [],
          onStart: this.startEditing,
          onEscape: this.escapeEditing,
          onUpdate: this.handleCellUpdate
        });

        return _react2.default.createElement(
          CellEditContext.Provider,
          {
            value: _extends({}, newCellEdit)
          },
          this.props.children
        );
      }
    }]);

    return CellEditProvider;
  }(_react2.default.Component);

  CellEditProvider.propTypes = {
    data: _propTypes2.default.array.isRequired,
    selectRow: _propTypes2.default.object,
    options: _propTypes2.default.shape({
      mode: _propTypes2.default.oneOf([_const.CLICK_TO_CELL_EDIT, _const.DBCLICK_TO_CELL_EDIT]).isRequired,
      onErrorMessageDisappear: _propTypes2.default.func,
      blurToSave: _propTypes2.default.bool,
      beforeSaveCell: _propTypes2.default.func,
      afterSaveCell: _propTypes2.default.func,
      onStartEdit: _propTypes2.default.func,
      nonEditableRows: _propTypes2.default.func,
      timeToCloseMessage: _propTypes2.default.number,
      errorMessage: _propTypes2.default.any
    })
  };

  return {
    Provider: CellEditProvider
  };
};

var Consumer = exports.Consumer = CellEditContext.Consumer;