"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/About */ \"./src/components/About.tsx\");\n/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Features */ \"./src/components/Features.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_LazyShow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LazyShow */ \"./src/components/LazyShow.tsx\");\n/* harmony import */ var _components_MainHero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainHero */ \"./src/components/MainHero.tsx\");\n/* harmony import */ var _components_Pricing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Pricing */ \"./src/components/Pricing.tsx\");\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Product */ \"./src/components/Product.tsx\");\n/* harmony import */ var _components_LoopSlide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/LoopSlide */ \"./src/components/LoopSlide.tsx\");\n/* harmony import */ var _components_Artists__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Artists */ \"./src/components/Artists.tsx\");\n/* harmony import */ var _components_Partner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Partner */ \"./src/components/Partner.tsx\");\n/* harmony import */ var _components_MotionSlider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MotionSlider */ \"./src/components/MotionSlider.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import Analytics from '../components/Analytics';\n// import Canvas from '../components/Canvas';\n\n\n\n\n// import MainHeroImage from '../components/MainHeroImage';\n\n\n\n\n\n\n// import NewPartner from '../components/newPartner'\nvar App = function() {\n    _s();\n    var scrollYProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useViewportScroll)().scrollYProgress;\n    // const opacity = useTransform(scrollY, [0, 100, 200], [0.3, 0, 0.6])\n    var overScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        0.3,\n        0.7,\n        1\n    ], [\n        1,\n        1.2,\n        1.5,\n        2\n    ]);\n    var blurScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        0.5,\n        1\n    ], [\n        0,\n        4,\n        12\n    ]);\n    var heightMove = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        20\n    ]);\n    var filter = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(blurScale, function(b) {\n        return \"blur(\".concat(b, \"px)\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.video, {\n                id: \"vidBlur\",\n                className: \"overscroll-none\",\n                src: \"https://res.cloudinary.com/projectartichoke/video/upload/v1662434830/backgroundVid_new_zqhuoi.mp4\",\n                autoPlay: true,\n                loop: true,\n                muted: true,\n                style: {\n                    objectFit: \"cover\",\n                    width: \"100vw\",\n                    position: \"fixed\",\n                    top: heightMove,\n                    zIndex: 0,\n                    scale: overScale,\n                    filter: filter\n                },\n                children: \"your browser does not support the video format\"\n            }, void 0, false, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-y-20\",\n                style: {\n                    height: \"200vw\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        style: {\n                            zIndex: 21,\n                            backgroundImage: \"url(assets/images/mainHeroImg.png)\",\n                            backgroundSize: \"cover\",\n                            backgroundPosition: \"center\",\n                            height: \"100vh\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-8xl mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative z-10 pb-16 sm:pb-16 md:pb-20 lg:max-w-8xl lg:w-full lg:pb-28 xl:pb-32\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainHero__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoopSlide__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 9\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Artists__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Features__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MotionSlider__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pricing__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Partner__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(App, \"cYZH7WzB/pa2a4nTwFnICKL3a8E=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useViewportScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UDtzQ0FDRSw0RUFBQ0YsNERBQVE7Ozs7cUNBQUc7eUNBRVg7Ozs7OzZCQUNNO2tDQUNYLDhEQUFDRSw0REFBUTtrQ0FDUDtzQ0FDRSw0RUFBQ08saUVBQVk7Ozs7cUNBQUc7eUNBQ2Y7Ozs7OzZCQUNNO2tDQUNYLDhEQUFDUCw0REFBUTtrQ0FDUDtzQ0FDRSw0RUFBQ0UsMkRBQU87Ozs7cUNBQUc7eUNBQ1Y7Ozs7OzZCQUNNO2tDQUNYLDhEQUFDRiw0REFBUTtrQ0FDUDs7OENBRUUsOERBQUNNLDREQUFPOzs7O3lDQUFHOzhDQUVYLDhEQUFDVCx5REFBSzs7Ozt5Q0FBRzs7d0NBQ1I7Ozs7OzZCQUNNOzs7Ozs7cUJBRVA7O29CQUNILENBQ0g7Q0FDSDtHQXhGS1csR0FBRzs7UUFFcUJaLDZEQUFpQjtRQUUzQkQsd0RBQVk7UUFDWkEsd0RBQVk7UUFDWEEsd0RBQVk7UUFDaEJBLHdEQUFZOzs7QUFQdkJhLEtBQUFBLEdBQUc7QUEwRlQsK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BYm91dCc7XG4vLyBpbXBvcnQgQW5hbHl0aWNzIGZyb20gJy4uL2NvbXBvbmVudHMvQW5hbHl0aWNzJztcbi8vIGltcG9ydCBDYW52YXMgZnJvbSAnLi4vY29tcG9uZW50cy9DYW52YXMnO1xuaW1wb3J0IEZlYXR1cmVzIGZyb20gJy4uL2NvbXBvbmVudHMvRmVhdHVyZXMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgTGF6eVNob3cgZnJvbSAnLi4vY29tcG9uZW50cy9MYXp5U2hvdyc7XG5pbXBvcnQgTWFpbkhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9NYWluSGVybyc7XG4vLyBpbXBvcnQgTWFpbkhlcm9JbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL01haW5IZXJvSW1hZ2UnO1xuaW1wb3J0IFByaWNpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9QcmljaW5nJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdCc7XG5pbXBvcnQgTG9vcFNsaWRlIGZyb20gJy4uL2NvbXBvbmVudHMvTG9vcFNsaWRlJztcbmltcG9ydCBBcnRpc3RzIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aXN0cyc7XG5pbXBvcnQgUGFydG5lciBmcm9tICcuLi9jb21wb25lbnRzL1BhcnRuZXInO1xuaW1wb3J0IE1hcmtldFNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL01vdGlvblNsaWRlcic7XG4vLyBpbXBvcnQgTmV3UGFydG5lciBmcm9tICcuLi9jb21wb25lbnRzL25ld1BhcnRuZXInXG5cblxuY29uc3QgQXBwID0gKCkgPT4ge1xuXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuICAvLyBjb25zdCBvcGFjaXR5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFksIFswLCAxMDAsIDIwMF0sIFswLjMsIDAsIDAuNl0pXG4gIGNvbnN0IG92ZXJTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjMsIDAuNywgMV0sIFsxLCAxLjIsIDEuNSwgMl0pO1xuICBjb25zdCBibHVyU2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC41LCAxXSwgWzAsIDQsIDEyXSk7XG4gIGNvbnN0IGhlaWdodE1vdmUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFswLCAyMF0pXG4gIGNvbnN0IGZpbHRlciA9IHVzZVRyYW5zZm9ybShibHVyU2NhbGUsIGIgPT4gYGJsdXIoJHtifXB4KWApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8bW90aW9uLnZpZGVvIGlkPVwidmlkQmx1clwiIGNsYXNzTmFtZT0nb3ZlcnNjcm9sbC1ub25lJyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL3ZpZGVvL3VwbG9hZC92MTY2MjQzNDgzMC9iYWNrZ3JvdW5kVmlkX25ld196cWh1b2kubXA0XCIgYXV0b1BsYXkgbG9vcCBtdXRlZCAgc3R5bGU9e3tvYmplY3RGaXQ6ICdjb3ZlcicsIHdpZHRoOiAnMTAwdncnLCBwb3NpdGlvbjogJ2ZpeGVkJywgdG9wOiBoZWlnaHRNb3ZlLCB6SW5kZXg6IDAsIHNjYWxlOiBvdmVyU2NhbGUsIGZpbHRlcn19PlxuICAgICAgeW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIGZvcm1hdFxuICAgIDwvbW90aW9uLnZpZGVvPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZ3JpZCBnYXAteS0yMGB9IFxuICAgIHN0eWxlPXt7aGVpZ2h0OiAnMjAwdncnfX1cbiAgICAvLyBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogJ3VybCgvYXNzZXRzL2ltYWdlcy9tYWluSGVyb0ltZy5wbmcpJywgYmFja2dyb3VuZFNpemU6ICdjZW50ZXInLCBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJywgd2lkdGg6ICcxMDB2dycsIGhlaWdodDogJzEwMHZoJ319XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZWB9IFxuICAgICAgc3R5bGU9e3t6SW5kZXg6IDIxLCBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoYXNzZXRzL2ltYWdlcy9tYWluSGVyb0ltZy5wbmcpJywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsIGhlaWdodDogJzEwMHZoJ319XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctOHhsIG14LWF1dG9cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSB6LTEwIHBiLTE2IHNtOnBiLTE2IG1kOnBiLTIwIGxnOm1heC13LTh4bCBsZzp3LWZ1bGwgbGc6cGItMjggeGw6cGItMzJgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIZWFkZXIgLz4gXG4gICAgICAgICAgICA8TWFpbkhlcm8gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgICAgPENhbnZhcyAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+ICovfVxuICAgICAgey8qIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgPE1haW5IZXJvSW1hZ2UgLz5cbiAgICAgICAgPENhbnZhcyAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+ICovfVxuICAgICAgPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICB7LyogPENhbnZhcyAvPiAqL31cbiAgICAgICAgPExvb3BTbGlkZSAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICB7LyogPENhbnZhcyAvPiAqL31cbiAgICAgIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8UHJvZHVjdCAvPlxuICAgICAgICAgIHsvKiA8Q2FudmFzIC8+ICovfVxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgICAgPEFydGlzdHMgLz5cbiAgICAgICAgICB7LyogPENhbnZhcyAvPiAqL31cbiAgICAgICAgPC8+XG4gICAgICA8L0xhenlTaG93PlxuICAgICAgPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICAgIDxGZWF0dXJlcyAvPlxuICAgICAgICAgIHsvKiA8Q2FudmFzIC8+ICovfVxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgICAgPE1hcmtldFNsaWRlciAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgICAgPFByaWNpbmcgLz5cbiAgICAgICAgPC8+XG4gICAgICA8L0xhenlTaG93PlxuICAgICAgPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICAgIHsvKiA8Q2FudmFzIC8+ICovfVxuICAgICAgICAgIDxQYXJ0bmVyIC8+XG4gICAgICAgICAgey8qIDxOZXdQYXJ0bmVyIC8+ICovfVxuICAgICAgICAgIDxBYm91dCAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICB7LyogPEFuYWx5dGljcyAvPiAqL31cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsInVzZVRyYW5zZm9ybSIsInVzZVZpZXdwb3J0U2Nyb2xsIiwiQWJvdXQiLCJGZWF0dXJlcyIsIkhlYWRlciIsIkxhenlTaG93IiwiTWFpbkhlcm8iLCJQcmljaW5nIiwiUHJvZHVjdCIsIkxvb3BTbGlkZSIsIkFydGlzdHMiLCJQYXJ0bmVyIiwiTWFya2V0U2xpZGVyIiwiQXBwIiwic2Nyb2xsWVByb2dyZXNzIiwib3ZlclNjYWxlIiwiYmx1clNjYWxlIiwiaGVpZ2h0TW92ZSIsImZpbHRlciIsImIiLCJ2aWRlbyIsImlkIiwiY2xhc3NOYW1lIiwic3JjIiwiYXV0b1BsYXkiLCJsb29wIiwibXV0ZWQiLCJzdHlsZSIsIm9iamVjdEZpdCIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJ6SW5kZXgiLCJzY2FsZSIsImRpdiIsImhlaWdodCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});