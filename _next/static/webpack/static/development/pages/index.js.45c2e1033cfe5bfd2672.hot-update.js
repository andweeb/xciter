webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/strategize.ts":
/*!*******************************!*\
  !*** ./src/lib/strategize.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return strategize; });
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/bytes */ "./src/lib/bytes.ts");
/* harmony import */ var store_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/types */ "./src/store/types.ts");


 // Limit of the max number of bytes that will be processed at a given time.

var MAX_TOTAL_BYTES = lib_bytes__WEBPACK_IMPORTED_MODULE_1__["MAX_CHUNK_THRESHOLD"] * 2; // Devise file conversion strategy depending on file count and individual statuses and sizes.
// Return tuple of lists containing files to convert and the remaining files to be pending.

function strategize(files) {
  var consideredFiles = [];
  var convertFiles = [];
  var pendingFiles = [];
  var smallestFileSize = Infinity; // Get total size of files currently being processed

  var processingBytes = 0; // Collect current file state details based on file statuses

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(files), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var file = _step.value;

      switch (+file.status) {
        case store_types__WEBPACK_IMPORTED_MODULE_2__["FileStatus"].Preparing:
        case store_types__WEBPACK_IMPORTED_MODULE_2__["FileStatus"].Converting:
        case store_types__WEBPACK_IMPORTED_MODULE_2__["FileStatus"].Downloading:
          processingBytes += file.size;
          break;

        case store_types__WEBPACK_IMPORTED_MODULE_2__["FileStatus"].Ready:
        case store_types__WEBPACK_IMPORTED_MODULE_2__["FileStatus"].Pending:
          if (file.size < smallestFileSize) {
            smallestFileSize = file.size;
          }

          consideredFiles.push(file);
          break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var capacity = MAX_TOTAL_BYTES - processingBytes; // No files can be processed if the smallest file is over capacity

  if (smallestFileSize > capacity) {
    return [[], consideredFiles];
  } // Use a reverse greedy approximation to solve the 0-1 knapsack problem to prioritize
  // the parallelization of processing larger files one at a time with smaller files


  consideredFiles.sort(function (a, b) {
    return b.size - a.size;
  });

  for (var _i = 0, _consideredFiles = consideredFiles; _i < _consideredFiles.length; _i++) {
    var _file = _consideredFiles[_i];

    if (capacity - _file.size > 0) {
      convertFiles.push(_file);
      capacity -= _file.size;
    } else {
      pendingFiles.push(_file);
    }
  }

  return [convertFiles, pendingFiles];
}

/***/ })

})
//# sourceMappingURL=index.js.45c2e1033cfe5bfd2672.hot-update.js.map