"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/RevolutionText/RevolutionText.js":
/*!*********************************************************!*\
  !*** ./src/components/RevolutionText/RevolutionText.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RevolutionText; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Revolution_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Revolution.css */ \"(app-pages-browser)/./src/components/RevolutionText/Revolution.css\");\n/* harmony import */ var _GetStarted_GetStarted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GetStarted/GetStarted */ \"(app-pages-browser)/./src/components/GetStarted/GetStarted.js\");\n/* harmony import */ var _SocialIcons_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SocialIcons/social */ \"(app-pages-browser)/./src/components/SocialIcons/social.js\");\n/* harmony import */ var _barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Container!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction RevolutionText() {\n    _s();\n    const changeWordList = [\n        \"order\",\n        \"sync\",\n        \"simplified\"\n    ];\n    const [changeWord, setChangeWord] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(changeWordList[0]);\n    const chnageWordAuto = ()=>{\n        let count = 0;\n        setInterval(()=>{\n            setChangeWord(changeWordList[count]);\n            //this is comment\n            count = count + 1;\n            if (count > 2) {\n                count = 0;\n            }\n        }, 2000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        chnageWordAuto();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"revolution-outer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"revolution-inner\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"revolution-section\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"p1\",\n                                children: \"Revolution your business with smart solutions.\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Nextjs\\\\lyncc\\\\src\\\\components\\\\RevolutionText\\\\RevolutionText.js\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"p2\",\n                                children: [\n                                    \"LYNCC \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"revo-special\",\n                                        children: [\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"revo-special-text\",\n                                                children: \"Order Sync Simplified Order\"\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\Nextjs\\\\lyncc\\\\src\\\\components\\\\RevolutionText\\\\RevolutionText.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 80\n                                            }, this),\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\Nextjs\\\\lyncc\\\\src\\\\components\\\\RevolutionText\\\\RevolutionText.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 49\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Nextjs\\\\lyncc\\\\src\\\\components\\\\RevolutionText\\\\RevolutionText.js\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GetStarted_GetStarted__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"F:\\\\Nextjs\\\\lyncc\\\\src\\\\components\\\\RevolutionText\\\\RevolutionText.js\",\n                                lineNumber: 35,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Nextjs\\\\lyncc\\\\src\\\\components\\\\RevolutionText\\\\RevolutionText.js\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SocialIcons_social__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"F:\\\\Nextjs\\\\lyncc\\\\src\\\\components\\\\RevolutionText\\\\RevolutionText.js\",\n                            lineNumber: 38,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Nextjs\\\\lyncc\\\\src\\\\components\\\\RevolutionText\\\\RevolutionText.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Nextjs\\\\lyncc\\\\src\\\\components\\\\RevolutionText\\\\RevolutionText.js\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"F:\\\\Nextjs\\\\lyncc\\\\src\\\\components\\\\RevolutionText\\\\RevolutionText.js\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\Nextjs\\\\lyncc\\\\src\\\\components\\\\RevolutionText\\\\RevolutionText.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(RevolutionText, \"NxpL3QTc8DZE2Ob2m103nqau+TE=\");\n_c = RevolutionText;\nvar _c;\n$RefreshReg$(_c, \"RevolutionText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Jldm9sdXRpb25UZXh0L1Jldm9sdXRpb25UZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDeUI7QUFDUDtBQUNDO0FBQ0E7QUFFN0IsU0FBU0s7O0lBQ3BCLE1BQU1DLGlCQUFpQjtRQUFDO1FBQVE7UUFBTztLQUFhO0lBQ3BELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSiwrQ0FBUUEsQ0FBQ0UsY0FBYyxDQUFDLEVBQUU7SUFHOUQsTUFBTUcsaUJBQWlCO1FBQ25CLElBQUlDLFFBQVE7UUFDWkMsWUFBWTtZQUVSSCxjQUFjRixjQUFjLENBQUNJLE1BQU07WUFDbkMsaUJBQWlCO1lBQ2pCQSxRQUFRQSxRQUFNO1lBQ2QsSUFBR0EsUUFBUSxHQUFFO2dCQUNUQSxRQUFRO1lBQ1o7UUFDSixHQUFHO0lBQ1A7SUFDQVAsZ0RBQVNBLENBQUM7UUFDTk07SUFDSixHQUFFLEVBQUU7SUFDSixxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ1gsd0ZBQVNBO3NCQUNOLDRFQUFDVTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQUVELFdBQVU7MENBQUs7Ozs7OzswQ0FFbEIsOERBQUNDO2dDQUFFRCxXQUFVOztvQ0FBSztrREFBTSw4REFBQ0Q7d0NBQUlDLFdBQVU7OzRDQUFlOzBEQUFDLDhEQUFDQztnREFBRUQsV0FBVTswREFBb0I7Ozs7Ozs0Q0FBK0I7Ozs7Ozs7Ozs7Ozs7MENBQ3ZILDhEQUFDYiw4REFBVUE7Ozs7Ozs7Ozs7O2tDQUVmLDhEQUFDWTtrQ0FDRyw0RUFBQ1gsMkRBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0vQjtHQXJDd0JJO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Jldm9sdXRpb25UZXh0L1Jldm9sdXRpb25UZXh0LmpzPzAyMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9SZXZvbHV0aW9uLmNzc1wiXHJcbmltcG9ydCBHZXRTdGFydGVkIGZyb20gXCIuLi9HZXRTdGFydGVkL0dldFN0YXJ0ZWRcIjtcclxuaW1wb3J0IFNvY2lhbCBmcm9tIFwiLi4vU29jaWFsSWNvbnMvc29jaWFsXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmV2b2x1dGlvblRleHQoKSB7XHJcbiAgICBjb25zdCBjaGFuZ2VXb3JkTGlzdCA9IFtcIm9yZGVyXCIsXCJzeW5jXCIsXCJzaW1wbGlmaWVkXCJdO1xyXG4gICAgY29uc3QgW2NoYW5nZVdvcmQsIHNldENoYW5nZVdvcmRdID0gdXNlU3RhdGUoY2hhbmdlV29yZExpc3RbMF0pO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgY2huYWdlV29yZEF1dG8gPSAoKSA9PntcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldENoYW5nZVdvcmQoY2hhbmdlV29yZExpc3RbY291bnRdKTsgXHJcbiAgICAgICAgICAgIC8vdGhpcyBpcyBjb21tZW50XHJcbiAgICAgICAgICAgIGNvdW50ID0gY291bnQrMTtcclxuICAgICAgICAgICAgaWYoY291bnQgPiAyKXtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjaG5hZ2VXb3JkQXV0bygpXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldm9sdXRpb24tb3V0ZXJcIj5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2b2x1dGlvbi1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2b2x1dGlvbi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAxXCI+UmV2b2x1dGlvbiB5b3VyIGJ1c2luZXNzIHdpdGggc21hcnQgc29sdXRpb25zLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInAyXCI+TFlOQ0MgPHNwYW4gY2xhc3NOYW1lPVwicmV2by1zcGVjaWFsXCI+e2NoYW5nZVdvcmR9PC9zcGFuPjwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAyXCI+TFlOQ0MgPGRpdiBjbGFzc05hbWU9XCJyZXZvLXNwZWNpYWxcIj4gPHAgY2xhc3NOYW1lPVwicmV2by1zcGVjaWFsLXRleHRcIj5PcmRlciBTeW5jIFNpbXBsaWZpZWQgT3JkZXI8L3A+IDwvZGl2PjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdldFN0YXJ0ZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIkdldFN0YXJ0ZWQiLCJTb2NpYWwiLCJDb250YWluZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJldm9sdXRpb25UZXh0IiwiY2hhbmdlV29yZExpc3QiLCJjaGFuZ2VXb3JkIiwic2V0Q2hhbmdlV29yZCIsImNobmFnZVdvcmRBdXRvIiwiY291bnQiLCJzZXRJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RevolutionText/RevolutionText.js\n"));

/***/ })

});