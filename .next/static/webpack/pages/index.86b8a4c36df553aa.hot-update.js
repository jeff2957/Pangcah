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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import config from '../config/index.json';\nvar variants = {\n    enter: function(direction) {\n        return {\n            x: direction > 0 ? 10 : -10,\n            opacity: 0\n        };\n    },\n    center: {\n        zIndex: 1,\n        x: 0,\n        opacity: 1\n    },\n    exit: function(direction) {\n        return {\n            zIndex: -1,\n            x: direction < 0 ? -10 : 10,\n            opacity: 0\n        };\n    }\n};\nvar swipeConfidenceThreshold = 10000;\nvar swipePower = function(offset, velocity) {\n    return Math.abs(offset) * velocity;\n};\nvar images = [\n    \"/assets/market/WonderAdam.png\",\n    \"/assets/market/wonderland.png\",\n    \"/assets/market/今日工事.png\",\n    \"/assets/market/平和飯店.png\",\n    \"/assets/market/擠米掰掰飯.png\",\n    \"/assets/market/臺虎精釀.png\",\n    \"/assets/market/路邊烤肉.png\",\n    \"/assets/market/魚刺人.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936984/Vendor/Wonder_she5gv.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936981/Vendor/wonderland_mmfapd.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E4%BB%8A%E6%97%A5%E5%B7%A5%E4%BA%8B_j1qcdw.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%87%BA%E8%99%8E%E7%B2%BE%E9%87%80_azvsos.png\",\n    \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%8A%A2%E8%8B%92%E6%89%8B%E4%BD%9C%E8%97%9D%E5%BB%8A_kf4zpl.png\"\n];\n// const imagePoly = [\n// ];\nvar imageText = [\n    \"WonderAdam\",\n    \"奇幻地咖啡館\",\n    \"今日工事\",\n    \"平和飯店\",\n    \"擠米 掰掰飯\",\n    \"臺虎精釀\",\n    \"路邊烤肉\",\n    \"魚刺人\",\n    \"芢苒手作藝廊\"\n];\nvar MotionSlider = function() {\n    _s();\n    // const { markets } = config;\n    // const { title, items: marketLists } = markets;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        0\n    ]), ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ref[0], 2), page = ref1[0], direction = ref1[1], setPage = ref[1];\n    // const imageIndex = wrap(0, imagesS.length, page);\n    var imageIndex = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.wrap)(0, images.length, page);\n    var paginate = function(newDirection) {\n        setPage([\n            page + newDirection,\n            newDirection\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"\",\n            id: \"markets\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 place-items-center mx-auto px-2 pt-4 pb-14 text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"z-20 text-4xl md:text-5xl font-black font-TaipeiBold\",\n                        children: imageText[imageIndex]\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 place-items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"prev\",\n                                onClick: function() {\n                                    return paginate(-1);\n                                },\n                                style: {\n                                    left: \"10%\",\n                                    transform: \"scale(-1)\"\n                                },\n                                children: \"‣\"\n                            }, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                                initial: false,\n                                custom: direction,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                                    src: images[imageIndex],\n                                    className: \" rounded-3xl lg:h-4/6 md:h-2/6 h-1/3\",\n                                    custom: direction,\n                                    variants: variants,\n                                    initial: \"enter\",\n                                    animate: \"center\",\n                                    exit: \"exit\",\n                                    transition: {\n                                        x: {\n                                            type: \"spring\",\n                                            stiffness: 300,\n                                            damping: 40\n                                        },\n                                        opacity: {\n                                            duration: 0.1\n                                        }\n                                    },\n                                    drag: \"x\",\n                                    dragConstraints: {\n                                        left: 0,\n                                        right: 0\n                                    },\n                                    dragElastic: 1,\n                                    onDragEnd: function(e, param) {\n                                        var offset = param.offset, velocity = param.velocity;\n                                        var swipe = swipePower(offset.x, velocity.x);\n                                        if (swipe < -swipeConfidenceThreshold) {\n                                            console.log(e);\n                                            paginate(1);\n                                        } else if (swipe > swipeConfidenceThreshold) {\n                                            paginate(-1);\n                                        }\n                                    }\n                                }, page, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"next\",\n                                onClick: function() {\n                                    return paginate(1);\n                                },\n                                children: \"‣\"\n                            }, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n            lineNumber: 84,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_s(MotionSlider, \"8Bx1Wl4uzlT5pCEkBvA3L8JklTA=\");\n_c = MotionSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MotionSlider);\nvar _c;\n$RefreshReg$(_c, \"MotionSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUNBQ2Q7cUNBQ0Y7bUNBeEJJSixJQUFJOzs7O3lDQXlCUDs7Ozs7cUNBQ2M7MENBQ2xCLDhEQUFDVyxRQUFNO2dDQUFDSixTQUFTLEVBQUMsTUFBTTtnQ0FBQ0ssT0FBTyxFQUFFOzJDQUFNUixRQUFRLENBQUMsQ0FBQyxDQUFDO2lDQUFBOzBDQUFFLEdBQUM7Ozs7O3FDQUFTOzs7Ozs7NkJBQzNEOzs7Ozs7cUJBT0Y7Ozs7O2lCQUNFO3FCQUNQLENBQ0o7Q0FDRjtHQWxFS0wsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBb0VsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vdGlvblNsaWRlci50c3g/MGE3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHdyYXAgfSBmcm9tIFwicG9wbW90aW9uXCI7XG5cbi8vIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2luZGV4Lmpzb24nO1xuXG5jb25zdCB2YXJpYW50cyA9IHtcbiAgZW50ZXI6IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBkaXJlY3Rpb24gPiAwID8gMTAgOiAtMTAsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfTtcbiAgfSxcbiAgY2VudGVyOiB7XG4gICAgekluZGV4OiAxLFxuICAgIHg6IDAsXG4gICAgb3BhY2l0eTogMVxuICB9LFxuICBleGl0OiAoZGlyZWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgekluZGV4OiAtMSxcbiAgICAgIHg6IGRpcmVjdGlvbiA8IDAgPyAtMTAgOiAxMCxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQgPSAxMDAwMDtcbmNvbnN0IHN3aXBlUG93ZXIgPSAob2Zmc2V0OiBudW1iZXIsIHZlbG9jaXR5OiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGguYWJzKG9mZnNldCkgKiB2ZWxvY2l0eTtcbn07XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAgXCIvYXNzZXRzL21hcmtldC9Xb25kZXJBZGFtLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L3dvbmRlcmxhbmQucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv5LuK5pel5bel5LqLLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+W5s+WSjOmjr+W6ly5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/mk6DnsbPmjrDmjrDpo68ucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv6Ie66JmO57K+6YeALnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+i3r+mCiueDpOiCiS5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/prZrliLrkuroucG5nXCIsXG4gIC8vIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5ODQvVmVuZG9yL1dvbmRlcl9zaGU1Z3YucG5nXCIsXG4gIC8vIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5ODEvVmVuZG9yL3dvbmRlcmxhbmRfbW1mYXBkLnBuZ1wiLFxuICAvLyBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTc5L1ZlbmRvci8lRTQlQkIlOEElRTYlOTclQTUlRTUlQjclQTUlRTQlQkElOEJfajFxY2R3LnBuZ1wiLFxuICAvLyBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTc5L1ZlbmRvci8lRTglODclQkElRTglOTklOEUlRTclQjIlQkUlRTklODclODBfYXp2c29zLnBuZ1wiLFxuICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTc5L1ZlbmRvci8lRTglOEElQTIlRTglOEIlOTIlRTYlODklOEIlRTQlQkQlOUMlRTglOTclOUQlRTUlQkIlOEFfa2Y0enBsLnBuZ1wiXG5dO1xuXG4vLyBjb25zdCBpbWFnZVBvbHkgPSBbXG5cbi8vIF07XG5cbmNvbnN0IGltYWdlVGV4dCA9IFtcbiAgXCJXb25kZXJBZGFtXCIsXG4gIFwi5aWH5bm75Zyw5ZKW5ZWh6aSoXCIsXG4gIFwi5LuK5pel5bel5LqLXCIsXG4gIFwi5bmz5ZKM6aOv5bqXXCIsXG4gIFwi5pOg57GzIOaOsOaOsOmjr1wiLFxuICBcIuiHuuiZjueyvumHgFwiLFxuICBcIui3r+mCiueDpOiCiVwiLFxuICBcIumtmuWIuuS6ulwiLFxuICBcIuiKouiLkuaJi+S9nOiXneW7ilwiXG5dO1xuXG5jb25zdCBNb3Rpb25TbGlkZXIgPSAoKSA9PiB7XG5cbiAgLy8gY29uc3QgeyBtYXJrZXRzIH0gPSBjb25maWc7XG5cbiAgLy8gY29uc3QgeyB0aXRsZSwgaXRlbXM6IG1hcmtldExpc3RzIH0gPSBtYXJrZXRzO1xuXG4gIGNvbnN0IFtbcGFnZSwgZGlyZWN0aW9uXSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShbMCwgMF0pO1xuXG4gIC8vIGNvbnN0IGltYWdlSW5kZXggPSB3cmFwKDAsIGltYWdlc1MubGVuZ3RoLCBwYWdlKTtcbiAgY29uc3QgaW1hZ2VJbmRleCA9IHdyYXAoMCwgaW1hZ2VzLmxlbmd0aCwgcGFnZSk7XG5cblxuICBjb25zdCBwYWdpbmF0ZSA9IChuZXdEaXJlY3Rpb246IG51bWJlcikgPT4ge1xuICAgIHNldFBhZ2UoW3BhZ2UgKyBuZXdEaXJlY3Rpb24sIG5ld0RpcmVjdGlvbl0pO1xuICB9O1xuICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiXCIgaWQ9XCJtYXJrZXRzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGdyaWQgZ3JpZC1jb2xzLTEgcGxhY2UtaXRlbXMtY2VudGVyIG14LWF1dG8gcHgtMiBwdC00IHBiLTE0IHRleHQtd2hpdGVgfT5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cInotMjAgdGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1ibGFjayBmb250LVRhaXBlaUJvbGRcIj57aW1hZ2VUZXh0W2ltYWdlSW5kZXhdfTwvaDU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBwbGFjZS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByZXZcIiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZSgtMSl9IHN0eWxlPXt7bGVmdDogJzEwJScsIHRyYW5zZm9ybTogJ3NjYWxlKC0xKSd9fT7igKM8L2J1dHRvbj5cbiAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfSBjdXN0b209e2RpcmVjdGlvbn0+XG4gICAgICAgICAgICB7LyogPG1vdGlvbi5oMiBjbGFzc05hbWU9XCJ6LTIwIHRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtYmxhY2sgZm9udC1UYWlwZWlCb2xkXCIgc3R5bGU9e3ttYXhIZWlnaHQ6ICc3NnZoJywgbWluSGVpZ2h0OiAnNzV2aCcsIGhlaWdodDonYXV0byd9fT57aW1hZ2VUZXh0W2ltYWdlSW5kZXhdfTwvbW90aW9uLmgyPiAqL31cbiAgICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICBrZXk9e3BhZ2V9XG4gICAgICAgICAgICBzcmM9e2ltYWdlc1tpbWFnZUluZGV4XX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLTN4bCBsZzpoLTQvNiBtZDpoLTIvNiBoLTEvM1wiXG4gICAgICAgICAgICBjdXN0b209e2RpcmVjdGlvbn1cbiAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgICAgICAgIGluaXRpYWw9XCJlbnRlclwiXG4gICAgICAgICAgICBhbmltYXRlPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGV4aXQ9XCJleGl0XCJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgeDogeyB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDMwMCwgZGFtcGluZzogNDAgfSxcbiAgICAgICAgICAgICAgb3BhY2l0eTogeyBkdXJhdGlvbjogMC4xIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBkcmFnPVwieFwiXG4gICAgICAgICAgICBkcmFnQ29uc3RyYWludHM9e3sgbGVmdDogMCwgcmlnaHQ6IDAgfX1cbiAgICAgICAgICAgIGRyYWdFbGFzdGljPXsxfVxuICAgICAgICAgICAgb25EcmFnRW5kPXsoZSwgeyBvZmZzZXQsIHZlbG9jaXR5IH0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3dpcGUgPSBzd2lwZVBvd2VyKG9mZnNldC54LCB2ZWxvY2l0eS54KTtcblxuICAgICAgICAgICAgICBpZiAoc3dpcGUgPCAtc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICBwYWdpbmF0ZSgxKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChzd2lwZSA+IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIHBhZ2luYXRlKC0xKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0XCIgb25DbGljaz17KCkgPT4gcGFnaW5hdGUoMSl9PuKAozwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJuZXh0IGJnLXByaW1hcnlHcmVlbiB6LTUwXCIgb25DbGljaz17KCkgPT4gcGFnaW5hdGUoMSl9IHN0eWxlPXt7d2lkdGg6ICc1MHB4J319PlxuICAgICAgICAgICAg4oCjXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2XCIgb25DbGljaz17KCkgPT4gcGFnaW5hdGUoLTEpfSBzdHlsZT17e2xlZnQ6ICcxMCUnLCB0cmFuc2Zvcm06ICdzY2FsZSgtMSknLCBoZWlnaHQ6ICcxJSd9fT5cbiAgICAgICAgICAgIHtcIuKAo1wifVxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW90aW9uU2xpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJ3cmFwIiwidmFyaWFudHMiLCJlbnRlciIsImRpcmVjdGlvbiIsIngiLCJvcGFjaXR5IiwiY2VudGVyIiwiekluZGV4IiwiZXhpdCIsInN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCIsInN3aXBlUG93ZXIiLCJvZmZzZXQiLCJ2ZWxvY2l0eSIsIk1hdGgiLCJhYnMiLCJpbWFnZXMiLCJpbWFnZVRleHQiLCJNb3Rpb25TbGlkZXIiLCJwYWdlIiwic2V0UGFnZSIsImltYWdlSW5kZXgiLCJsZW5ndGgiLCJwYWdpbmF0ZSIsIm5ld0RpcmVjdGlvbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImRpdiIsImg1IiwiYnV0dG9uIiwib25DbGljayIsInN0eWxlIiwibGVmdCIsInRyYW5zZm9ybSIsImluaXRpYWwiLCJjdXN0b20iLCJpbWciLCJzcmMiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZHVyYXRpb24iLCJkcmFnIiwiZHJhZ0NvbnN0cmFpbnRzIiwicmlnaHQiLCJkcmFnRWxhc3RpYyIsIm9uRHJhZ0VuZCIsImUiLCJzd2lwZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MotionSlider.tsx\n"));

/***/ })

});