"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by timur on 4/27/16.
 */
exports.default = {
  getId: function getId() {
    for (var _len = arguments.length, ids = Array(_len), _key = 0; _key < _len; _key++) {
      ids[_key] = arguments[_key];
    }

    ids.forEach(function (id, i) {
      ids[i] = document.getElementById(id);
    });
    return ids;
  }
};