webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/middlewares/web-worker.ts":
/*!***************************************!*\
  !*** ./src/middlewares/web-worker.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var store_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/types */ "./src/store/types.ts");
/* harmony import */ var actions_files__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions/files */ "./src/actions/files.ts");
/* harmony import */ var lib_bytes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/bytes */ "./src/lib/bytes.ts");
/* harmony import */ var workers_XCIWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workers/XCIWorker */ "./src/workers/XCIWorker.ts");





// Maintain a map of workers in this middleware
var workers = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a();

var middleware = function middleware(store) {
  return function (next) {
    return function (action) {
      var result = next(action);
      var state = store.getState();

      switch (action.type) {
        case store_types__WEBPACK_IMPORTED_MODULE_1__["INIT_WORKER"]:
          {
            var keyset = state.keyset.file;
            store.dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_2__["updateLog"])(action.id, 'Setting up worker environment and WebAssembly runtime.'));
            workers.set(action.id, new workers_XCIWorker__WEBPACK_IMPORTED_MODULE_4__["default"](action.id, keyset, store));
            break;
          }

        case store_types__WEBPACK_IMPORTED_MODULE_1__["ADD_KEYSET"]:
          workers.forEach(function (worker) {
            worker.keyset = action.file;
            worker.createKeyset();
          });
          break;

        case store_types__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FILE"]:
          var worker = workers.get(action.id);
          break;

        case store_types__WEBPACK_IMPORTED_MODULE_1__["CREATE_FILE"]:
          {
            var _worker = workers.get(action.id);

            var fileReader = new FileReader();
            var isFirstProgressMessage = true;

            fileReader.onprogress = function (event) {
              var shouldOverwrite = !isFirstProgressMessage;
              var fileSize = Object(lib_bytes__WEBPACK_IMPORTED_MODULE_3__["abbreviateFileSize"])(event.loaded);
              var message = "".concat(fileSize, " transferred to worker.");
              store.dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_2__["updateLog"])(action.id, message, shouldOverwrite));
              isFirstProgressMessage = false;
            };

            fileReader.onerror = function (err) {
              return console.error("Error reading file", err);
            };

            fileReader.onload = function (event) {
              if (event.target && event.target.result) {
                _worker.createFile('xci', action.file.name, new Uint8Array(event.target.result));
              }
            };

            fileReader.readAsArrayBuffer(action.file);
            break;
          }

        case store_types__WEBPACK_IMPORTED_MODULE_1__["CREATE_MULTIPART_FILE"]:
          {
            var _worker2 = workers.get(action.id);

            var _fileReader = new FileReader();

            var fileChunks = [];
            var transferIndex = 0; // Split into multipart file chunks

            for (var i = 0, index = 0; i < action.file.size; i += lib_bytes__WEBPACK_IMPORTED_MODULE_3__["MAX_CHUNK_THRESHOLD"], index++) {
              var lastByte = i + lib_bytes__WEBPACK_IMPORTED_MODULE_3__["MAX_CHUNK_THRESHOLD"] - 1;
              var chunk = action.file.slice(i, lastByte);
              fileChunks.push(chunk);
            }

            var _isFirstProgressMessage = true;

            _fileReader.onprogress = function (event) {
              var shouldOverwrite = !_isFirstProgressMessage;
              var fileSize = Object(lib_bytes__WEBPACK_IMPORTED_MODULE_3__["abbreviateFileSize"])(event.loaded);
              var message = "".concat(fileSize, " transferred to worker.");
              store.dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_2__["updateLog"])(action.id, message, shouldOverwrite));
              _isFirstProgressMessage = false;
            };

            _fileReader.onerror = function (err) {
              return console.error("Error reading file", err);
            };

            _fileReader.onload = function (event) {
              transferIndex = transferIndex + 1; // Build multipart file in the worker

              if (event.target && event.target.result) {
                _worker2.buildMultiPartFile(action.file.name, new Uint8Array(event.target.result));
              } // Kick off next multipart chunk file or signal to create the file


              if (fileChunks[transferIndex]) {
                _fileReader.readAsArrayBuffer(fileChunks[transferIndex]);
              } else {
                _worker2.createMultiPartFile();
              }
            }; // Start multipart file transfer


            _fileReader.readAsArrayBuffer(fileChunks[transferIndex]);

            break;
          }

        case store_types__WEBPACK_IMPORTED_MODULE_1__["CONVERT_FILE"]:
          {
            var _worker3 = workers.get(action.id);

            _worker3.convertFile();

            break;
          }

        case store_types__WEBPACK_IMPORTED_MODULE_1__["DOWNLOAD_FILE"]:
          {
            var _worker4 = workers.get(action.id);

            _worker4.downloadFile(action.nspName);

            break;
          }
      }

      return result;
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (middleware);

/***/ })

})
//# sourceMappingURL=_app.js.3d0bda3aee5ec027769f.hot-update.js.map