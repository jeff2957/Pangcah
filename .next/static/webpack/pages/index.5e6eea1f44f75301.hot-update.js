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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/About */ \"./src/components/About.tsx\");\n/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Features */ \"./src/components/Features.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_LazyShow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LazyShow */ \"./src/components/LazyShow.tsx\");\n/* harmony import */ var _components_MainHero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainHero */ \"./src/components/MainHero.tsx\");\n/* harmony import */ var _components_Pricing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Pricing */ \"./src/components/Pricing.tsx\");\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Product */ \"./src/components/Product.tsx\");\n/* harmony import */ var _components_LoopSlide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/LoopSlide */ \"./src/components/LoopSlide.tsx\");\n/* harmony import */ var _components_Artists__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Artists */ \"./src/components/Artists.tsx\");\n/* harmony import */ var _components_Partner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Partner */ \"./src/components/Partner.tsx\");\n/* harmony import */ var _components_MotionSlider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MotionSlider */ \"./src/components/MotionSlider.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import Analytics from '../components/Analytics';\n// import Canvas from '../components/Canvas';\n\n\n\n\n// import MainHeroImage from '../components/MainHeroImage';\n\n\n\n\n\n\n// import NewPartner from '../components/newPartner'\nvar App = function() {\n    _s();\n    var scrollYProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useViewportScroll)().scrollYProgress;\n    // const opacity = useTransform(scrollY, [0, 100, 200], [0.3, 0, 0.6])\n    var overScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        0.3,\n        0.7,\n        1\n    ], [\n        1,\n        1.2,\n        1.5,\n        2\n    ]);\n    var blurScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        0.5,\n        1\n    ], [\n        0,\n        4,\n        12\n    ]);\n    var opaRange = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        0.1,\n        1\n    ], [\n        1,\n        0.01,\n        0\n    ]);\n    var opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useSpring)(opaRange, {\n        stiffness: 400,\n        damping: 40\n    });\n    var filter = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(blurScale, function(b) {\n        return \"blur(\".concat(b, \"px)\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.video, {\n                id: \"vidBlur\",\n                className: \"overscroll-none\",\n                src: \"https://res.cloudinary.com/projectartichoke/video/upload/v1662961126/BackgroundVid_0.6x_mtcrfy.mp4\",\n                autoPlay: true,\n                loop: true,\n                muted: true,\n                layout: true,\n                style: {\n                    objectFit: \"cover\",\n                    width: \"100vw\",\n                    minHeight: \"100vh\",\n                    position: \"fixed\",\n                    top: 0,\n                    zIndex: 0,\n                    scale: overScale,\n                    filter: filter\n                },\n                children: \"your browser does not support the video format\"\n            }, void 0, false, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-y-20\",\n                style: {\n                    height: \"200vw\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.div, {\n                        className: \"relative m-3 rounded-3xl\",\n                        style: {\n                            zIndex: 21,\n                            backgroundImage: \"url(https://res.cloudinary.com/projectartichoke/image/upload/v1662938512/mainHeroImg_vrqe8z.png)\",\n                            backgroundSize: \"cover\",\n                            backgroundPosition: \"center\",\n                            objectFit: \"fill\",\n                            opacity: opacity\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-8xl mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative z-10 pb-16 sm:pb-16 md:pb-20 lg:max-w-8xl lg:w-full lg:pb-28 xl:pb-32\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainHero__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoopSlide__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 9\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Artists__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Features__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MotionSlider__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pricing__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Partner__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(App, \"AFlb0djaSGLFUYRk6Cwcpn2MbN4=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useViewportScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2tDQUNQO3NDQUVBLDRFQUFDSSw2REFBUzs7OztxQ0FBRzt5Q0FDVjs7Ozs7NkJBQ007a0NBR1gsOERBQUNKLDREQUFRO2tDQUNQO3NDQUNFLDRFQUFDRywyREFBTzs7OztxQ0FBRzt5Q0FFVjs7Ozs7NkJBQ007a0NBQ1gsOERBQUNILDREQUFRO2tDQUNQO3NDQUNFLDRFQUFDSyw0REFBTzs7OztxQ0FBRzt5Q0FFVjs7Ozs7NkJBQ007a0NBQ1gsOERBQUNMLDREQUFRO2tDQUNQO3NDQUNFLDRFQUFDRiw0REFBUTs7OztxQ0FBRzt5Q0FFWDs7Ozs7NkJBQ007a0NBQ1gsOERBQUNFLDREQUFRO2tDQUNQO3NDQUNFLDRFQUFDTyxpRUFBWTs7OztxQ0FBRzt5Q0FDZjs7Ozs7NkJBQ007a0NBQ1gsOERBQUNQLDREQUFRO2tDQUNQO3NDQUNFLDRFQUFDRSwyREFBTzs7OztxQ0FBRzt5Q0FDVjs7Ozs7NkJBQ007a0NBQ1gsOERBQUNGLDREQUFRO2tDQUNQOzs4Q0FFRSw4REFBQ00sNERBQU87Ozs7eUNBQUc7OENBRVgsOERBQUNULHlEQUFLOzs7O3lDQUFHOzt3Q0FDUjs7Ozs7NkJBQ007Ozs7OztxQkFFUDs7b0JBQ0gsQ0FDSDtDQUNIO0dBL0ZLVyxHQUFHOztRQUVxQmIsNkRBQWlCO1FBRTNCRCx3REFBWTtRQUNaQSx3REFBWTtRQUNiQSx3REFBWTtRQUNiRSxxREFBUztRQUNWRix3REFBWTs7O0FBUnZCYyxLQUFBQSxHQUFHO0FBaUdULCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZVNwcmluZyB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BYm91dCc7XG4vLyBpbXBvcnQgQW5hbHl0aWNzIGZyb20gJy4uL2NvbXBvbmVudHMvQW5hbHl0aWNzJztcbi8vIGltcG9ydCBDYW52YXMgZnJvbSAnLi4vY29tcG9uZW50cy9DYW52YXMnO1xuaW1wb3J0IEZlYXR1cmVzIGZyb20gJy4uL2NvbXBvbmVudHMvRmVhdHVyZXMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgTGF6eVNob3cgZnJvbSAnLi4vY29tcG9uZW50cy9MYXp5U2hvdyc7XG5pbXBvcnQgTWFpbkhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9NYWluSGVybyc7XG4vLyBpbXBvcnQgTWFpbkhlcm9JbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL01haW5IZXJvSW1hZ2UnO1xuaW1wb3J0IFByaWNpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9QcmljaW5nJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdCc7XG5pbXBvcnQgTG9vcFNsaWRlIGZyb20gJy4uL2NvbXBvbmVudHMvTG9vcFNsaWRlJztcbmltcG9ydCBBcnRpc3RzIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aXN0cyc7XG5pbXBvcnQgUGFydG5lciBmcm9tICcuLi9jb21wb25lbnRzL1BhcnRuZXInO1xuaW1wb3J0IE1hcmtldFNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL01vdGlvblNsaWRlcic7XG4vLyBpbXBvcnQgTmV3UGFydG5lciBmcm9tICcuLi9jb21wb25lbnRzL25ld1BhcnRuZXInXG5cblxuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cbiAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG4gIC8vIGNvbnN0IG9wYWNpdHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWSwgWzAsIDEwMCwgMjAwXSwgWzAuMywgMCwgMC42XSlcbiAgY29uc3Qgb3ZlclNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMywgMC43LCAxXSwgWzEsIDEuMiwgMS41LCAyXSk7XG4gIGNvbnN0IGJsdXJTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjUsIDFdLCBbMCwgNCwgMTJdKTtcbiAgY29uc3Qgb3BhUmFuZ2UgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4xLCAxXSwgWzEsIDAuMDEsIDBdKTtcbiAgY29uc3Qgb3BhY2l0eSA9IHVzZVNwcmluZyhvcGFSYW5nZSwgeyBzdGlmZm5lc3M6IDQwMCwgZGFtcGluZzogNDAgfSk7XG4gIGNvbnN0IGZpbHRlciA9IHVzZVRyYW5zZm9ybShibHVyU2NhbGUsIGIgPT4gYGJsdXIoJHtifXB4KWApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8bW90aW9uLnZpZGVvIGlkPVwidmlkQmx1clwiIGNsYXNzTmFtZT0nb3ZlcnNjcm9sbC1ub25lJyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL3ZpZGVvL3VwbG9hZC92MTY2Mjk2MTEyNi9CYWNrZ3JvdW5kVmlkXzAuNnhfbXRjcmZ5Lm1wNFwiIGF1dG9QbGF5IGxvb3AgbXV0ZWQgbGF5b3V0IFxuICAgIHN0eWxlPXt7b2JqZWN0Rml0OiAnY292ZXInLCB3aWR0aDogJzEwMHZ3JywgbWluSGVpZ2h0OiAnMTAwdmgnICxwb3NpdGlvbjogJ2ZpeGVkJywgdG9wOiAwLCB6SW5kZXg6IDAsIHNjYWxlOiBvdmVyU2NhbGUsIGZpbHRlciB9fVxuICAgID5cbiAgICAgIHlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyBmb3JtYXRcbiAgICA8L21vdGlvbi52aWRlbz5cbiAgICA8ZGl2ID5cbiAgICAgIDxIZWFkZXIgLz4gXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e2BncmlkIGdhcC15LTIwYH0gXG4gICAgc3R5bGU9e3toZWlnaHQ6ICcyMDB2dyd9fVxuICAgIC8vIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiAndXJsKC9hc3NldHMvaW1hZ2VzL21haW5IZXJvSW1nLnBuZyknLCBiYWNrZ3JvdW5kU2l6ZTogJ2NlbnRlcicsIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLCB3aWR0aDogJzEwMHZ3JywgaGVpZ2h0OiAnMTAwdmgnfX1cbiAgICA+XG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBtLTMgcm91bmRlZC0zeGxgfSBcbiAgICAgIHN0eWxlPXt7ekluZGV4OiAyMSwgYmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM4NTEyL21haW5IZXJvSW1nX3ZycWU4ei5wbmcpJywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsIG9iamVjdEZpdDogJ2ZpbGwnLCBvcGFjaXR5OiBvcGFjaXR5fX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy04eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHotMTAgcGItMTYgc206cGItMTYgbWQ6cGItMjAgbGc6bWF4LXctOHhsIGxnOnctZnVsbCBsZzpwYi0yOCB4bDpwYi0zMmB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1haW5IZXJvIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgey8qIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FudmFzIC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz4gKi99XG4gICAgICB7LyogPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICA8TWFpbkhlcm9JbWFnZSAvPlxuICAgICAgICA8Q2FudmFzIC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz4gKi99XG4gICAgICB7LyogPG1vdGlvbi5kaXY+ICovfVxuICAgICAgPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICB7LyogPENhbnZhcyAvPiAqL31cbiAgICAgICAgPExvb3BTbGlkZSAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICB7LyogPC9tb3Rpb24uZGl2PiAqL31cbiAgICAgIHsvKiA8Q2FudmFzIC8+ICovfVxuICAgICAgPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICAgIDxQcm9kdWN0IC8+XG4gICAgICAgICAgey8qIDxDYW52YXMgLz4gKi99XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8QXJ0aXN0cyAvPlxuICAgICAgICAgIHsvKiA8Q2FudmFzIC8+ICovfVxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgICAgPEZlYXR1cmVzIC8+XG4gICAgICAgICAgey8qIDxDYW52YXMgLz4gKi99XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8TWFya2V0U2xpZGVyIC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8UHJpY2luZyAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgICAgey8qIDxDYW52YXMgLz4gKi99XG4gICAgICAgICAgPFBhcnRuZXIgLz5cbiAgICAgICAgICB7LyogPE5ld1BhcnRuZXIgLz4gKi99XG4gICAgICAgICAgPEFib3V0IC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIHsvKiA8QW5hbHl0aWNzIC8+ICovfVxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwidXNlVHJhbnNmb3JtIiwidXNlVmlld3BvcnRTY3JvbGwiLCJ1c2VTcHJpbmciLCJBYm91dCIsIkZlYXR1cmVzIiwiSGVhZGVyIiwiTGF6eVNob3ciLCJNYWluSGVybyIsIlByaWNpbmciLCJQcm9kdWN0IiwiTG9vcFNsaWRlIiwiQXJ0aXN0cyIsIlBhcnRuZXIiLCJNYXJrZXRTbGlkZXIiLCJBcHAiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJvdmVyU2NhbGUiLCJibHVyU2NhbGUiLCJvcGFSYW5nZSIsIm9wYWNpdHkiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZmlsdGVyIiwiYiIsInZpZGVvIiwiaWQiLCJjbGFzc05hbWUiLCJzcmMiLCJhdXRvUGxheSIsImxvb3AiLCJtdXRlZCIsImxheW91dCIsInN0eWxlIiwib2JqZWN0Rml0Iiwid2lkdGgiLCJtaW5IZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsInpJbmRleCIsInNjYWxlIiwiZGl2IiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});