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

var File = function File(props) {
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

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "file-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "file-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "file-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
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
      lineNumber: 87
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "filename",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, props.file.name), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "filesize",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, Object(lib_bytes__WEBPACK_IMPORTED_MODULE_8__["abbreviateFileSize"])(props.file.size)))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "status-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(components_icon__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, statusProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, fileStatus), ":", ' ', props.file.log[props.file.log.length - 1]))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "control-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
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
      lineNumber: 112
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "723063549",
    dynamic: [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color],
    __self: this
  }, ".file.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;cursor:default;margin-bottom:10px;border-radius:5px;box-sizing:border-box;background-color:".concat(styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, ";}.file.__jsx-style-dynamic-selector:last-of-type{margin-bottom:20px;}.file.__jsx-style-dynamic-selector:hover{background-color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, ";}.file-section.__jsx-style-dynamic-selector{-webkit-flex:7;-ms-flex:7;flex:7;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.file-info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:5px;}.file-icon.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}.details.__jsx-style-dynamic-selector{-webkit-flex:14;-ms-flex:14;flex:14;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.filename.__jsx-style-dynamic-selector{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, ";}.filesize.__jsx-style-dynamic-selector{color:darkgray;font-size:13px;}.control-section.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.button.__jsx-style-dynamic-selector:hover{opacity:0.5;}.status-message.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;font-size:12px;color:").concat(statusProps.color, ";max-width:630px;}.message.__jsx-style-dynamic-selector{padding-left:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvQ29kZS94Y2l0ZXIvc3JjL2NvbXBvbmVudHMvZmlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEh3QixBQUdrQyxBQVVNLEFBRzJCLEFBR3ZDLEFBS00sQUFLTixBQUdDLEFBS1EsQUFPRCxBQUlSLEFBS0ssQUFHQyxBQU9JLFlBVHJCLEdBVG1CLENBUEssQ0EwQkQsRUFsRHZCLFdBZ0NBLEdBMUJpQixBQVVqQixBQW1CaUIsR0FoQkEsQUFNUSxBQTBCTCxVQWhEcEIsTUFpRDJCLEtBMUJLLGlCQXBDVCxBQXFCQSxBQWdDRSxDQVV6QixVQTFCdUMsc0JBcEJiLEFBNkJPLEdBaEJQLFVBUTFCLCtDQXJDaUIsQUFxQkssUUFnQ0gsS0FwREEsS0FnQm5CLEFBS0EsR0FRQSxFQXdCdUMsS0FwRGhCLG1CQUNELFdBb0RGLEtBVHBCLEVBMUMwQixTQW9EMUIsYUFuRGtELDhDQUNsRCIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L0NvZGUveGNpdGVyL3NyYy9jb21wb25lbnRzL2ZpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSWNvbiwgeyBTaXplLCBQcm9wcyBhcyBJY29uUHJvcHMgfSBmcm9tICdjb21wb25lbnRzL2ljb24nO1xuaW1wb3J0IHsgYWJicmV2aWF0ZUZpbGVTaXplIH0gZnJvbSAnbGliL2J5dGVzJztcbmltcG9ydCB7IEZpbGVTdGF0dXMgfSBmcm9tICdzdG9yZS90eXBlcyc7XG5pbXBvcnQgY29sb3IgZnJvbSAnc3R5bGVzL2NvbG9yJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnc3RvcmUvdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGZpbGU6IEZpbGU7XG4gICAgc2hvd0xvZ3M6IEZ1bmN0aW9uO1xufTtcblxuZW51bSBTdGF0dXNUeXBlIHtcbiAgICBJbmZvLFxuICAgIFN1Y2Nlc3MsXG4gICAgV2FybmluZyxcbiAgICBFcnJvcixcbn1cblxuY29uc3Qgc3RhdHVzVHlwZXMgPSB7XG4gICAgW1N0YXR1c1R5cGUuSW5mb106IFtcbiAgICAgICAgRmlsZVN0YXR1cy5XYWl0aW5nLFxuICAgICAgICBGaWxlU3RhdHVzLkluaXRpYWxpemluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5SZWFkeSxcbiAgICAgICAgRmlsZVN0YXR1cy5QcmVwYXJpbmcsXG4gICAgICAgIEZpbGVTdGF0dXMuUGVuZGluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5Db252ZXJ0aW5nLFxuICAgICAgICBGaWxlU3RhdHVzLkRvd25sb2FkaW5nLFxuICAgIF0sXG4gICAgW1N0YXR1c1R5cGUuU3VjY2Vzc106IFtGaWxlU3RhdHVzLkNvbXBsZXRlZF0sXG4gICAgW1N0YXR1c1R5cGUuV2FybmluZ106IFtcbiAgICAgICAgLypUT0RPKi9cbiAgICBdLFxuICAgIFtTdGF0dXNUeXBlLkVycm9yXTogW1xuICAgICAgICAvKlRPRE8qL1xuICAgIF0sXG59O1xuXG5jb25zdCBGaWxlOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSBwcm9wcyA9PiB7XG4gICAgY29uc3Qgc3RvcmVGaWxlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZSkgPT5cbiAgICAgICAgc3RhdGUuZmlsZXMuZmlsZXMuZmluZChmaWxlID0+IGZpbGUuaWQgPT09IHByb3BzLmZpbGUuaWQpLFxuICAgICk7XG5cbiAgICBjb25zdCBmaWxlU3RhdHVzID0gRmlsZVN0YXR1c1twcm9wcy5maWxlLnN0YXR1c107XG4gICAgY29uc3QgW3N0YXR1c1R5cGVdOiBBcnJheTxhbnk+ID1cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3RhdHVzVHlwZXMpLmZpbmQoKFt0eXBlLCBzdGF0dXNlc10pID0+XG4gICAgICAgICAgICBzdGF0dXNlcy5pbmNsdWRlcyhwcm9wcy5maWxlLnN0YXR1cyksXG4gICAgICAgICkgfHwgW107XG5cbiAgICBjb25zdCBzdGF0dXNQcm9wczogSWNvblByb3BzID0ge1xuICAgICAgICBuYW1lOiAnc3ViZGlyZWN0b3J5LXJpZ2h0JyxcbiAgICAgICAgY29sb3I6IGNvbG9yLmNoZXR3b2RlQmx1ZSxcbiAgICAgICAgc2l6ZTogU2l6ZS5FeHRyYVNtYWxsLFxuICAgIH07XG4gICAgc3dpdGNoICgrc3RhdHVzVHlwZSkge1xuICAgICAgICBjYXNlIFN0YXR1c1R5cGUuU3VjY2VzczpcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLm5hbWUgPSAnY2hlY2stY2lyY2xlJztcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLmNvbG9yID0gY29sb3IuZGVZb3JrR3JlZW47XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTdGF0dXNUeXBlLldhcm5pbmc6XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5uYW1lID0gJ2Vycm9yJztcbiAgICAgICAgICAgIHN0YXR1c1Byb3BzLmNvbG9yID0gY29sb3Iub2xkR29sZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFN0YXR1c1R5cGUuRXJyb3I6XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5zb2xpZCA9IHRydWU7XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5uYW1lID0gJ2Vycm9yLWNpcmNsZSc7XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5jb2xvciA9IGNvbG9yLnNhbG1vbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCBhbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoIChwcm9wcy5maWxlLnN0YXR1cykge1xuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuSW5pdGlhbGl6aW5nOlxuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuUHJlcGFyaW5nOlxuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuUGVuZGluZzpcbiAgICAgICAgY2FzZSBGaWxlU3RhdHVzLkNvbnZlcnRpbmc6XG4gICAgICAgIGNhc2UgRmlsZVN0YXR1cy5Eb3dubG9hZGluZzpcbiAgICAgICAgICAgIGFuaW1hdGlvbiA9ICdmbGFzaGluZyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29saWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17U2l6ZS5NZWRpdW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yLndhaWthd2FHcmF5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj17YW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlbmFtZVwiPntwcm9wcy5maWxlLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGVzaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FiYnJldmlhdGVGaWxlU2l6ZShwcm9wcy5maWxlLnNpemUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gey4uLnN0YXR1c1Byb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPntmaWxlU3RhdHVzfTwvYj46eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5maWxlLmxvZ1twcm9wcy5maWxlLmxvZy5sZW5ndGggLSAxXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNvbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGVybWluYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17U2l6ZS5TbWFsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvci5jaGV0d29kZUJsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnNob3dMb2dzKHN0b3JlRmlsZSA/IHN0b3JlRmlsZS5pZCA6IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZmlsZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmxpbGFjV2hpdGV9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZTpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuY2F0c2tpbGxXaGl0ZX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiA3O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZS1pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZS1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxNDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGVuYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3IubWluZVNoYWZ0fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGVzaXplIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtncmF5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250cm9sLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN0YXR1cy1tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3N0YXR1c1Byb3BzLmNvbG9yfTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZTtcbiJdfQ== */\n/*@ sourceURL=/Users/andrew/Code/xciter/src/components/file.tsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (File);

/***/ })

})
//# sourceMappingURL=index.js.cf730e2344f7f43e9f91.hot-update.js.map