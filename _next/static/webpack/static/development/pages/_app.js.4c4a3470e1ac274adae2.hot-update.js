webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/reducers/files.ts":
/*!*******************************!*\
  !*** ./src/reducers/files.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return filesReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/types */ "./src/store/types.ts");




var initialState = {
  files: []
};

function applyFileUpdate(targetId, key, value, update) {
  return function (file) {
    if (file.id !== targetId) {
      return file;
    } // Ensure custom non-readonly file properties are carried over


    var fileKeys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(file);

    var fileToUpdate = new File([file], file.name);
    fileKeys.forEach(function (key) {
      fileToUpdate[key] = file[key];
    }); // Update file properties

    fileToUpdate[key] = update ? update(file) : value;
    return fileToUpdate;
  };
}

function unionFiles(uniqueFiles, file) {
  return !uniqueFiles.some(function (f) {
    return f.id === file.id;
  }) ? [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(uniqueFiles), [file]) : uniqueFiles;
}

function filesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case store_types__WEBPACK_IMPORTED_MODULE_3__["ADD_FILES"]:
      {
        var addedFiles = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.files), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(action.files));
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          files: addedFiles.reduce(unionFiles, [])
        });
      }

    case store_types__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FILE"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          files: state.files.filter(function (file) {
            return file.id !== action.file.id;
          })
        });
      }

    case store_types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_STATUS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        files: state.files.map(applyFileUpdate(action.id, 'status', action.status))
      });

    case store_types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_LOG"]:
      {
        var update = function update(file) {
          return action.overwrite ? [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(file.log.slice(0, file.log.length - 1)), [action.message]) : [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(file.log), [action.message]);
        };

        var files = state.files.map(applyFileUpdate(action.id, 'log', action.message, update));

        if (action.status) {
          files = files.map(applyFileUpdate(action.id, 'status', action.status));
        }

        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          files: files
        });
      }

    case store_types__WEBPACK_IMPORTED_MODULE_3__["INIT_WORKER"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          files: state.files.map(applyFileUpdate(action.id, 'status', store_types__WEBPACK_IMPORTED_MODULE_3__["FileStatus"].Initializing))
        });
      }

    case store_types__WEBPACK_IMPORTED_MODULE_3__["CREATE_FILE"]:
    case store_types__WEBPACK_IMPORTED_MODULE_3__["CREATE_MULTIPART_FILE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        files: state.files.map(applyFileUpdate(action.id, 'status', store_types__WEBPACK_IMPORTED_MODULE_3__["FileStatus"].Preparing))
      });

    case store_types__WEBPACK_IMPORTED_MODULE_3__["CONVERT_FILE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        files: state.files.map(applyFileUpdate(action.id, 'status', store_types__WEBPACK_IMPORTED_MODULE_3__["FileStatus"].Converting))
      });

    case store_types__WEBPACK_IMPORTED_MODULE_3__["DOWNLOAD_FILE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        files: state.files.map(applyFileUpdate(action.id, 'status', store_types__WEBPACK_IMPORTED_MODULE_3__["FileStatus"].Downloading))
      });

    case FINISH_FILE:
      {
        var message = "Job completed for ".concat(this.filename, ".");

        var _update = function _update(file) {
          return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(file.log), [message]);
        };

        var _files = state.files.map(applyFileUpdate(action.id, 'log', message, _update)).map(applyFileUpdate(action.id, 'status', store_types__WEBPACK_IMPORTED_MODULE_3__["FileStatus"].Completed, _update));

        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          files: _files
        });
      }

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.4c4a3470e1ac274adae2.hot-update.js.map