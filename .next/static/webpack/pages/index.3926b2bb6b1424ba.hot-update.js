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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import config from '../config/index.json';\nvar variants = {\n    enter: function(direction) {\n        return {\n            x: direction > 0 ? 10 : -10,\n            opacity: 0\n        };\n    },\n    center: {\n        zIndex: 1,\n        x: 0,\n        opacity: 1\n    },\n    exit: function(direction) {\n        return {\n            zIndex: 0,\n            x: direction < 0 ? 10 : -10,\n            opacity: 0\n        };\n    }\n};\nvar swipeConfidenceThreshold = 10000;\nvar swipePower = function(offset, velocity) {\n    return Math.abs(offset) * velocity;\n};\nvar images = [\n    \"/assets/market/WonderAdam.png\",\n    \"/assets/market/wonderland.png\",\n    \"/assets/market/今日工事.png\",\n    \"/assets/market/平和飯店.png\",\n    \"/assets/market/擠米掰掰飯.png\",\n    \"/assets/market/臺虎精釀.png\",\n    \"/assets/market/路邊烤肉.png\",\n    \"/assets/market/魚刺人.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936984/Vendor/Wonder_she5gv.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936981/Vendor/wonderland_mmfapd.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E4%BB%8A%E6%97%A5%E5%B7%A5%E4%BA%8B_j1qcdw.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%87%BA%E8%99%8E%E7%B2%BE%E9%87%80_azvsos.png\",\n    \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%8A%A2%E8%8B%92%E6%89%8B%E4%BD%9C%E8%97%9D%E5%BB%8A_kf4zpl.png\"\n];\n// const imagePoly = [\n// ];\nvar imageText = [\n    \"WonderAdam\",\n    \"奇幻地咖啡館\",\n    \"今日工事\",\n    \"平和飯店\",\n    \"擠米 掰掰飯\",\n    \"臺虎精釀\",\n    \"路邊烤肉\",\n    \"魚刺人\",\n    \"芢苒手作藝廊\"\n];\nvar imageDescrip = [\n    \"WonderAdam\",\n    \"奇幻地咖啡館\",\n    \"今日工事是一個結合雞蛋燒／選物的地方，不管是還吃一顆雞蛋燒或是買買送禮人的禮物或自己喜歡的東西，都可以來今日工事。\\n今日工事的雞蛋燒麵糊每日新鮮現打，堅持不使用預拌粉也不加泡打粉，只使用最單純的鮮奶、麵粉、砂糖、雞蛋，每週更換不同的限定口味，來吧，都可以讓這裡成為你的今日工事，每天都有驚喜。\",\n    \"平和飯店\",\n    \"擠米 掰掰飯\",\n    \"臺虎精釀\",\n    \"路邊烤肉\",\n    \"魚刺人\",\n    \"芢苒手作藝廊\"\n];\nvar newMotionSlider = function() {\n    _s();\n    // const { markets } = config;\n    // const { title, items: marketLists } = markets;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        0\n    ]), ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ref[0], 2), page = ref1[0], direction = ref1[1], setPage = ref[1];\n    // const imageIndex = wrap(0, imagesS.length, page);\n    var imageIndex = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.wrap)(0, images.length, page);\n    var paginate = function(newDirection) {\n        setPage([\n            page + newDirection,\n            newDirection\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"py-8\",\n            id: \"markets\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex justify-center items-center mx-auto px-2 text-white\",\n                    style: {\n                        maxHeight: \"100vh\",\n                        minHeight: \"80vh\",\n                        height: \"auto\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                            initial: false,\n                            custom: direction,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 place-items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                                            className: \"z-20 text-4xl md:text-5xl font-black font-TaipeiBold\",\n                                            children: imageText[imageIndex]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" mx-48 my-3 rounded-3xl backdrop-blur-md opacity-90\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                                            className: \"z-20 text-xl text-gray-900 md:text-xl font-TaipeiBold mx-20 md:mx-10 mb-5 my-3\",\n                                            children: imageDescrip[imageIndex]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                                            src: images[imageIndex],\n                                            className: \"clip rounded-3xl md:h-96 h-1/3\",\n                                            // style={{maxWidth: '30vw', minWidth: '30vw', width: 'auto'}}\n                                            custom: direction,\n                                            variants: variants,\n                                            initial: \"enter\",\n                                            animate: \"center\",\n                                            exit: \"exit\",\n                                            transition: {\n                                                x: {\n                                                    type: \"spring\",\n                                                    stiffness: 300,\n                                                    damping: 40\n                                                },\n                                                opacity: {\n                                                    duration: 0.1\n                                                }\n                                            },\n                                            drag: \"x\",\n                                            dragConstraints: {\n                                                left: 0,\n                                                right: 0\n                                            },\n                                            dragElastic: 1,\n                                            onDragEnd: function(e, param) {\n                                                var offset = param.offset, velocity = param.velocity;\n                                                var swipe = swipePower(offset.x, velocity.x);\n                                                if (swipe < -swipeConfidenceThreshold) {\n                                                    console.log(e);\n                                                    paginate(1);\n                                                } else if (swipe > swipeConfidenceThreshold) {\n                                                    paginate(-1);\n                                                }\n                                            }\n                                        }, page, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"next\",\n                            onClick: function() {\n                                return paginate(1);\n                            },\n                            style: {\n                                right: \"10%\",\n                                height: \"0%\"\n                            },\n                            children: \"‣\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 146,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"prev\",\n                            onClick: function() {\n                                return paginate(-1);\n                            },\n                            style: {\n                                left: \"10%\",\n                                transform: \"scale(-1)\",\n                                height: \"1%\"\n                            },\n                            children: \"‣\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 149,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 7\n                }, _this),\n                \"// \"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n            lineNumber: 98,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_s(newMotionSlider, \"8Bx1Wl4uzlT5pCEkBvA3L8JklTA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (newMotionSlider);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHekMsVUFBVSxDQUFDQyxNQUFNLENBQUNQLENBQUMsRUFBRVEsUUFBUSxDQUFDUixDQUFDLENBQUM7Z0RBRTlDLElBQUkrQyxLQUFLLEdBQUcsQ0FBQzFDLHdCQUF3QixFQUFFO29EQUNyQzJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxDQUFDLENBQUM7b0RBQ2QzQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7aURBQ2IsTUFBTSxJQUFJNEIsS0FBSyxHQUFHMUMsd0JBQXdCLEVBQUU7b0RBQzNDYyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpREFDZDs2Q0FDRjsyQ0F6QklKLElBQUk7Ozs7aURBMEJQOzs7Ozs2Q0FDSTs7Ozs7O3FDQUdGOzs7OztpQ0FDVTtzQ0FHdEIsOERBQUNTLEtBQUc7NEJBQUNGLFNBQVMsRUFBQyxNQUFNOzRCQUFDNEIsT0FBTyxFQUFFO3VDQUFNL0IsUUFBUSxDQUFDLENBQUMsQ0FBQzs2QkFBQTs0QkFBRU0sS0FBSyxFQUFFO2dDQUFDa0IsS0FBSyxFQUFFLEtBQUs7Z0NBQUVmLE1BQU0sRUFBRSxJQUFJOzZCQUFDO3NDQUNsRixHQUFHOzs7OztpQ0FDQTtzQ0FDTiw4REFBQ0osS0FBRzs0QkFBQ0YsU0FBUyxFQUFDLE1BQU07NEJBQUM0QixPQUFPLEVBQUU7dUNBQU0vQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7NkJBQUE7NEJBQUVNLEtBQUssRUFBRTtnQ0FBQ2lCLElBQUksRUFBRSxLQUFLO2dDQUFFUyxTQUFTLEVBQUUsV0FBVztnQ0FBRXZCLE1BQU0sRUFBRSxJQUFJOzZCQUFDO3NDQUMxRyxHQUFHOzs7OztpQ0FDQTs7Ozs7O3lCQUNBO2dCQUFBLEtBQ0w7Ozs7OztpQkFBVTtxQkFDVixDQUNKO0NBQ0Y7R0E3RUtkLGVBQWU7QUErRXJCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW90aW9uU2xpZGVyLnRzeD8wYTdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgd3JhcCB9IGZyb20gXCJwb3Btb3Rpb25cIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwicmVhY3Rqcy1wb3B1cFwiO1xuXG5cbi8vIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2luZGV4Lmpzb24nO1xuXG5jb25zdCB2YXJpYW50cyA9IHtcbiAgZW50ZXI6IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBkaXJlY3Rpb24gPiAwID8gMTAgOiAtMTAsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfTtcbiAgfSxcbiAgY2VudGVyOiB7XG4gICAgekluZGV4OiAxLFxuICAgIHg6IDAsXG4gICAgb3BhY2l0eTogMVxuICB9LFxuICBleGl0OiAoZGlyZWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgekluZGV4OiAwLFxuICAgICAgeDogZGlyZWN0aW9uIDwgMCA/IDEwIDogLTEwLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH07XG4gIH1cbn07XG5cbmNvbnN0IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCA9IDEwMDAwO1xuY29uc3Qgc3dpcGVQb3dlciA9IChvZmZzZXQ6IG51bWJlciwgdmVsb2NpdHk6IG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5hYnMob2Zmc2V0KSAqIHZlbG9jaXR5O1xufTtcblxuY29uc3QgaW1hZ2VzID0gW1xuICBcIi9hc3NldHMvbWFya2V0L1dvbmRlckFkYW0ucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQvd29uZGVybGFuZC5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/ku4rml6Xlt6XkuosucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv5bmz5ZKM6aOv5bqXLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+aToOexs+aOsOaOsOmjry5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/oh7romY7nsr7ph4AucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv6Lev6YKK54Ok6IKJLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+mtmuWIuuS6ui5wbmdcIixcbiAgLy8gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL2ltYWdlL3VwbG9hZC92MTY2MjkzNjk4NC9WZW5kb3IvV29uZGVyX3NoZTVndi5wbmdcIixcbiAgLy8gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL2ltYWdlL3VwbG9hZC92MTY2MjkzNjk4MS9WZW5kb3Ivd29uZGVybGFuZF9tbWZhcGQucG5nXCIsXG4gIC8vIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5NzkvVmVuZG9yLyVFNCVCQiU4QSVFNiU5NyVBNSVFNSVCNyVBNSVFNCVCQSU4Ql9qMXFjZHcucG5nXCIsXG4gIC8vIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5NzkvVmVuZG9yLyVFOCU4NyVCQSVFOCU5OSU4RSVFNyVCMiVCRSVFOSU4NyU4MF9henZzb3MucG5nXCIsXG4gIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5NzkvVmVuZG9yLyVFOCU4QSVBMiVFOCU4QiU5MiVFNiU4OSU4QiVFNCVCRCU5QyVFOCU5NyU5RCVFNSVCQiU4QV9rZjR6cGwucG5nXCJcbl07XG5cbi8vIGNvbnN0IGltYWdlUG9seSA9IFtcblxuLy8gXTtcblxuY29uc3QgaW1hZ2VUZXh0ID0gW1xuICBcIldvbmRlckFkYW1cIixcbiAgXCLlpYflubvlnLDlkpbllaHppKhcIixcbiAgXCLku4rml6Xlt6XkuotcIixcbiAgXCLlubPlkozpo6/lupdcIixcbiAgXCLmk6DnsbMg5o6w5o6w6aOvXCIsXG4gIFwi6Ie66JmO57K+6YeAXCIsXG4gIFwi6Lev6YKK54Ok6IKJXCIsXG4gIFwi6a2a5Yi65Lq6XCIsXG4gIFwi6Iqi6IuS5omL5L2c6Jed5buKXCJcbl07XG5cbmNvbnN0IGltYWdlRGVzY3JpcCA9IFtcbiAgXCJXb25kZXJBZGFtXCIsXG4gIFwi5aWH5bm75Zyw5ZKW5ZWh6aSoXCIsXG4gIFwi5LuK5pel5bel5LqL5piv5LiA5YCL57WQ5ZCI6Zue6JuL54eS77yP6YG454mp55qE5Zyw5pa577yM5LiN566h5piv6YKE5ZCD5LiA6aGG6Zue6JuL54eS5oiW5piv6LK36LK36YCB56au5Lq655qE56au54mp5oiW6Ieq5bex5Zac5q2h55qE5p2x6KW/77yM6YO95Y+v5Lul5L6G5LuK5pel5bel5LqL44CCXFxu5LuK5pel5bel5LqL55qE6Zue6JuL54eS6bq157OK5q+P5pel5paw6a6u54++5omT77yM5aCF5oyB5LiN5L2/55So6aCQ5ouM57KJ5Lmf5LiN5Yqg5rOh5omT57KJ77yM5Y+q5L2/55So5pyA5Zau57SU55qE6a6u5aW244CB6bq157KJ44CB56CC57OW44CB6Zue6JuL77yM5q+P6YCx5pu05o+b5LiN5ZCM55qE6ZmQ5a6a5Y+j5ZGz77yM5L6G5ZCn77yM6YO95Y+v5Lul6K6T6YCZ6KOh5oiQ54K65L2g55qE5LuK5pel5bel5LqL77yM5q+P5aSp6YO95pyJ6ama5Zac44CCXCIsXG4gIFwi5bmz5ZKM6aOv5bqXXCIsXG4gIFwi5pOg57GzIOaOsOaOsOmjr1wiLFxuICBcIuiHuuiZjueyvumHgFwiLFxuICBcIui3r+mCiueDpOiCiVwiLFxuICBcIumtmuWIuuS6ulwiLFxuICBcIuiKouiLkuaJi+S9nOiXneW7ilwiXG5dO1xuXG5jb25zdCBuZXdNb3Rpb25TbGlkZXIgPSAoKSA9PiB7XG5cbiAgLy8gY29uc3QgeyBtYXJrZXRzIH0gPSBjb25maWc7XG5cbiAgLy8gY29uc3QgeyB0aXRsZSwgaXRlbXM6IG1hcmtldExpc3RzIH0gPSBtYXJrZXRzO1xuXG4gIGNvbnN0IFtbcGFnZSwgZGlyZWN0aW9uXSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShbMCwgMF0pO1xuXG4gIC8vIGNvbnN0IGltYWdlSW5kZXggPSB3cmFwKDAsIGltYWdlc1MubGVuZ3RoLCBwYWdlKTtcbiAgY29uc3QgaW1hZ2VJbmRleCA9IHdyYXAoMCwgaW1hZ2VzLmxlbmd0aCwgcGFnZSk7XG5cblxuICBjb25zdCBwYWdpbmF0ZSA9IChuZXdEaXJlY3Rpb246IG51bWJlcikgPT4ge1xuICAgIHNldFBhZ2UoW3BhZ2UgKyBuZXdEaXJlY3Rpb24sIG5ld0RpcmVjdGlvbl0pO1xuICB9O1xuICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktOFwiIGlkPVwibWFya2V0c1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteC1hdXRvIHB4LTIgdGV4dC13aGl0ZWB9IHN0eWxlPXt7bWF4SGVpZ2h0OiAnMTAwdmgnLCBtaW5IZWlnaHQ6ICc4MHZoJywgaGVpZ2h0OiAnYXV0byd9fT5cbiAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfSBjdXN0b209e2RpcmVjdGlvbn0+XG4gICAgICAgICAgICB7Lyoge21hcmtldExpc3RzLm1hcCgobWFya2V0KSA9PiAoICovfVxuICAgICAgICAgICAgey8qIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uaDIgY2xhc3NOYW1lPVwiei0yMCB0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWJsYWNrIGZvbnQtVGFpcGVpQm9sZFwiID57aW1hZ2VUZXh0W2ltYWdlSW5kZXhdfTwvbW90aW9uLmgyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXgtNDggbXktMyByb3VuZGVkLTN4bCBiYWNrZHJvcC1ibHVyLW1kIG9wYWNpdHktOTBcIj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmgyIGNsYXNzTmFtZT1cInotMjAgdGV4dC14bCB0ZXh0LWdyYXktOTAwIG1kOnRleHQteGwgZm9udC1UYWlwZWlCb2xkIG14LTIwIG1kOm14LTEwIG1iLTUgbXktM1wiID57aW1hZ2VEZXNjcmlwW2ltYWdlSW5kZXhdfTwvbW90aW9uLmgyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAga2V5PXtwYWdlfVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tpbWFnZUluZGV4XX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpcCByb3VuZGVkLTN4bCBtZDpoLTk2IGgtMS8zXCJcbiAgICAgICAgICAgICAgLy8gc3R5bGU9e3ttYXhXaWR0aDogJzMwdncnLCBtaW5XaWR0aDogJzMwdncnLCB3aWR0aDogJ2F1dG8nfX1cbiAgICAgICAgICAgICAgY3VzdG9tPXtkaXJlY3Rpb259XG4gICAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgICAgICAgICAgaW5pdGlhbD1cImVudGVyXCJcbiAgICAgICAgICAgICAgYW5pbWF0ZT1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGV4aXQ9XCJleGl0XCJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgIHg6IHsgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiAzMDAsIGRhbXBpbmc6IDQwIH0sXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogeyBkdXJhdGlvbjogMC4xIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZHJhZz1cInhcIlxuICAgICAgICAgICAgICBkcmFnQ29uc3RyYWludHM9e3sgbGVmdDogMCwgcmlnaHQ6IDAgfX1cbiAgICAgICAgICAgICAgZHJhZ0VsYXN0aWM9ezF9XG4gICAgICAgICAgICAgIG9uRHJhZ0VuZD17KGUsIHsgb2Zmc2V0LCB2ZWxvY2l0eSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3dpcGUgPSBzd2lwZVBvd2VyKG9mZnNldC54LCB2ZWxvY2l0eS54KTtcblxuICAgICAgICAgICAgICAgIGlmIChzd2lwZSA8IC1zd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICBwYWdpbmF0ZSgxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlID4gc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICBwYWdpbmF0ZSgtMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8L21vdGlvbi5kaXY+ICovfVxuICAgICAgICAgICAgey8qICkpfSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dFwiIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKDEpfSBzdHlsZT17e3JpZ2h0OiAnMTAlJywgaGVpZ2h0OiAnMCUnfX0+XG4gICAgICAgIHtcIuKAo1wifVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZcIiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZSgtMSl9IHN0eWxlPXt7bGVmdDogJzEwJScsIHRyYW5zZm9ybTogJ3NjYWxlKC0xKScsIGhlaWdodDogJzElJ319PlxuICAgICAgICB7XCLigKNcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgLy8gPC9zZWN0aW9uPlxuICAgIDwvPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdNb3Rpb25TbGlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIndyYXAiLCJ2YXJpYW50cyIsImVudGVyIiwiZGlyZWN0aW9uIiwieCIsIm9wYWNpdHkiLCJjZW50ZXIiLCJ6SW5kZXgiLCJleGl0Iiwic3dpcGVDb25maWRlbmNlVGhyZXNob2xkIiwic3dpcGVQb3dlciIsIm9mZnNldCIsInZlbG9jaXR5IiwiTWF0aCIsImFicyIsImltYWdlcyIsImltYWdlVGV4dCIsImltYWdlRGVzY3JpcCIsIm5ld01vdGlvblNsaWRlciIsInBhZ2UiLCJzZXRQYWdlIiwiaW1hZ2VJbmRleCIsImxlbmd0aCIsInBhZ2luYXRlIiwibmV3RGlyZWN0aW9uIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImlkIiwiZGl2Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJoZWlnaHQiLCJpbml0aWFsIiwiY3VzdG9tIiwiaDIiLCJpbWciLCJzcmMiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZHVyYXRpb24iLCJkcmFnIiwiZHJhZ0NvbnN0cmFpbnRzIiwibGVmdCIsInJpZ2h0IiwiZHJhZ0VsYXN0aWMiLCJvbkRyYWdFbmQiLCJlIiwic3dpcGUiLCJjb25zb2xlIiwibG9nIiwib25DbGljayIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MotionSlider.tsx\n"));

/***/ })

});