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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import config from '../config/index.json';\nvar variants = {\n    enter: function(direction) {\n        return {\n            x: direction > 0 ? 10 : -10,\n            opacity: 0\n        };\n    },\n    center: {\n        zIndex: 1,\n        x: 0,\n        opacity: 1\n    },\n    exit: function(direction) {\n        return {\n            zIndex: 0,\n            x: direction < 0 ? 10 : -10,\n            opacity: 0\n        };\n    }\n};\nvar swipeConfidenceThreshold = 10000;\nvar swipePower = function(offset, velocity) {\n    return Math.abs(offset) * velocity;\n};\nvar images = [\n    \"/assets/market/WonderAdam.png\",\n    \"/assets/market/wonderland.png\",\n    \"/assets/market/今日工事.png\",\n    \"/assets/market/平和飯店.png\",\n    \"/assets/market/擠米掰掰飯.png\",\n    \"/assets/market/臺虎精釀.png\",\n    \"/assets/market/路邊烤肉.png\",\n    \"/assets/market/魚刺人.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936984/Vendor/Wonder_she5gv.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936981/Vendor/wonderland_mmfapd.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E4%BB%8A%E6%97%A5%E5%B7%A5%E4%BA%8B_j1qcdw.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%87%BA%E8%99%8E%E7%B2%BE%E9%87%80_azvsos.png\",\n    \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%8A%A2%E8%8B%92%E6%89%8B%E4%BD%9C%E8%97%9D%E5%BB%8A_kf4zpl.png\"\n];\n// const imagePoly = [\n// ];\nvar imageText = [\n    \"WonderAdam\",\n    \"奇幻地咖啡館\",\n    \"今日工事\",\n    \"平和飯店\",\n    \"擠米 掰掰飯\",\n    \"臺虎精釀\",\n    \"路邊烤肉\",\n    \"魚刺人\",\n    \"芢苒手作藝廊\"\n];\nvar newMotionSlider = function() {\n    _s();\n    // const { markets } = config;\n    // const { title, items: marketLists } = markets;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        0\n    ]), ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ref[0], 2), page = ref1[0], direction = ref1[1], setPage = ref[1];\n    // const imageIndex = wrap(0, imagesS.length, page);\n    var imageIndex = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.wrap)(0, images.length, page);\n    var paginate = function(newDirection) {\n        setPage([\n            page + newDirection,\n            newDirection\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex justify-center items-center mx-auto my-auto px-2 pt-4 pb-14 text-white\",\n                style: {\n                    maxHeight: \"100vh\",\n                    minHeight: \"80vh\",\n                    height: \"auto\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                        initial: false,\n                        custom: direction,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                                className: \"z-20 text-4xl md:text-5xl font-black font-TaipeiBold\",\n                                style: {\n                                    maxHeight: \"76vh\",\n                                    minHeight: \"75vh\",\n                                    height: \"auto\"\n                                },\n                                children: imageText[imageIndex]\n                            }, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                                src: images[imageIndex],\n                                className: \"absolute clip rounded-3xl lg:h-4/6 md:h-2/6 h-1/3\",\n                                // style={{maxWidth: '30vw', minWidth: '30vw', width: 'auto'}}\n                                custom: direction,\n                                variants: variants,\n                                initial: \"enter\",\n                                animate: \"center\",\n                                exit: \"exit\",\n                                transition: {\n                                    x: {\n                                        type: \"spring\",\n                                        stiffness: 300,\n                                        damping: 40\n                                    },\n                                    opacity: {\n                                        duration: 0.1\n                                    }\n                                },\n                                drag: \"x\",\n                                dragConstraints: {\n                                    left: 0,\n                                    right: 0\n                                },\n                                dragElastic: 1,\n                                onDragEnd: function(e, param) {\n                                    var offset = param.offset, velocity = param.velocity;\n                                    var swipe = swipePower(offset.x, velocity.x);\n                                    if (swipe < -swipeConfidenceThreshold) {\n                                        console.log(e);\n                                        paginate(1);\n                                    } else if (swipe > swipeConfidenceThreshold) {\n                                        paginate(-1);\n                                    }\n                                }\n                            }, page, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"next\",\n                        onClick: function() {\n                            return paginate(1);\n                        },\n                        style: {\n                            right: \"10%\",\n                            height: \"0%\"\n                        },\n                        children: \"‣\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"prev\",\n                        onClick: function() {\n                            return paginate(-1);\n                        },\n                        style: {\n                            left: \"10%\",\n                            transform: \"scale(-1)\",\n                            height: \"1%\"\n                        },\n                        children: \"‣\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-5 place-items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {}, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white w-full col-span-3 h-80 pb-[100px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"mx-10 text-2xl\",\n                            children: \"123\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {}, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {}, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {}, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/NewMotionSlider.tsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(newMotionSlider, \"8Bx1Wl4uzlT5pCEkBvA3L8JklTA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (newMotionSlider);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHO3dCQUFDQyxTQUFTLEVBQUMsTUFBTTt3QkFBQzBCLE9BQU8sRUFBRTttQ0FBTTdCLFFBQVEsQ0FBQyxDQUFDLENBQUM7eUJBQUE7d0JBQUVJLEtBQUssRUFBRTs0QkFBQ2tCLEtBQUssRUFBRSxLQUFLOzRCQUFFZixNQUFNLEVBQUUsSUFBSTt5QkFBQztrQ0FDbEYsR0FBRzs7Ozs7NkJBQ0E7a0NBQ04sOERBQUNMLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxNQUFNO3dCQUFDMEIsT0FBTyxFQUFFO21DQUFNN0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUFBO3dCQUFFSSxLQUFLLEVBQUU7NEJBQUNpQixJQUFJLEVBQUUsS0FBSzs0QkFBRVMsU0FBUyxFQUFFLFdBQVc7NEJBQUV2QixNQUFNLEVBQUUsSUFBSTt5QkFBQztrQ0FDMUcsR0FBRzs7Ozs7NkJBQ0E7Ozs7OztxQkFDQTswQkFDTiw4REFBQ0wsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHFDQUFxQzs7a0NBQ2xELDhEQUFDNEIsSUFBRTs7Ozs2QkFBTTtrQ0FDVCw4REFBQzdCLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw0Q0FBNEM7a0NBQ3pELDRFQUFDNEIsSUFBRTs0QkFBQzVCLFNBQVMsRUFBQyxnQkFBZ0I7c0NBQUMsS0FBRzs7Ozs7aUNBQUs7Ozs7OzZCQUNuQztrQ0FDTiw4REFBQzRCLElBQUU7Ozs7NkJBQU07a0NBQ1QsOERBQUNBLElBQUU7Ozs7NkJBQU07a0NBQ1QsOERBQUNBLElBQUU7Ozs7NkJBQU07Ozs7OztxQkFDTDs7b0JBRUwsQ0FDSjtDQUNGO0dBM0VLcEMsZUFBZTtBQTZFckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OZXdNb3Rpb25TbGlkZXIudHN4P2FhOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB3cmFwIH0gZnJvbSBcInBvcG1vdGlvblwiO1xuXG4vLyBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9pbmRleC5qc29uJztcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIGVudGVyOiAoZGlyZWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZGlyZWN0aW9uID4gMCA/IDEwIDogLTEwLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH07XG4gIH0sXG4gIGNlbnRlcjoge1xuICAgIHpJbmRleDogMSxcbiAgICB4OiAwLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgZXhpdDogKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpJbmRleDogMCxcbiAgICAgIHg6IGRpcmVjdGlvbiA8IDAgPyAxMCA6IC0xMCxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQgPSAxMDAwMDtcbmNvbnN0IHN3aXBlUG93ZXIgPSAob2Zmc2V0OiBudW1iZXIsIHZlbG9jaXR5OiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGguYWJzKG9mZnNldCkgKiB2ZWxvY2l0eTtcbn07XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAgXCIvYXNzZXRzL21hcmtldC9Xb25kZXJBZGFtLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L3dvbmRlcmxhbmQucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv5LuK5pel5bel5LqLLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+W5s+WSjOmjr+W6ly5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/mk6DnsbPmjrDmjrDpo68ucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv6Ie66JmO57K+6YeALnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+i3r+mCiueDpOiCiS5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/prZrliLrkuroucG5nXCIsXG4gIC8vIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5ODQvVmVuZG9yL1dvbmRlcl9zaGU1Z3YucG5nXCIsXG4gIC8vIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5ODEvVmVuZG9yL3dvbmRlcmxhbmRfbW1mYXBkLnBuZ1wiLFxuICAvLyBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTc5L1ZlbmRvci8lRTQlQkIlOEElRTYlOTclQTUlRTUlQjclQTUlRTQlQkElOEJfajFxY2R3LnBuZ1wiLFxuICAvLyBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTc5L1ZlbmRvci8lRTglODclQkElRTglOTklOEUlRTclQjIlQkUlRTklODclODBfYXp2c29zLnBuZ1wiLFxuICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTc5L1ZlbmRvci8lRTglOEElQTIlRTglOEIlOTIlRTYlODklOEIlRTQlQkQlOUMlRTglOTclOUQlRTUlQkIlOEFfa2Y0enBsLnBuZ1wiXG5dO1xuXG4vLyBjb25zdCBpbWFnZVBvbHkgPSBbXG5cbi8vIF07XG5cbmNvbnN0IGltYWdlVGV4dCA9IFtcbiAgXCJXb25kZXJBZGFtXCIsXG4gIFwi5aWH5bm75Zyw5ZKW5ZWh6aSoXCIsXG4gIFwi5LuK5pel5bel5LqLXCIsXG4gIFwi5bmz5ZKM6aOv5bqXXCIsXG4gIFwi5pOg57GzIOaOsOaOsOmjr1wiLFxuICBcIuiHuuiZjueyvumHgFwiLFxuICBcIui3r+mCiueDpOiCiVwiLFxuICBcIumtmuWIuuS6ulwiLFxuICBcIuiKouiLkuaJi+S9nOiXneW7ilwiXG5dO1xuXG5jb25zdCBuZXdNb3Rpb25TbGlkZXIgPSAoKSA9PiB7XG5cbiAgLy8gY29uc3QgeyBtYXJrZXRzIH0gPSBjb25maWc7XG5cbiAgLy8gY29uc3QgeyB0aXRsZSwgaXRlbXM6IG1hcmtldExpc3RzIH0gPSBtYXJrZXRzO1xuXG4gIGNvbnN0IFtbcGFnZSwgZGlyZWN0aW9uXSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShbMCwgMF0pO1xuXG4gIC8vIGNvbnN0IGltYWdlSW5kZXggPSB3cmFwKDAsIGltYWdlc1MubGVuZ3RoLCBwYWdlKTtcbiAgY29uc3QgaW1hZ2VJbmRleCA9IHdyYXAoMCwgaW1hZ2VzLmxlbmd0aCwgcGFnZSk7XG5cblxuICBjb25zdCBwYWdpbmF0ZSA9IChuZXdEaXJlY3Rpb246IG51bWJlcikgPT4ge1xuICAgIHNldFBhZ2UoW3BhZ2UgKyBuZXdEaXJlY3Rpb24sIG5ld0RpcmVjdGlvbl0pO1xuICB9O1xuICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTggYmctYmxhY2tcIiBpZD1cIm1hcmtldHNcIj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG14LWF1dG8gbXktYXV0byBweC0yIHB0LTQgcGItMTQgdGV4dC13aGl0ZWB9IHN0eWxlPXt7bWF4SGVpZ2h0OiAnMTAwdmgnLCBtaW5IZWlnaHQ6ICc4MHZoJywgaGVpZ2h0OiAnYXV0byd9fT5cbiAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9IGN1c3RvbT17ZGlyZWN0aW9ufT5cbiAgICAgICAgey8qIHttYXJrZXRMaXN0cy5tYXAoKG1hcmtldCkgPT4gKCAqL31cbiAgICAgICAgey8qIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+ICovfVxuICAgICAgICAgIDxtb3Rpb24uaDIgY2xhc3NOYW1lPVwiei0yMCB0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWJsYWNrIGZvbnQtVGFpcGVpQm9sZFwiIHN0eWxlPXt7bWF4SGVpZ2h0OiAnNzZ2aCcsIG1pbkhlaWdodDogJzc1dmgnLCBoZWlnaHQ6J2F1dG8nfX0+e2ltYWdlVGV4dFtpbWFnZUluZGV4XX08L21vdGlvbi5oMj5cbiAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgICBzcmM9e2ltYWdlc1tpbWFnZUluZGV4XX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBjbGlwIHJvdW5kZWQtM3hsIGxnOmgtNC82IG1kOmgtMi82IGgtMS8zXCJcbiAgICAgICAgICAvLyBzdHlsZT17e21heFdpZHRoOiAnMzB2dycsIG1pbldpZHRoOiAnMzB2dycsIHdpZHRoOiAnYXV0byd9fVxuICAgICAgICAgIGN1c3RvbT17ZGlyZWN0aW9ufVxuICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgICAgICBpbml0aWFsPVwiZW50ZXJcIlxuICAgICAgICAgIGFuaW1hdGU9XCJjZW50ZXJcIlxuICAgICAgICAgIGV4aXQ9XCJleGl0XCJcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICB4OiB7IHR5cGU6IFwic3ByaW5nXCIsIHN0aWZmbmVzczogMzAwLCBkYW1waW5nOiA0MCB9LFxuICAgICAgICAgICAgb3BhY2l0eTogeyBkdXJhdGlvbjogMC4xIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIGRyYWc9XCJ4XCJcbiAgICAgICAgICBkcmFnQ29uc3RyYWludHM9e3sgbGVmdDogMCwgcmlnaHQ6IDAgfX1cbiAgICAgICAgICBkcmFnRWxhc3RpYz17MX1cbiAgICAgICAgICBvbkRyYWdFbmQ9eyhlLCB7IG9mZnNldCwgdmVsb2NpdHkgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3dpcGUgPSBzd2lwZVBvd2VyKG9mZnNldC54LCB2ZWxvY2l0eS54KTtcblxuICAgICAgICAgICAgaWYgKHN3aXBlIDwgLXN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICBwYWdpbmF0ZSgxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3dpcGUgPiBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgcGFnaW5hdGUoLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgey8qIDwvbW90aW9uLmRpdj4gKi99XG4gICAgICAgIHsvKiApKX0gKi99XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dFwiIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKDEpfSBzdHlsZT17e3JpZ2h0OiAnMTAlJywgaGVpZ2h0OiAnMCUnfX0+XG4gICAgICAgIHtcIuKAo1wifVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZcIiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZSgtMSl9IHN0eWxlPXt7bGVmdDogJzEwJScsIHRyYW5zZm9ybTogJ3NjYWxlKC0xKScsIGhlaWdodDogJzElJ319PlxuICAgICAgICB7XCLigKNcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTUgcGxhY2UtaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoNT48L2g1PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHctZnVsbCBjb2wtc3Bhbi0zIGgtODAgcGItWzEwMHB4XVwiPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJteC0xMCB0ZXh0LTJ4bFwiPjEyMzwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDU+PC9oNT5cbiAgICAgICAgPGg1PjwvaDU+XG4gICAgICAgIDxoNT48L2g1PlxuICAgICAgPC9kaXY+XG4gICAgey8qIC8vIDwvc2VjdGlvbj4gKi99XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ld01vdGlvblNsaWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwid3JhcCIsInZhcmlhbnRzIiwiZW50ZXIiLCJkaXJlY3Rpb24iLCJ4Iiwib3BhY2l0eSIsImNlbnRlciIsInpJbmRleCIsImV4aXQiLCJzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQiLCJzd2lwZVBvd2VyIiwib2Zmc2V0IiwidmVsb2NpdHkiLCJNYXRoIiwiYWJzIiwiaW1hZ2VzIiwiaW1hZ2VUZXh0IiwibmV3TW90aW9uU2xpZGVyIiwicGFnZSIsInNldFBhZ2UiLCJpbWFnZUluZGV4IiwibGVuZ3RoIiwicGFnaW5hdGUiLCJuZXdEaXJlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1heEhlaWdodCIsIm1pbkhlaWdodCIsImhlaWdodCIsImluaXRpYWwiLCJjdXN0b20iLCJoMiIsImltZyIsInNyYyIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJkdXJhdGlvbiIsImRyYWciLCJkcmFnQ29uc3RyYWludHMiLCJsZWZ0IiwicmlnaHQiLCJkcmFnRWxhc3RpYyIsIm9uRHJhZ0VuZCIsImUiLCJzd2lwZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrIiwidHJhbnNmb3JtIiwiaDUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NewMotionSlider.tsx\n"));

/***/ })

});