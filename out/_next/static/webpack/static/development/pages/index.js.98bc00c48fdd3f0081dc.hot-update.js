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
/* harmony import */ var actions_files__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! actions/files */ "./src/actions/files.ts");
/* harmony import */ var store_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/types */ "./src/store/types.ts");
/* harmony import */ var styles_color__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styles/color */ "./src/styles/color.ts");





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

var statusTypes = (_statusTypes = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_statusTypes, StatusType.Info, [store_types__WEBPACK_IMPORTED_MODULE_10__["FileStatus"].Waiting, store_types__WEBPACK_IMPORTED_MODULE_10__["FileStatus"].Initializing, store_types__WEBPACK_IMPORTED_MODULE_10__["FileStatus"].Ready, store_types__WEBPACK_IMPORTED_MODULE_10__["FileStatus"].Preparing, store_types__WEBPACK_IMPORTED_MODULE_10__["FileStatus"].Pending, store_types__WEBPACK_IMPORTED_MODULE_10__["FileStatus"].Converting, store_types__WEBPACK_IMPORTED_MODULE_10__["FileStatus"].Downloading]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_statusTypes, StatusType.Success, [store_types__WEBPACK_IMPORTED_MODULE_10__["FileStatus"].Completed]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_statusTypes, StatusType.Warning, [
  /*TODO*/
]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_statusTypes, StatusType.Error, [
  /*TODO*/
]), _statusTypes);

