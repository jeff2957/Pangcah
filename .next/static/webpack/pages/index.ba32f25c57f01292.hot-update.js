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

/***/ "./src/components/MotionSlider.tsx":
/*!*****************************************!*\
  !*** ./src/components/MotionSlider.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import config from '../config/index.json';\nvar variants = {\n    enter: function(direction) {\n        return {\n            x: direction > 0 ? 1000 : -1000,\n            opacity: 0\n        };\n    },\n    center: {\n        zIndex: 1,\n        x: 0,\n        opacity: 1\n    },\n    exit: function(direction) {\n        return {\n            zIndex: 0,\n            x: direction < 0 ? 1000 : -1000,\n            opacity: 0\n        };\n    }\n};\nvar swipeConfidenceThreshold = 10000;\nvar swipePower = function(offset, velocity) {\n    return Math.abs(offset) * velocity;\n};\nvar images = [\n    \"https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png\",\n    \"https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png\",\n    \"https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png\"\n];\n// const imagePoly = [\n// ];\nvar imageText = [\n    \"市集一\",\n    \"市集二\",\n    \"市集三\",\n    \"市集四\",\n    \"市集五\",\n    \"市集六\"\n];\nvar MotionSlider = function() {\n    _s();\n    // const { markets } = config;\n    // const { title, items: marketLists } = markets;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        0\n    ]), ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ref[0], 2), page = ref1[0], direction = ref1[1], setPage = ref[1];\n    // const imageIndex = wrap(0, imagesS.length, page);\n    var imageIndex = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.wrap)(0, images.length, page);\n    var paginate = function(newDirection) {\n        setPage([\n            page + newDirection,\n            newDirection\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative flex justify-center items-center mx-auto my-auto px-2 pt-4 pb-30 text-white\",\n            style: {\n                maxHeight: \"100vh\",\n                minHeight: \"50vh\",\n                height: \"auto\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                    initial: false,\n                    custom: direction,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                            className: \"z-20 text-5xl font-black font-TaipeiBold\",\n                            style: {\n                                height: \"80%\"\n                            },\n                            children: imageText[imageIndex]\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                            src: images[imageIndex],\n                            className: \"absolute clip rounded-full\",\n                            style: {\n                                maxWidth: \"70vw\",\n                                maxHeight: \"70%\",\n                                minWidth: \"20vw\",\n                                width: \"auto\"\n                            },\n                            custom: direction,\n                            variants: variants,\n                            initial: \"enter\",\n                            animate: \"center\",\n                            exit: \"exit\",\n                            transition: {\n                                x: {\n                                    type: \"spring\",\n                                    stiffness: 300,\n                                    damping: 40\n                                },\n                                opacity: {\n                                    duration: 0.1\n                                }\n                            },\n                            drag: \"x\",\n                            dragConstraints: {\n                                left: 0,\n                                right: 0\n                            },\n                            dragElastic: 1,\n                            onDragEnd: function(e, param) {\n                                var offset = param.offset, velocity = param.velocity;\n                                var swipe = swipePower(offset.x, velocity.x);\n                                if (swipe < -swipeConfidenceThreshold) {\n                                    console.log(e);\n                                    paginate(1);\n                                } else if (swipe > swipeConfidenceThreshold) {\n                                    paginate(-1);\n                                }\n                            }\n                        }, page, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"next\",\n                    onClick: function() {\n                        return paginate(1);\n                    },\n                    style: {\n                        right: \"15%\",\n                        height: \"0%\"\n                    },\n                    children: \"‣\"\n                }, void 0, false, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"prev\",\n                    onClick: function() {\n                        return paginate(-1);\n                    },\n                    style: {\n                        left: \"15%\",\n                        transform: \"scale(-1)\",\n                        height: \"1%\"\n                    },\n                    children: \"‣\"\n                }, void 0, false, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(MotionSlider, \"8Bx1Wl4uzlT5pCEkBvA3L8JklTA=\");\n_c = MotionSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MotionSlider);\nvar _c;\n$RefreshReg$(_c, \"MotionSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSzt3QkFBRWxCLE1BQU0sRUFBRSxJQUFJO3FCQUFDOzhCQUNsRixHQUFHOzs7Ozt5QkFDQTs4QkFDTiw4REFBQ0wsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLE1BQU07b0JBQUM2QixPQUFPLEVBQUU7K0JBQU1oQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQUE7b0JBQUVJLEtBQUssRUFBRTt3QkFBQ29CLElBQUksRUFBRSxLQUFLO3dCQUFFUyxTQUFTLEVBQUUsV0FBVzt3QkFBRTFCLE1BQU0sRUFBRSxJQUFJO3FCQUFDOzhCQUMxRyxHQUFHOzs7Ozt5QkFDQTs7Ozs7O2lCQUNBO3FCQUVMLENBQ0o7Q0FDRjtHQWxFS1osWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBb0VsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vdGlvblNsaWRlci50c3g/MGE3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHdyYXAgfSBmcm9tIFwicG9wbW90aW9uXCI7XG5cbi8vIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2luZGV4Lmpzb24nO1xuXG5jb25zdCB2YXJpYW50cyA9IHtcbiAgZW50ZXI6IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBkaXJlY3Rpb24gPiAwID8gMTAwMCA6IC0xMDAwLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH07XG4gIH0sXG4gIGNlbnRlcjoge1xuICAgIHpJbmRleDogMSxcbiAgICB4OiAwLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgZXhpdDogKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpJbmRleDogMCxcbiAgICAgIHg6IGRpcmVjdGlvbiA8IDAgPyAxMDAwIDogLTEwMDAsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfTtcbiAgfVxufTtcblxuY29uc3Qgc3dpcGVDb25maWRlbmNlVGhyZXNob2xkID0gMTAwMDA7XG5jb25zdCBzd2lwZVBvd2VyID0gKG9mZnNldDogbnVtYmVyLCB2ZWxvY2l0eTogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBNYXRoLmFicyhvZmZzZXQpICogdmVsb2NpdHk7XG59O1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gIFwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC9kZDIzNzA4ZWJjNDA1MzU1MWJiMzNlMThiNzE3NGU3M2I2ZTE3MTBiL2RlYTI0L3N0YXRpYy9pbWFnZXMvd2FsbHBhcGVycy9zaGFyZWQtY29sb3JzQDJ4LnBuZ1wiLFxuICBcImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNDlkZTM0OWQxMmRiODUxOTUyYzU1NTZmM2M2MzdjYTc3Mjc0NTMxNi9jZmM1Ni9zdGF0aWMvaW1hZ2VzL3dhbGxwYXBlcnMvYnJpZGdlLTAyQDJ4LnBuZ1wiLFxuICBcImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNTk0ZGU2NjQ2OTA3OWMyMWZjNTRjMTRkYjA1OTEzMDVhMTE5OGRkNi8zZjRiMS9zdGF0aWMvaW1hZ2VzL3dhbGxwYXBlcnMvYnJpZGdlLTAxQDJ4LnBuZ1wiXG5dO1xuXG4vLyBjb25zdCBpbWFnZVBvbHkgPSBbXG5cbi8vIF07XG5cbmNvbnN0IGltYWdlVGV4dCA9IFtcbiAgXCLluILpm4bkuIBcIixcbiAgXCLluILpm4bkuoxcIixcbiAgXCLluILpm4bkuIlcIixcbiAgXCLluILpm4blm5tcIixcbiAgXCLluILpm4bkupRcIixcbiAgXCLluILpm4blha1cIlxuXTtcblxuY29uc3QgTW90aW9uU2xpZGVyID0gKCkgPT4ge1xuXG4gIC8vIGNvbnN0IHsgbWFya2V0cyB9ID0gY29uZmlnO1xuXG4gIC8vIGNvbnN0IHsgdGl0bGUsIGl0ZW1zOiBtYXJrZXRMaXN0cyB9ID0gbWFya2V0cztcblxuICBjb25zdCBbW3BhZ2UsIGRpcmVjdGlvbl0sIHNldFBhZ2VdID0gdXNlU3RhdGUoWzAsIDBdKTtcblxuICAvLyBjb25zdCBpbWFnZUluZGV4ID0gd3JhcCgwLCBpbWFnZXNTLmxlbmd0aCwgcGFnZSk7XG4gIGNvbnN0IGltYWdlSW5kZXggPSB3cmFwKDAsIGltYWdlcy5sZW5ndGgsIHBhZ2UpO1xuXG5cbiAgY29uc3QgcGFnaW5hdGUgPSAobmV3RGlyZWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICBzZXRQYWdlKFtwYWdlICsgbmV3RGlyZWN0aW9uLCBuZXdEaXJlY3Rpb25dKTtcbiAgfTtcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIHsvKiA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS04IGJnLWJsYWNrXCIgaWQ9XCJtYXJrZXRzXCI+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteC1hdXRvIG15LWF1dG8gcHgtMiBwdC00IHBiLTMwIHRleHQtd2hpdGVgfSBzdHlsZT17e21heEhlaWdodDogJzEwMHZoJywgbWluSGVpZ2h0OiAnNTB2aCcsIGhlaWdodDogJ2F1dG8nfX0+XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfSBjdXN0b209e2RpcmVjdGlvbn0+XG4gICAgICAgIHsvKiB7bWFya2V0TGlzdHMubWFwKChtYXJrZXQpID0+ICggKi99XG4gICAgICAgIHsvKiA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPiAqL31cbiAgICAgICAgICA8bW90aW9uLmgyIGNsYXNzTmFtZT1cInotMjAgdGV4dC01eGwgZm9udC1ibGFjayBmb250LVRhaXBlaUJvbGRcIiBzdHlsZT17e2hlaWdodDogJzgwJSd9fT57aW1hZ2VUZXh0W2ltYWdlSW5kZXhdfTwvbW90aW9uLmgyPlxuICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAga2V5PXtwYWdlfVxuICAgICAgICAgIHNyYz17aW1hZ2VzW2ltYWdlSW5kZXhdfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGNsaXAgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiAnNzB2dycsIG1heEhlaWdodDogJzcwJScsIG1pbldpZHRoOiAnMjB2dycsIHdpZHRoOiAnYXV0bycsfX1cbiAgICAgICAgICBjdXN0b209e2RpcmVjdGlvbn1cbiAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICAgICAgaW5pdGlhbD1cImVudGVyXCJcbiAgICAgICAgICBhbmltYXRlPVwiY2VudGVyXCJcbiAgICAgICAgICBleGl0PVwiZXhpdFwiXG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgeDogeyB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDMwMCwgZGFtcGluZzogNDAgfSxcbiAgICAgICAgICAgIG9wYWNpdHk6IHsgZHVyYXRpb246IDAuMSB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBkcmFnPVwieFwiXG4gICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7IGxlZnQ6IDAsIHJpZ2h0OiAwIH19XG4gICAgICAgICAgZHJhZ0VsYXN0aWM9ezF9XG4gICAgICAgICAgb25EcmFnRW5kPXsoZSwgeyBvZmZzZXQsIHZlbG9jaXR5IH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN3aXBlID0gc3dpcGVQb3dlcihvZmZzZXQueCwgdmVsb2NpdHkueCk7XG5cbiAgICAgICAgICAgIGlmIChzd2lwZSA8IC1zd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgcGFnaW5hdGUoMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlID4gc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgIHBhZ2luYXRlKC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIHsvKiA8L21vdGlvbi5kaXY+ICovfVxuICAgICAgICB7LyogKSl9ICovfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5leHRcIiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZSgxKX0gc3R5bGU9e3tyaWdodDogJzE1JScsIGhlaWdodDogJzAlJ319PlxuICAgICAgICB7XCLigKNcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2XCIgb25DbGljaz17KCkgPT4gcGFnaW5hdGUoLTEpfSBzdHlsZT17e2xlZnQ6ICcxNSUnLCB0cmFuc2Zvcm06ICdzY2FsZSgtMSknLCBoZWlnaHQ6ICcxJSd9fT5cbiAgICAgICAge1wi4oCjXCJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIHsvKiAvLyA8L3NlY3Rpb24+ICovfVxuICAgIDwvPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3Rpb25TbGlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIndyYXAiLCJ2YXJpYW50cyIsImVudGVyIiwiZGlyZWN0aW9uIiwieCIsIm9wYWNpdHkiLCJjZW50ZXIiLCJ6SW5kZXgiLCJleGl0Iiwic3dpcGVDb25maWRlbmNlVGhyZXNob2xkIiwic3dpcGVQb3dlciIsIm9mZnNldCIsInZlbG9jaXR5IiwiTWF0aCIsImFicyIsImltYWdlcyIsImltYWdlVGV4dCIsIk1vdGlvblNsaWRlciIsInBhZ2UiLCJzZXRQYWdlIiwiaW1hZ2VJbmRleCIsImxlbmd0aCIsInBhZ2luYXRlIiwibmV3RGlyZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJoZWlnaHQiLCJpbml0aWFsIiwiY3VzdG9tIiwiaDIiLCJpbWciLCJzcmMiLCJtYXhXaWR0aCIsIm1pbldpZHRoIiwid2lkdGgiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZHVyYXRpb24iLCJkcmFnIiwiZHJhZ0NvbnN0cmFpbnRzIiwibGVmdCIsInJpZ2h0IiwiZHJhZ0VsYXN0aWMiLCJvbkRyYWdFbmQiLCJlIiwic3dpcGUiLCJjb25zb2xlIiwibG9nIiwib25DbGljayIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MotionSlider.tsx\n"));

/***/ })

});