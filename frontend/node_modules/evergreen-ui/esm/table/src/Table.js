import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import { Pane } from '../../layers';
import TableBody from './TableBody';
import TableVirtualBody from './TableVirtualBody';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableHeaderCell from './TableHeaderCell';
import TableRow from './TableRow';
import TextTableCell from './TextTableCell';
import TextTableHeaderCell from './TextTableHeaderCell';
import SearchTableHeaderCell from './SearchTableHeaderCell';
import EditableCell from './EditableCell';
import SelectMenuCell from './SelectMenuCell';

var Table =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Table, _PureComponent);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, _getPrototypeOf(Table).apply(this, arguments));
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["children"]);

      return React.createElement(Pane, props, children);
    }
  }]);

  return Table;
}(PureComponent);

Table.displayName = "Table";

_defineProperty(Table, "Body", TableBody);

_defineProperty(Table, "VirtualBody", TableVirtualBody);

_defineProperty(Table, "Head", TableHead);

_defineProperty(Table, "HeaderCell", TableHeaderCell);

_defineProperty(Table, "TextHeaderCell", TextTableHeaderCell);

_defineProperty(Table, "SearchHeaderCell", SearchTableHeaderCell);

_defineProperty(Table, "Row", TableRow);

_defineProperty(Table, "Cell", TableCell);

_defineProperty(Table, "TextCell", TextTableCell);

_defineProperty(Table, "EditableCell", EditableCell);

_defineProperty(Table, "SelectMenuCell", SelectMenuCell);

_defineProperty(Table, "propTypes", _objectSpread({}, Pane.propTypes));

export { Table as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUGFuZSIsIlRhYmxlQm9keSIsIlRhYmxlVmlydHVhbEJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZUhlYWRlckNlbGwiLCJUYWJsZVJvdyIsIlRleHRUYWJsZUNlbGwiLCJUZXh0VGFibGVIZWFkZXJDZWxsIiwiU2VhcmNoVGFibGVIZWFkZXJDZWxsIiwiRWRpdGFibGVDZWxsIiwiU2VsZWN0TWVudUNlbGwiLCJUYWJsZSIsInByb3BzIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixhQUF0QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLG9CQUE3QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsYUFBdEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixtQkFBNUI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLFlBQXJCO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQixpQkFBMUI7QUFDQSxPQUFPQyxtQkFBUCxNQUFnQyx1QkFBaEM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQyx5QkFBbEM7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGdCQUF6QjtBQUNBLE9BQU9DLGNBQVAsTUFBMkIsa0JBQTNCOztJQUVxQkMsSzs7Ozs7Ozs7Ozs7Ozs2QkE4QlY7QUFBQSx3QkFDd0IsS0FBS0MsS0FEN0I7QUFBQSxVQUNDQyxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNjRCxLQURkOztBQUVQLGFBQU8sb0JBQUMsSUFBRCxFQUFVQSxLQUFWLEVBQWtCQyxRQUFsQixDQUFQO0FBQ0Q7Ozs7RUFqQ2dDZixhOztBQUFkYSxLOztnQkFBQUEsSyxVQUNMWCxTOztnQkFES1csSyxpQkFHRVYsZ0I7O2dCQUhGVSxLLFVBS0xSLFM7O2dCQUxLUSxLLGdCQU9DUCxlOztnQkFQRE8sSyxvQkFTS0osbUI7O2dCQVRMSSxLLHNCQVdPSCxxQjs7Z0JBWFBHLEssU0FhTk4sUTs7Z0JBYk1NLEssVUFlTFQsUzs7Z0JBZktTLEssY0FpQkRMLGE7O2dCQWpCQ0ssSyxrQkFtQkdGLFk7O2dCQW5CSEUsSyxvQkFxQktELGM7O2dCQXJCTEMsSyxpQ0EyQmRaLElBQUksQ0FBQ2UsUzs7U0EzQlNILEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnLi9UYWJsZUJvZHknXG5pbXBvcnQgVGFibGVWaXJ0dWFsQm9keSBmcm9tICcuL1RhYmxlVmlydHVhbEJvZHknXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4vVGFibGVDZWxsJ1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICcuL1RhYmxlSGVhZCdcbmltcG9ydCBUYWJsZUhlYWRlckNlbGwgZnJvbSAnLi9UYWJsZUhlYWRlckNlbGwnXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnLi9UYWJsZVJvdydcbmltcG9ydCBUZXh0VGFibGVDZWxsIGZyb20gJy4vVGV4dFRhYmxlQ2VsbCdcbmltcG9ydCBUZXh0VGFibGVIZWFkZXJDZWxsIGZyb20gJy4vVGV4dFRhYmxlSGVhZGVyQ2VsbCdcbmltcG9ydCBTZWFyY2hUYWJsZUhlYWRlckNlbGwgZnJvbSAnLi9TZWFyY2hUYWJsZUhlYWRlckNlbGwnXG5pbXBvcnQgRWRpdGFibGVDZWxsIGZyb20gJy4vRWRpdGFibGVDZWxsJ1xuaW1wb3J0IFNlbGVjdE1lbnVDZWxsIGZyb20gJy4vU2VsZWN0TWVudUNlbGwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBCb2R5ID0gVGFibGVCb2R5XG5cbiAgc3RhdGljIFZpcnR1YWxCb2R5ID0gVGFibGVWaXJ0dWFsQm9keVxuXG4gIHN0YXRpYyBIZWFkID0gVGFibGVIZWFkXG5cbiAgc3RhdGljIEhlYWRlckNlbGwgPSBUYWJsZUhlYWRlckNlbGxcblxuICBzdGF0aWMgVGV4dEhlYWRlckNlbGwgPSBUZXh0VGFibGVIZWFkZXJDZWxsXG5cbiAgc3RhdGljIFNlYXJjaEhlYWRlckNlbGwgPSBTZWFyY2hUYWJsZUhlYWRlckNlbGxcblxuICBzdGF0aWMgUm93ID0gVGFibGVSb3dcblxuICBzdGF0aWMgQ2VsbCA9IFRhYmxlQ2VsbFxuXG4gIHN0YXRpYyBUZXh0Q2VsbCA9IFRleHRUYWJsZUNlbGxcblxuICBzdGF0aWMgRWRpdGFibGVDZWxsID0gRWRpdGFibGVDZWxsXG5cbiAgc3RhdGljIFNlbGVjdE1lbnVDZWxsID0gU2VsZWN0TWVudUNlbGxcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBQYW5lIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5QYW5lLnByb3BUeXBlc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIDxQYW5lIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvUGFuZT5cbiAgfVxufVxuIl19