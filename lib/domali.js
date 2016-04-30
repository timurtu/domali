"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by timur on 4/27/16.
 */
exports.default = {

  /**
   * Return one or many elements by getting them by id.
   *
   * @param ids Any number of id strings
   * @returns {*} elements as separate variables to be used
   * with destructuring.
   */

  getId: function getId() {
    for (var _len = arguments.length, ids = Array(_len), _key = 0; _key < _len; _key++) {
      ids[_key] = arguments[_key];
    }

    if (ids.length > 1) {
      return ids.map(function (id) {
        return document.getElementById(id);
      });
    } else {
      return document.getElementById(ids[0]);
    }
  },
  getClass: function getClass(className) {
    return document.getElementsByClassName(className);
  },
  getTags: function getTags(tagName) {
    return document.getElementsByTagName(tagName);
  },
  select: function select(query) {
    return document.querySelector(query);
  },
  selectAll: function selectAll(query) {
    return document.querySelectorAll(query);
  }
};