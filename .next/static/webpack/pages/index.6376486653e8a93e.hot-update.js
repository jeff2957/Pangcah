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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/About */ \"./src/components/About.tsx\");\n/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Features */ \"./src/components/Features.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_LazyShow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LazyShow */ \"./src/components/LazyShow.tsx\");\n/* harmony import */ var _components_MainHero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainHero */ \"./src/components/MainHero.tsx\");\n/* harmony import */ var _components_Pricing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Pricing */ \"./src/components/Pricing.tsx\");\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Product */ \"./src/components/Product.tsx\");\n/* harmony import */ var _components_LoopSlide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/LoopSlide */ \"./src/components/LoopSlide.tsx\");\n/* harmony import */ var _components_Artists__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Artists */ \"./src/components/Artists.tsx\");\n/* harmony import */ var _components_Partner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Partner */ \"./src/components/Partner.tsx\");\n/* harmony import */ var _components_MotionSlider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MotionSlider */ \"./src/components/MotionSlider.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import Analytics from '../components/Analytics';\n// import Canvas from '../components/Canvas';\n\n\n\n\n// import MainHeroImage from '../components/MainHeroImage';\n\n\n\n\n\n\n// import NewPartner from '../components/newPartner'\nvar App = function() {\n    _s();\n    var scrollYProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useViewportScroll)().scrollYProgress;\n    // const opacity = useTransform(scrollY, [0, 100, 200], [0.3, 0, 0.6])\n    var overScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        0.3,\n        0.7,\n        1\n    ], [\n        1,\n        1.2,\n        1.5,\n        2\n    ]);\n    var blurScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        0.5,\n        1\n    ], [\n        0,\n        4,\n        12\n    ]);\n    var yRange = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        0.1,\n        1\n    ], [\n        1,\n        0.1,\n        0\n    ]);\n    var opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useSpring)(yRange, {\n        stiffness: 400,\n        damping: 40\n    });\n    var filter = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(blurScale, function(b) {\n        return \"blur(\".concat(b, \"px)\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.video, {\n                id: \"vidBlur\",\n                className: \"overscroll-none\",\n                src: \"https://res.cloudinary.com/projectartichoke/video/upload/v1662434830/backgroundVid_new_zqhuoi.mp4\",\n                autoPlay: true,\n                loop: true,\n                muted: true,\n                layout: true,\n                style: {\n                    objectFit: \"cover\",\n                    width: \"100vw\",\n                    position: \"fixed\",\n                    top: 0,\n                    zIndex: 0,\n                    scale: overScale,\n                    filter: filter\n                },\n                children: \"your browser does not support the video format\"\n            }, void 0, false, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-y-20\",\n                style: {\n                    height: \"200vw\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.div, {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.img, {\n                                className: \"m-5 rounded-3xl\",\n                                style: {\n                                    zIndex: 1,\n                                    backgroundImage: \"url(assets/images/mainHeroImg.png)\",\n                                    backgroundSize: \"cover\",\n                                    backgroundPosition: \"center\",\n                                    height: \"100vh\",\n                                    opacity: opacity\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-w-8xl mx-auto z-20\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative z-10 pb-16 sm:pb-16 md:pb-20 lg:max-w-8xl lg:w-full lg:pb-28 xl:pb-32\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 13\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainHero__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 13\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 11\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoopSlide__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Artists__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Features__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MotionSlider__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pricing__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Partner__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(App, \"mpfhmeqfmCTTwJhtlh7qYdM4lUQ=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useViewportScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDREQUFRO2tDQUNQO3NDQUVBLDRFQUFDSSw2REFBUzs7OztxQ0FBRzt5Q0FDVjs7Ozs7NkJBQ007a0NBRVgsOERBQUNKLDREQUFRO2tDQUNQO3NDQUNFLDRFQUFDRywyREFBTzs7OztxQ0FBRzt5Q0FFVjs7Ozs7NkJBQ007a0NBQ1gsOERBQUNILDREQUFRO2tDQUNQO3NDQUNFLDRFQUFDSyw0REFBTzs7OztxQ0FBRzt5Q0FFVjs7Ozs7NkJBQ007a0NBQ1gsOERBQUNMLDREQUFRO2tDQUNQO3NDQUNFLDRFQUFDRiw0REFBUTs7OztxQ0FBRzt5Q0FFWDs7Ozs7NkJBQ007a0NBQ1gsOERBQUNFLDREQUFRO2tDQUNQO3NDQUNFLDRFQUFDTyxpRUFBWTs7OztxQ0FBRzt5Q0FDZjs7Ozs7NkJBQ007a0NBQ1gsOERBQUNQLDREQUFRO2tDQUNQO3NDQUNFLDRFQUFDRSwyREFBTzs7OztxQ0FBRzt5Q0FDVjs7Ozs7NkJBQ007a0NBQ1gsOERBQUNGLDREQUFRO2tDQUNQOzs4Q0FFRSw4REFBQ00sNERBQU87Ozs7eUNBQUc7OENBRVgsOERBQUNULHlEQUFLOzs7O3lDQUFHOzt3Q0FDUjs7Ozs7NkJBQ007Ozs7OztxQkFFUDs7b0JBQ0gsQ0FDSDtDQUNIO0dBNUZLVyxHQUFHOztRQUVxQmIsNkRBQWlCO1FBRTNCRCx3REFBWTtRQUNaQSx3REFBWTtRQUNmQSx3REFBWTtRQUNYRSxxREFBUztRQUNWRix3REFBWTs7O0FBUnZCYyxLQUFBQSxHQUFHO0FBOEZULCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZVNwcmluZyB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BYm91dCc7XG4vLyBpbXBvcnQgQW5hbHl0aWNzIGZyb20gJy4uL2NvbXBvbmVudHMvQW5hbHl0aWNzJztcbi8vIGltcG9ydCBDYW52YXMgZnJvbSAnLi4vY29tcG9uZW50cy9DYW52YXMnO1xuaW1wb3J0IEZlYXR1cmVzIGZyb20gJy4uL2NvbXBvbmVudHMvRmVhdHVyZXMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgTGF6eVNob3cgZnJvbSAnLi4vY29tcG9uZW50cy9MYXp5U2hvdyc7XG5pbXBvcnQgTWFpbkhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9NYWluSGVybyc7XG4vLyBpbXBvcnQgTWFpbkhlcm9JbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL01haW5IZXJvSW1hZ2UnO1xuaW1wb3J0IFByaWNpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9QcmljaW5nJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdCc7XG5pbXBvcnQgTG9vcFNsaWRlIGZyb20gJy4uL2NvbXBvbmVudHMvTG9vcFNsaWRlJztcbmltcG9ydCBBcnRpc3RzIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aXN0cyc7XG5pbXBvcnQgUGFydG5lciBmcm9tICcuLi9jb21wb25lbnRzL1BhcnRuZXInO1xuaW1wb3J0IE1hcmtldFNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL01vdGlvblNsaWRlcic7XG4vLyBpbXBvcnQgTmV3UGFydG5lciBmcm9tICcuLi9jb21wb25lbnRzL25ld1BhcnRuZXInXG5cblxuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cbiAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG4gIC8vIGNvbnN0IG9wYWNpdHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWSwgWzAsIDEwMCwgMjAwXSwgWzAuMywgMCwgMC42XSlcbiAgY29uc3Qgb3ZlclNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMywgMC43LCAxXSwgWzEsIDEuMiwgMS41LCAyXSk7XG4gIGNvbnN0IGJsdXJTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjUsIDFdLCBbMCwgNCwgMTJdKTtcbiAgY29uc3QgeVJhbmdlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMSwgMV0sIFsxLCAwLjEsIDBdKTtcbiAgY29uc3Qgb3BhY2l0eSA9IHVzZVNwcmluZyh5UmFuZ2UsIHsgc3RpZmZuZXNzOiA0MDAsIGRhbXBpbmc6IDQwIH0pO1xuICBjb25zdCBmaWx0ZXIgPSB1c2VUcmFuc2Zvcm0oYmx1clNjYWxlLCBiID0+IGBibHVyKCR7Yn1weClgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPG1vdGlvbi52aWRlbyBpZD1cInZpZEJsdXJcIiBjbGFzc05hbWU9J292ZXJzY3JvbGwtbm9uZScgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS92aWRlby91cGxvYWQvdjE2NjI0MzQ4MzAvYmFja2dyb3VuZFZpZF9uZXdfenFodW9pLm1wNFwiIGF1dG9QbGF5IGxvb3AgbXV0ZWQgbGF5b3V0IFxuICAgIHN0eWxlPXt7b2JqZWN0Rml0OiAnY292ZXInLCB3aWR0aDogJzEwMHZ3JywgcG9zaXRpb246ICdmaXhlZCcsIHRvcDogMCwgekluZGV4OiAwLCBzY2FsZTogb3ZlclNjYWxlLCBmaWx0ZXJ9fVxuICAgID5cbiAgICAgIHlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyBmb3JtYXRcbiAgICA8L21vdGlvbi52aWRlbz5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YGdyaWQgZ2FwLXktMjBgfSBcbiAgICBzdHlsZT17e2hlaWdodDogJzIwMHZ3J319XG4gICAgLy8gc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoL2Fzc2V0cy9pbWFnZXMvbWFpbkhlcm9JbWcucG5nKScsIGJhY2tncm91bmRTaXplOiAnY2VudGVyJywgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsIHdpZHRoOiAnMTAwdncnLCBoZWlnaHQ6ICcxMDB2aCd9fVxuICAgID5cbiAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlYH0gXG4gICAgICAvLyBzdHlsZT17e3pJbmRleDogMjEsIGJhY2tncm91bmRJbWFnZTogJ3VybChhc3NldHMvaW1hZ2VzL21haW5IZXJvSW1nLnBuZyknLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJywgaGVpZ2h0OiAnMTAwdmgnLCBvcGFjaXR5OiBvcGFjaXR5fX1cbiAgICAgID5cbiAgICAgICAgPG1vdGlvbi5pbWcgY2xhc3NOYW1lPSdtLTUgcm91bmRlZC0zeGwnIHN0eWxlPXt7ekluZGV4OiAxLCBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoYXNzZXRzL2ltYWdlcy9tYWluSGVyb0ltZy5wbmcpJywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsIGhlaWdodDogJzEwMHZoJywgb3BhY2l0eTogb3BhY2l0eX19Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy04eGwgbXgtYXV0byB6LTIwXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgei0xMCBwYi0xNiBzbTpwYi0xNiBtZDpwYi0yMCBsZzptYXgtdy04eGwgbGc6dy1mdWxsIGxnOnBiLTI4IHhsOnBiLTMyYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SGVhZGVyIC8+IFxuICAgICAgICAgICAgPE1haW5IZXJvIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgey8qIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FudmFzIC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz4gKi99XG4gICAgICB7LyogPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICA8TWFpbkhlcm9JbWFnZSAvPlxuICAgICAgICA8Q2FudmFzIC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz4gKi99XG4gICAgICA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgIHsvKiA8Q2FudmFzIC8+ICovfVxuICAgICAgICA8TG9vcFNsaWRlIC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIHsvKiA8Q2FudmFzIC8+ICovfVxuICAgICAgPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICAgIDxQcm9kdWN0IC8+XG4gICAgICAgICAgey8qIDxDYW52YXMgLz4gKi99XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8QXJ0aXN0cyAvPlxuICAgICAgICAgIHsvKiA8Q2FudmFzIC8+ICovfVxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgICAgPEZlYXR1cmVzIC8+XG4gICAgICAgICAgey8qIDxDYW52YXMgLz4gKi99XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8TWFya2V0U2xpZGVyIC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8UHJpY2luZyAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgICAgey8qIDxDYW52YXMgLz4gKi99XG4gICAgICAgICAgPFBhcnRuZXIgLz5cbiAgICAgICAgICB7LyogPE5ld1BhcnRuZXIgLz4gKi99XG4gICAgICAgICAgPEFib3V0IC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIHsvKiA8QW5hbHl0aWNzIC8+ICovfVxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwidXNlVHJhbnNmb3JtIiwidXNlVmlld3BvcnRTY3JvbGwiLCJ1c2VTcHJpbmciLCJBYm91dCIsIkZlYXR1cmVzIiwiSGVhZGVyIiwiTGF6eVNob3ciLCJNYWluSGVybyIsIlByaWNpbmciLCJQcm9kdWN0IiwiTG9vcFNsaWRlIiwiQXJ0aXN0cyIsIlBhcnRuZXIiLCJNYXJrZXRTbGlkZXIiLCJBcHAiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJvdmVyU2NhbGUiLCJibHVyU2NhbGUiLCJ5UmFuZ2UiLCJvcGFjaXR5Iiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImZpbHRlciIsImIiLCJ2aWRlbyIsImlkIiwiY2xhc3NOYW1lIiwic3JjIiwiYXV0b1BsYXkiLCJsb29wIiwibXV0ZWQiLCJsYXlvdXQiLCJzdHlsZSIsIm9iamVjdEZpdCIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJ6SW5kZXgiLCJzY2FsZSIsImRpdiIsImhlaWdodCIsImltZyIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});