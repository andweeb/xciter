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
  }, ".button.jsx-1253862848:hover{opacity:0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvQ29kZS94Y2l0ZXIvc3JjL2NvbXBvbmVudHMvZmlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RvQixBQUc2QixZQUNoQiIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L0NvZGUveGNpdGVyL3NyYy9jb21wb25lbnRzL2ZpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEljb24sIHsgU2l6ZSwgUHJvcHMgYXMgSWNvblByb3BzIH0gZnJvbSAnY29tcG9uZW50cy9pY29uJztcbmltcG9ydCB7IGFiYnJldmlhdGVGaWxlU2l6ZSB9IGZyb20gJ2xpYi9ieXRlcyc7XG5pbXBvcnQgeyByZW1vdmVGaWxlIH0gZnJvbSAnYWN0aW9ucy9maWxlcyc7XG5pbXBvcnQgeyBGaWxlU3RhdHVzIH0gZnJvbSAnc3RvcmUvdHlwZXMnO1xuaW1wb3J0IGNvbG9yIGZyb20gJ3N0eWxlcy9jb2xvcic7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ3N0b3JlL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBmaWxlOiBGaWxlO1xuICAgIHNob3dMb2dzOiBGdW5jdGlvbjtcbn07XG5cbmVudW0gU3RhdHVzVHlwZSB7XG4gICAgSW5mbyxcbiAgICBTdWNjZXNzLFxuICAgIFdhcm5pbmcsXG4gICAgRXJyb3IsXG59XG5cbmNvbnN0IHN0YXR1c1R5cGVzID0ge1xuICAgIFtTdGF0dXNUeXBlLkluZm9dOiBbXG4gICAgICAgIEZpbGVTdGF0dXMuV2FpdGluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5Jbml0aWFsaXppbmcsXG4gICAgICAgIEZpbGVTdGF0dXMuUmVhZHksXG4gICAgICAgIEZpbGVTdGF0dXMuUHJlcGFyaW5nLFxuICAgICAgICBGaWxlU3RhdHVzLlBlbmRpbmcsXG4gICAgICAgIEZpbGVTdGF0dXMuQ29udmVydGluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5Eb3dubG9hZGluZyxcbiAgICBdLFxuICAgIFtTdGF0dXNUeXBlLlN1Y2Nlc3NdOiBbRmlsZVN0YXR1cy5Db21wbGV0ZWRdLFxuICAgIFtTdGF0dXNUeXBlLldhcm5pbmddOiBbXG4gICAgICAgIC8qVE9ETyovXG4gICAgXSxcbiAgICBbU3RhdHVzVHlwZS5FcnJvcl06IFtcbiAgICAgICAgLypUT0RPKi9cbiAgICBdLFxufTtcblxudHlwZSBUcmFzaEJ1dHRvblByb3BzID0ge1xuICAgIG9uQ2xpY2s6IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHZvaWQ7XG59O1xuXG5jb25zdCBUcmFzaEJ1dHRvbiA9IFJlYWN0Lm1lbW8oKHByb3BzOiBUcmFzaEJ1dHRvblByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgPEljb25cbiAgICAgICAgICAgIG5hbWU9XCJ0cmFzaFwiXG4gICAgICAgICAgICBzaXplPXtTaXplLlNtYWxsfVxuICAgICAgICAgICAgY29sb3I9e2NvbG9yLmNoZXR3b2RlQmx1ZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKSk7XG5cbmNvbnN0IEZpbGU6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9IHByb3BzID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3Qgc3RvcmVGaWxlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZSkgPT5cbiAgICAgICAgc3RhdGUuZmlsZXMuZmlsZXMuZmluZChmaWxlID0+IGZpbGUuaWQgPT09IHByb3BzLmZpbGUuaWQpLFxuICAgICk7XG5cbiAgICBjb25zdCBmaWxlU3RhdHVzID0gRmlsZVN0YXR1c1twcm9wcy5maWxlLnN0YXR1c107XG4gICAgY29uc3QgW3N0YXR1c1R5cGVdOiBBcnJheTxhbnk+ID1cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3RhdHVzVHlwZXMpLmZpbmQoKFt0eXBlLCBzdGF0dXNlc10pID0+XG4gICAgICAgICAgICBzdGF0dXNlcy5pbmNsdWRlcyhwcm9wcy5maWxlLnN0YXR1cyksXG4gICAgICAgICkgfHwgW107XG5cbiAgICBjb25zdCBzdGF0dXNQcm9wczogSWNvblByb3BzID0ge1xuICAgICAgICBuYW1lOiAnc3ViZGlyZWN0b3J5LXJpZ2h0JyxcbiAgICAgICAgY29sb3I6IGNvbG9yLmNoZXR3b2RlQmx1ZSxcbiAgICAgICAgc2l6ZTogU2l6ZS5FeHRyYVNtYWxsLFxuICAgIH07XG4gICAgc3dpdGNoICgrc3RhdHVzVHlwZSkge1xuICAgICAgICBjYXNlIFN0YXR1c1R5cGUuU3VjY2VzczpcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLm5hbWUgPSAnY2hlY2stY2lyY2xlJztcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLmNvbG9yID0gY29sb3IuZGVZb3JrR3JlZW47XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTdGF0dXNUeXBlLldhcm5pbmc6XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5uYW1lID0gJ2Vycm9yJztcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLmNvbG9yID0gY29sb3Iub2xkR29sZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFN0YXR1c1R5cGUuRXJyb3I6XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5zb2xpZCA9IHRydWU7XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5uYW1lID0gJ2Vycm9yLWNpcmNsZSc7XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5jb2xvciA9IGNvbG9yLnNhbG1vbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCBhbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoIChwcm9wcy5maWxlLnN0YXR1cykge1xuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuSW5pdGlhbGl6aW5nOlxuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuUHJlcGFyaW5nOlxuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuUGVuZGluZzpcbiAgICAgICAgY2FzZSBGaWxlU3RhdHVzLkNvbnZlcnRpbmc6XG4gICAgICAgIGNhc2UgRmlsZVN0YXR1cy5Eb3dubG9hZGluZzpcbiAgICAgICAgICAgIGFuaW1hdGlvbiA9ICdmbGFzaGluZyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVGaWxlID0gdXNlQ2FsbGJhY2soXG4gICAgICAgICgpID0+IGRpc3BhdGNoKHJlbW92ZUZpbGUocHJvcHMuZmlsZS5pZCkpLFxuICAgICAgICBbZGlzcGF0Y2hdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2xpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtTaXplLk1lZGl1bX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3Iud2Fpa2F3YUdyYXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPXthbmltYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGVuYW1lXCI+e3Byb3BzLmZpbGUubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZXNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWJicmV2aWF0ZUZpbGVTaXplKHByb3BzLmZpbGUuc2l6ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0dXMtbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiB7Li4uc3RhdHVzUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2ZpbGVTdGF0dXN9PC9iPjp7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmZpbGUubG9nW3Byb3BzLmZpbGUubG9nLmxlbmd0aCAtIDFdfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgc29saWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZXJtaW5hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtTaXplLlNtYWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yLmNoZXR3b2RlQmx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2hvd0xvZ3Moc3RvcmVGaWxlID8gc3RvcmVGaWxlLmlkIDogbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8VHJhc2hCdXR0b24gb25DbGljaz17cmVtb3ZlRmlsZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5maWxlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IubGlsYWNXaGl0ZX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5jYXRza2lsbFdoaXRlfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGUtc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDc7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlLWluZm8ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE0O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZW5hbWUge1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvci5taW5lU2hhZnR9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZXNpemUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZGFya2dyYXk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRyb2wtc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3RhdHVzLW1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7c3RhdHVzUHJvcHMuY29sb3J9O1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlO1xuIl19 */\n/*@ sourceURL=/Users/andrew/Code/xciter/src/components/file.tsx */"));
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
  }, ".file.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;cursor:default;margin-bottom:10px;border-radius:5px;box-sizing:border-box;background-color:".concat(styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, ";}.file.__jsx-style-dynamic-selector:last-of-type{margin-bottom:20px;}.file.__jsx-style-dynamic-selector:hover{background-color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, ";}.file-section.__jsx-style-dynamic-selector{-webkit-flex:7;-ms-flex:7;flex:7;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.file-info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:5px;}.file-icon.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}.details.__jsx-style-dynamic-selector{-webkit-flex:14;-ms-flex:14;flex:14;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.filename.__jsx-style-dynamic-selector{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, ";}.filesize.__jsx-style-dynamic-selector{color:darkgray;font-size:13px;}.control-section.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.button.__jsx-style-dynamic-selector:hover{opacity:0.5;}.status-message.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;font-size:12px;color:").concat(statusProps.color, ";max-width:630px;}.message.__jsx-style-dynamic-selector{padding-left:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvQ29kZS94Y2l0ZXIvc3JjL2NvbXBvbmVudHMvZmlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUp3QixBQUdrQyxBQVVNLEFBRzJCLEFBR3ZDLEFBS00sQUFLTixBQUdDLEFBS1EsQUFPRCxBQUlSLEFBS0ssQUFHQyxBQU9JLFlBVHJCLEdBVG1CLENBUEssQ0EwQkQsRUFsRHZCLFdBZ0NBLEdBMUJpQixBQVVqQixBQW1CaUIsR0FoQkEsQUFNUSxBQTBCTCxVQWhEcEIsTUFpRDJCLEtBMUJLLGlCQXBDVCxBQXFCQSxBQWdDRSxDQVV6QixVQTFCdUMsc0JBcEJiLEFBNkJPLEdBaEJQLFVBUTFCLCtDQXJDaUIsQUFxQkssUUFnQ0gsS0FwREEsS0FnQm5CLEFBS0EsR0FRQSxFQXdCdUMsS0FwRGhCLG1CQUNELFdBb0RGLEtBVHBCLEVBMUMwQixTQW9EMUIsYUFuRGtELDhDQUNsRCIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L0NvZGUveGNpdGVyL3NyYy9jb21wb25lbnRzL2ZpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEljb24sIHsgU2l6ZSwgUHJvcHMgYXMgSWNvblByb3BzIH0gZnJvbSAnY29tcG9uZW50cy9pY29uJztcbmltcG9ydCB7IGFiYnJldmlhdGVGaWxlU2l6ZSB9IGZyb20gJ2xpYi9ieXRlcyc7XG5pbXBvcnQgeyByZW1vdmVGaWxlIH0gZnJvbSAnYWN0aW9ucy9maWxlcyc7XG5pbXBvcnQgeyBGaWxlU3RhdHVzIH0gZnJvbSAnc3RvcmUvdHlwZXMnO1xuaW1wb3J0IGNvbG9yIGZyb20gJ3N0eWxlcy9jb2xvcic7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ3N0b3JlL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBmaWxlOiBGaWxlO1xuICAgIHNob3dMb2dzOiBGdW5jdGlvbjtcbn07XG5cbmVudW0gU3RhdHVzVHlwZSB7XG4gICAgSW5mbyxcbiAgICBTdWNjZXNzLFxuICAgIFdhcm5pbmcsXG4gICAgRXJyb3IsXG59XG5cbmNvbnN0IHN0YXR1c1R5cGVzID0ge1xuICAgIFtTdGF0dXNUeXBlLkluZm9dOiBbXG4gICAgICAgIEZpbGVTdGF0dXMuV2FpdGluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5Jbml0aWFsaXppbmcsXG4gICAgICAgIEZpbGVTdGF0dXMuUmVhZHksXG4gICAgICAgIEZpbGVTdGF0dXMuUHJlcGFyaW5nLFxuICAgICAgICBGaWxlU3RhdHVzLlBlbmRpbmcsXG4gICAgICAgIEZpbGVTdGF0dXMuQ29udmVydGluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5Eb3dubG9hZGluZyxcbiAgICBdLFxuICAgIFtTdGF0dXNUeXBlLlN1Y2Nlc3NdOiBbRmlsZVN0YXR1cy5Db21wbGV0ZWRdLFxuICAgIFtTdGF0dXNUeXBlLldhcm5pbmddOiBbXG4gICAgICAgIC8qVE9ETyovXG4gICAgXSxcbiAgICBbU3RhdHVzVHlwZS5FcnJvcl06IFtcbiAgICAgICAgLypUT0RPKi9cbiAgICBdLFxufTtcblxudHlwZSBUcmFzaEJ1dHRvblByb3BzID0ge1xuICAgIG9uQ2xpY2s6IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHZvaWQ7XG59O1xuXG5jb25zdCBUcmFzaEJ1dHRvbiA9IFJlYWN0Lm1lbW8oKHByb3BzOiBUcmFzaEJ1dHRvblByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgPEljb25cbiAgICAgICAgICAgIG5hbWU9XCJ0cmFzaFwiXG4gICAgICAgICAgICBzaXplPXtTaXplLlNtYWxsfVxuICAgICAgICAgICAgY29sb3I9e2NvbG9yLmNoZXR3b2RlQmx1ZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKSk7XG5cbmNvbnN0IEZpbGU6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9IHByb3BzID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3Qgc3RvcmVGaWxlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZSkgPT5cbiAgICAgICAgc3RhdGUuZmlsZXMuZmlsZXMuZmluZChmaWxlID0+IGZpbGUuaWQgPT09IHByb3BzLmZpbGUuaWQpLFxuICAgICk7XG5cbiAgICBjb25zdCBmaWxlU3RhdHVzID0gRmlsZVN0YXR1c1twcm9wcy5maWxlLnN0YXR1c107XG4gICAgY29uc3QgW3N0YXR1c1R5cGVdOiBBcnJheTxhbnk+ID1cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3RhdHVzVHlwZXMpLmZpbmQoKFt0eXBlLCBzdGF0dXNlc10pID0+XG4gICAgICAgICAgICBzdGF0dXNlcy5pbmNsdWRlcyhwcm9wcy5maWxlLnN0YXR1cyksXG4gICAgICAgICkgfHwgW107XG5cbiAgICBjb25zdCBzdGF0dXNQcm9wczogSWNvblByb3BzID0ge1xuICAgICAgICBuYW1lOiAnc3ViZGlyZWN0b3J5LXJpZ2h0JyxcbiAgICAgICAgY29sb3I6IGNvbG9yLmNoZXR3b2RlQmx1ZSxcbiAgICAgICAgc2l6ZTogU2l6ZS5FeHRyYVNtYWxsLFxuICAgIH07XG4gICAgc3dpdGNoICgrc3RhdHVzVHlwZSkge1xuICAgICAgICBjYXNlIFN0YXR1c1R5cGUuU3VjY2VzczpcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLm5hbWUgPSAnY2hlY2stY2lyY2xlJztcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLmNvbG9yID0gY29sb3IuZGVZb3JrR3JlZW47XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTdGF0dXNUeXBlLldhcm5pbmc6XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5uYW1lID0gJ2Vycm9yJztcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLmNvbG9yID0gY29sb3Iub2xkR29sZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFN0YXR1c1R5cGUuRXJyb3I6XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5zb2xpZCA9IHRydWU7XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5uYW1lID0gJ2Vycm9yLWNpcmNsZSc7XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5jb2xvciA9IGNvbG9yLnNhbG1vbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCBhbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoIChwcm9wcy5maWxlLnN0YXR1cykge1xuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuSW5pdGlhbGl6aW5nOlxuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuUHJlcGFyaW5nOlxuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuUGVuZGluZzpcbiAgICAgICAgY2FzZSBGaWxlU3RhdHVzLkNvbnZlcnRpbmc6XG4gICAgICAgIGNhc2UgRmlsZVN0YXR1cy5Eb3dubG9hZGluZzpcbiAgICAgICAgICAgIGFuaW1hdGlvbiA9ICdmbGFzaGluZyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVGaWxlID0gdXNlQ2FsbGJhY2soXG4gICAgICAgICgpID0+IGRpc3BhdGNoKHJlbW92ZUZpbGUocHJvcHMuZmlsZS5pZCkpLFxuICAgICAgICBbZGlzcGF0Y2hdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2xpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtTaXplLk1lZGl1bX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3Iud2Fpa2F3YUdyYXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPXthbmltYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGVuYW1lXCI+e3Byb3BzLmZpbGUubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZXNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWJicmV2aWF0ZUZpbGVTaXplKHByb3BzLmZpbGUuc2l6ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0dXMtbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiB7Li4uc3RhdHVzUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2ZpbGVTdGF0dXN9PC9iPjp7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmZpbGUubG9nW3Byb3BzLmZpbGUubG9nLmxlbmd0aCAtIDFdfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgc29saWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZXJtaW5hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtTaXplLlNtYWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yLmNoZXR3b2RlQmx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2hvd0xvZ3Moc3RvcmVGaWxlID8gc3RvcmVGaWxlLmlkIDogbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8VHJhc2hCdXR0b24gb25DbGljaz17cmVtb3ZlRmlsZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5maWxlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IubGlsYWNXaGl0ZX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5jYXRza2lsbFdoaXRlfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGUtc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDc7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlLWluZm8ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE0O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZW5hbWUge1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvci5taW5lU2hhZnR9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZXNpemUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZGFya2dyYXk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRyb2wtc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3RhdHVzLW1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7c3RhdHVzUHJvcHMuY29sb3J9O1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlO1xuIl19 */\n/*@ sourceURL=/Users/andrew/Code/xciter/src/components/file.tsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (File);

/***/ })

})
//# sourceMappingURL=index.js.932e4095310999e5d416.hot-update.js.map