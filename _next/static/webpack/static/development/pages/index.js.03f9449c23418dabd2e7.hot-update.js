webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/store/types.ts":
/*!****************************!*\
  !*** ./src/store/types.ts ***!
  \****************************/
/*! exports provided: FileStatus, ADD_KEYSET, ADD_FILES, REMOVE_FILE, INIT_WORKER, CREATE_FILE, CREATE_MULTIPART_FILE, UPDATE_STATUS, UPDATE_LOG, CONVERT_FILE, DOWNLOAD_FILE, FINISH_FILE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileStatus", function() { return FileStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_KEYSET", function() { return ADD_KEYSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FILES", function() { return ADD_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FILE", function() { return REMOVE_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_WORKER", function() { return INIT_WORKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_FILE", function() { return CREATE_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_MULTIPART_FILE", function() { return CREATE_MULTIPART_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STATUS", function() { return UPDATE_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LOG", function() { return UPDATE_LOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_FILE", function() { return CONVERT_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOAD_FILE", function() { return DOWNLOAD_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISH_FILE", function() { return FINISH_FILE; });
var FileStatus; // Keyset actions

(function (FileStatus) {
  FileStatus[FileStatus["Waiting"] = 0] = "Waiting";
  FileStatus[FileStatus["Initializing"] = 1] = "Initializing";
  FileStatus[FileStatus["Ready"] = 2] = "Ready";
  FileStatus[FileStatus["Preparing"] = 3] = "Preparing";
  FileStatus[FileStatus["Pending"] = 4] = "Pending";
  FileStatus[FileStatus["Converting"] = 5] = "Converting";
  FileStatus[FileStatus["Downloading"] = 6] = "Downloading";
  FileStatus[FileStatus["Completed"] = 7] = "Completed";
  FileStatus[FileStatus["Warning"] = 8] = "Warning";
  FileStatus[FileStatus["Error"] = 9] = "Error";
})(FileStatus || (FileStatus = {}));

var ADD_KEYSET = 'ADD_KEYSET'; // Files actions

var ADD_FILES = 'ADD_FILES';
var REMOVE_FILE = 'REMOVE_FILE';
var INIT_WORKER = 'INIT_WORKER';
var CREATE_FILE = 'CREATE_FILE';
var CREATE_MULTIPART_FILE = 'CREATE_MULTIPART_FILE';
var UPDATE_STATUS = 'UPDATE_STATUS';
var UPDATE_LOG = 'UPDATE_LOG';
var CONVERT_FILE = 'CONVERT_FILE';
var DOWNLOAD_FILE = 'DOWNLOAD_FILE';
var FINISH_FILE = 'FINISH_FILE'; // Keyset state

/***/ })

})
//# sourceMappingURL=index.js.03f9449c23418dabd2e7.hot-update.js.map