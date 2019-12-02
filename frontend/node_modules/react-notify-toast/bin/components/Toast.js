'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _defaults = require('../defaults');

var _stylesheet = require('../stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* React Notification Component */
var Toast = function (_React$Component) {
    _inherits(Toast, _React$Component);

    function Toast() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Toast);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            containerStyle: _stylesheet2.default.styles.container
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Toast, [{
        key: 'getToastStyle',
        value: function getToastStyle() {
            var _props = this.props,
                type = _props.type,
                color = _props.color;
            var styles = _stylesheet2.default.styles;

            var contentStyle = {};

            /* If type is set, merge toast action styles with base */
            switch (type) {
                case 'success':
                case 'error':
                case 'warning':
                case 'info':
                    contentStyle = (0, _objectAssign2.default)({}, styles.content, _defaults.defaults.colors[type]);
                    break;
                case 'custom':
                    var customStyle = {
                        backgroundColor: color.background,
                        color: color.text
                    };
                    contentStyle = (0, _objectAssign2.default)({}, styles.content, customStyle);
                    break;
                default:
                    contentStyle = (0, _objectAssign2.default)({}, styles.content);
                    break;
            }

            return contentStyle;
        }
    }, {
        key: 'animateState',
        value: function animateState() {
            var _this2 = this;

            var styles = _stylesheet2.default.styles;

            // Show

            setTimeout(function () {
                _this2.updateStyle(styles.show);
            }, 100); // wait 100ms after the component is called to animate toast.

            // Timeout -1 displays toast as a persistent notification
            if (this.props.timeout === -1) {
                return;
            }

            // Hide after timeout
            setTimeout(function () {
                _this2.updateStyle(styles.hide);
            }, this.props.timeout);
        }

        // Updates the style of the container with styles for a state (hide/show).
        // This triggers animations.

    }, {
        key: 'updateStyle',
        value: function updateStyle(stateStyle) {
            var styles = _stylesheet2.default.styles;


            this.setState({ containerStyle: (0, _objectAssign2.default)({}, styles.container, stateStyle) });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.animateState();
        }
    }, {
        key: 'render',
        value: function render() {
            var text = this.props.text;
            var containerStyle = this.state.containerStyle;


            return _react2.default.createElement(
                'div',
                { className: 'toast-notification', style: containerStyle },
                _react2.default.createElement(
                    'span',
                    { style: this.getToastStyle() },
                    text
                )
            );
        }
    }]);

    return Toast;
}(_react2.default.Component);

Toast.propTypes = {
    text: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    timeout: _propTypes2.default.number,
    type: _propTypes2.default.string,
    color: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool])
};
exports.default = Toast;