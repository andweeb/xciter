webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/file.tsx":
/*!*********************************!*\
  !*** ./src/components/file.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/icon */ "./src/components/icon.tsx");
/* harmony import */ var lib_bytes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/bytes */ "./src/lib/bytes.ts");
/* harmony import */ var store_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! store/types */ "./src/store/types.ts");
/* harmony import */ var styles_color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styles/color */ "./src/styles/color.ts");





var _statusTypes,
    _jsxFileName = "/Users/andrew/Code/xciter/src/components/file.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






var StatusType;

(function (StatusType) {
  StatusType[StatusType["Info"] = 0] = "Info";
  StatusType[StatusType["Success"] = 1] = "Success";
  StatusType[StatusType["Warning"] = 2] = "Warning";
  StatusType[StatusType["Error"] = 3] = "Error";
})(StatusType || (StatusType = {}));

var statusTypes = (_statusTypes = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_statusTypes, StatusType.Info, [store_types__WEBPACK_IMPORTED_MODULE_9__["FileStatus"].Waiting, store_types__WEBPACK_IMPORTED_MODULE_9__["FileStatus"].Initializing, store_types__WEBPACK_IMPORTED_MODULE_9__["FileStatus"].Ready, store_types__WEBPACK_IMPORTED_MODULE_9__["FileStatus"].Preparing, store_types__WEBPACK_IMPORTED_MODULE_9__["FileStatus"].Pending, store_types__WEBPACK_IMPORTED_MODULE_9__["FileStatus"].Converting, store_types__WEBPACK_IMPORTED_MODULE_9__["FileStatus"].Downloading]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_statusTypes, StatusType.Success, [store_types__WEBPACK_IMPORTED_MODULE_9__["FileStatus"].Completed]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_statusTypes, StatusType.Warning, [
  /*TODO*/
]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_statusTypes, StatusType.Error, [
  /*TODO*/
]), _statusTypes);
var TrashButton = react__WEBPACK_IMPORTED_MODULE_5___default.a.memo(function (props) {
  return __jsx("div", {
    className: "jsx-1253862848" + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(components_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "trash",
    size: components_icon__WEBPACK_IMPORTED_MODULE_7__["Size"].Small,
    color: styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].chetwodeBlue,
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1253862848",
    __self: this
  }, ".button.jsx-1253862848:hover{opacity:0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvQ29kZS94Y2l0ZXIvc3JjL2NvbXBvbmVudHMvZmlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RvQixBQUc2QixZQUNoQiIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L0NvZGUveGNpdGVyL3NyYy9jb21wb25lbnRzL2ZpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEljb24sIHsgU2l6ZSwgUHJvcHMgYXMgSWNvblByb3BzIH0gZnJvbSAnY29tcG9uZW50cy9pY29uJztcbmltcG9ydCB7IGFiYnJldmlhdGVGaWxlU2l6ZSB9IGZyb20gJ2xpYi9ieXRlcyc7XG5pbXBvcnQgeyByZW1vdmVGaWxlIH0gZnJvbSAnYWN0aW9ucy9maWxlcyc7XG5pbXBvcnQgeyBGaWxlU3RhdHVzIH0gZnJvbSAnc3RvcmUvdHlwZXMnO1xuaW1wb3J0IGNvbG9yIGZyb20gJ3N0eWxlcy9jb2xvcic7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ3N0b3JlL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBmaWxlOiBGaWxlO1xuICAgIHNob3dMb2dzOiBGdW5jdGlvbjtcbn07XG5cbmVudW0gU3RhdHVzVHlwZSB7XG4gICAgSW5mbyxcbiAgICBTdWNjZXNzLFxuICAgIFdhcm5pbmcsXG4gICAgRXJyb3IsXG59XG5cbmNvbnN0IHN0YXR1c1R5cGVzID0ge1xuICAgIFtTdGF0dXNUeXBlLkluZm9dOiBbXG4gICAgICAgIEZpbGVTdGF0dXMuV2FpdGluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5Jbml0aWFsaXppbmcsXG4gICAgICAgIEZpbGVTdGF0dXMuUmVhZHksXG4gICAgICAgIEZpbGVTdGF0dXMuUHJlcGFyaW5nLFxuICAgICAgICBGaWxlU3RhdHVzLlBlbmRpbmcsXG4gICAgICAgIEZpbGVTdGF0dXMuQ29udmVydGluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5Eb3dubG9hZGluZyxcbiAgICBdLFxuICAgIFtTdGF0dXNUeXBlLlN1Y2Nlc3NdOiBbRmlsZVN0YXR1cy5Db21wbGV0ZWRdLFxuICAgIFtTdGF0dXNUeXBlLldhcm5pbmddOiBbXG4gICAgICAgIC8qVE9ETyovXG4gICAgXSxcbiAgICBbU3RhdHVzVHlwZS5FcnJvcl06IFtcbiAgICAgICAgLypUT0RPKi9cbiAgICBdLFxufTtcblxudHlwZSBUcmFzaEJ1dHRvblByb3BzID0ge1xuICAgIG9uQ2xpY2s6IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHZvaWQ7XG59O1xuXG5jb25zdCBUcmFzaEJ1dHRvbiA9IFJlYWN0Lm1lbW8oKHByb3BzOiBUcmFzaEJ1dHRvblByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgPEljb25cbiAgICAgICAgICAgIG5hbWU9XCJ0cmFzaFwiXG4gICAgICAgICAgICBzaXplPXtTaXplLlNtYWxsfVxuICAgICAgICAgICAgY29sb3I9e2NvbG9yLmNoZXR3b2RlQmx1ZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKSk7XG5cbmNvbnN0IEZpbGU6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9IHByb3BzID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3Qgc3RvcmVGaWxlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZSkgPT5cbiAgICAgICAgc3RhdGUuZmlsZXMuZmlsZXMuZmluZChmaWxlID0+IGZpbGUuaWQgPT09IHByb3BzLmZpbGUuaWQpLFxuICAgICk7XG5cbiAgICBjb25zdCBmaWxlU3RhdHVzID0gRmlsZVN0YXR1c1twcm9wcy5maWxlLnN0YXR1c107XG4gICAgY29uc3QgW3N0YXR1c1R5cGVdOiBBcnJheTxhbnk+ID1cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3RhdHVzVHlwZXMpLmZpbmQoKFt0eXBlLCBzdGF0dXNlc10pID0+XG4gICAgICAgICAgICBzdGF0dXNlcy5pbmNsdWRlcyhwcm9wcy5maWxlLnN0YXR1cyksXG4gICAgICAgICkgfHwgW107XG5cbiAgICBjb25zdCBzdGF0dXNQcm9wczogSWNvblByb3BzID0ge1xuICAgICAgICBuYW1lOiAnc3ViZGlyZWN0b3J5LXJpZ2h0JyxcbiAgICAgICAgY29sb3I6IGNvbG9yLmNoZXR3b2RlQmx1ZSxcbiAgICAgICAgc2l6ZTogU2l6ZS5FeHRyYVNtYWxsLFxuICAgIH07XG4gICAgc3dpdGNoICgrc3RhdHVzVHlwZSkge1xuICAgICAgICBjYXNlIFN0YXR1c1R5cGUuU3VjY2VzczpcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLm5hbWUgPSAnY2hlY2stY2lyY2xlJztcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLmNvbG9yID0gY29sb3IuZGVZb3JrR3JlZW47XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTdGF0dXNUeXBlLldhcm5pbmc6XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5uYW1lID0gJ2Vycm9yJztcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLmNvbG9yID0gY29sb3Iub2xkR29sZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFN0YXR1c1R5cGUuRXJyb3I6XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5zb2xpZCA9IHRydWU7XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5uYW1lID0gJ2Vycm9yLWNpcmNsZSc7XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5jb2xvciA9IGNvbG9yLnNhbG1vbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCBhbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoIChwcm9wcy5maWxlLnN0YXR1cykge1xuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuSW5pdGlhbGl6aW5nOlxuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuUHJlcGFyaW5nOlxuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuUGVuZGluZzpcbiAgICAgICAgY2FzZSBGaWxlU3RhdHVzLkNvbnZlcnRpbmc6XG4gICAgICAgIGNhc2UgRmlsZVN0YXR1cy5Eb3dubG9hZGluZzpcbiAgICAgICAgICAgIGFuaW1hdGlvbiA9ICdmbGFzaGluZyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVGaWxlOiBhbnkgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgKCkgPT4gZGlzcGF0Y2gocmVtb3ZlRmlsZShwcm9wcy5maWxlLmlkKSksXG4gICAgICAgIFtkaXNwYXRjaF1cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e1NpemUuTWVkaXVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvci53YWlrYXdhR3JheX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249e2FuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZW5hbWVcIj57cHJvcHMuZmlsZS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthYmJyZXZpYXRlRmlsZVNpemUocHJvcHMuZmlsZS5zaXplKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1cy1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIHsuLi5zdGF0dXNQcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj57ZmlsZVN0YXR1c308L2I+OnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZmlsZS5sb2dbcHJvcHMuZmlsZS5sb2cubGVuZ3RoIC0gMV19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2wtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2xpZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRlcm1pbmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e1NpemUuU21hbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3IuY2hldHdvZGVCbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zaG93TG9ncyhzdG9yZUZpbGUgPyBzdG9yZUZpbGUuaWQgOiBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxUcmFzaEJ1dHRvbiBvbkNsaWNrPXtyZW1vdmVGaWxlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmZpbGUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5saWxhY1doaXRlfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGU6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGU6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmNhdHNraWxsV2hpdGV9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZS1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogNztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGUtaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGUtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yLm1pbmVTaGFmdH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlc2l6ZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udHJvbC1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zdGF0dXMtbWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtzdGF0dXNQcm9wcy5jb2xvcn07XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGU7XG4iXX0= */\n/*@ sourceURL=/Users/andrew/Code/xciter/src/components/file.tsx */"));
});

