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
/* harmony import */ var actions_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions/files */ "./src/actions/files.ts");
/* harmony import */ var lib_bytes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/bytes */ "./src/lib/bytes.ts");
/* harmony import */ var styles_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/color */ "./src/styles/color.ts");
/* harmony import */ var store_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! store/types */ "./src/store/types.ts");

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
    return file.status === store_types__WEBPACK_IMPORTED_MODULE_8__["FileStatus"].Ready;
  });
  var convert = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    // TODO: Strategize and dispatch conversion process action for specific files
    readyFiles.forEach(function (file) {
      return dispatch(file.size > lib_bytes__WEBPACK_IMPORTED_MODULE_6__["MAX_CHUNK_THRESHOLD"] ? Object(actions_files__WEBPACK_IMPORTED_MODULE_5__["createMultiPartFile"])(file.id, file) : Object(actions_files__WEBPACK_IMPORTED_MODULE_5__["createFile"])(file.id, file));
    });
  }, [readyFiles]);
  var isButtonDisabled = !keyset || !readyFiles.length;
  var keysetStatusColor = keyset && keyset.name ? styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].deYorkGreen : styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].oldGold;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1834756220", [styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].chetwodeBlue, !isButtonDisabled && "\n                    .convert-button:hover {\n                        opacity: 0.9;\n                    }\n                "]]]) + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    onClick: props.openFileDialog,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1834756220", [styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].chetwodeBlue, !isButtonDisabled && "\n                    .convert-button:hover {\n                        opacity: 0.9;\n                    }\n                "]]]) + " " + "keyset-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(components_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    solid: true,
    name: "key",
    className: "keyset-icon",
    color: keysetStatusColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1834756220", [styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].chetwodeBlue, !isButtonDisabled && "\n                    .convert-button:hover {\n                        opacity: 0.9;\n                    }\n                "]]]) + " " + "keyset-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Keyset", ' ', keyset ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "loaded:", __jsx("code", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1834756220", [styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].chetwodeBlue, !isButtonDisabled && "\n                    .convert-button:hover {\n                        opacity: 0.9;\n                    }\n                "]]]) + " " + "keyset-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, keyset.name)) : 'not loaded')), __jsx("button", {
    onClick: convert,
    disabled: isButtonDisabled,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1834756220", [styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].chetwodeBlue, !isButtonDisabled && "\n                    .convert-button:hover {\n                        opacity: 0.9;\n                    }\n                "]]]) + " " + "convert-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1834756220", [styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].chetwodeBlue, !isButtonDisabled && "\n                    .convert-button:hover {\n                        opacity: 0.9;\n                    }\n                "]]]) + " " + "convert-button-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "convert")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1834756220",
    dynamic: [styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].chetwodeBlue, !isButtonDisabled && "\n                    .convert-button:hover {\n                        opacity: 0.9;\n                    }\n                "],
    __self: this
  }, ".footer.__jsx-style-dynamic-selector{height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 17px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:".concat(styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, ";border-top:1px solid ").concat(styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].catskillWhite, ";border-bottom-left-radius:15px;border-bottom-right-radius:15px;}.keyset-section.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;color:").concat(keysetStatusColor, ";font-weight:").concat(keyset ? 'normal' : 'bold', ";}.keyset-section.__jsx-style-dynamic-selector:hover{opacity:0.8;}.keyset-name.__jsx-style-dynamic-selector{padding:0 4px;font-size:14px;font-variant:normal;}.keyset-status.__jsx-style-dynamic-selector{margin:0;padding:0 4px;font-size:17px;font-variant:all-small-caps;}.convert-button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:20px;padding:4px 25px;border-radius:4px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-variant:petite-caps;opacity:").concat(isButtonDisabled ? 0.5 : 1, ";color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, ";background-color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].chetwodeBlue, ";}").concat(!isButtonDisabled && "\n                    .convert-button:hover {\n                        opacity: 0.9;\n                    }\n                ", ".__jsx-style-dynamic-selector .convert-button-text.__jsx-style-dynamic-selector{margin-left:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvQ29kZS94Y2l0ZXIvc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRHdCLEFBR2lDLEFBV0MsQUFRRCxBQUdFLEFBS0wsQUFNSSxBQVlHLFNBakJGLEdBM0JELEFBbUJqQixFQUdtQixFQXVCbkIsT0FqQm1CLE1BTEssU0FNUSxXQUxoQyxpQkFNQSxRQW5CdUIsQUFzQkosWUFoQ0csR0FpQ0QsZUFoQ0UsRUFpQ0Qsa0JBQ0MsMkNBeEJGLDhCQVRhLG9CQWtDTCx5QkFDWSxVQXpCdEIsZUFDb0IsWUF5QkEsdUJBeEJNLFVBWEssRUFvQ0EsNkJBeEJsRCxlQVhzRCxFQW9DdEQsZ0RBbkNtQywrQkFDQyxnQ0FDcEMiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9Db2RlL3hjaXRlci9zcmMvY29tcG9uZW50cy9mb290ZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSWNvbiwgeyBTaXplIH0gZnJvbSAnY29tcG9uZW50cy9pY29uJztcbmltcG9ydCB7IGNyZWF0ZUZpbGUsIGNyZWF0ZU11bHRpUGFydEZpbGUgfSBmcm9tICdhY3Rpb25zL2ZpbGVzJztcbmltcG9ydCB7IE1BWF9DSFVOS19USFJFU0hPTEQgfSBmcm9tICdsaWIvYnl0ZXMnO1xuaW1wb3J0IGNvbG9yIGZyb20gJ3N0eWxlcy9jb2xvcic7XG5pbXBvcnQgeyBGaWxlU3RhdHVzLCBTdG9yZSB9IGZyb20gJ3N0b3JlL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBvcGVuRmlsZURpYWxvZzogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IEZvb3RlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBba2V5c2V0LCBmaWxlc10gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlKSA9PiBbXG4gICAgICAgIHN0YXRlLmtleXNldC5maWxlLFxuICAgICAgICBzdGF0ZS5maWxlcy5maWxlcyxcbiAgICBdKTtcbiAgICBjb25zdCByZWFkeUZpbGVzID0gZmlsZXMuZmlsdGVyKGZpbGUgPT4gZmlsZS5zdGF0dXMgPT09IEZpbGVTdGF0dXMuUmVhZHkpO1xuXG4gICAgY29uc3QgY29udmVydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgLy8gVE9ETzogU3RyYXRlZ2l6ZSBhbmQgZGlzcGF0Y2ggY29udmVyc2lvbiBwcm9jZXNzIGFjdGlvbiBmb3Igc3BlY2lmaWMgZmlsZXNcbiAgICAgICAgcmVhZHlGaWxlcy5mb3JFYWNoKGZpbGUgPT5cbiAgICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgICAgIGZpbGUuc2l6ZSA+IE1BWF9DSFVOS19USFJFU0hPTERcbiAgICAgICAgICAgICAgICAgICAgPyBjcmVhdGVNdWx0aVBhcnRGaWxlKGZpbGUuaWQsIGZpbGUpXG4gICAgICAgICAgICAgICAgICAgIDogY3JlYXRlRmlsZShmaWxlLmlkLCBmaWxlKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICk7XG4gICAgfSwgW3JlYWR5RmlsZXNdKTtcblxuICAgIGNvbnN0IGlzQnV0dG9uRGlzYWJsZWQgPSAha2V5c2V0IHx8ICFyZWFkeUZpbGVzLmxlbmd0aDtcbiAgICBjb25zdCBrZXlzZXRTdGF0dXNDb2xvciA9XG4gICAgICAgIGtleXNldCAmJiBrZXlzZXQubmFtZSA/IGNvbG9yLmRlWW9ya0dyZWVuIDogY29sb3Iub2xkR29sZDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleXNldC1zZWN0aW9uXCIgb25DbGljaz17cHJvcHMub3BlbkZpbGVEaWFsb2d9PlxuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIHNvbGlkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJrZXlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrZXlzZXQtaWNvblwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtrZXlzZXRTdGF0dXNDb2xvcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImtleXNldC1zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgS2V5c2V0eycgJ31cbiAgICAgICAgICAgICAgICAgICAge2tleXNldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImtleXNldC1uYW1lXCI+e2tleXNldC5uYW1lfTwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ25vdCBsb2FkZWQnXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y29udmVydH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNCdXR0b25EaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb252ZXJ0LWJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb252ZXJ0LWJ1dHRvbi10ZXh0XCI+Y29udmVydDwvZGl2PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxN3B4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuYWxhYmFzdGVyfTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7Y29sb3IuY2F0c2tpbGxXaGl0ZX07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAua2V5c2V0LXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtrZXlzZXRTdGF0dXNDb2xvcn07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAke2tleXNldCA/ICdub3JtYWwnIDogJ2JvbGQnfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmtleXNldC1zZWN0aW9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAua2V5c2V0LW5hbWUge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmtleXNldC1zdGF0dXMge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtdmFyaWFudDogYWxsLXNtYWxsLWNhcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb252ZXJ0LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogJHtpc0J1dHRvbkRpc2FibGVkID8gMC41IDogMX07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yLmFsYWJhc3Rlcn07XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuY2hldHdvZGVCbHVlfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJHshaXNCdXR0b25EaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIC5jb252ZXJ0LWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIC5jb252ZXJ0LWJ1dHRvbi10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXX0= */\n/*@ sourceURL=/Users/andrew/Code/xciter/src/components/footer.tsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.607652c43ed3e6e0c31f.hot-update.js.map