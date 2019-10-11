this["webpackHotUpdate"]("main",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js?!./src/workers/xci.worker.ts":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js??ref--5!./src/workers/xci.worker.ts ***!
  \***************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");

var types = {
  PRINT: 'PRINT',
  PRINT_ERR: 'PRINT_ERR',
  RUNTIME_INITIALIZED: 'RUNTIME_INITIALIZED',
  FILE_CREATED: 'FILE_CREATED',
  FILE_CONVERTED: 'FILE_CONVERTED',
  NSP_NAME_RETRIEVED: 'NSP_NAME_RETRIEVED',
  WORKER_COMPLETED: 'WORKER_COMPLETED'
};
var nspNames = [];
self.Module = {
  wasmMemory: new WebAssembly.Memory({
    initial: 1074000000,
    maximum: 3222000000
  }),
  onRuntimeInitialized: function onRuntimeInitialized() {
    self.postMessage({
      action: types.RUNTIME_INITIALIZED
    });
  },
  print: function print(message) {
    var nspRegex = new RegExp(/(?:Game NSP|Update NSP:) \d: (.+\.nsp)/);

    if (nspRegex.test(message)) {
      var _ref = nspRegex.exec(message) || [],
          _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
          nspName = _ref2[1];

      nspNames.push(nspName);
    }

    if (message.replace(/\s/g, '').length) {
      self.postMessage({
        action: types.PRINT,
        message: message
      });
    }
  },
  printErr: function printErr(message) {
    if (message.replace(/\s/g, '').length) {
      self.postMessage({
        action: types.PRINT_ERR,
        message: message
      });
    }
  }
}; // Import emscripten glue code

self.importScripts('4nxci.js');
var multipartFile = {
  name: '',
  data: []
};

self.onmessage = function (event) {
  var data = event.data;

  switch (data.action) {
    case 'CREATE_FILE':
      {
        if (self.FS.findObject("/".concat(data.name))) {
          return;
        }

        var message = 'Creating file in virtual filesystem...';
        self.postMessage({
          action: types.PRINT,
          message: message
        });
        self.Module['FS_createDataFile']('/', data.name, data.file, true, true, true);
        self.postMessage({
          name: data.name,
          fileType: data.fileType,
          action: types.FILE_CREATED
        });
        break;
      }

    case 'CREATE_MULTIPART_FILE':
      {
        var name = multipartFile.name,
            _data = multipartFile.data;
        var _message = 'Creating file in virtual filesystem...';
        self.Module['FS_createDataFile']('/', name, _data, true, true, true);
        console.log("Created ".concat(multipartFile.name, " in virtual filesystem."));
        self.postMessage({
          name: multipartFile.name,
          action: types.FILE_CREATED
        });
        break;
      }

    case 'BUILD_MULTIPART_FILE':
      if (!multipartFile.name) {
        multipartFile.name = data.name;
      }

      multipartFile.data = multipartFile.data.concat(data.file);
      break;

    case 'CONVERT_FILE':
      self.Module.callMain(['-rk', "/".concat(data.keyset), "/".concat(data.filename)]);
      self.postMessage({
        name: data.filename,
        action: types.FILE_CONVERTED,
        nspNames: nspNames
      });
      break;

    case 'DOWNLOAD_FILE':
      {
        var _message2 = {
          file: self.FS.findObject("/".concat(data.filename)).contents,
          filename: data.filename,
          action: 'DOWNLOAD_FILE'
        };
        self.postMessage(_message2, [_message2.file.buffer]);
        var index = nspNames.indexOf(data.filename);

        if (index !== -1) {
          nspNames.splice(index, 1);
        }

        if (!nspNames.length) {
          self.postMessage({
            action: types.WORKER_COMPLETED
          });
        }

        break;
      }
  }
};



/***/ })

})
//# sourceMappingURL=main.00397e6947afe6f3bd1e.hot-update.js.map