webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"async-validator\"");
/* eslint no-console:0 */



var schema = new __WEBPACK_IMPORTED_MODULE_0_async_validator___default.a({
  name: {
    type: 'string',
    required: true,
    min: 5,
    max: 10
  },
  address: {
    type: 'object',
    required: true,
    fields: {
      province: {
        type: 'string',
        required: true,
        min: 4
      },
      city: {
        type: 'string',
        message: 'custom message',
        min: 5
      },
      async: {
        validator: function validator(rule, value, callback) {
          setTimeout(function () {
            callback(rule.message);
          }, 100);
        },

        message: 'address async fails'
      }
    }
  },
  async: {
    validator: function validator(rule, value, callback) {
      setTimeout(function () {
        callback([new Error(rule.message)]);
      }, 100);
    },

    message: 'async fails'
  }
});

schema.validate({
  name: 2,
  address: {
    city: 2
  },
  async: '2'
}, function (errors, fields) {
  console.log('errors');
  console.log(errors);
  console.log('fields');
  console.log(fields);
});

console.log('end');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
],[1]);
//# sourceMappingURL=simple.js.map