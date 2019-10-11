webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/workers/XCIWorker.ts":
/*!**********************************!*\
  !*** ./src/workers/XCIWorker.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return XCIWorker; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var actions_files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions/files */ "./src/actions/files.ts");
/* harmony import */ var store_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/types */ "./src/store/types.ts");
/* harmony import */ var _xci_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xci.worker */ "./src/workers/xci.worker.ts");
/* harmony import */ var _xci_worker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_xci_worker__WEBPACK_IMPORTED_MODULE_5__);




 // @ts-ignore



var XCIWorker =
/*#__PURE__*/
function () {
  function XCIWorker(id, keyset, store) {
    var _this = this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, XCIWorker);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "id", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "store", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "keyset", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "worker", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "filename", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "createKeyset", function () {
      var fileReader = new FileReader();

      fileReader.onload = function (event) {
        if (event.target && event.target.result) {
          _this.createFile('keyset', _this.keyset.name, new Uint8Array(event.target.result));
        }
      };

      fileReader.readAsArrayBuffer(_this.keyset);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onWorkerMessage", function (event) {
      var data = event.data;

      switch (data.action) {
        case 'PRINT':
          {
            _this.store.dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_3__["updateLog"])(_this.id, data.message));

            break;
          }

        case 'PRINT_ERR':
          console.warn(data.message);
          break;

        case 'RUNTIME_INITIALIZED':
          {
            if (_this.keyset) {
              _this.createKeyset();
            }

            _this.store.dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_3__["updateLog"])(_this.id, 'WebAssembly runtime initialized.'));

            _this.store.dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_3__["updateStatus"])(_this.id, store_types__WEBPACK_IMPORTED_MODULE_4__["FileStatus"].Ready));

            break;
          }

        case 'FILE_CREATED':
          _this.filename = data.name;

          _this.store.dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_3__["updateLog"])(_this.id, "Created ".concat(data.name, " in virtual filesystem."), true));

          if (data.fileType === 'xci') {
            _this.store.dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_3__["convertFile"])(_this.id));
          }

          break;

        case 'FILE_CONVERTED':
          {
            _this.store.dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_3__["updateLog"])(_this.id, "Converted ".concat(data.name, "."))); // Trigger NSP file downloads


            data.nspNames.forEach(function (nspName) {
              return _this.store.dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_3__["downloadFile"])(_this.id, nspName));
            });
            break;
          }

        case 'DOWNLOAD_FILE':
          {
            var a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(new Blob([data.file], {
              type: 'application/octet-stream'
            }));
            a.download = data.filename; // Append anchor to body.

            document.body.appendChild(a);
            a.click(); // Remove anchor from body

            document.body.removeChild(a);

            _this.store.dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_3__["updateStatus"])(_this.id, store_types__WEBPACK_IMPORTED_MODULE_4__["FileStatus"].Completed));

            break;
          }

        case 'WORKER_COMPLETED':
          _this.store.dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_3__["updateLog"])(_this.id, "Job completed for ".concat(_this.filename, ".")));

          _this.terminateWorker();

          break;
      }
    });

    this.id = id;
    this.store = store;
    this.worker = new _xci_worker__WEBPACK_IMPORTED_MODULE_5___default.a();
    this.worker.onmessage = this.onWorkerMessage;
    this.keyset = keyset;
    this.filename = null;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(XCIWorker, [{
    key: "createFile",
    value: function createFile(fileType, name, data) {
      var message = {
        name: name,
        fileType: fileType,
        file: data,
        action: 'CREATE_FILE'
      };
      this.worker.postMessage(message, [message.file.buffer]);
    }
  }, {
    key: "buildMultiPartFile",
    value: function buildMultiPartFile(name, data) {
      var message = {
        name: name,
        file: data,
        action: 'BUILD_MULTIPART_FILE'
      };
      this.worker.postMessage(message, [message.file.buffer]);
    }
  }, {
    key: "createMultiPartFile",
    value: function createMultiPartFile(name, data) {
      this.worker.postMessage({
        action: 'CREATE_MULTIPART_FILE'
      });
    }
  }, {
    key: "convertFile",
    value: function convertFile() {
      this.worker.postMessage({
        id: this.id,
        filename: this.filename,
        keyset: this.keyset.name,
        action: 'CONVERT_FILE'
      });
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(nspName) {
      this.store.dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_3__["updateLog"])(this.id, "Downloading ".concat(nspName, "...")));
      this.worker.postMessage({
        filename: nspName,
        action: 'DOWNLOAD_FILE'
      });
    }
  }, {
    key: "terminateWorker",
    value: function terminateWorker() {
      this.worker.terminate();
    }
  }]);

  return XCIWorker;
}();



/***/ })

})
//# sourceMappingURL=_app.js.a19f5eb6dc6d0adf3e37.hot-update.js.map