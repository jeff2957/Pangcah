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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/About */ \"./src/components/About.tsx\");\n/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Features */ \"./src/components/Features.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_LazyShow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LazyShow */ \"./src/components/LazyShow.tsx\");\n/* harmony import */ var _components_MainHero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainHero */ \"./src/components/MainHero.tsx\");\n/* harmony import */ var _components_Pricing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Pricing */ \"./src/components/Pricing.tsx\");\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Product */ \"./src/components/Product.tsx\");\n/* harmony import */ var _components_LoopSlide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/LoopSlide */ \"./src/components/LoopSlide.tsx\");\n/* harmony import */ var _components_Artists__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Artists */ \"./src/components/Artists.tsx\");\n/* harmony import */ var _components_Partner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Partner */ \"./src/components/Partner.tsx\");\n/* harmony import */ var _components_MotionSlider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MotionSlider */ \"./src/components/MotionSlider.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import Analytics from '../components/Analytics';\n// import Canvas from '../components/Canvas';\n\n\n\n\n// import MainHeroImage from '../components/MainHeroImage';\n\n\n\n\n\n\n// import NewPartner from '../components/newPartner'\nvar App = function() {\n    _s();\n    var scrollYProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useViewportScroll)().scrollYProgress;\n    // const opacity = useTransform(scrollY, [0, 100, 200], [0.3, 0, 0.6])\n    var overScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        0.3,\n        0.7,\n        1\n    ], [\n        1,\n        1.6,\n        1.2,\n        2\n    ]);\n    var blurScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        0.5,\n        1\n    ], [\n        0,\n        8,\n        12\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.video, {\n                className: \"overscroll-none\",\n                src: \"https://res.cloudinary.com/projectartichoke/video/upload/v1662434830/backgroundVid_new_zqhuoi.mp4\",\n                autoPlay: true,\n                loop: true,\n                muted: true,\n                style: {\n                    objectFit: \"cover\",\n                    width: \"100vw\",\n                    position: \"fixed\",\n                    top: 0,\n                    zIndex: 0,\n                    scale: overScale,\n                    filter: \"blur(\" + blurScale + \"px)\"\n                },\n                children: \"your browser does not support the video format\"\n            }, void 0, false, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-y-20\",\n                style: {\n                    height: \"200vw\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        style: {\n                            zIndex: 21,\n                            backgroundImage: \"url(assets/images/mainHeroImg.png)\",\n                            backgroundSize: \"cover\",\n                            backgroundPosition: \"center\",\n                            height: \"100vh\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-8xl mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative z-10 pb-16 sm:pb-16 md:pb-20 lg:max-w-8xl lg:w-full lg:pb-28 xl:pb-32\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainHero__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoopSlide__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 9\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Artists__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Features__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MotionSlider__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pricing__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Partner__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(App, \"etk0kUS2X/86X02o8bY55LA43k4=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useViewportScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O3lDQUFHOzhDQUVYLDhEQUFDVCx5REFBSzs7Ozt5Q0FBRzs7d0NBQ1I7Ozs7OzZCQUNNOzs7Ozs7cUJBRVA7O29CQUNILENBQ0g7Q0FDSDtHQXRGS1csR0FBRzs7UUFFcUJaLDZEQUFpQjtRQUUzQkQsd0RBQVk7UUFDWkEsd0RBQVk7OztBQUwxQmEsS0FBQUEsR0FBRztBQXdGVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0Jztcbi8vIGltcG9ydCBBbmFseXRpY3MgZnJvbSAnLi4vY29tcG9uZW50cy9BbmFseXRpY3MnO1xuLy8gaW1wb3J0IENhbnZhcyBmcm9tICcuLi9jb21wb25lbnRzL0NhbnZhcyc7XG5pbXBvcnQgRmVhdHVyZXMgZnJvbSAnLi4vY29tcG9uZW50cy9GZWF0dXJlcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBMYXp5U2hvdyBmcm9tICcuLi9jb21wb25lbnRzL0xhenlTaG93JztcbmltcG9ydCBNYWluSGVybyBmcm9tICcuLi9jb21wb25lbnRzL01haW5IZXJvJztcbi8vIGltcG9ydCBNYWluSGVyb0ltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkhlcm9JbWFnZSc7XG5pbXBvcnQgUHJpY2luZyBmcm9tICcuLi9jb21wb25lbnRzL1ByaWNpbmcnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0JztcbmltcG9ydCBMb29wU2xpZGUgZnJvbSAnLi4vY29tcG9uZW50cy9Mb29wU2xpZGUnO1xuaW1wb3J0IEFydGlzdHMgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpc3RzJztcbmltcG9ydCBQYXJ0bmVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGFydG5lcic7XG5pbXBvcnQgTWFya2V0U2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTW90aW9uU2xpZGVyJztcbi8vIGltcG9ydCBOZXdQYXJ0bmVyIGZyb20gJy4uL2NvbXBvbmVudHMvbmV3UGFydG5lcidcblxuXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcblxuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcbiAgLy8gY29uc3Qgb3BhY2l0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZLCBbMCwgMTAwLCAyMDBdLCBbMC4zLCAwLCAwLjZdKVxuICBjb25zdCBvdmVyU2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4zLCAwLjcsIDFdLCBbMSwgMS42LCAxLjIsIDJdKTtcbiAgY29uc3QgYmx1clNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuNSwgMV0sIFswLCA4LCAxMl0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8bW90aW9uLnZpZGVvICBjbGFzc05hbWU9J292ZXJzY3JvbGwtbm9uZScgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS92aWRlby91cGxvYWQvdjE2NjI0MzQ4MzAvYmFja2dyb3VuZFZpZF9uZXdfenFodW9pLm1wNFwiIGF1dG9QbGF5IGxvb3AgbXV0ZWQgc3R5bGU9e3tvYmplY3RGaXQ6ICdjb3ZlcicsIHdpZHRoOiAnMTAwdncnLCBwb3NpdGlvbjogJ2ZpeGVkJywgdG9wOiAwLCB6SW5kZXg6IDAsIHNjYWxlOiBvdmVyU2NhbGUsIGZpbHRlcjogJ2JsdXIoJyArIGJsdXJTY2FsZSArICdweCknfX0+XG4gICAgICB5b3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gZm9ybWF0XG4gICAgPC9tb3Rpb24udmlkZW8+XG4gICAgPGRpdiBjbGFzc05hbWU9e2BncmlkIGdhcC15LTIwYH0gXG4gICAgc3R5bGU9e3toZWlnaHQ6ICcyMDB2dyd9fVxuICAgIC8vIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiAndXJsKC9hc3NldHMvaW1hZ2VzL21haW5IZXJvSW1nLnBuZyknLCBiYWNrZ3JvdW5kU2l6ZTogJ2NlbnRlcicsIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLCB3aWR0aDogJzEwMHZ3JywgaGVpZ2h0OiAnMTAwdmgnfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlYH0gXG4gICAgICBzdHlsZT17e3pJbmRleDogMjEsIGJhY2tncm91bmRJbWFnZTogJ3VybChhc3NldHMvaW1hZ2VzL21haW5IZXJvSW1nLnBuZyknLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJywgaGVpZ2h0OiAnMTAwdmgnfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy04eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHotMTAgcGItMTYgc206cGItMTYgbWQ6cGItMjAgbGc6bWF4LXctOHhsIGxnOnctZnVsbCBsZzpwYi0yOCB4bDpwYi0zMmB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhlYWRlciAvPiBcbiAgICAgICAgICAgIDxNYWluSGVybyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FudmFzIC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz4gKi99XG4gICAgICB7LyogPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICA8TWFpbkhlcm9JbWFnZSAvPlxuICAgICAgICA8Q2FudmFzIC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz4gKi99XG4gICAgICA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgIHsvKiA8Q2FudmFzIC8+ICovfVxuICAgICAgICA8TG9vcFNsaWRlIC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIHsvKiA8Q2FudmFzIC8+ICovfVxuICAgICAgPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICAgIDxQcm9kdWN0IC8+XG4gICAgICAgICAgey8qIDxDYW52YXMgLz4gKi99XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8QXJ0aXN0cyAvPlxuICAgICAgICAgIHsvKiA8Q2FudmFzIC8+ICovfVxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgICAgPEZlYXR1cmVzIC8+XG4gICAgICAgICAgey8qIDxDYW52YXMgLz4gKi99XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8TWFya2V0U2xpZGVyIC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8UHJpY2luZyAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvTGF6eVNob3c+XG4gICAgICA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgICAgey8qIDxDYW52YXMgLz4gKi99XG4gICAgICAgICAgPFBhcnRuZXIgLz5cbiAgICAgICAgICB7LyogPE5ld1BhcnRuZXIgLz4gKi99XG4gICAgICAgICAgPEFib3V0IC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIHsvKiA8QW5hbHl0aWNzIC8+ICovfVxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwidXNlVHJhbnNmb3JtIiwidXNlVmlld3BvcnRTY3JvbGwiLCJBYm91dCIsIkZlYXR1cmVzIiwiSGVhZGVyIiwiTGF6eVNob3ciLCJNYWluSGVybyIsIlByaWNpbmciLCJQcm9kdWN0IiwiTG9vcFNsaWRlIiwiQXJ0aXN0cyIsIlBhcnRuZXIiLCJNYXJrZXRTbGlkZXIiLCJBcHAiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJvdmVyU2NhbGUiLCJibHVyU2NhbGUiLCJ2aWRlbyIsImNsYXNzTmFtZSIsInNyYyIsImF1dG9QbGF5IiwibG9vcCIsIm11dGVkIiwic3R5bGUiLCJvYmplY3RGaXQiLCJ3aWR0aCIsInBvc2l0aW9uIiwidG9wIiwiekluZGV4Iiwic2NhbGUiLCJmaWx0ZXIiLCJkaXYiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});