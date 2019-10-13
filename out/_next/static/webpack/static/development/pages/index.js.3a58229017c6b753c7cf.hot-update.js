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
/* harmony import */ var lib_strategize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/strategize */ "./src/lib/strategize.ts");
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
    return file.status === store_types__WEBPACK_IMPORTED_MODULE_8__["FileStatus"].Ready || file.status === store_types__WEBPACK_IMPORTED_MODULE_8__["FileStatus"].Pending;
  });
  var convert = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var _strategize = Object(lib_strategize__WEBPACK_IMPORTED_MODULE_6__["default"])(files),
        _strategize2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_strategize, 2),
        convertFiles = _strategize2[0],
        pendingFiles = _strategize2[1];

    convertFiles.forEach(function (file) {
      return dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_5__["createFile"])(file.id, file));
    });
    pendingFiles.forEach(function (file) {
      return dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_5__["updateStatus"])(file.id, store_types__WEBPACK_IMPORTED_MODULE_8__["FileStatus"].Pending));
    });
  }, [files]);
  var isButtonDisabled = !keyset || !readyFiles.length;
  var keysetStatusColor = keyset && keyset.name ? styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].deYorkGreen : styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].oldGold;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["438059845", [styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].chetwodeBlue, isButtonDisabled ? "'inherit'" : 0.9]]]) + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    onClick: props.openFileDialog,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["438059845", [styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].chetwodeBlue, isButtonDisabled ? "'inherit'" : 0.9]]]) + " " + "keyset-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(components_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    solid: true,
    name: "key",
    className: "keyset-icon",
    color: keysetStatusColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["438059845", [styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].chetwodeBlue, isButtonDisabled ? "'inherit'" : 0.9]]]) + " " + "keyset-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Keyset", ' ', keyset ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "loaded:", __jsx("code", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["438059845", [styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].chetwodeBlue, isButtonDisabled ? "'inherit'" : 0.9]]]) + " " + "keyset-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, keyset.name)) : 'not loaded')), __jsx("button", {
    onClick: convert,
    disabled: isButtonDisabled,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["438059845", [styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].chetwodeBlue, isButtonDisabled ? "'inherit'" : 0.9]]]) + " " + "convert-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "convert"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "438059845",
    dynamic: [styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].catskillWhite, keysetStatusColor, keyset ? 'normal' : 'bold', isButtonDisabled ? 0.5 : 1, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].chetwodeBlue, isButtonDisabled ? "'inherit'" : 0.9],
    __self: this
  }, ".footer.__jsx-style-dynamic-selector{height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 17px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:".concat(styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, ";border-top:1px solid ").concat(styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].catskillWhite, ";border-bottom-left-radius:15px;border-bottom-right-radius:15px;}.keyset-section.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;color:").concat(keysetStatusColor, ";font-weight:").concat(keyset ? 'normal' : 'bold', ";}.keyset-section.__jsx-style-dynamic-selector:hover{opacity:0.8;}.keyset-name.__jsx-style-dynamic-selector{padding:0 4px;font-size:14px;font-variant:normal;}.keyset-status.__jsx-style-dynamic-selector{margin:0;padding:0 4px;font-size:17px;font-variant:all-small-caps;}.convert-button.__jsx-style-dynamic-selector{border:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:20px;border-radius:4px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-variant:small-caps;padding:4px 25px 7px 25px;opacity:").concat(isButtonDisabled ? 0.5 : 1, ";color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].alabaster, ";background-color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_7__["default"].chetwodeBlue, ";}.convert-button.__jsx-style-dynamic-selector:hover{opacity:").concat(isButtonDisabled ? "'inherit'" : 0.9, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvQ29kZS94Y2l0ZXIvc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRHdCLEFBR2lDLEFBV0MsQUFRRCxBQUdFLEFBS0wsQUFNRyxBQVl5QixTQWpCdkIsR0EzQkQsQUFtQmpCLEFBY2lCLEVBWEUsU0FNQSxNQUxLLFFBc0J4QixDQWhCZ0MsV0FMaEMsaUJBTUEsUUFuQnVCLFlBVkQsQUFpQ0gsZUFDRyxHQWpDQyxlQWtDQSxnREF4QkYsOEJBVGEsZUFrQ04sd0JBQ0UsZ0JBekJYLFVBMEJzQixLQXpCRixnQ0EwQkEsR0F6Qk0sVUFYSyxzQkFxQ0EsU0F6QmxELGVBWHNELHNCQXFDdEQsNEJBcENtQywrQkFDQyxnQ0FDcEMiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9Db2RlL3hjaXRlci9zcmMvY29tcG9uZW50cy9mb290ZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSWNvbiwgeyBTaXplIH0gZnJvbSAnY29tcG9uZW50cy9pY29uJztcbmltcG9ydCB7IGNyZWF0ZUZpbGUsIHVwZGF0ZVN0YXR1cyB9IGZyb20gJ2FjdGlvbnMvZmlsZXMnO1xuaW1wb3J0IHsgTUFYX0NIVU5LX1RIUkVTSE9MRCB9IGZyb20gJ2xpYi9ieXRlcyc7XG5pbXBvcnQgc3RyYXRlZ2l6ZSBmcm9tICdsaWIvc3RyYXRlZ2l6ZSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnc3R5bGVzL2NvbG9yJztcbmltcG9ydCB7IEZpbGVTdGF0dXMsIFN0b3JlIH0gZnJvbSAnc3RvcmUvdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICAgIG9wZW5GaWxlRGlhbG9nOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgRm9vdGVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IFtrZXlzZXQsIGZpbGVzXSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmUpID0+IFtcbiAgICAgICAgc3RhdGUua2V5c2V0LmZpbGUsXG4gICAgICAgIHN0YXRlLmZpbGVzLmZpbGVzLFxuICAgIF0pO1xuICAgIGNvbnN0IHJlYWR5RmlsZXMgPSBmaWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlLnN0YXR1cyA9PT0gRmlsZVN0YXR1cy5SZWFkeSB8fCBmaWxlLnN0YXR1cyA9PT0gRmlsZVN0YXR1cy5QZW5kaW5nKTtcblxuICAgIGNvbnN0IGNvbnZlcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IFtjb252ZXJ0RmlsZXMsIHBlbmRpbmdGaWxlc10gPSBzdHJhdGVnaXplKGZpbGVzKTtcbiAgICAgICAgY29udmVydEZpbGVzLmZvckVhY2goZmlsZSA9PiBkaXNwYXRjaChjcmVhdGVGaWxlKGZpbGUuaWQsIGZpbGUpKSk7XG4gICAgICAgIHBlbmRpbmdGaWxlcy5mb3JFYWNoKGZpbGUgPT4gZGlzcGF0Y2godXBkYXRlU3RhdHVzKGZpbGUuaWQsIEZpbGVTdGF0dXMuUGVuZGluZykpKTtcbiAgICB9LCBbZmlsZXNdKTtcblxuICAgIGNvbnN0IGlzQnV0dG9uRGlzYWJsZWQgPSAha2V5c2V0IHx8ICFyZWFkeUZpbGVzLmxlbmd0aDtcbiAgICBjb25zdCBrZXlzZXRTdGF0dXNDb2xvciA9XG4gICAgICAgIGtleXNldCAmJiBrZXlzZXQubmFtZSA/IGNvbG9yLmRlWW9ya0dyZWVuIDogY29sb3Iub2xkR29sZDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleXNldC1zZWN0aW9uXCIgb25DbGljaz17cHJvcHMub3BlbkZpbGVEaWFsb2d9PlxuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIHNvbGlkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJrZXlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrZXlzZXQtaWNvblwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtrZXlzZXRTdGF0dXNDb2xvcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImtleXNldC1zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgS2V5c2V0eycgJ31cbiAgICAgICAgICAgICAgICAgICAge2tleXNldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImtleXNldC1uYW1lXCI+e2tleXNldC5uYW1lfTwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ25vdCBsb2FkZWQnXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y29udmVydH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNCdXR0b25EaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb252ZXJ0LWJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgY29udmVydFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxN3B4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuYWxhYmFzdGVyfTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7Y29sb3IuY2F0c2tpbGxXaGl0ZX07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAua2V5c2V0LXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtrZXlzZXRTdGF0dXNDb2xvcn07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAke2tleXNldCA/ICdub3JtYWwnIDogJ2JvbGQnfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmtleXNldC1zZWN0aW9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAua2V5c2V0LW5hbWUge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmtleXNldC1zdGF0dXMge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtdmFyaWFudDogYWxsLXNtYWxsLWNhcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb252ZXJ0LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDI1cHggN3B4IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICR7aXNCdXR0b25EaXNhYmxlZCA/IDAuNSA6IDF9O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvci5hbGFiYXN0ZXJ9O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmNoZXR3b2RlQmx1ZX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb252ZXJ0LWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICR7aXNCdXR0b25EaXNhYmxlZCA/IGAnaW5oZXJpdCdgIDogMC45fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXX0= */\n/*@ sourceURL=/Users/andrew/Code/xciter/src/components/footer.tsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.3a58229017c6b753c7cf.hot-update.js.map