var File = function File(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var storeFile = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.files.files.find(function (file) {
      return file.id === props.file.id;
    });
  });
  var fileStatus = store_types__WEBPACK_IMPORTED_MODULE_9__["FileStatus"][props.file.status];

  var _ref = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(statusTypes).find(function (_ref3) {
    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, 2),
        type = _ref4[0],
        statuses = _ref4[1];

    return statuses.includes(props.file.status);
  }) || [],
      _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 1),
      statusType = _ref2[0];

  var statusProps = {
    name: 'subdirectory-right',
    color: styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].chetwodeBlue,
    size: components_icon__WEBPACK_IMPORTED_MODULE_7__["Size"].ExtraSmall
  };

  switch (+statusType) {
    case StatusType.Success:
      statusProps.name = 'check-circle';
      statusProps.color = styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].deYorkGreen;
      break;

    case StatusType.Warning:
      statusProps.name = 'error';
      statusProps.color = styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].oldGold;
      break;

    case StatusType.Error:
      statusProps.solid = true;
      statusProps.name = 'error-circle';
      statusProps.color = styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].salmon;
      break;
  }

  var animation = undefined;

  switch (props.file.status) {
    case store_types__WEBPACK_IMPORTED_MODULE_9__["FileStatus"].Initializing:
    case store_types__WEBPACK_IMPORTED_MODULE_9__["FileStatus"].Preparing:
    case store_types__WEBPACK_IMPORTED_MODULE_9__["FileStatus"].Pending:
    case store_types__WEBPACK_IMPORTED_MODULE_9__["FileStatus"].Converting:
    case store_types__WEBPACK_IMPORTED_MODULE_9__["FileStatus"].Downloading:
      animation = 'flashing';
      break;
  }

  var removeFile = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    return dispatch(removeFile(props.file.id));
  }, [dispatch]);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "file-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "file-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "file-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(components_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    solid: true,
    name: "file",
    size: components_icon__WEBPACK_IMPORTED_MODULE_7__["Size"].Medium,
    color: styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].waikawaGray,
    animation: animation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "filename",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, props.file.name), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "filesize",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, Object(lib_bytes__WEBPACK_IMPORTED_MODULE_8__["abbreviateFileSize"])(props.file.size)))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "status-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(components_icon__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, statusProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, fileStatus), ":", ' ', props.file.log[props.file.log.length - 1]))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "control-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(components_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    solid: true,
    name: "terminal",
    size: components_icon__WEBPACK_IMPORTED_MODULE_7__["Size"].Small,
    color: styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].chetwodeBlue,
    onClick: function onClick() {
      return props.showLogs(storeFile ? storeFile.id : null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  })), __jsx(TrashButton, {
    onClick: removeFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "723063549",
    dynamic: [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color],
    __self: this
  }, ".file.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;cursor:default;margin-bottom:10px;border-radius:5px;box-sizing:border-box;background-color:".concat(styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, ";}.file.__jsx-style-dynamic-selector:last-of-type{margin-bottom:20px;}.file.__jsx-style-dynamic-selector:hover{background-color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, ";}.file-section.__jsx-style-dynamic-selector{-webkit-flex:7;-ms-flex:7;flex:7;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.file-info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:5px;}.file-icon.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}.details.__jsx-style-dynamic-selector{-webkit-flex:14;-ms-flex:14;flex:14;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.filename.__jsx-style-dynamic-selector{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, ";}.filesize.__jsx-style-dynamic-selector{color:darkgray;font-size:13px;}.control-section.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.button.__jsx-style-dynamic-selector:hover{opacity:0.5;}.status-message.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;font-size:12px;color:").concat(statusProps.color, ";max-width:630px;}.message.__jsx-style-dynamic-selector{padding-left:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvQ29kZS94Y2l0ZXIvc3JjL2NvbXBvbmVudHMvZmlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUp3QixBQUdrQyxBQVVNLEFBRzJCLEFBR3ZDLEFBS00sQUFLTixBQUdDLEFBS1EsQUFPRCxBQUlSLEFBS0ssQUFHQyxBQU9JLFlBVHJCLEdBVG1CLENBUEssQ0EwQkQsRUFsRHZCLFdBZ0NBLEdBMUJpQixBQVVqQixBQW1CaUIsR0FoQkEsQUFNUSxBQTBCTCxVQWhEcEIsTUFpRDJCLEtBMUJLLGlCQXBDVCxBQXFCQSxBQWdDRSxDQVV6QixVQTFCdUMsc0JBcEJiLEFBNkJPLEdBaEJQLFVBUTFCLCtDQXJDaUIsQUFxQkssUUFnQ0gsS0FwREEsS0FnQm5CLEFBS0EsR0FRQSxFQXdCdUMsS0FwRGhCLG1CQUNELFdBb0RGLEtBVHBCLEVBMUMwQixTQW9EMUIsYUFuRGtELDhDQUNsRCIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L0NvZGUveGNpdGVyL3NyYy9jb21wb25lbnRzL2ZpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEljb24sIHsgU2l6ZSwgUHJvcHMgYXMgSWNvblByb3BzIH0gZnJvbSAnY29tcG9uZW50cy9pY29uJztcbmltcG9ydCB7IGFiYnJldmlhdGVGaWxlU2l6ZSB9IGZyb20gJ2xpYi9ieXRlcyc7XG5pbXBvcnQgeyByZW1vdmVGaWxlIH0gZnJvbSAnYWN0aW9ucy9maWxlcyc7XG5pbXBvcnQgeyBGaWxlU3RhdHVzIH0gZnJvbSAnc3RvcmUvdHlwZXMnO1xuaW1wb3J0IGNvbG9yIGZyb20gJ3N0eWxlcy9jb2xvcic7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ3N0b3JlL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBmaWxlOiBGaWxlO1xuICAgIHNob3dMb2dzOiBGdW5jdGlvbjtcbn07XG5cbmVudW0gU3RhdHVzVHlwZSB7XG4gICAgSW5mbyxcbiAgICBTdWNjZXNzLFxuICAgIFdhcm5pbmcsXG4gICAgRXJyb3IsXG59XG5cbmNvbnN0IHN0YXR1c1R5cGVzID0ge1xuICAgIFtTdGF0dXNUeXBlLkluZm9dOiBbXG4gICAgICAgIEZpbGVTdGF0dXMuV2FpdGluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5Jbml0aWFsaXppbmcsXG4gICAgICAgIEZpbGVTdGF0dXMuUmVhZHksXG4gICAgICAgIEZpbGVTdGF0dXMuUHJlcGFyaW5nLFxuICAgICAgICBGaWxlU3RhdHVzLlBlbmRpbmcsXG4gICAgICAgIEZpbGVTdGF0dXMuQ29udmVydGluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5Eb3dubG9hZGluZyxcbiAgICBdLFxuICAgIFtTdGF0dXNUeXBlLlN1Y2Nlc3NdOiBbRmlsZVN0YXR1cy5Db21wbGV0ZWRdLFxuICAgIFtTdGF0dXNUeXBlLldhcm5pbmddOiBbXG4gICAgICAgIC8qVE9ETyovXG4gICAgXSxcbiAgICBbU3RhdHVzVHlwZS5FcnJvcl06IFtcbiAgICAgICAgLypUT0RPKi9cbiAgICBdLFxufTtcblxudHlwZSBUcmFzaEJ1dHRvblByb3BzID0ge1xuICAgIG9uQ2xpY2s6IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHZvaWQ7XG59O1xuXG5jb25zdCBUcmFzaEJ1dHRvbiA9IFJlYWN0Lm1lbW8oKHByb3BzOiBUcmFzaEJ1dHRvblByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgPEljb25cbiAgICAgICAgICAgIG5hbWU9XCJ0cmFzaFwiXG4gICAgICAgICAgICBzaXplPXtTaXplLlNtYWxsfVxuICAgICAgICAgICAgY29sb3I9e2NvbG9yLmNoZXR3b2RlQmx1ZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKSk7XG5cbmNvbnN0IEZpbGU6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9IHByb3BzID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3Qgc3RvcmVGaWxlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZSkgPT5cbiAgICAgICAgc3RhdGUuZmlsZXMuZmlsZXMuZmluZChmaWxlID0+IGZpbGUuaWQgPT09IHByb3BzLmZpbGUuaWQpLFxuICAgICk7XG5cbiAgICBjb25zdCBmaWxlU3RhdHVzID0gRmlsZVN0YXR1c1twcm9wcy5maWxlLnN0YXR1c107XG4gICAgY29uc3QgW3N0YXR1c1R5cGVdOiBBcnJheTxhbnk+ID1cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3RhdHVzVHlwZXMpLmZpbmQoKFt0eXBlLCBzdGF0dXNlc10pID0+XG4gICAgICAgICAgICBzdGF0dXNlcy5pbmNsdWRlcyhwcm9wcy5maWxlLnN0YXR1cyksXG4gICAgICAgICkgfHwgW107XG5cbiAgICBjb25zdCBzdGF0dXNQcm9wczogSWNvblByb3BzID0ge1xuICAgICAgICBuYW1lOiAnc3ViZGlyZWN0b3J5LXJpZ2h0JyxcbiAgICAgICAgY29sb3I6IGNvbG9yLmNoZXR3b2RlQmx1ZSxcbiAgICAgICAgc2l6ZTogU2l6ZS5FeHRyYVNtYWxsLFxuICAgIH07XG4gICAgc3dpdGNoICgrc3RhdHVzVHlwZSkge1xuICAgICAgICBjYXNlIFN0YXR1c1R5cGUuU3VjY2VzczpcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLm5hbWUgPSAnY2hlY2stY2lyY2xlJztcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLmNvbG9yID0gY29sb3IuZGVZb3JrR3JlZW47XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTdGF0dXNUeXBlLldhcm5pbmc6XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5uYW1lID0gJ2Vycm9yJztcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLmNvbG9yID0gY29sb3Iub2xkR29sZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFN0YXR1c1R5cGUuRXJyb3I6XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5zb2xpZCA9IHRydWU7XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5uYW1lID0gJ2Vycm9yLWNpcmNsZSc7XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5jb2xvciA9IGNvbG9yLnNhbG1vbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCBhbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoIChwcm9wcy5maWxlLnN0YXR1cykge1xuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuSW5pdGlhbGl6aW5nOlxuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuUHJlcGFyaW5nOlxuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuUGVuZGluZzpcbiAgICAgICAgY2FzZSBGaWxlU3RhdHVzLkNvbnZlcnRpbmc6XG4gICAgICAgIGNhc2UgRmlsZVN0YXR1cy5Eb3dubG9hZGluZzpcbiAgICAgICAgICAgIGFuaW1hdGlvbiA9ICdmbGFzaGluZyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVGaWxlOiBhbnkgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgKCkgPT4gZGlzcGF0Y2gocmVtb3ZlRmlsZShwcm9wcy5maWxlLmlkKSksXG4gICAgICAgIFtkaXNwYXRjaF1cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e1NpemUuTWVkaXVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvci53YWlrYXdhR3JheX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249e2FuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZW5hbWVcIj57cHJvcHMuZmlsZS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthYmJyZXZpYXRlRmlsZVNpemUocHJvcHMuZmlsZS5zaXplKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1cy1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIHsuLi5zdGF0dXNQcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj57ZmlsZVN0YXR1c308L2I+OnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZmlsZS5sb2dbcHJvcHMuZmlsZS5sb2cubGVuZ3RoIC0gMV19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2wtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2xpZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRlcm1pbmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e1NpemUuU21hbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3IuY2hldHdvZGVCbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zaG93TG9ncyhzdG9yZUZpbGUgPyBzdG9yZUZpbGUuaWQgOiBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxUcmFzaEJ1dHRvbiBvbkNsaWNrPXtyZW1vdmVGaWxlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmZpbGUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5saWxhY1doaXRlfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGU6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGU6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmNhdHNraWxsV2hpdGV9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZS1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogNztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGUtaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGUtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yLm1pbmVTaGFmdH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlc2l6ZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udHJvbC1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zdGF0dXMtbWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtzdGF0dXNQcm9wcy5jb2xvcn07XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGU7XG4iXX0= */\n/*@ sourceURL=/Users/andrew/Code/xciter/src/components/file.tsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (File);

/***/ })

})
//# sourceMappingURL=index.js.0fb835f930dcf188b0bf.hot-update.js.map