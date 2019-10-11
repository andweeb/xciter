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
var TrashButton = react__WEBPACK_IMPORTED_MODULE_5___default.a.memo(function (_ref) {
  var onClick = _ref.onClick;
  return __jsx("div", {
    className: "jsx-1253862848" + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(components_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "trash",
    size: components_icon__WEBPACK_IMPORTED_MODULE_7__["Size"].Small,
    color: styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].chetwodeBlue,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1253862848",
    __self: this
  }, ".button.jsx-1253862848:hover{opacity:0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvQ29kZS94Y2l0ZXIvc3JjL2NvbXBvbmVudHMvZmlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RvQixBQUc2QixZQUNoQiIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L0NvZGUveGNpdGVyL3NyYy9jb21wb25lbnRzL2ZpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEljb24sIHsgU2l6ZSwgUHJvcHMgYXMgSWNvblByb3BzIH0gZnJvbSAnY29tcG9uZW50cy9pY29uJztcbmltcG9ydCB7IGFiYnJldmlhdGVGaWxlU2l6ZSB9IGZyb20gJ2xpYi9ieXRlcyc7XG5pbXBvcnQgeyByZW1vdmVGaWxlIH0gZnJvbSAnYWN0aW9ucy9maWxlcyc7XG5pbXBvcnQgeyBGaWxlU3RhdHVzIH0gZnJvbSAnc3RvcmUvdHlwZXMnO1xuaW1wb3J0IGNvbG9yIGZyb20gJ3N0eWxlcy9jb2xvcic7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ3N0b3JlL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBmaWxlOiBGaWxlO1xuICAgIHNob3dMb2dzOiBGdW5jdGlvbjtcbn07XG5cbmVudW0gU3RhdHVzVHlwZSB7XG4gICAgSW5mbyxcbiAgICBTdWNjZXNzLFxuICAgIFdhcm5pbmcsXG4gICAgRXJyb3IsXG59XG5cbmNvbnN0IHN0YXR1c1R5cGVzID0ge1xuICAgIFtTdGF0dXNUeXBlLkluZm9dOiBbXG4gICAgICAgIEZpbGVTdGF0dXMuV2FpdGluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5Jbml0aWFsaXppbmcsXG4gICAgICAgIEZpbGVTdGF0dXMuUmVhZHksXG4gICAgICAgIEZpbGVTdGF0dXMuUHJlcGFyaW5nLFxuICAgICAgICBGaWxlU3RhdHVzLlBlbmRpbmcsXG4gICAgICAgIEZpbGVTdGF0dXMuQ29udmVydGluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5Eb3dubG9hZGluZyxcbiAgICBdLFxuICAgIFtTdGF0dXNUeXBlLlN1Y2Nlc3NdOiBbRmlsZVN0YXR1cy5Db21wbGV0ZWRdLFxuICAgIFtTdGF0dXNUeXBlLldhcm5pbmddOiBbXG4gICAgICAgIC8qVE9ETyovXG4gICAgXSxcbiAgICBbU3RhdHVzVHlwZS5FcnJvcl06IFtcbiAgICAgICAgLypUT0RPKi9cbiAgICBdLFxufTtcblxuY29uc3QgVHJhc2hCdXR0b24gPSBSZWFjdC5tZW1vKCh7IG9uQ2xpY2sgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgICBuYW1lPVwidHJhc2hcIlxuICAgICAgICAgICAgc2l6ZT17U2l6ZS5TbWFsbH1cbiAgICAgICAgICAgIGNvbG9yPXtjb2xvci5jaGV0d29kZUJsdWV9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbikpO1xuXG5jb25zdCBGaWxlOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHN0b3JlRmlsZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmUpID0+XG4gICAgICAgIHN0YXRlLmZpbGVzLmZpbGVzLmZpbmQoZmlsZSA9PiBmaWxlLmlkID09PSBwcm9wcy5maWxlLmlkKSxcbiAgICApO1xuXG4gICAgY29uc3QgZmlsZVN0YXR1cyA9IEZpbGVTdGF0dXNbcHJvcHMuZmlsZS5zdGF0dXNdO1xuICAgIGNvbnN0IFtzdGF0dXNUeXBlXTogQXJyYXk8YW55PiA9XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHN0YXR1c1R5cGVzKS5maW5kKChbdHlwZSwgc3RhdHVzZXNdKSA9PlxuICAgICAgICAgICAgc3RhdHVzZXMuaW5jbHVkZXMocHJvcHMuZmlsZS5zdGF0dXMpLFxuICAgICAgICApIHx8IFtdO1xuXG4gICAgY29uc3Qgc3RhdHVzUHJvcHM6IEljb25Qcm9wcyA9IHtcbiAgICAgICAgbmFtZTogJ3N1YmRpcmVjdG9yeS1yaWdodCcsXG4gICAgICAgIGNvbG9yOiBjb2xvci5jaGV0d29kZUJsdWUsXG4gICAgICAgIHNpemU6IFNpemUuRXh0cmFTbWFsbCxcbiAgICB9O1xuICAgIHN3aXRjaCAoK3N0YXR1c1R5cGUpIHtcbiAgICAgICAgY2FzZSBTdGF0dXNUeXBlLlN1Y2Nlc3M6XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5uYW1lID0gJ2NoZWNrLWNpcmNsZSc7XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5jb2xvciA9IGNvbG9yLmRlWW9ya0dyZWVuO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU3RhdHVzVHlwZS5XYXJuaW5nOlxuICAgICAgICAgICAgc3RhdHVzUHJvcHMubmFtZSA9ICdlcnJvcic7XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5jb2xvciA9IGNvbG9yLm9sZEdvbGQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTdGF0dXNUeXBlLkVycm9yOlxuICAgICAgICAgICAgc3RhdHVzUHJvcHMuc29saWQgPSB0cnVlO1xuICAgICAgICAgICAgc3RhdHVzUHJvcHMubmFtZSA9ICdlcnJvci1jaXJjbGUnO1xuICAgICAgICAgICAgc3RhdHVzUHJvcHMuY29sb3IgPSBjb2xvci5zYWxtb247XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZXQgYW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAocHJvcHMuZmlsZS5zdGF0dXMpIHtcbiAgICAgICAgY2FzZSBGaWxlU3RhdHVzLkluaXRpYWxpemluZzpcbiAgICAgICAgY2FzZSBGaWxlU3RhdHVzLlByZXBhcmluZzpcbiAgICAgICAgY2FzZSBGaWxlU3RhdHVzLlBlbmRpbmc6XG4gICAgICAgIGNhc2UgRmlsZVN0YXR1cy5Db252ZXJ0aW5nOlxuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuRG93bmxvYWRpbmc6XG4gICAgICAgICAgICBhbmltYXRpb24gPSAnZmxhc2hpbmcnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlRmlsZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoKSA9PiBkaXNwYXRjaChyZW1vdmVGaWxlKHByb3BzLmZpbGUuaWQpKSxcbiAgICAgICAgW2Rpc3BhdGNoXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29saWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17U2l6ZS5NZWRpdW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yLndhaWthd2FHcmF5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj17YW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlbmFtZVwiPntwcm9wcy5maWxlLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGVzaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FiYnJldmlhdGVGaWxlU2l6ZShwcm9wcy5maWxlLnNpemUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gey4uLnN0YXR1c1Byb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPntmaWxlU3RhdHVzfTwvYj46eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5maWxlLmxvZ1twcm9wcy5maWxlLmxvZy5sZW5ndGggLSAxXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNvbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGVybWluYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17U2l6ZS5TbWFsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvci5jaGV0d29kZUJsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnNob3dMb2dzKHN0b3JlRmlsZSA/IHN0b3JlRmlsZS5pZCA6IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFRyYXNoQnV0dG9uIG9uQ2xpY2s9e3JlbW92ZUZpbGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZmlsZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmxpbGFjV2hpdGV9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZTpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuY2F0c2tpbGxXaGl0ZX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiA3O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZS1pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZS1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxNDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGVuYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3IubWluZVNoYWZ0fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGVzaXplIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtncmF5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250cm9sLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN0YXR1cy1tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3N0YXR1c1Byb3BzLmNvbG9yfTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZTtcbiJdfQ== */\n/*@ sourceURL=/Users/andrew/Code/xciter/src/components/file.tsx */"));
});

