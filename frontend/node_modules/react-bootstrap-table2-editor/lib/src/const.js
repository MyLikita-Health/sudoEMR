'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TIME_TO_CLOSE_MESSAGE = exports.TIME_TO_CLOSE_MESSAGE = 3000;
var DELAY_FOR_DBCLICK = exports.DELAY_FOR_DBCLICK = 200;
var CLICK_TO_CELL_EDIT = exports.CLICK_TO_CELL_EDIT = 'click';
var DBCLICK_TO_CELL_EDIT = exports.DBCLICK_TO_CELL_EDIT = 'dbclick';

var EDITTYPE = exports.EDITTYPE = {
  TEXT: 'text',
  SELECT: 'select',
  TEXTAREA: 'textarea',
  CHECKBOX: 'checkbox',
  DATE: 'date'
};