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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/About */ \"./src/components/About.tsx\");\n/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Features */ \"./src/components/Features.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_LazyShow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LazyShow */ \"./src/components/LazyShow.tsx\");\n/* harmony import */ var _components_MainHero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainHero */ \"./src/components/MainHero.tsx\");\n/* harmony import */ var _components_Pricing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Pricing */ \"./src/components/Pricing.tsx\");\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Product */ \"./src/components/Product.tsx\");\n/* harmony import */ var _components_LoopSlide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/LoopSlide */ \"./src/components/LoopSlide.tsx\");\n/* harmony import */ var _components_Artists__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Artists */ \"./src/components/Artists.tsx\");\n/* harmony import */ var _components_Partner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Partner */ \"./src/components/Partner.tsx\");\n/* harmony import */ var _components_MotionSlider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MotionSlider */ \"./src/components/MotionSlider.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import Analytics from '../components/Analytics';\n// import Canvas from '../components/Canvas';\n\n\n\n\n// import MainHeroImage from '../components/MainHeroImage';\n\n\n\n\n\n\n// import NewPartner from '../components/newPartner'\nvar App = function() {\n    _s();\n    var scrollYProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useViewportScroll)().scrollYProgress;\n    // const opacity = useTransform(scrollY, [0, 100, 200], [0.3, 0, 0.6])\n    var overScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        0.3,\n        0.7,\n        1\n    ], [\n        1,\n        1.2,\n        1.5,\n        2\n    ]);\n    var blurScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        0.5,\n        1\n    ], [\n        0,\n        4,\n        12\n    ]);\n    var yRange = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        1,\n        0\n    ]);\n    var opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useSpring)(yRange, {\n        stiffness: 400,\n        damping: 40\n    });\n    var filter = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(blurScale, function(b) {\n        return \"blur(\".concat(b, \"px)\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.video, {\n                id: \"vidBlur\",\n                className: \"overscroll-none\",\n                src: \"https://res.cloudinary.com/projectartichoke/video/upload/v1662434830/backgroundVid_new_zqhuoi.mp4\",\n                autoPlay: true,\n                loop: true,\n                muted: true,\n                layout: true,\n                style: {\n                    objectFit: \"cover\",\n                    width: \"100vw\",\n                    position: \"fixed\",\n                    top: 0,\n                    zIndex: 0,\n                    scale: overScale,\n                    filter: filter\n                },\n                children: \"your browser does not support the video format\"\n            }, void 0, false, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-y-20\",\n                style: {\n                    height: \"200vw\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.div, {\n                        className: \"relative\",\n                        style: {\n                            zIndex: 21,\n                            position: \"fixed\",\n                            backgroundImage: \"url(assets/images/mainHeroImg.png)\",\n                            backgroundSize: \"cover\",\n                            backgroundPosition: \"center\",\n                            height: \"100vh\",\n                            opacity: opacity\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-8xl mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative z-10 pb-16 sm:pb-16 md:pb-20 lg:max-w-8xl lg:w-full lg:pb-28 xl:pb-32\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainHero__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoopSlide__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 9\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Artists__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Features__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MotionSlider__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pricing__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Partner__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(App, \"mpfhmeqfmCTTwJhtlh7qYdM4lUQ=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useViewportScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTtrQ0FFWCw4REFBQ0osNERBQVE7a0NBQ1A7c0NBQ0UsNEVBQUNHLDJEQUFPOzs7O3FDQUFHO3lDQUVWOzs7Ozs2QkFDTTtrQ0FDWCw4REFBQ0gsNERBQVE7a0NBQ1A7c0NBQ0UsNEVBQUNLLDREQUFPOzs7O3FDQUFHO3lDQUVWOzs7Ozs2QkFDTTtrQ0FDWCw4REFBQ0wsNERBQVE7a0NBQ1A7c0NBQ0UsNEVBQUNGLDREQUFROzs7O3FDQUFHO3lDQUVYOzs7Ozs2QkFDTTtrQ0FDWCw4REFBQ0UsNERBQVE7a0NBQ1A7c0NBQ0UsNEVBQUNPLGlFQUFZOzs7O3FDQUFHO3lDQUNmOzs7Ozs2QkFDTTtrQ0FDWCw4REFBQ1AsNERBQVE7a0NBQ1A7c0NBQ0UsNEVBQUNFLDJEQUFPOzs7O3FDQUFHO3lDQUNWOzs7Ozs2QkFDTTtrQ0FDWCw4REFBQ0YsNERBQVE7a0NBQ1A7OzhDQUVFLDhEQUFDTSw0REFBTzs7Ozt5Q0FBRzs4Q0FFWCw4REFBQ1QseURBQUs7Ozs7eUNBQUc7O3dDQUNSOzs7Ozs2QkFDTTs7Ozs7O3FCQUVQOztvQkFDSCxDQUNIO0NBQ0g7R0EzRktXLEdBQUc7O1FBRXFCYiw2REFBaUI7UUFFM0JELHdEQUFZO1FBQ1pBLHdEQUFZO1FBQ2ZBLHdEQUFZO1FBQ1hFLHFEQUFTO1FBQ1ZGLHdEQUFZOzs7QUFSdkJjLEtBQUFBLEdBQUc7QUE2RlQsK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlU3ByaW5nIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0Jztcbi8vIGltcG9ydCBBbmFseXRpY3MgZnJvbSAnLi4vY29tcG9uZW50cy9BbmFseXRpY3MnO1xuLy8gaW1wb3J0IENhbnZhcyBmcm9tICcuLi9jb21wb25lbnRzL0NhbnZhcyc7XG5pbXBvcnQgRmVhdHVyZXMgZnJvbSAnLi4vY29tcG9uZW50cy9GZWF0dXJlcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBMYXp5U2hvdyBmcm9tICcuLi9jb21wb25lbnRzL0xhenlTaG93JztcbmltcG9ydCBNYWluSGVybyBmcm9tICcuLi9jb21wb25lbnRzL01haW5IZXJvJztcbi8vIGltcG9ydCBNYWluSGVyb0ltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkhlcm9JbWFnZSc7XG5pbXBvcnQgUHJpY2luZyBmcm9tICcuLi9jb21wb25lbnRzL1ByaWNpbmcnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0JztcbmltcG9ydCBMb29wU2xpZGUgZnJvbSAnLi4vY29tcG9uZW50cy9Mb29wU2xpZGUnO1xuaW1wb3J0IEFydGlzdHMgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpc3RzJztcbmltcG9ydCBQYXJ0bmVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGFydG5lcic7XG5pbXBvcnQgTWFya2V0U2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTW90aW9uU2xpZGVyJztcbi8vIGltcG9ydCBOZXdQYXJ0bmVyIGZyb20gJy4uL2NvbXBvbmVudHMvbmV3UGFydG5lcidcblxuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cbiAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG4gIC8vIGNvbnN0IG9wYWNpdHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWSwgWzAsIDEwMCwgMjAwXSwgWzAuMywgMCwgMC42XSlcbiAgY29uc3Qgb3ZlclNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMywgMC43LCAxXSwgWzEsIDEuMiwgMS41LCAyXSk7XG4gIGNvbnN0IGJsdXJTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjUsIDFdLCBbMCwgNCwgMTJdKTtcbiAgY29uc3QgeVJhbmdlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMSwgMF0pO1xuICBjb25zdCBvcGFjaXR5ID0gdXNlU3ByaW5nKHlSYW5nZSwgeyBzdGlmZm5lc3M6IDQwMCwgZGFtcGluZzogNDAgfSk7XG4gIGNvbnN0IGZpbHRlciA9IHVzZVRyYW5zZm9ybShibHVyU2NhbGUsIGIgPT4gYGJsdXIoJHtifXB4KWApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8bW90aW9uLnZpZGVvIGlkPVwidmlkQmx1clwiIGNsYXNzTmFtZT0nb3ZlcnNjcm9sbC1ub25lJyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL3ZpZGVvL3VwbG9hZC92MTY2MjQzNDgzMC9iYWNrZ3JvdW5kVmlkX25ld196cWh1b2kubXA0XCIgYXV0b1BsYXkgbG9vcCBtdXRlZCBsYXlvdXQgXG4gICAgc3R5bGU9e3tvYmplY3RGaXQ6ICdjb3ZlcicsIHdpZHRoOiAnMTAwdncnLCBwb3NpdGlvbjogJ2ZpeGVkJywgdG9wOiAwLCB6SW5kZXg6IDAsIHNjYWxlOiBvdmVyU2NhbGUsIGZpbHRlcn19XG4gICAgPlxuICAgICAgeW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIGZvcm1hdFxuICAgIDwvbW90aW9uLnZpZGVvPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZ3JpZCBnYXAteS0yMGB9IFxuICAgIHN0eWxlPXt7aGVpZ2h0OiAnMjAwdncnfX1cbiAgICAvLyBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogJ3VybCgvYXNzZXRzL2ltYWdlcy9tYWluSGVyb0ltZy5wbmcpJywgYmFja2dyb3VuZFNpemU6ICdjZW50ZXInLCBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJywgd2lkdGg6ICcxMDB2dycsIGhlaWdodDogJzEwMHZoJ319XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmVgfSBcbiAgICAgIHN0eWxlPXt7ekluZGV4OiAyMSwgcG9zaXRpb246ICdmaXhlZCcsIGJhY2tncm91bmRJbWFnZTogJ3VybChhc3NldHMvaW1hZ2VzL21haW5IZXJvSW1nLnBuZyknLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJywgaGVpZ2h0OiAnMTAwdmgnLCBvcGFjaXR5OiBvcGFjaXR5fX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy04eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHotMTAgcGItMTYgc206cGItMTYgbWQ6cGItMjAgbGc6bWF4LXctOHhsIGxnOnctZnVsbCBsZzpwYi0yOCB4bDpwYi0zMmB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhlYWRlciAvPiBcbiAgICAgICAgICAgIDxNYWluSGVybyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIHsvKiA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgICAgPENhbnZhcyAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+ICovfVxuICAgICAgey8qIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgPE1haW5IZXJvSW1hZ2UgLz5cbiAgICAgICAgPENhbnZhcyAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+ICovfVxuICAgICAgPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICB7LyogPENhbnZhcyAvPiAqL31cbiAgICAgICAgPExvb3BTbGlkZSAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICB7LyogPENhbnZhcyAvPiAqL31cbiAgICAgIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8UHJvZHVjdCAvPlxuICAgICAgICAgIHsvKiA8Q2FudmFzIC8+ICovfVxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgICAgPEFydGlzdHMgLz5cbiAgICAgICAgICB7LyogPENhbnZhcyAvPiAqL31cbiAgICAgICAgPC8+XG4gICAgICA8L0xhenlTaG93PlxuICAgICAgPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICAgIDxGZWF0dXJlcyAvPlxuICAgICAgICAgIHsvKiA8Q2FudmFzIC8+ICovfVxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgICAgPE1hcmtldFNsaWRlciAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgICAgPFByaWNpbmcgLz5cbiAgICAgICAgPC8+XG4gICAgICA8L0xhenlTaG93PlxuICAgICAgPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICAgIHsvKiA8Q2FudmFzIC8+ICovfVxuICAgICAgICAgIDxQYXJ0bmVyIC8+XG4gICAgICAgICAgey8qIDxOZXdQYXJ0bmVyIC8+ICovfVxuICAgICAgICAgIDxBYm91dCAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICB7LyogPEFuYWx5dGljcyAvPiAqL31cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsInVzZVRyYW5zZm9ybSIsInVzZVZpZXdwb3J0U2Nyb2xsIiwidXNlU3ByaW5nIiwiQWJvdXQiLCJGZWF0dXJlcyIsIkhlYWRlciIsIkxhenlTaG93IiwiTWFpbkhlcm8iLCJQcmljaW5nIiwiUHJvZHVjdCIsIkxvb3BTbGlkZSIsIkFydGlzdHMiLCJQYXJ0bmVyIiwiTWFya2V0U2xpZGVyIiwiQXBwIiwic2Nyb2xsWVByb2dyZXNzIiwib3ZlclNjYWxlIiwiYmx1clNjYWxlIiwieVJhbmdlIiwib3BhY2l0eSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJmaWx0ZXIiLCJiIiwidmlkZW8iLCJpZCIsImNsYXNzTmFtZSIsInNyYyIsImF1dG9QbGF5IiwibG9vcCIsIm11dGVkIiwibGF5b3V0Iiwic3R5bGUiLCJvYmplY3RGaXQiLCJ3aWR0aCIsInBvc2l0aW9uIiwidG9wIiwiekluZGV4Iiwic2NhbGUiLCJkaXYiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});