var File = function File(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var storeFile = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.files.files.find(function (file) {
      return file.id === props.file.id;
    });
  });
  var fileStatus = store_types__WEBPACK_IMPORTED_MODULE_9__["FileStatus"][props.file.status];

  var _ref2 = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(statusTypes).find(function (_ref4) {
    var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref4, 2),
        type = _ref5[0],
        statuses = _ref5[1];

    return statuses.includes(props.file.status);
  }) || [],
      _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, 1),
      statusType = _ref3[0];

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
      lineNumber: 107
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "file-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "file-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "file-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
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
      lineNumber: 111
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "filename",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, props.file.name), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "filesize",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, Object(lib_bytes__WEBPACK_IMPORTED_MODULE_8__["abbreviateFileSize"])(props.file.size)))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "status-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(components_icon__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, statusProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, fileStatus), ":", ' ', props.file.log[props.file.log.length - 1]))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "control-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["723063549", [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color]]]) + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
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
      lineNumber: 136
    },
    __self: this
  })), __jsx(TrashButton, {
    onClick: removeFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "723063549",
    dynamic: [styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, statusProps.color],
    __self: this
  }, ".file.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;cursor:default;margin-bottom:10px;border-radius:5px;box-sizing:border-box;background-color:".concat(styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].lilacWhite, ";}.file.__jsx-style-dynamic-selector:last-of-type{margin-bottom:20px;}.file.__jsx-style-dynamic-selector:hover{background-color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].catskillWhite, ";}.file-section.__jsx-style-dynamic-selector{-webkit-flex:7;-ms-flex:7;flex:7;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.file-info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:5px;}.file-icon.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}.details.__jsx-style-dynamic-selector{-webkit-flex:14;-ms-flex:14;flex:14;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.filename.__jsx-style-dynamic-selector{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:").concat(styles_color__WEBPACK_IMPORTED_MODULE_10__["default"].mineShaft, ";}.filesize.__jsx-style-dynamic-selector{color:darkgray;font-size:13px;}.control-section.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.button.__jsx-style-dynamic-selector:hover{opacity:0.5;}.status-message.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;font-size:12px;color:").concat(statusProps.color, ";max-width:630px;}.message.__jsx-style-dynamic-selector{padding-left:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvQ29kZS94Y2l0ZXIvc3JjL2NvbXBvbmVudHMvZmlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUp3QixBQUdrQyxBQVVNLEFBRzJCLEFBR3ZDLEFBS00sQUFLTixBQUdDLEFBS1EsQUFPRCxBQUlSLEFBS0ssQUFHQyxBQU9JLFlBVHJCLEdBVG1CLENBUEssQ0EwQkQsRUFsRHZCLFdBZ0NBLEdBMUJpQixBQVVqQixBQW1CaUIsR0FoQkEsQUFNUSxBQTBCTCxVQWhEcEIsTUFpRDJCLEtBMUJLLGlCQXBDVCxBQXFCQSxBQWdDRSxDQVV6QixVQTFCdUMsc0JBcEJiLEFBNkJPLEdBaEJQLFVBUTFCLCtDQXJDaUIsQUFxQkssUUFnQ0gsS0FwREEsS0FnQm5CLEFBS0EsR0FRQSxFQXdCdUMsS0FwRGhCLG1CQUNELFdBb0RGLEtBVHBCLEVBMUMwQixTQW9EMUIsYUFuRGtELDhDQUNsRCIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L0NvZGUveGNpdGVyL3NyYy9jb21wb25lbnRzL2ZpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEljb24sIHsgU2l6ZSwgUHJvcHMgYXMgSWNvblByb3BzIH0gZnJvbSAnY29tcG9uZW50cy9pY29uJztcbmltcG9ydCB7IGFiYnJldmlhdGVGaWxlU2l6ZSB9IGZyb20gJ2xpYi9ieXRlcyc7XG5pbXBvcnQgeyByZW1vdmVGaWxlIH0gZnJvbSAnYWN0aW9ucy9maWxlcyc7XG5pbXBvcnQgeyBGaWxlU3RhdHVzIH0gZnJvbSAnc3RvcmUvdHlwZXMnO1xuaW1wb3J0IGNvbG9yIGZyb20gJ3N0eWxlcy9jb2xvcic7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ3N0b3JlL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBmaWxlOiBGaWxlO1xuICAgIHNob3dMb2dzOiBGdW5jdGlvbjtcbn07XG5cbmVudW0gU3RhdHVzVHlwZSB7XG4gICAgSW5mbyxcbiAgICBTdWNjZXNzLFxuICAgIFdhcm5pbmcsXG4gICAgRXJyb3IsXG59XG5cbmNvbnN0IHN0YXR1c1R5cGVzID0ge1xuICAgIFtTdGF0dXNUeXBlLkluZm9dOiBbXG4gICAgICAgIEZpbGVTdGF0dXMuV2FpdGluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5Jbml0aWFsaXppbmcsXG4gICAgICAgIEZpbGVTdGF0dXMuUmVhZHksXG4gICAgICAgIEZpbGVTdGF0dXMuUHJlcGFyaW5nLFxuICAgICAgICBGaWxlU3RhdHVzLlBlbmRpbmcsXG4gICAgICAgIEZpbGVTdGF0dXMuQ29udmVydGluZyxcbiAgICAgICAgRmlsZVN0YXR1cy5Eb3dubG9hZGluZyxcbiAgICBdLFxuICAgIFtTdGF0dXNUeXBlLlN1Y2Nlc3NdOiBbRmlsZVN0YXR1cy5Db21wbGV0ZWRdLFxuICAgIFtTdGF0dXNUeXBlLldhcm5pbmddOiBbXG4gICAgICAgIC8qVE9ETyovXG4gICAgXSxcbiAgICBbU3RhdHVzVHlwZS5FcnJvcl06IFtcbiAgICAgICAgLypUT0RPKi9cbiAgICBdLFxufTtcblxuY29uc3QgVHJhc2hCdXR0b24gPSBSZWFjdC5tZW1vKCh7IG9uQ2xpY2sgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgICBuYW1lPVwidHJhc2hcIlxuICAgICAgICAgICAgc2l6ZT17U2l6ZS5TbWFsbH1cbiAgICAgICAgICAgIGNvbG9yPXtjb2xvci5jaGV0d29kZUJsdWV9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbikpO1xuXG5jb25zdCBGaWxlOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHN0b3JlRmlsZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmUpID0+XG4gICAgICAgIHN0YXRlLmZpbGVzLmZpbGVzLmZpbmQoZmlsZSA9PiBmaWxlLmlkID09PSBwcm9wcy5maWxlLmlkKSxcbiAgICApO1xuXG4gICAgY29uc3QgZmlsZVN0YXR1cyA9IEZpbGVTdGF0dXNbcHJvcHMuZmlsZS5zdGF0dXNdO1xuICAgIGNvbnN0IFtzdGF0dXNUeXBlXTogQXJyYXk8YW55PiA9XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHN0YXR1c1R5cGVzKS5maW5kKChbdHlwZSwgc3RhdHVzZXNdKSA9PlxuICAgICAgICAgICAgc3RhdHVzZXMuaW5jbHVkZXMocHJvcHMuZmlsZS5zdGF0dXMpLFxuICAgICAgICApIHx8IFtdO1xuXG4gICAgY29uc3Qgc3RhdHVzUHJvcHM6IEljb25Qcm9wcyA9IHtcbiAgICAgICAgbmFtZTogJ3N1YmRpcmVjdG9yeS1yaWdodCcsXG4gICAgICAgIGNvbG9yOiBjb2xvci5jaGV0d29kZUJsdWUsXG4gICAgICAgIHNpemU6IFNpemUuRXh0cmFTbWFsbCxcbiAgICB9O1xuICAgIHN3aXRjaCAoK3N0YXR1c1R5cGUpIHtcbiAgICAgICAgY2FzZSBTdGF0dXNUeXBlLlN1Y2Nlc3M6XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5uYW1lID0gJ2NoZWNrLWNpcmNsZSc7XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5jb2xvciA9IGNvbG9yLmRlWW9ya0dyZWVuO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU3RhdHVzVHlwZS5XYXJuaW5nOlxuICAgICAgICAgICAgc3RhdHVzUHJvcHMubmFtZSA9ICdlcnJvcic7XG4gICAgICAgICAgICBzdGF0dXNQcm9wcy5jb2xvciA9IGNvbG9yLm9sZEdvbGQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTdGF0dXNUeXBlLkVycm9yOlxuICAgICAgICAgICAgc3RhdHVzUHJvcHMuc29saWQgPSB0cnVlO1xuICAgICAgICAgICAgc3RhdHVzUHJvcHMubmFtZSA9ICdlcnJvci1jaXJjbGUnO1xuICAgICAgICAgICAgc3RhdHVzUHJvcHMuY29sb3IgPSBjb2xvci5zYWxtb247XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZXQgYW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAocHJvcHMuZmlsZS5zdGF0dXMpIHtcbiAgICAgICAgY2FzZSBGaWxlU3RhdHVzLkluaXRpYWxpemluZzpcbiAgICAgICAgY2FzZSBGaWxlU3RhdHVzLlByZXBhcmluZzpcbiAgICAgICAgY2FzZSBGaWxlU3RhdHVzLlBlbmRpbmc6XG4gICAgICAgIGNhc2UgRmlsZVN0YXR1cy5Db252ZXJ0aW5nOlxuICAgICAgICBjYXNlIEZpbGVTdGF0dXMuRG93bmxvYWRpbmc6XG4gICAgICAgICAgICBhbmltYXRpb24gPSAnZmxhc2hpbmcnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlRmlsZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoKSA9PiBkaXNwYXRjaChyZW1vdmVGaWxlKHByb3BzLmZpbGUuaWQpKSxcbiAgICAgICAgW2Rpc3BhdGNoXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29saWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17U2l6ZS5NZWRpdW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yLndhaWthd2FHcmF5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj17YW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlbmFtZVwiPntwcm9wcy5maWxlLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGVzaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FiYnJldmlhdGVGaWxlU2l6ZShwcm9wcy5maWxlLnNpemUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gey4uLnN0YXR1c1Byb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPntmaWxlU3RhdHVzfTwvYj46eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5maWxlLmxvZ1twcm9wcy5maWxlLmxvZy5sZW5ndGggLSAxXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNvbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGVybWluYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17U2l6ZS5TbWFsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvci5jaGV0d29kZUJsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnNob3dMb2dzKHN0b3JlRmlsZSA/IHN0b3JlRmlsZS5pZCA6IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFRyYXNoQnV0dG9uIG9uQ2xpY2s9e3JlbW92ZUZpbGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZmlsZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmxpbGFjV2hpdGV9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZTpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuY2F0c2tpbGxXaGl0ZX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWxlLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiA3O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZS1pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsZS1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxNDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGVuYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3IubWluZVNoYWZ0fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbGVzaXplIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtncmF5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250cm9sLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN0YXR1cy1tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3N0YXR1c1Byb3BzLmNvbG9yfTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZTtcbiJdfQ== */\n/*@ sourceURL=/Users/andrew/Code/xciter/src/components/file.tsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (File);

/***/ })

})
//# sourceMappingURL=index.js.16c4d73a632b8993f9dc.hot-update.js.map