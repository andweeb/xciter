webpackHotUpdate("static/development/pages/_app.js",{

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
function updateLog(id, message, overwrite) {
  return {
    id: id,
    message: message,
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

/***/ })

})
//# sourceMappingURL=_app.js.4adb05535b2c39a4e4db.hot-update.js.map