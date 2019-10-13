webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/actions/files.ts":
/*!******************************!*\
  !*** ./src/actions/files.ts ***!
  \******************************/
/*! exports provided: addFiles, removeFile, updateStatus, updateLog, initWorker, createFile, createMultiPartFile, convertFile, downloadFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFiles", function() { return addFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFile", function() { return removeFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStatus", function() { return updateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLog", function() { return updateLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initWorker", function() { return initWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFile", function() { return createFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMultiPartFile", function() { return createMultiPartFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFile", function() { return convertFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony import */ var store_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/types */ "./src/store/types.ts");

function addFiles(xciFiles) {
  return {
    files: xciFiles,
    type: store_types__WEBPACK_IMPORTED_MODULE_0__["ADD_FILES"]
  };
}
function removeFile(xciFile) {
  return {
    file: xciFile,
    type: store_types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FILE"]
  };
}
function updateStatus(id, status) {
  return {
    id: id,
    status: status,
    type: store_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STATUS"]
  };
}
function updateLog(id, message, status, overwrite) {
  return {
    id: id,
    message: message,
    status: status,
    overwrite: overwrite,
    type: store_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_LOG"]
  };
}
function initWorker(id) {
  return {
    id: id,
    type: store_types__WEBPACK_IMPORTED_MODULE_0__["INIT_WORKER"]
  };
}
function createFile(id, file) {
  return {
    id: id,
    file: file,
    type: store_types__WEBPACK_IMPORTED_MODULE_0__["CREATE_FILE"]
  };
}
function createMultiPartFile(id, file) {
  return {
    id: id,
    file: file,
    type: store_types__WEBPACK_IMPORTED_MODULE_0__["CREATE_MULTIPART_FILE"]
  };
}
function convertFile(id) {
  return {
    id: id,
    type: store_types__WEBPACK_IMPORTED_MODULE_0__["CONVERT_FILE"]
  };
}
function downloadFile(id, nspName) {
  return {
    id: id,
    nspName: nspName,
    type: store_types__WEBPACK_IMPORTED_MODULE_0__["DOWNLOAD_FILE"]
  };
}

/***/ }),

/***/ "./src/store/types.ts":
/*!****************************!*\
  !*** ./src/store/types.ts ***!
  \****************************/
/*! exports provided: FileStatus, ADD_KEYSET, ADD_FILES, REMOVE_FILE, INIT_WORKER, CREATE_FILE, CREATE_MULTIPART_FILE, UPDATE_STATUS, UPDATE_LOG, CONVERT_FILE, DOWNLOAD_FILE */
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
var DOWNLOAD_FILE = 'DOWNLOAD_FILE'; // Keyset state

/***/ })

})
//# sourceMappingURL=index.js.e13a295c9f4800b3990d.hot-update.js.map