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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import config from '../config/index.json';\nvar variants = {\n    enter: function(direction) {\n        return {\n            x: direction > 0 ? 1000 : -1000,\n            opacity: 0\n        };\n    },\n    center: {\n        zIndex: 1,\n        x: 0,\n        opacity: 1\n    },\n    exit: function(direction) {\n        return {\n            zIndex: 0,\n            x: direction < 0 ? 1000 : -1000,\n            opacity: 0\n        };\n    }\n};\nvar swipeConfidenceThreshold = 10000;\nvar swipePower = function(offset, velocity) {\n    return Math.abs(offset) * velocity;\n};\nvar images = [\n    \"https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png\",\n    \"https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png\",\n    \"https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png\"\n];\n// const imagePoly = [\n// ];\nvar imageText = [\n    \"市集一\",\n    \"市集二\",\n    \"市集三\",\n    \"市集四\",\n    \"市集五\",\n    \"市集六\"\n];\nvar MotionSlider = function() {\n    _s();\n    // const { markets } = config;\n    // const { title, items: marketLists } = markets;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        0\n    ]), ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ref[0], 2), page = ref1[0], direction = ref1[1], setPage = ref[1];\n    // const imageIndex = wrap(0, imagesS.length, page);\n    var imageIndex = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.wrap)(0, images.length, page);\n    var paginate = function(newDirection) {\n        setPage([\n            page + newDirection,\n            newDirection\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative flex justify-center items-center mx-auto my-auto px-2 pt-4 pb-12 text-white\",\n            style: {\n                maxHeight: \"100vw\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                    initial: false,\n                    custom: direction,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                            className: \"z-20 text-5xl font-black font-TaipeiBold\",\n                            style: {\n                                height: \"80%\"\n                            },\n                            children: imageText[imageIndex]\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                            src: images[imageIndex],\n                            className: \"absolute clip rounded-full\",\n                            style: {\n                                maxWidth: \"70vw\",\n                                maxHeight: \"70%\",\n                                minWidth: \"20vw\",\n                                width: \"auto\"\n                            },\n                            custom: direction,\n                            variants: variants,\n                            initial: \"enter\",\n                            animate: \"center\",\n                            exit: \"exit\",\n                            transition: {\n                                x: {\n                                    type: \"spring\",\n                                    stiffness: 300,\n                                    damping: 40\n                                },\n                                opacity: {\n                                    duration: 0.1\n                                }\n                            },\n                            drag: \"x\",\n                            dragConstraints: {\n                                left: 0,\n                                right: 0\n                            },\n                            dragElastic: 1,\n                            onDragEnd: function(e, param) {\n                                var offset = param.offset, velocity = param.velocity;\n                                var swipe = swipePower(offset.x, velocity.x);\n                                if (swipe < -swipeConfidenceThreshold) {\n                                    console.log(e);\n                                    paginate(1);\n                                } else if (swipe > swipeConfidenceThreshold) {\n                                    paginate(-1);\n                                }\n                            }\n                        }, page, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"next\",\n                    onClick: function() {\n                        return paginate(1);\n                    },\n                    style: {\n                        right: \"15%\",\n                        height: \"0%\"\n                    },\n                    children: \"‣\"\n                }, void 0, false, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"prev\",\n                    onClick: function() {\n                        return paginate(-1);\n                    },\n                    style: {\n                        left: \"15%\",\n                        transform: \"scale(-1)\",\n                        height: \"1%\"\n                    },\n                    children: \"‣\"\n                }, void 0, false, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(MotionSlider, \"8Bx1Wl4uzlT5pCEkBvA3L8JklTA=\");\n_c = MotionSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MotionSlider);\nvar _c;\n$RefreshReg$(_c, \"MotionSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozt5QkFDQTs4QkFDTiw4REFBQ1AsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLE1BQU07b0JBQUM0QixPQUFPLEVBQUU7K0JBQU0vQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQUE7b0JBQUVJLEtBQUssRUFBRTt3QkFBQ21CLElBQUksRUFBRSxLQUFLO3dCQUFFUyxTQUFTLEVBQUUsV0FBVzt3QkFBRXZCLE1BQU0sRUFBRSxJQUFJO3FCQUFDOzhCQUMxRyxHQUFHOzs7Ozt5QkFDQTs7Ozs7O2lCQUNBO3FCQUVMLENBQ0o7Q0FDRjtHQWxFS2QsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBb0VsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vdGlvblNsaWRlci50c3g/MGE3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHdyYXAgfSBmcm9tIFwicG9wbW90aW9uXCI7XG5cbi8vIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2luZGV4Lmpzb24nO1xuXG5jb25zdCB2YXJpYW50cyA9IHtcbiAgZW50ZXI6IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBkaXJlY3Rpb24gPiAwID8gMTAwMCA6IC0xMDAwLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH07XG4gIH0sXG4gIGNlbnRlcjoge1xuICAgIHpJbmRleDogMSxcbiAgICB4OiAwLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgZXhpdDogKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpJbmRleDogMCxcbiAgICAgIHg6IGRpcmVjdGlvbiA8IDAgPyAxMDAwIDogLTEwMDAsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfTtcbiAgfVxufTtcblxuY29uc3Qgc3dpcGVDb25maWRlbmNlVGhyZXNob2xkID0gMTAwMDA7XG5jb25zdCBzd2lwZVBvd2VyID0gKG9mZnNldDogbnVtYmVyLCB2ZWxvY2l0eTogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBNYXRoLmFicyhvZmZzZXQpICogdmVsb2NpdHk7XG59O1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gIFwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC9kZDIzNzA4ZWJjNDA1MzU1MWJiMzNlMThiNzE3NGU3M2I2ZTE3MTBiL2RlYTI0L3N0YXRpYy9pbWFnZXMvd2FsbHBhcGVycy9zaGFyZWQtY29sb3JzQDJ4LnBuZ1wiLFxuICBcImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNDlkZTM0OWQxMmRiODUxOTUyYzU1NTZmM2M2MzdjYTc3Mjc0NTMxNi9jZmM1Ni9zdGF0aWMvaW1hZ2VzL3dhbGxwYXBlcnMvYnJpZGdlLTAyQDJ4LnBuZ1wiLFxuICBcImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNTk0ZGU2NjQ2OTA3OWMyMWZjNTRjMTRkYjA1OTEzMDVhMTE5OGRkNi8zZjRiMS9zdGF0aWMvaW1hZ2VzL3dhbGxwYXBlcnMvYnJpZGdlLTAxQDJ4LnBuZ1wiXG5dO1xuXG4vLyBjb25zdCBpbWFnZVBvbHkgPSBbXG5cbi8vIF07XG5cbmNvbnN0IGltYWdlVGV4dCA9IFtcbiAgXCLluILpm4bkuIBcIixcbiAgXCLluILpm4bkuoxcIixcbiAgXCLluILpm4bkuIlcIixcbiAgXCLluILpm4blm5tcIixcbiAgXCLluILpm4bkupRcIixcbiAgXCLluILpm4blha1cIlxuXTtcblxuY29uc3QgTW90aW9uU2xpZGVyID0gKCkgPT4ge1xuXG4gIC8vIGNvbnN0IHsgbWFya2V0cyB9ID0gY29uZmlnO1xuXG4gIC8vIGNvbnN0IHsgdGl0bGUsIGl0ZW1zOiBtYXJrZXRMaXN0cyB9ID0gbWFya2V0cztcblxuICBjb25zdCBbW3BhZ2UsIGRpcmVjdGlvbl0sIHNldFBhZ2VdID0gdXNlU3RhdGUoWzAsIDBdKTtcblxuICAvLyBjb25zdCBpbWFnZUluZGV4ID0gd3JhcCgwLCBpbWFnZXNTLmxlbmd0aCwgcGFnZSk7XG4gIGNvbnN0IGltYWdlSW5kZXggPSB3cmFwKDAsIGltYWdlcy5sZW5ndGgsIHBhZ2UpO1xuXG5cbiAgY29uc3QgcGFnaW5hdGUgPSAobmV3RGlyZWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICBzZXRQYWdlKFtwYWdlICsgbmV3RGlyZWN0aW9uLCBuZXdEaXJlY3Rpb25dKTtcbiAgfTtcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIHsvKiA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS04IGJnLWJsYWNrXCIgaWQ9XCJtYXJrZXRzXCI+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteC1hdXRvIG15LWF1dG8gcHgtMiBwdC00IHBiLTEyIHRleHQtd2hpdGVgfSBzdHlsZT17e21heEhlaWdodDogJzEwMHZ3J319PlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0gY3VzdG9tPXtkaXJlY3Rpb259PlxuICAgICAgICB7Lyoge21hcmtldExpc3RzLm1hcCgobWFya2V0KSA9PiAoICovfVxuICAgICAgICB7LyogPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj4gKi99XG4gICAgICAgICAgPG1vdGlvbi5oMiBjbGFzc05hbWU9XCJ6LTIwIHRleHQtNXhsIGZvbnQtYmxhY2sgZm9udC1UYWlwZWlCb2xkXCIgc3R5bGU9e3toZWlnaHQ6ICc4MCUnfX0+e2ltYWdlVGV4dFtpbWFnZUluZGV4XX08L21vdGlvbi5oMj5cbiAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgICBzcmM9e2ltYWdlc1tpbWFnZUluZGV4XX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBjbGlwIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogJzcwdncnLCBtYXhIZWlnaHQ6ICc3MCUnLCBtaW5XaWR0aDogJzIwdncnLCB3aWR0aDogJ2F1dG8nLH19XG4gICAgICAgICAgY3VzdG9tPXtkaXJlY3Rpb259XG4gICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgICAgIGluaXRpYWw9XCJlbnRlclwiXG4gICAgICAgICAgYW5pbWF0ZT1cImNlbnRlclwiXG4gICAgICAgICAgZXhpdD1cImV4aXRcIlxuICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgIHg6IHsgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiAzMDAsIGRhbXBpbmc6IDQwIH0sXG4gICAgICAgICAgICBvcGFjaXR5OiB7IGR1cmF0aW9uOiAwLjEgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgZHJhZz1cInhcIlxuICAgICAgICAgIGRyYWdDb25zdHJhaW50cz17eyBsZWZ0OiAwLCByaWdodDogMCB9fVxuICAgICAgICAgIGRyYWdFbGFzdGljPXsxfVxuICAgICAgICAgIG9uRHJhZ0VuZD17KGUsIHsgb2Zmc2V0LCB2ZWxvY2l0eSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzd2lwZSA9IHN3aXBlUG93ZXIob2Zmc2V0LngsIHZlbG9jaXR5LngpO1xuXG4gICAgICAgICAgICBpZiAoc3dpcGUgPCAtc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgIHBhZ2luYXRlKDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzd2lwZSA+IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICBwYWdpbmF0ZSgtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICB7LyogPC9tb3Rpb24uZGl2PiAqL31cbiAgICAgICAgey8qICkpfSAqL31cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0XCIgb25DbGljaz17KCkgPT4gcGFnaW5hdGUoMSl9IHN0eWxlPXt7cmlnaHQ6ICcxNSUnLCBoZWlnaHQ6ICcwJSd9fT5cbiAgICAgICAge1wi4oCjXCJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldlwiIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKC0xKX0gc3R5bGU9e3tsZWZ0OiAnMTUlJywgdHJhbnNmb3JtOiAnc2NhbGUoLTEpJywgaGVpZ2h0OiAnMSUnfX0+XG4gICAgICAgIHtcIuKAo1wifVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICB7LyogLy8gPC9zZWN0aW9uPiAqL31cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW90aW9uU2xpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJ3cmFwIiwidmFyaWFudHMiLCJlbnRlciIsImRpcmVjdGlvbiIsIngiLCJvcGFjaXR5IiwiY2VudGVyIiwiekluZGV4IiwiZXhpdCIsInN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCIsInN3aXBlUG93ZXIiLCJvZmZzZXQiLCJ2ZWxvY2l0eSIsIk1hdGgiLCJhYnMiLCJpbWFnZXMiLCJpbWFnZVRleHQiLCJNb3Rpb25TbGlkZXIiLCJwYWdlIiwic2V0UGFnZSIsImltYWdlSW5kZXgiLCJsZW5ndGgiLCJwYWdpbmF0ZSIsIm5ld0RpcmVjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWF4SGVpZ2h0IiwiaW5pdGlhbCIsImN1c3RvbSIsImgyIiwiaGVpZ2h0IiwiaW1nIiwic3JjIiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsIndpZHRoIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImR1cmF0aW9uIiwiZHJhZyIsImRyYWdDb25zdHJhaW50cyIsImxlZnQiLCJyaWdodCIsImRyYWdFbGFzdGljIiwib25EcmFnRW5kIiwiZSIsInN3aXBlIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MotionSlider.tsx\n"));

/***/ })

});