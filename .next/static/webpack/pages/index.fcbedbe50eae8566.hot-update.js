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

/***/ "./src/components/NewMotionSlider.tsx":
/*!********************************************!*\
  !*** ./src/components/NewMotionSlider.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import config from '../config/index.json';\nvar variants = {\n    enter: function(direction) {\n        return {\n            x: direction > 0 ? 10 : -10,\n            opacity: 0\n        };\n    },\n    center: {\n        zIndex: 1,\n        x: 0,\n        opacity: 1\n    },\n    exit: function(direction) {\n        return {\n            zIndex: 0,\n            x: direction < 0 ? 10 : -10,\n            opacity: 0\n        };\n    }\n};\nvar swipeConfidenceThreshold = 10000;\nvar swipePower = function(offset, velocity) {\n    return Math.abs(offset) * velocity;\n};\nvar images = [\n    \"/assets/market/WonderAdam.png\",\n    \"/assets/market/wonderland.png\",\n    \"/assets/market/今日工事.png\",\n    \"/assets/market/平和飯店.png\",\n    \"/assets/market/擠米掰掰飯.png\",\n    \"/assets/market/臺虎精釀.png\",\n    \"/assets/market/路邊烤肉.png\",\n    \"/assets/market/魚刺人.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936984/Vendor/Wonder_she5gv.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936981/Vendor/wonderland_mmfapd.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E4%BB%8A%E6%97%A5%E5%B7%A5%E4%BA%8B_j1qcdw.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%87%BA%E8%99%8E%E7%B2%BE%E9%87%80_azvsos.png\",\n    \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%8A%A2%E8%8B%92%E6%89%8B%E4%BD%9C%E8%97%9D%E5%BB%8A_kf4zpl.png\"\n];\n// const imagePoly = [\n// ];\nvar imageText = [\n    \"WonderAdam\",\n    \"奇幻地咖啡館\",\n    \"今日工事\",\n    \"平和飯店\",\n    \"擠米 掰掰飯\",\n    \"臺虎精釀\",\n    \"路邊烤肉\",\n    \"魚刺人\",\n    \"芢苒手作藝廊\"\n];\nvar newMotionSlider = function() {\n    _s();\n    // const { markets } = config;\n    // const { title, items: marketLists } = markets;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        0\n    ]), ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ref[0], 2), page = ref1[0], direction = ref1[1], setPage = ref[1];\n    // const imageIndex = wrap(0, imagesS.length, page);\n    var imageIndex = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.wrap)(0, images.length, page);\n    var paginate = function(newDirection) {\n        setPage([\n            page + newDirection,\n            newDirection\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex justify-center items-center mx-auto my-auto px-2 pt-4 pb-14 text-white\",\n                style: {\n                    maxHeight: \"100vh\",\n                    minHeight: \"80vh\",\n                    height: \"auto\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                        initial: false,\n                        custom: direction,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                                className: \"z-20 text-4xl md:text-5xl font-black font-TaipeiBold\",\n                                style: {\n                                    maxHeight: \"76vh\",\n                                    minHeight: \"75vh\",\n                                    height: \"auto\"\n                                },\n                                children: imageText[imageIndex]\n                            }, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                                src: images[imageIndex],\n                                className: \"absolute clip rounded-3xl lg:h-4/6 md:h-2/6 h-1/3\",\n                                // style={{maxWidth: '30vw', minWidth: '30vw', width: 'auto'}}\n                                custom: direction,\n                                variants: variants,\n                                initial: \"enter\",\n                                animate: \"center\",\n                                exit: \"exit\",\n                                transition: {\n                                    x: {\n                                        type: \"spring\",\n                                        stiffness: 300,\n                                        damping: 40\n                                    },\n                                    opacity: {\n                                        duration: 0.1\n                                    }\n                                },\n                                drag: \"x\",\n                                dragConstraints: {\n                                    left: 0,\n                                    right: 0\n                                },\n                                dragElastic: 1,\n                                onDragEnd: function(e, param) {\n                                    var offset = param.offset, velocity = param.velocity;\n                                    var swipe = swipePower(offset.x, velocity.x);\n                                    if (swipe < -swipeConfidenceThreshold) {\n                                        console.log(e);\n                                        paginate(1);\n                                    } else if (swipe > swipeConfidenceThreshold) {\n                                        paginate(-1);\n                                    }\n                                }\n                            }, page, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"next\",\n                        onClick: function() {\n                            return paginate(1);\n                        },\n                        style: {\n                            right: \"10%\",\n                            height: \"0%\"\n                        },\n                        children: \"‣\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"prev\",\n                        onClick: function() {\n                            return paginate(-1);\n                        },\n                        style: {\n                            left: \"10%\",\n                            transform: \"scale(-1)\",\n                            height: \"1%\"\n                        },\n                        children: \"‣\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-5 place-items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {}, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"bg-white w-full col-span-3 text-2xl text-center\",\n                        children: \"123\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {}, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {}, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {}, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(newMotionSlider, \"8Bx1Wl4uzlT5pCEkBvA3L8JklTA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (newMotionSlider);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHO3dCQUFDQyxTQUFTLEVBQUMsTUFBTTt3QkFBQzBCLE9BQU8sRUFBRTttQ0FBTTdCLFFBQVEsQ0FBQyxDQUFDLENBQUM7eUJBQUE7d0JBQUVJLEtBQUssRUFBRTs0QkFBQ2tCLEtBQUssRUFBRSxLQUFLOzRCQUFFZixNQUFNLEVBQUUsSUFBSTt5QkFBQztrQ0FDbEYsR0FBRzs7Ozs7NkJBQ0E7a0NBQ04sOERBQUNMLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxNQUFNO3dCQUFDMEIsT0FBTyxFQUFFO21DQUFNN0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUFBO3dCQUFFSSxLQUFLLEVBQUU7NEJBQUNpQixJQUFJLEVBQUUsS0FBSzs0QkFBRVMsU0FBUyxFQUFFLFdBQVc7NEJBQUV2QixNQUFNLEVBQUUsSUFBSTt5QkFBQztrQ0FDMUcsR0FBRzs7Ozs7NkJBQ0E7Ozs7OztxQkFDQTswQkFDTiw4REFBQ0wsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHFDQUFxQzs7a0NBQ2xELDhEQUFDNEIsSUFBRTs7Ozs2QkFBTTtrQ0FDVCw4REFBQ0EsSUFBRTt3QkFBQzVCLFNBQVMsRUFBQyxpREFBaUQ7a0NBQUMsS0FBRzs7Ozs7NkJBQUs7a0NBQ3hFLDhEQUFDNEIsSUFBRTs7Ozs2QkFBTTtrQ0FDVCw4REFBQ0EsSUFBRTs7Ozs2QkFBTTtrQ0FDVCw4REFBQ0EsSUFBRTs7Ozs2QkFBTTs7Ozs7O3FCQUNMOztvQkFFTCxDQUNKO0NBQ0Y7R0F6RUtwQyxlQUFlO0FBMkVyQiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05ld01vdGlvblNsaWRlci50c3g/YWE5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHdyYXAgfSBmcm9tIFwicG9wbW90aW9uXCI7XG5cbi8vIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2luZGV4Lmpzb24nO1xuXG5jb25zdCB2YXJpYW50cyA9IHtcbiAgZW50ZXI6IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBkaXJlY3Rpb24gPiAwID8gMTAgOiAtMTAsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfTtcbiAgfSxcbiAgY2VudGVyOiB7XG4gICAgekluZGV4OiAxLFxuICAgIHg6IDAsXG4gICAgb3BhY2l0eTogMVxuICB9LFxuICBleGl0OiAoZGlyZWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgekluZGV4OiAwLFxuICAgICAgeDogZGlyZWN0aW9uIDwgMCA/IDEwIDogLTEwLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH07XG4gIH1cbn07XG5cbmNvbnN0IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCA9IDEwMDAwO1xuY29uc3Qgc3dpcGVQb3dlciA9IChvZmZzZXQ6IG51bWJlciwgdmVsb2NpdHk6IG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5hYnMob2Zmc2V0KSAqIHZlbG9jaXR5O1xufTtcblxuY29uc3QgaW1hZ2VzID0gW1xuICBcIi9hc3NldHMvbWFya2V0L1dvbmRlckFkYW0ucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQvd29uZGVybGFuZC5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/ku4rml6Xlt6XkuosucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv5bmz5ZKM6aOv5bqXLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+aToOexs+aOsOaOsOmjry5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/oh7romY7nsr7ph4AucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv6Lev6YKK54Ok6IKJLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+mtmuWIuuS6ui5wbmdcIixcbiAgLy8gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL2ltYWdlL3VwbG9hZC92MTY2MjkzNjk4NC9WZW5kb3IvV29uZGVyX3NoZTVndi5wbmdcIixcbiAgLy8gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL2ltYWdlL3VwbG9hZC92MTY2MjkzNjk4MS9WZW5kb3Ivd29uZGVybGFuZF9tbWZhcGQucG5nXCIsXG4gIC8vIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5NzkvVmVuZG9yLyVFNCVCQiU4QSVFNiU5NyVBNSVFNSVCNyVBNSVFNCVCQSU4Ql9qMXFjZHcucG5nXCIsXG4gIC8vIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5NzkvVmVuZG9yLyVFOCU4NyVCQSVFOCU5OSU4RSVFNyVCMiVCRSVFOSU4NyU4MF9henZzb3MucG5nXCIsXG4gIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5NzkvVmVuZG9yLyVFOCU4QSVBMiVFOCU4QiU5MiVFNiU4OSU4QiVFNCVCRCU5QyVFOCU5NyU5RCVFNSVCQiU4QV9rZjR6cGwucG5nXCJcbl07XG5cbi8vIGNvbnN0IGltYWdlUG9seSA9IFtcblxuLy8gXTtcblxuY29uc3QgaW1hZ2VUZXh0ID0gW1xuICBcIldvbmRlckFkYW1cIixcbiAgXCLlpYflubvlnLDlkpbllaHppKhcIixcbiAgXCLku4rml6Xlt6XkuotcIixcbiAgXCLlubPlkozpo6/lupdcIixcbiAgXCLmk6DnsbMg5o6w5o6w6aOvXCIsXG4gIFwi6Ie66JmO57K+6YeAXCIsXG4gIFwi6Lev6YKK54Ok6IKJXCIsXG4gIFwi6a2a5Yi65Lq6XCIsXG4gIFwi6Iqi6IuS5omL5L2c6Jed5buKXCJcbl07XG5cbmNvbnN0IG5ld01vdGlvblNsaWRlciA9ICgpID0+IHtcblxuICAvLyBjb25zdCB7IG1hcmtldHMgfSA9IGNvbmZpZztcblxuICAvLyBjb25zdCB7IHRpdGxlLCBpdGVtczogbWFya2V0TGlzdHMgfSA9IG1hcmtldHM7XG5cbiAgY29uc3QgW1twYWdlLCBkaXJlY3Rpb25dLCBzZXRQYWdlXSA9IHVzZVN0YXRlKFswLCAwXSk7XG5cbiAgLy8gY29uc3QgaW1hZ2VJbmRleCA9IHdyYXAoMCwgaW1hZ2VzUy5sZW5ndGgsIHBhZ2UpO1xuICBjb25zdCBpbWFnZUluZGV4ID0gd3JhcCgwLCBpbWFnZXMubGVuZ3RoLCBwYWdlKTtcblxuXG4gIGNvbnN0IHBhZ2luYXRlID0gKG5ld0RpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgc2V0UGFnZShbcGFnZSArIG5ld0RpcmVjdGlvbiwgbmV3RGlyZWN0aW9uXSk7XG4gIH07XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICB7LyogPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktOCBiZy1ibGFja1wiIGlkPVwibWFya2V0c1wiPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXgtYXV0byBteS1hdXRvIHB4LTIgcHQtNCBwYi0xNCB0ZXh0LXdoaXRlYH0gc3R5bGU9e3ttYXhIZWlnaHQ6ICcxMDB2aCcsIG1pbkhlaWdodDogJzgwdmgnLCBoZWlnaHQ6ICdhdXRvJ319PlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0gY3VzdG9tPXtkaXJlY3Rpb259PlxuICAgICAgICB7Lyoge21hcmtldExpc3RzLm1hcCgobWFya2V0KSA9PiAoICovfVxuICAgICAgICB7LyogPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj4gKi99XG4gICAgICAgICAgPG1vdGlvbi5oMiBjbGFzc05hbWU9XCJ6LTIwIHRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtYmxhY2sgZm9udC1UYWlwZWlCb2xkXCIgc3R5bGU9e3ttYXhIZWlnaHQ6ICc3NnZoJywgbWluSGVpZ2h0OiAnNzV2aCcsIGhlaWdodDonYXV0byd9fT57aW1hZ2VUZXh0W2ltYWdlSW5kZXhdfTwvbW90aW9uLmgyPlxuICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAga2V5PXtwYWdlfVxuICAgICAgICAgIHNyYz17aW1hZ2VzW2ltYWdlSW5kZXhdfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGNsaXAgcm91bmRlZC0zeGwgbGc6aC00LzYgbWQ6aC0yLzYgaC0xLzNcIlxuICAgICAgICAgIC8vIHN0eWxlPXt7bWF4V2lkdGg6ICczMHZ3JywgbWluV2lkdGg6ICczMHZ3Jywgd2lkdGg6ICdhdXRvJ319XG4gICAgICAgICAgY3VzdG9tPXtkaXJlY3Rpb259XG4gICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgICAgIGluaXRpYWw9XCJlbnRlclwiXG4gICAgICAgICAgYW5pbWF0ZT1cImNlbnRlclwiXG4gICAgICAgICAgZXhpdD1cImV4aXRcIlxuICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgIHg6IHsgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiAzMDAsIGRhbXBpbmc6IDQwIH0sXG4gICAgICAgICAgICBvcGFjaXR5OiB7IGR1cmF0aW9uOiAwLjEgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgZHJhZz1cInhcIlxuICAgICAgICAgIGRyYWdDb25zdHJhaW50cz17eyBsZWZ0OiAwLCByaWdodDogMCB9fVxuICAgICAgICAgIGRyYWdFbGFzdGljPXsxfVxuICAgICAgICAgIG9uRHJhZ0VuZD17KGUsIHsgb2Zmc2V0LCB2ZWxvY2l0eSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzd2lwZSA9IHN3aXBlUG93ZXIob2Zmc2V0LngsIHZlbG9jaXR5LngpO1xuXG4gICAgICAgICAgICBpZiAoc3dpcGUgPCAtc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgIHBhZ2luYXRlKDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzd2lwZSA+IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICBwYWdpbmF0ZSgtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICB7LyogPC9tb3Rpb24uZGl2PiAqL31cbiAgICAgICAgey8qICkpfSAqL31cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0XCIgb25DbGljaz17KCkgPT4gcGFnaW5hdGUoMSl9IHN0eWxlPXt7cmlnaHQ6ICcxMCUnLCBoZWlnaHQ6ICcwJSd9fT5cbiAgICAgICAge1wi4oCjXCJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldlwiIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKC0xKX0gc3R5bGU9e3tsZWZ0OiAnMTAlJywgdHJhbnNmb3JtOiAnc2NhbGUoLTEpJywgaGVpZ2h0OiAnMSUnfX0+XG4gICAgICAgIHtcIuKAo1wifVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNSBwbGFjZS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGg1PjwvaDU+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LWZ1bGwgY29sLXNwYW4tMyB0ZXh0LTJ4bCB0ZXh0LWNlbnRlclwiPjEyMzwvaDU+XG4gICAgICAgIDxoNT48L2g1PlxuICAgICAgICA8aDU+PC9oNT5cbiAgICAgICAgPGg1PjwvaDU+XG4gICAgICA8L2Rpdj5cbiAgICB7LyogLy8gPC9zZWN0aW9uPiAqL31cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3TW90aW9uU2xpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJ3cmFwIiwidmFyaWFudHMiLCJlbnRlciIsImRpcmVjdGlvbiIsIngiLCJvcGFjaXR5IiwiY2VudGVyIiwiekluZGV4IiwiZXhpdCIsInN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCIsInN3aXBlUG93ZXIiLCJvZmZzZXQiLCJ2ZWxvY2l0eSIsIk1hdGgiLCJhYnMiLCJpbWFnZXMiLCJpbWFnZVRleHQiLCJuZXdNb3Rpb25TbGlkZXIiLCJwYWdlIiwic2V0UGFnZSIsImltYWdlSW5kZXgiLCJsZW5ndGgiLCJwYWdpbmF0ZSIsIm5ld0RpcmVjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWF4SGVpZ2h0IiwibWluSGVpZ2h0IiwiaGVpZ2h0IiwiaW5pdGlhbCIsImN1c3RvbSIsImgyIiwiaW1nIiwic3JjIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImR1cmF0aW9uIiwiZHJhZyIsImRyYWdDb25zdHJhaW50cyIsImxlZnQiLCJyaWdodCIsImRyYWdFbGFzdGljIiwib25EcmFnRW5kIiwiZSIsInN3aXBlIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siLCJ0cmFuc2Zvcm0iLCJoNSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NewMotionSlider.tsx\n"));

/***/ })

});