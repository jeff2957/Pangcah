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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/About */ \"./src/components/About.tsx\");\n/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Features */ \"./src/components/Features.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_LazyShow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LazyShow */ \"./src/components/LazyShow.tsx\");\n/* harmony import */ var _components_MainHero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainHero */ \"./src/components/MainHero.tsx\");\n/* harmony import */ var _components_Pricing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Pricing */ \"./src/components/Pricing.tsx\");\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Product */ \"./src/components/Product.tsx\");\n/* harmony import */ var _components_LoopSlide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/LoopSlide */ \"./src/components/LoopSlide.tsx\");\n/* harmony import */ var _components_Artists__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Artists */ \"./src/components/Artists.tsx\");\n/* harmony import */ var _components_Partner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Partner */ \"./src/components/Partner.tsx\");\n/* harmony import */ var _components_MotionSlider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MotionSlider */ \"./src/components/MotionSlider.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import Analytics from '../components/Analytics';\n// import Canvas from '../components/Canvas';\n\n\n\n\n// import MainHeroImage from '../components/MainHeroImage';\n\n\n\n\n\n\n// import NewPartner from '../components/newPartner'\nvar App = function() {\n    _s();\n    var scrollYProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useViewportScroll)().scrollYProgress;\n    // const opacity = useTransform(scrollY, [0, 100, 200], [0.3, 0, 0.6])\n    var overScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        0.3,\n        0.7,\n        1\n    ], [\n        1,\n        1.2,\n        1.5,\n        2\n    ]);\n    var blurScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        0.5,\n        1\n    ], [\n        0,\n        4,\n        12\n    ]);\n    var yRange = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        1,\n        0\n    ]);\n    var opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useSpring)(yRange, {\n        stiffness: 400,\n        damping: 40\n    });\n    var filter = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform)(blurScale, function(b) {\n        return \"blur(\".concat(b, \"px)\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.video, {\n                id: \"vidBlur\",\n                className: \"overscroll-none\",\n                src: \"https://res.cloudinary.com/projectartichoke/video/upload/v1662434830/backgroundVid_new_zqhuoi.mp4\",\n                autoPlay: true,\n                loop: true,\n                muted: true,\n                layout: true,\n                style: {\n                    objectFit: \"cover\",\n                    width: \"100vw\",\n                    position: \"fixed\",\n                    top: 0,\n                    zIndex: 0,\n                    scale: overScale,\n                    filter: filter\n                },\n                children: \"your browser does not support the video format\"\n            }, void 0, false, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-y-20\",\n                style: {\n                    height: \"200vw\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.div, {\n                        className: \"relative\",\n                        style: {\n                            zIndex: 21,\n                            backgroundImage: \"url(assets/images/mainHeroImg.png)\",\n                            backgroundSize: \"cover\",\n                            backgroundPosition: \"center\",\n                            height: \"100vh\",\n                            opacity: opacity\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-8xl mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative z-10 pb-16 sm:pb-16 md:pb-20 lg:max-w-8xl lg:w-full lg:pb-28 xl:pb-32\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainHero__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoopSlide__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 9\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Artists__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Features__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MotionSlider__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pricing__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LazyShow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Partner__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(App, \"mpfhmeqfmCTTwJhtlh7qYdM4lUQ=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useViewportScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_13__.useTransform\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUEwQjtBQUN5RDtBQUUzQztBQUN4QyxtREFBbUQ7QUFDbkQsNkNBQTZDO0FBQ0M7QUFDSjtBQUNJO0FBQ0E7QUFDOUMsMkRBQTJEO0FBQ2Y7QUFDQTtBQUNJO0FBQ0o7QUFDQTtBQUNVO0FBQ3RELG9EQUFvRDtBQUdwRCxJQUFNZ0IsR0FBRyxHQUFHLFdBQU07O0lBRWhCLElBQU0sZUFBaUIsR0FBS2IsaUVBQWlCLEVBQUUsQ0FBdkNjLGVBQWU7SUFDdkIsc0VBQXNFO0lBQ3RFLElBQU1DLFNBQVMsR0FBR2hCLDREQUFZLENBQUNlLGVBQWUsRUFBRTtBQUFDLFNBQUM7QUFBRSxXQUFHO0FBQUUsV0FBRztBQUFFLFNBQUM7S0FBQyxFQUFFO0FBQUMsU0FBQztBQUFFLFdBQUc7QUFBRSxXQUFHO0FBQUUsU0FBQztLQUFDLENBQUM7SUFDbkYsSUFBTUUsU0FBUyxHQUFHakIsNERBQVksQ0FBQ2UsZUFBZSxFQUFFO0FBQUMsU0FBQztBQUFFLFdBQUc7QUFBRSxTQUFDO0tBQUMsRUFBRTtBQUFDLFNBQUM7QUFBRSxTQUFDO0FBQUUsVUFBRTtLQUFDLENBQUM7SUFDeEUsSUFBTUcsTUFBTSxHQUFHbEIsNERBQVksQ0FBQ2UsZUFBZSxFQUFFO0FBQUMsU0FBQztBQUFFLFNBQUM7S0FBQyxFQUFFO0FBQUMsU0FBQztBQUFFLFNBQUM7S0FBQyxDQUFDO0lBQzVELElBQU1JLE9BQU8sR0FBR2pCLHlEQUFTLENBQUNnQixNQUFNLEVBQUU7UUFBRUUsU0FBUyxFQUFFLEdBQUc7UUFBRUMsT0FBTyxFQUFFLEVBQUU7S0FBRSxDQUFDO0lBQ2xFLElBQU1DLE1BQU0sR0FBR3RCLDREQUFZLENBQUNpQixTQUFTLEVBQUVNLFNBQUFBLENBQUM7ZUFBSSxPQUFNLENBQUksTUFBRyxDQUFMQSxDQUFDLEVBQUMsS0FBRyxDQUFDO0tBQUEsQ0FBQztJQUUzRCxxQkFDRTs7MEJBQ0EsOERBQUN4Qix3REFBWTtnQkFBQzBCLEVBQUUsRUFBQyxTQUFTO2dCQUFDQyxTQUFTLEVBQUMsaUJBQWlCO2dCQUFDQyxHQUFHLEVBQUMsbUdBQW1HO2dCQUFDQyxRQUFRO2dCQUFDQyxJQUFJO2dCQUFDQyxLQUFLO2dCQUFDQyxNQUFNO2dCQUN6TEMsS0FBSyxFQUFFO29CQUFDQyxTQUFTLEVBQUUsT0FBTztvQkFBRUMsS0FBSyxFQUFFLE9BQU87b0JBQUVDLFFBQVEsRUFBRSxPQUFPO29CQUFFQyxHQUFHLEVBQUUsQ0FBQztvQkFBRUMsTUFBTSxFQUFFLENBQUM7b0JBQUVDLEtBQUssRUFBRXRCLFNBQVM7b0JBQUVNLE1BQU0sRUFBTkEsTUFBTTtpQkFBQzswQkFDMUcsZ0RBRUQ7Ozs7O3FCQUFlOzBCQUNmLDhEQUFDaUIsS0FBRztnQkFBQ2IsU0FBUyxFQUFHLGVBQWE7Z0JBQzlCTSxLQUFLLEVBQUU7b0JBQUNRLE1BQU0sRUFBRSxPQUFPO2lCQUFDOztrQ0FHdEIsOERBQUN6QyxzREFBVTt3QkFBQzJCLFNBQVMsRUFBRyxVQUFRO3dCQUNoQ00sS0FBSyxFQUFFOzRCQUFDSyxNQUFNLEVBQUUsRUFBRTs0QkFBRUksZUFBZSxFQUFFLG9DQUFvQzs0QkFBRUMsY0FBYyxFQUFFLE9BQU87NEJBQUVDLGtCQUFrQixFQUFFLFFBQVE7NEJBQUVILE1BQU0sRUFBRSxPQUFPOzRCQUFFckIsT0FBTyxFQUFFQSxPQUFPO3lCQUFDO2tDQUVsSyw0RUFBQ29CLEtBQUc7NEJBQUNiLFNBQVMsRUFBQyxtQkFBbUI7c0NBQ2hDLDRFQUFDYSxLQUFHO2dDQUNGYixTQUFTLEVBQUcsZ0ZBQThFOztrREFFMUYsOERBQUNyQiwwREFBTTs7Ozs2Q0FBRztrREFDViw4REFBQ0UsNERBQVE7Ozs7NkNBQUc7Ozs7OztxQ0FDUjs7Ozs7aUNBQ0Y7Ozs7OzZCQUNLO2tDQVliLDhEQUFDRCw0REFBUTtrQ0FDUDtzQ0FFQSw0RUFBQ0ksNkRBQVM7Ozs7cUNBQUc7eUNBQ1Y7Ozs7OzZCQUNNO2tDQUVYLDhEQUFDSiw0REFBUTtrQ0FDUDtzQ0FDRSw0RUFBQ0csMkRBQU87Ozs7cUNBQUc7eUNBRVY7Ozs7OzZCQUNNO2tDQUNYLDhEQUFDSCw0REFBUTtrQ0FDUDtzQ0FDRSw0RUFBQ0ssNERBQU87Ozs7cUNBQUc7eUNBRVY7Ozs7OzZCQUNNO2tDQUNYLDhEQUFDTCw0REFBUTtrQ0FDUDtzQ0FDRSw0RUFBQ0YsNERBQVE7Ozs7cUNBQUc7eUNBRVg7Ozs7OzZCQUNNO2tDQUNYLDhEQUFDRSw0REFBUTtrQ0FDUDtzQ0FDRSw0RUFBQ08saUVBQVk7Ozs7cUNBQUc7eUNBQ2Y7Ozs7OzZCQUNNO2tDQUNYLDhEQUFDUCw0REFBUTtrQ0FDUDtzQ0FDRSw0RUFBQ0UsMkRBQU87Ozs7cUNBQUc7eUNBQ1Y7Ozs7OzZCQUNNO2tDQUNYLDhEQUFDRiw0REFBUTtrQ0FDUDs7OENBRUUsOERBQUNNLDREQUFPOzs7O3lDQUFHOzhDQUVYLDhEQUFDVCx5REFBSzs7Ozt5Q0FBRzs7d0NBQ1I7Ozs7OzZCQUNNOzs7Ozs7cUJBRVA7O29CQUNILENBQ0g7Q0FDSDtHQTNGS1csR0FBRzs7UUFFcUJiLDZEQUFpQjtRQUUzQkQsd0RBQVk7UUFDWkEsd0RBQVk7UUFDZkEsd0RBQVk7UUFDWEUscURBQVM7UUFDVkYsd0RBQVk7OztBQVJ2QmMsS0FBQUEsR0FBRztBQTZGVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VTcHJpbmcgfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQWJvdXQnO1xuLy8gaW1wb3J0IEFuYWx5dGljcyBmcm9tICcuLi9jb21wb25lbnRzL0FuYWx5dGljcyc7XG4vLyBpbXBvcnQgQ2FudmFzIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FudmFzJztcbmltcG9ydCBGZWF0dXJlcyBmcm9tICcuLi9jb21wb25lbnRzL0ZlYXR1cmVzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IExhenlTaG93IGZyb20gJy4uL2NvbXBvbmVudHMvTGF6eVNob3cnO1xuaW1wb3J0IE1haW5IZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkhlcm8nO1xuLy8gaW1wb3J0IE1haW5IZXJvSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluSGVyb0ltYWdlJztcbmltcG9ydCBQcmljaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvUHJpY2luZyc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3QnO1xuaW1wb3J0IExvb3BTbGlkZSBmcm9tICcuLi9jb21wb25lbnRzL0xvb3BTbGlkZSc7XG5pbXBvcnQgQXJ0aXN0cyBmcm9tICcuLi9jb21wb25lbnRzL0FydGlzdHMnO1xuaW1wb3J0IFBhcnRuZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QYXJ0bmVyJztcbmltcG9ydCBNYXJrZXRTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3Rpb25TbGlkZXInO1xuLy8gaW1wb3J0IE5ld1BhcnRuZXIgZnJvbSAnLi4vY29tcG9uZW50cy9uZXdQYXJ0bmVyJ1xuXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcblxuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcbiAgLy8gY29uc3Qgb3BhY2l0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZLCBbMCwgMTAwLCAyMDBdLCBbMC4zLCAwLCAwLjZdKVxuICBjb25zdCBvdmVyU2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4zLCAwLjcsIDFdLCBbMSwgMS4yLCAxLjUsIDJdKTtcbiAgY29uc3QgYmx1clNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuNSwgMV0sIFswLCA0LCAxMl0pO1xuICBjb25zdCB5UmFuZ2UgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFsxLCAwXSk7XG4gIGNvbnN0IG9wYWNpdHkgPSB1c2VTcHJpbmcoeVJhbmdlLCB7IHN0aWZmbmVzczogNDAwLCBkYW1waW5nOiA0MCB9KTtcbiAgY29uc3QgZmlsdGVyID0gdXNlVHJhbnNmb3JtKGJsdXJTY2FsZSwgYiA9PiBgYmx1cigke2J9cHgpYCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxtb3Rpb24udmlkZW8gaWQ9XCJ2aWRCbHVyXCIgY2xhc3NOYW1lPSdvdmVyc2Nyb2xsLW5vbmUnIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvdmlkZW8vdXBsb2FkL3YxNjYyNDM0ODMwL2JhY2tncm91bmRWaWRfbmV3X3pxaHVvaS5tcDRcIiBhdXRvUGxheSBsb29wIG11dGVkIGxheW91dCBcbiAgICBzdHlsZT17e29iamVjdEZpdDogJ2NvdmVyJywgd2lkdGg6ICcxMDB2dycsIHBvc2l0aW9uOiAnZml4ZWQnLCB0b3A6IDAsIHpJbmRleDogMCwgc2NhbGU6IG92ZXJTY2FsZSwgZmlsdGVyfX1cbiAgICA+XG4gICAgICB5b3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gZm9ybWF0XG4gICAgPC9tb3Rpb24udmlkZW8+XG4gICAgPGRpdiBjbGFzc05hbWU9e2BncmlkIGdhcC15LTIwYH0gXG4gICAgc3R5bGU9e3toZWlnaHQ6ICcyMDB2dyd9fVxuICAgIC8vIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiAndXJsKC9hc3NldHMvaW1hZ2VzL21haW5IZXJvSW1nLnBuZyknLCBiYWNrZ3JvdW5kU2l6ZTogJ2NlbnRlcicsIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLCB3aWR0aDogJzEwMHZ3JywgaGVpZ2h0OiAnMTAwdmgnfX1cbiAgICA+XG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZWB9IFxuICAgICAgc3R5bGU9e3t6SW5kZXg6IDIxLCBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoYXNzZXRzL2ltYWdlcy9tYWluSGVyb0ltZy5wbmcpJywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsIGhlaWdodDogJzEwMHZoJywgb3BhY2l0eTogb3BhY2l0eX19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctOHhsIG14LWF1dG9cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSB6LTEwIHBiLTE2IHNtOnBiLTE2IG1kOnBiLTIwIGxnOm1heC13LTh4bCBsZzp3LWZ1bGwgbGc6cGItMjggeGw6cGItMzJgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIZWFkZXIgLz4gXG4gICAgICAgICAgICA8TWFpbkhlcm8gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgICB7LyogPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICAgIDxDYW52YXMgLz5cbiAgICAgICAgPC8+XG4gICAgICA8L0xhenlTaG93PiAqL31cbiAgICAgIHsvKiA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgIDxNYWluSGVyb0ltYWdlIC8+XG4gICAgICAgIDxDYW52YXMgLz5cbiAgICAgICAgPC8+XG4gICAgICA8L0xhenlTaG93PiAqL31cbiAgICAgIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgey8qIDxDYW52YXMgLz4gKi99XG4gICAgICAgIDxMb29wU2xpZGUgLz5cbiAgICAgICAgPC8+XG4gICAgICA8L0xhenlTaG93PlxuICAgICAgey8qIDxDYW52YXMgLz4gKi99XG4gICAgICA8TGF6eVNob3c+XG4gICAgICAgIDw+XG4gICAgICAgICAgPFByb2R1Y3QgLz5cbiAgICAgICAgICB7LyogPENhbnZhcyAvPiAqL31cbiAgICAgICAgPC8+XG4gICAgICA8L0xhenlTaG93PlxuICAgICAgPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICAgIDxBcnRpc3RzIC8+XG4gICAgICAgICAgey8qIDxDYW52YXMgLz4gKi99XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8RmVhdHVyZXMgLz5cbiAgICAgICAgICB7LyogPENhbnZhcyAvPiAqL31cbiAgICAgICAgPC8+XG4gICAgICA8L0xhenlTaG93PlxuICAgICAgPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICAgIDxNYXJrZXRTbGlkZXIgLz5cbiAgICAgICAgPC8+XG4gICAgICA8L0xhenlTaG93PlxuICAgICAgPExhenlTaG93PlxuICAgICAgICA8PlxuICAgICAgICAgIDxQcmljaW5nIC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9MYXp5U2hvdz5cbiAgICAgIDxMYXp5U2hvdz5cbiAgICAgICAgPD5cbiAgICAgICAgICB7LyogPENhbnZhcyAvPiAqL31cbiAgICAgICAgICA8UGFydG5lciAvPlxuICAgICAgICAgIHsvKiA8TmV3UGFydG5lciAvPiAqL31cbiAgICAgICAgICA8QWJvdXQgLz5cbiAgICAgICAgPC8+XG4gICAgICA8L0xhenlTaG93PlxuICAgICAgey8qIDxBbmFseXRpY3MgLz4gKi99XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInVzZVNwcmluZyIsIkFib3V0IiwiRmVhdHVyZXMiLCJIZWFkZXIiLCJMYXp5U2hvdyIsIk1haW5IZXJvIiwiUHJpY2luZyIsIlByb2R1Y3QiLCJMb29wU2xpZGUiLCJBcnRpc3RzIiwiUGFydG5lciIsIk1hcmtldFNsaWRlciIsIkFwcCIsInNjcm9sbFlQcm9ncmVzcyIsIm92ZXJTY2FsZSIsImJsdXJTY2FsZSIsInlSYW5nZSIsIm9wYWNpdHkiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZmlsdGVyIiwiYiIsInZpZGVvIiwiaWQiLCJjbGFzc05hbWUiLCJzcmMiLCJhdXRvUGxheSIsImxvb3AiLCJtdXRlZCIsImxheW91dCIsInN0eWxlIiwib2JqZWN0Rml0Iiwid2lkdGgiLCJwb3NpdGlvbiIsInRvcCIsInpJbmRleCIsInNjYWxlIiwiZGl2IiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});