var File = function File(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var storeFile = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.files.files.find(function (file) {
      return file.id === props.file.id;
    });
  });
  var fileStatus = store_types__WEBPACK_IMPORTED_MODULE_10__["FileStatus"][props.file.status];

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
    color: styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].chetwodeBlue,
    size: components_icon__WEBPACK_IMPORTED_MODULE_7__["Size"].ExtraSmall
  };

  switch (+statusType) {
    case StatusType.Success:
      statusProps.name = 'check-circle';
      statusProps.color = styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].deYorkGreen;
      break;

    case StatusType.Warning:
      statusProps.name = 'error';
      statusProps.color = styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].oldGold;
      break;

    case StatusType.Error:
      statusProps.solid = true;
      statusProps.name = 'error-circle';
      statusProps.color = styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].salmon;
      break;
  }

  var animation = undefined;

  switch (props.file.status) {
    case store_types__WEBPACK_IMPORTED_MODULE_10__["FileStatus"].Initializing:
    case store_types__WEBPACK_IMPORTED_MODULE_10__["FileStatus"].Preparing:
    case store_types__WEBPACK_IMPORTED_MODULE_10__["FileStatus"].Pending:
    case store_types__WEBPACK_IMPORTED_MODULE_10__["FileStatus"].Converting:
    case store_types__WEBPACK_IMPORTED_MODULE_10__["FileStatus"].Downloading:
      animation = 'flashing';
      break;
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].mineShaft, statusProps.color]]]) + " " + "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].mineShaft, statusProps.color]]]) + " " + "file-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].mineShaft, statusProps.color]]]) + " " + "file-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].mineShaft, statusProps.color]]]) + " " + "file-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(components_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    solid: true,
    name: "file",
    size: components_icon__WEBPACK_IMPORTED_MODULE_7__["Size"].Medium,
    color: styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].waikawaGray,
    animation: animation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].mineShaft, statusProps.color]]]) + " " + "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].mineShaft, statusProps.color]]]) + " " + "filename",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, props.file.name), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].mineShaft, statusProps.color]]]) + " " + "filesize",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, Object(lib_bytes__WEBPACK_IMPORTED_MODULE_8__["abbreviateFileSize"])(props.file.size)))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].mineShaft, statusProps.color]]]) + " " + "status-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(components_icon__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, statusProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].mineShaft, statusProps.color]]]) + " " + "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].mineShaft, statusProps.color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, fileStatus), ":", ' ', props.file.log[props.file.log.length - 1]))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].mineShaft, statusProps.color]]]) + " " + "control-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].mineShaft, statusProps.color]]]) + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(components_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    solid: true,
    name: "terminal",
    size: components_icon__WEBPACK_IMPORTED_MODULE_7__["Size"].Small,
    color: styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].chetwodeBlue,
    onClick: function onClick() {
      return props.showLogs(storeFile ? storeFile.id : null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].mineShaft, statusProps.color]]]) + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(components_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "trash",
    size: components_icon__WEBPACK_IMPORTED_MODULE_7__["Size"].Small,
    color: styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].chetwodeBlue,
    onClick: function onClick() {
      return dispatch(Object(actions_files__WEBPACK_IMPORTED_MODULE_9__["removeFile"])(props.file.id));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "723063549",
    dynamic: [styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].mineShaft, statusProps.color],
    __self: this
  }, ".file.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;cursor:default;margin-bottom:10px;border-radius:5px;box-sizing:border-box;background-color:".concat(styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].lilacWhite, ";}.file.__jsx-style-dynamic-selector:last-of-type{margin-bottom:20px;}.file.__jsx-style-dynamic-selector:hover{background-color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].catskillWhite, ";}.file-section.__jsx-style-dynamic-selector{-webkit-flex:7;-ms-flex:7;flex:7;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.file-info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:5px;}.file-icon.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}.details.__jsx-style-dynamic-selector{-webkit-flex:14;-ms-flex:14;flex:14;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.filename.__jsx-style-dynamic-selector{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_11__["default"].mineShaft, ";}.filesize.__jsx-style-dynamic-selector{color:darkgray;font-size:13px;}.control-section.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.button.__jsx-style-dynamic-selector:hover{opacity:0.5;}.status-message.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;font-size:12px;color:").concat(statusProps.color, ";max-width:630px;}.message.__jsx-style-dynamic-selector{padding-left:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvQ29kZS94Y2l0ZXIvc3JjL2NvbXBvbmVudHMvZmlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0l3QixBQUdrQyxBQVVNLEFBRzJCLEFBR3ZDLEFBS00sQUFLTixBQUdDLEFBS1EsQUFPRCxBQUlSLEFBS0ssQUFHQyxBQU9JLFlBVHJCLEdBVG1CLENBUEssQ0EwQkQsRUFsRHZCLFdBZ0NBLEdBMUJpQixBQVVqQixBQW1CaUIsR0FoQkEsQUFNUSxBQTBCTCxVQWhEcEIsTUFpRDJCLEtBMUJLLGlCQXBDVCxBQXFCQSxBQWdDRSxDQVV6QixVQTFCdUMsc0JBcEJiLEFBNkJPLEdBaEJQLFVBUTFCLCtDQXJDaUIsQUFxQkssUUFnQ0gsS0FwREEsS0FnQm5CLEFBS0EsR0FRQSxFQXdCdUMsS0FwRGhCLG1CQUNELFdBb0RGLEtBVHBCLEVBMUMwQixTQW9EMUIsYUFuRGtELDhDQUNsRCIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L0NvZGUveGNpdGVyL3NyYy9jb21wb25lbnRzL2ZpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEljb24sIHsgU2l6ZSwgUHJvcHMgYXMgSWNvblByb3BzIH0gZnJvbSAnY29tcG9uZW50cy9pY29uJztcbmltcG9ydCB7IGFiYnJldmlhdGVGaWxlU2l6ZSB9IGZyb20gJ2xpYi9ieXRlcyc7XG5pbXBvcnQgeyByZW1vdmVGaWxlIH0gZnJvbSAnYWN0aW9ucy9maWxlcyc7XG5pbXBvcnQgeyBGaWxlU3RhdHVzIH0gZnJvbSAnc3RvcmUvdHlwZXMnO1xuaW1wb3J0IGNvbG9yIGZyb20gJ3N0eWxlcy9jb2xvcic7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ3N0b3JlL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBmaWxlOiBGaWxlO1xuICAgIHNob3dMb2dzOiBGdW5jdGlvbjtcbn07XG5cbmVudW0gU3RhdHVzVHlwZSB7XG4gICAgSW5mbyxcbiAgICBTdWNjZXNzLFxuICAgIFdhcm5pbmcsXG4gICAgRXJyb3IsXG59XG5cbmNvbnN0IHN0YXR1c1R5cGVzID0ge1xuICAgIFtTdGF0dXNUeXBlLkluZm9dOiBbXG4gICAgICAgIEZpbGVTdGF0dXMuV2FpdGluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5Jbml0aWFsaXppbmcsXG4gICAgICAgIEZpbGVTdGF0dXMuUmVhZHksXG4gICAgICAgIEZpbGVTdGF0dXMuUHJlcGFyaW5nLFxuICAgICAgICBGaWxlU3RhdHVzLlBlbmRpbmcsXG4gICAgICAgIEZpbGVTdGF0dXMuQ29udmVydGluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5Eb3dubG9hZGluZyxcbiAgICBdLFxuICAgIFtTdGF0dXNUeXBlLlN1Y2Nlc3NdOiBbRmlsZVN0YXR1cy5Db21wbGV0ZWRdLFxuICAgIFtTdGF0dXNUeXBlLldhcm5pbmddOiBbXG4gICAgICAgIC8qVE9ETyovXG4gICAgXSxcbiAgICBbU3RhdHVzVHlwZS5FcnJvcl06IFtcbiAgICAgICAgLypUT0RPKi9cbiAgICBdLFxufTtcblxuY29uc3QgRmlsZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBzdG9yZUZpbGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlKSA9PlxuICAgICAgICBzdGF0ZS5maWxlcy5maWxlcy5maW5kKGZpbGUgPT4gZmlsZS5pZCA9PT0gcHJvcHMuZmlsZS5pZCksXG4gICAgKTtcblxuICAgIGNvbnN0IGZpbGVTdGF0dXMgPSBGaWxlU3RhdHVzW3Byb3BzLmZpbGUuc3RhdHVzXTtcbiAgICBjb25zdCBbc3RhdHVzVHlwZV06IEFycmF5PGFueT4gPVxuICAgICAgICBPYmplY3QuZW50cmllcyhzdGF0dXNUeXBlcykuZmluZCgoW3R5cGUsIHN0YXR1c2VzXSkgPT5cbiAgICAgICAgICAgIHN0YXR1c2VzLmluY2x1ZGVzKHByb3BzLmZpbGUuc3RhdHVzKSxcbiAgICAgICAgKSB8fCBbXTtcblxuICAgIGNvbnN0IHN0YXR1c1Byb3BzOiBJY29uUHJvcHMgPSB7XG4gICAgICAgIG5hbWU6ICdzdWJkaXJlY3RvcnktcmlnaHQnLFxuICAgICAgICBjb2xvcjogY29sb3IuY2hldHdvZGVCbHVlLFxuICAgICAgICBzaXplOiBTaXplLkV4dHJhU21hbGwsXG4gICAgfTtcbiAgICBzd2l0Y2ggKCtzdGF0dXNUeXBlKSB7XG4gICAgICAgIGNhc2UgU3RhdHVzVHlwZS5TdWNjZXNzOlxuICAgICAgICAgICAgc3RhdHVzUHJvcHMubmFtZSA9ICdjaGVjay1jaXJjbGUnO1xuICAgICAgICAgICAgc3RhdHVzUHJvcHMuY29sb3IgPSBjb2xvci5kZVlvcmtHcmVlbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFN0YXR1c1R5cGUuV2FybmluZzpcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLm5hbWUgPSAnZXJyb3InO1xuICAgICAgICAgICAgc3RhdHVzUHJvcHMuY29sb3IgPSBjb2xvci5vbGRHb2xkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU3RhdHVzVHlwZS5FcnJvcjpcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLnNvbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLm5hbWUgPSAnZXJyb3ItY2lyY2xlJztcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLmNvbG9yID0gY29sb3Iuc2FsbW9uO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IGFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHByb3BzLmZpbGUuc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgRmlsZVN0YXR1cy5Jbml0aWFsaXppbmc6XG4gICAgICAgIGNhc2UgRmlsZVN0YXR1cy5QcmVwYXJpbmc6XG4gICAgICAgIGNhc2UgRmlsZVN0YXR1cy5QZW5kaW5nOlxuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuQ29udmVydGluZzpcbiAgICAgICAgY2FzZSBGaWxlU3RhdHVzLkRvd25sb2FkaW5nOlxuICAgICAgICAgICAgYW5pbWF0aW9uID0gJ2ZsYXNoaW5nJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2xpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtTaXplLk1lZGl1bX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3Iud2Fpa2F3YUdyYXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPXthbmltYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGVuYW1lXCI+e3Byb3BzLmZpbGUubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZXNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWJicmV2aWF0ZUZpbGVTaXplKHByb3BzLmZpbGUuc2l6ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0dXMtbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiB7Li4uc3RhdHVzUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2ZpbGVTdGF0dXN9PC9iPjp7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmZpbGUubG9nW3Byb3BzLmZpbGUubG9nLmxlbmd0aCAtIDFdfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgc29saWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZXJtaW5hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtTaXplLlNtYWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yLmNoZXR3b2RlQmx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2hvd0xvZ3Moc3RvcmVGaWxlID8gc3RvcmVGaWxlLmlkIDogbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRyYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e1NpemUuU21hbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3IuY2hldHdvZGVCbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2gocmVtb3ZlRmlsZShwcm9wcy5maWxlLmlkKSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZmlsZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmxpbGFjV2hpdGV9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZTpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuY2F0c2tpbGxXaGl0ZX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiA3O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZS1pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZS1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxNDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGVuYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3IubWluZVNoYWZ0fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGVzaXplIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtncmF5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250cm9sLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN0YXR1cy1tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3N0YXR1c1Byb3BzLmNvbG9yfTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZTtcbiJdfQ== */\n/*@ sourceURL=/Users/andrew/Code/xciter/src/components/file.tsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (File);

/***/ })

})
//# sourceMappingURL=index.js.98bc00c48fdd3f0081dc.hot-update.js.map