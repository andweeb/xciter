webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/footer.tsx":
/*!***********************************!*\
  !*** ./src/components/footer.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/icon */ "./src/components/icon.tsx");
/* harmony import */ var lib_strategize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/strategize */ "./src/lib/strategize.ts");
/* harmony import */ var styles_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/color */ "./src/styles/color.ts");
/* harmony import */ var store_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store/types */ "./src/store/types.ts");

var _jsxFileName = "/Users/andrew/Code/xciter/src/components/footer.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Footer = function Footer(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return [state.keyset.file, state.files.files];
  }),
      _useSelector2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSelector, 2),
      keyset = _useSelector2[0],
      files = _useSelector2[1];

  var readyFiles = files.filter(function (file) {
    return file.status === store_types__WEBPACK_IMPORTED_MODULE_7__["FileStatus"].Ready || file.status === store_types__WEBPACK_IMPORTED_MODULE_7__["FileStatus"].Pending;
  });
  var convert = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var _strategize = Object(lib_strategize__WEBPACK_IMPORTED_MODULE_5__["default"])(files),
        _strategize2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_strategize, 2),
        convertFiles = _strategize2[0],
        pendingFiles = _strategize2[1]; // convertFiles.forEach(file => dispatch(createFile(file.id, file)));
    // pendingFiles.forEach(file => dispatch(updateStatus(file.id, FileStatus.Pending)));


    console.log([convertFiles, pendingFiles]);
  }, [files]);
  var isButtonDisabled = !keyset || !readyFiles.length;
  var keysetStatusColor = keyset && keyset.name ? styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].deYorkGreen : styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].oldGold;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["438059845", [styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].chetwodeBlue, isButtonDisabled ? "'inherit'" : 0.9]]]) + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    onClick: props.openFileDialog,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["438059845", [styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].chetwodeBlue, isButtonDisabled ? "'inherit'" : 0.9]]]) + " " + "keyset-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(components_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    solid: true,
    name: "key",
    className: "keyset-icon",
    color: keysetStatusColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["438059845", [styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].chetwodeBlue, isButtonDisabled ? "'inherit'" : 0.9]]]) + " " + "keyset-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Keyset", ' ', keyset ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "loaded:", __jsx("code", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["438059845", [styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].chetwodeBlue, isButtonDisabled ? "'inherit'" : 0.9]]]) + " " + "keyset-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, keyset.name)) : 'not loaded')), __jsx("button", {
    onClick: convert,
    disabled: isButtonDisabled,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["438059845", [styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].chetwodeBlue, isButtonDisabled ? "'inherit'" : 0.9]]]) + " " + "convert-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "convert"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "438059845",
    dynamic: [styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].chetwodeBlue, isButtonDisabled ? "'inherit'" : 0.9],
    __self: this
  }, ".footer.__jsx-style-dynamic-selector{height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 17px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:".concat(styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].alabaster, ";border-top:1px solid ").concat(styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].catskillWhite, ";border-bottom-left-radius:15px;border-bottom-right-radius:15px;}.keyset-section.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;color:").concat(keysetStatusColor, ";font-weight:").concat(keyset ? 'normal' : 'bold', ";}.keyset-section.__jsx-style-dynamic-selector:hover{opacity:0.8;}.keyset-name.__jsx-style-dynamic-selector{padding:0 4px;font-size:14px;font-variant:normal;}.keyset-status.__jsx-style-dynamic-selector{margin:0;padding:0 4px;font-size:17px;font-variant:all-small-caps;}.convert-button.__jsx-style-dynamic-selector{border:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:20px;border-radius:4px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-variant:small-caps;padding:4px 25px 7px 25px;opacity:").concat(isButtonDisabled ? 0.5 : 1, ";color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].alabaster, ";background-color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_6__["default"].chetwodeBlue, ";}.convert-button.__jsx-style-dynamic-selector:hover{opacity:").concat(isButtonDisabled ? "'inherit'" : 0.9, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvQ29kZS94Y2l0ZXIvc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RHdCLEFBR2lDLEFBV0MsQUFRRCxBQUdFLEFBS0wsQUFNRyxBQVl5QixTQWpCdkIsR0EzQkQsQUFtQmpCLEFBY2lCLEVBWEUsU0FNQSxNQUxLLFFBc0J4QixDQWhCZ0MsV0FMaEMsaUJBTUEsUUFuQnVCLFlBVkQsQUFpQ0gsZUFDRyxHQWpDQyxlQWtDQSxnREF4QkYsOEJBVGEsZUFrQ04sd0JBQ0UsZ0JBekJYLFVBMEJzQixLQXpCRixnQ0EwQkEsR0F6Qk0sVUFYSyxzQkFxQ0EsU0F6QmxELGVBWHNELHNCQXFDdEQsNEJBcENtQywrQkFDQyxnQ0FDcEMiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9Db2RlL3hjaXRlci9zcmMvY29tcG9uZW50cy9mb290ZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSWNvbiwgeyBTaXplIH0gZnJvbSAnY29tcG9uZW50cy9pY29uJztcbmltcG9ydCB7IGNyZWF0ZUZpbGUsIHVwZGF0ZVN0YXR1cyB9IGZyb20gJ2FjdGlvbnMvZmlsZXMnO1xuaW1wb3J0IHsgTUFYX0NIVU5LX1RIUkVTSE9MRCB9IGZyb20gJ2xpYi9ieXRlcyc7XG5pbXBvcnQgc3RyYXRlZ2l6ZSBmcm9tICdsaWIvc3RyYXRlZ2l6ZSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnc3R5bGVzL2NvbG9yJztcbmltcG9ydCB7IEZpbGVTdGF0dXMsIFN0b3JlIH0gZnJvbSAnc3RvcmUvdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICAgIG9wZW5GaWxlRGlhbG9nOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgRm9vdGVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IFtrZXlzZXQsIGZpbGVzXSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmUpID0+IFtcbiAgICAgICAgc3RhdGUua2V5c2V0LmZpbGUsXG4gICAgICAgIHN0YXRlLmZpbGVzLmZpbGVzLFxuICAgIF0pO1xuICAgIGNvbnN0IHJlYWR5RmlsZXMgPSBmaWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlLnN0YXR1cyA9PT0gRmlsZVN0YXR1cy5SZWFkeSB8fCBmaWxlLnN0YXR1cyA9PT0gRmlsZVN0YXR1cy5QZW5kaW5nKTtcblxuICAgIGNvbnN0IGNvbnZlcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IFtjb252ZXJ0RmlsZXMsIHBlbmRpbmdGaWxlc10gPSBzdHJhdGVnaXplKGZpbGVzKTtcbiAgICAgICAgLy8gY29udmVydEZpbGVzLmZvckVhY2goZmlsZSA9PiBkaXNwYXRjaChjcmVhdGVGaWxlKGZpbGUuaWQsIGZpbGUpKSk7XG4gICAgICAgIC8vIHBlbmRpbmdGaWxlcy5mb3JFYWNoKGZpbGUgPT4gZGlzcGF0Y2godXBkYXRlU3RhdHVzKGZpbGUuaWQsIEZpbGVTdGF0dXMuUGVuZGluZykpKTtcbiAgICAgICAgY29uc29sZS5sb2coW2NvbnZlcnRGaWxlcywgcGVuZGluZ0ZpbGVzXSk7XG4gICAgfSwgW2ZpbGVzXSk7XG5cbiAgICBjb25zdCBpc0J1dHRvbkRpc2FibGVkID0gIWtleXNldCB8fCAhcmVhZHlGaWxlcy5sZW5ndGg7XG4gICAgY29uc3Qga2V5c2V0U3RhdHVzQ29sb3IgPVxuICAgICAgICBrZXlzZXQgJiYga2V5c2V0Lm5hbWUgPyBjb2xvci5kZVlvcmtHcmVlbiA6IGNvbG9yLm9sZEdvbGQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXlzZXQtc2VjdGlvblwiIG9uQ2xpY2s9e3Byb3BzLm9wZW5GaWxlRGlhbG9nfT5cbiAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICBzb2xpZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwia2V5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia2V5c2V0LWljb25cIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17a2V5c2V0U3RhdHVzQ29sb3J9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJrZXlzZXQtc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgIEtleXNldHsnICd9XG4gICAgICAgICAgICAgICAgICAgIHtrZXlzZXQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJrZXlzZXQtbmFtZVwiPntrZXlzZXQubmFtZX08L2NvZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICdub3QgbG9hZGVkJ1xuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbnZlcnR9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzQnV0dG9uRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udmVydC1idXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIGNvbnZlcnRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTdweDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmFsYWJhc3Rlcn07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAke2NvbG9yLmNhdHNraWxsV2hpdGV9O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmtleXNldC1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7a2V5c2V0U3RhdHVzQ29sb3J9O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJHtrZXlzZXQgPyAnbm9ybWFsJyA6ICdib2xkJ307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5rZXlzZXQtc2VjdGlvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmtleXNldC1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5rZXlzZXQtc3RhdHVzIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXZhcmlhbnQ6IGFsbC1zbWFsbC1jYXBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udmVydC1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAyNXB4IDdweCAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAke2lzQnV0dG9uRGlzYWJsZWQgPyAwLjUgOiAxfTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3IuYWxhYmFzdGVyfTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5jaGV0d29kZUJsdWV9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udmVydC1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAke2lzQnV0dG9uRGlzYWJsZWQgPyBgJ2luaGVyaXQnYCA6IDAuOX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl19 */\n/*@ sourceURL=/Users/andrew/Code/xciter/src/components/footer.tsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.f75e52c7dc27ef2941ae.hot-update.js.map