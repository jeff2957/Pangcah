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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import config from '../config/index.json';\nvar variants = {\n    enter: function(direction) {\n        return {\n            x: direction > 0 ? 10 : -10,\n            opacity: 0\n        };\n    },\n    center: {\n        zIndex: 1,\n        x: 0,\n        opacity: 1\n    },\n    exit: function(direction) {\n        return {\n            zIndex: 0,\n            x: direction < 0 ? 10 : -10,\n            opacity: 0\n        };\n    }\n};\nvar swipeConfidenceThreshold = 10000;\nvar swipePower = function(offset, velocity) {\n    return Math.abs(offset) * velocity;\n};\nvar images = [\n    \"/assets/market/WonderAdam.png\",\n    \"/assets/market/wonderland.png\",\n    \"/assets/market/今日工事.png\",\n    \"/assets/market/平和飯店.png\",\n    \"/assets/market/JimmyFoodPlace.png\",\n    \"/assets/market/臺虎精釀.png\",\n    \"/assets/market/路邊烤肉.png\",\n    \"/assets/market/魚刺人.png\",\n    \"/assets/market/Q-Tace.png\",\n    \"/assets/market/TapayawTribeGrill.png\",\n    \"/assets/market/慢一點.png\",\n    \"/assets/market/芢苒.png\",\n    \"/assets/market/Kawa.png\",\n    \"/assets/market/Madman.png\",\n    \"/assets/market/Nature.png\",\n    \"/assets/market/outdoorCafe.png\",\n    \"/assets/market/泰哥.png\",\n    \"/assets/market/王群翔.png\",\n    \"/assets/market/福町檸檬.png\",\n    \"/assets/market/花子好食.png\",\n    \"/assets/market/迷霧山谷.png\"\n];\n// const imagePoly = [\n// ];\nvar imageText = [\n    \"WonderAdam\",\n    \"奇幻地咖啡館\",\n    \"今日工事\",\n    \"平和飯店\",\n    \"擠米 掰掰飯\",\n    \"臺虎精釀\",\n    \"路邊烤肉\",\n    \"魚刺人\",\n    \"芢苒質感手作藝廊\"\n];\nvar newMotionSlider = function() {\n    _s();\n    // const { markets } = config;\n    // const { title, items: marketLists } = markets;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        0\n    ]), ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ref[0], 2), page = ref1[0], direction = ref1[1], setPage = ref[1];\n    // const imageIndex = wrap(0, imagesS.length, page);\n    var imageIndex = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.wrap)(0, images.length, page);\n    var paginate = function(newDirection) {\n        setPage([\n            page + newDirection,\n            newDirection\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"py-8\",\n            id: \"markets\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex justify-center items-center mx-auto px-2 text-white\",\n                    style: {\n                        maxHeight: \"100vh\",\n                        minHeight: \"80vh\",\n                        height: \"auto\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                            initial: false,\n                            custom: direction,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 place-items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                                        src: images[imageIndex],\n                                        className: \"clip rounded-3xl md:h-[100vh] h-[38vh]\",\n                                        // style={{maxWidth: '30vw', minWidth: '30vw', width: 'auto'}}\n                                        custom: direction,\n                                        variants: variants,\n                                        initial: \"enter\",\n                                        animate: \"center\",\n                                        exit: \"exit\",\n                                        transition: {\n                                            x: {\n                                                type: \"spring\",\n                                                stiffness: 300,\n                                                damping: 40\n                                            },\n                                            opacity: {\n                                                duration: 0.1\n                                            }\n                                        },\n                                        drag: \"x\",\n                                        dragConstraints: {\n                                            left: 0,\n                                            right: 0\n                                        },\n                                        dragElastic: 1,\n                                        onDragEnd: function(e, param) {\n                                            var offset = param.offset, velocity = param.velocity;\n                                            var swipe = swipePower(offset.x, velocity.x);\n                                            if (swipe < -swipeConfidenceThreshold) {\n                                                console.log(e);\n                                                paginate(1);\n                                            } else if (swipe > swipeConfidenceThreshold) {\n                                                paginate(-1);\n                                            }\n                                        }\n                                    }, page, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"next mt-5\",\n                            onClick: function() {\n                                return paginate(1);\n                            },\n                            style: {\n                                right: \"7%\",\n                                height: \"0%\"\n                            },\n                            children: \"‣\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 142,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"prev\",\n                            onClick: function() {\n                                return paginate(-1);\n                            },\n                            style: {\n                                left: \"7%\",\n                                transform: \"scale(-1)\"\n                            },\n                            children: \"‣\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 145,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 7\n                }, _this),\n                \"// \"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n            lineNumber: 94,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_s(newMotionSlider, \"8Bx1Wl4uzlT5pCEkBvA3L8JklTA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (newMotionSlider);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rjt1Q0F6QklKLElBQUk7Ozs7NkNBMEJQOzs7Ozt5Q0FDSTs7Ozs7cUNBR0Y7Ozs7O2lDQUNVO3NDQUd0Qiw4REFBQ1MsS0FBRzs0QkFBQ0YsU0FBUyxFQUFDLFdBQVc7NEJBQUMyQixPQUFPLEVBQUU7dUNBQU05QixRQUFRLENBQUMsQ0FBQyxDQUFDOzZCQUFBOzRCQUFFTSxLQUFLLEVBQUU7Z0NBQUNpQixLQUFLLEVBQUUsSUFBSTtnQ0FBRWQsTUFBTSxFQUFFLElBQUk7NkJBQUM7c0NBQ3RGLEdBQUc7Ozs7O2lDQUNBO3NDQUNOLDhEQUFDSixLQUFHOzRCQUFDRixTQUFTLEVBQUMsTUFBTTs0QkFBQzJCLE9BQU8sRUFBRTt1Q0FBTTlCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFBQTs0QkFBRU0sS0FBSyxFQUFFO2dDQUFDZ0IsSUFBSSxFQUFFLElBQUk7Z0NBQUVTLFNBQVMsRUFBRSxXQUFXOzZCQUFDO3NDQUMzRixHQUFHOzs7OztpQ0FDQTs7Ozs7O3lCQUNBO2dCQUFBLEtBQ0w7Ozs7OztpQkFBVTtxQkFDVixDQUNKO0NBQ0Y7R0E3RUtwQyxlQUFlO0FBK0VyQiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vdGlvblNsaWRlci50c3g/MGE3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHdyYXAgfSBmcm9tIFwicG9wbW90aW9uXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcInJlYWN0anMtcG9wdXBcIjtcblxuXG4vLyBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9pbmRleC5qc29uJztcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIGVudGVyOiAoZGlyZWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZGlyZWN0aW9uID4gMCA/IDEwIDogLTEwLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH07XG4gIH0sXG4gIGNlbnRlcjoge1xuICAgIHpJbmRleDogMSxcbiAgICB4OiAwLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgZXhpdDogKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpJbmRleDogMCxcbiAgICAgIHg6IGRpcmVjdGlvbiA8IDAgPyAxMCA6IC0xMCxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQgPSAxMDAwMDtcbmNvbnN0IHN3aXBlUG93ZXIgPSAob2Zmc2V0OiBudW1iZXIsIHZlbG9jaXR5OiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGguYWJzKG9mZnNldCkgKiB2ZWxvY2l0eTtcbn07XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAgXCIvYXNzZXRzL21hcmtldC9Xb25kZXJBZGFtLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L3dvbmRlcmxhbmQucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv5LuK5pel5bel5LqLLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+W5s+WSjOmjr+W6ly5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC9KaW1teUZvb2RQbGFjZS5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/oh7romY7nsr7ph4AucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv6Lev6YKK54Ok6IKJLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+mtmuWIuuS6ui5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC9RLVRhY2UucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQvVGFwYXlhd1RyaWJlR3JpbGwucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv5oWi5LiA6bueLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+iKouiLki5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC9LYXdhLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L01hZG1hbi5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC9OYXR1cmUucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQvb3V0ZG9vckNhZmUucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv5rOw5ZOlLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+eOi+e+pOe/lC5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/npo/nlLrmqrjmqqwucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv6Iqx5a2Q5aW96aOfLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+i/t+mcp+Wxseiwty5wbmdcIlxuXTtcblxuLy8gY29uc3QgaW1hZ2VQb2x5ID0gW1xuXG4vLyBdO1xuXG5jb25zdCBpbWFnZVRleHQgPSBbXG4gIFwiV29uZGVyQWRhbVwiLFxuICBcIuWlh+W5u+WcsOWSluWVoemkqFwiLFxuICBcIuS7iuaXpeW3peS6i1wiLFxuICBcIuW5s+WSjOmjr+W6l1wiLFxuICBcIuaToOexsyDmjrDmjrDpo69cIixcbiAgXCLoh7romY7nsr7ph4BcIixcbiAgXCLot6/pgorng6TogolcIixcbiAgXCLprZrliLrkurpcIixcbiAgXCLoiqLoi5Los6rmhJ/miYvkvZzol53lu4pcIlxuXTtcblxuY29uc3QgbmV3TW90aW9uU2xpZGVyID0gKCkgPT4ge1xuXG4gIC8vIGNvbnN0IHsgbWFya2V0cyB9ID0gY29uZmlnO1xuXG4gIC8vIGNvbnN0IHsgdGl0bGUsIGl0ZW1zOiBtYXJrZXRMaXN0cyB9ID0gbWFya2V0cztcblxuICBjb25zdCBbW3BhZ2UsIGRpcmVjdGlvbl0sIHNldFBhZ2VdID0gdXNlU3RhdGUoWzAsIDBdKTtcblxuICAvLyBjb25zdCBpbWFnZUluZGV4ID0gd3JhcCgwLCBpbWFnZXNTLmxlbmd0aCwgcGFnZSk7XG4gIGNvbnN0IGltYWdlSW5kZXggPSB3cmFwKDAsIGltYWdlcy5sZW5ndGgsIHBhZ2UpO1xuXG5cbiAgY29uc3QgcGFnaW5hdGUgPSAobmV3RGlyZWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICBzZXRQYWdlKFtwYWdlICsgbmV3RGlyZWN0aW9uLCBuZXdEaXJlY3Rpb25dKTtcbiAgfTtcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LThcIiBpZD1cIm1hcmtldHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXgtYXV0byBweC0yIHRleHQtd2hpdGVgfSBzdHlsZT17e21heEhlaWdodDogJzEwMHZoJywgbWluSGVpZ2h0OiAnODB2aCcsIGhlaWdodDogJ2F1dG8nfX0+XG4gICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0gY3VzdG9tPXtkaXJlY3Rpb259PlxuICAgICAgICAgICAgey8qIHttYXJrZXRMaXN0cy5tYXAoKG1hcmtldCkgPT4gKCAqL31cbiAgICAgICAgICAgIHsvKiA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBwbGFjZS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5oMiBjbGFzc05hbWU9XCJ6LTIwIHRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtYmxhY2sgZm9udC1UYWlwZWlCb2xkIHdoaXRlc3BhY2UtcHJlLWxpbmVcIiA+e2ltYWdlVGV4dFtpbWFnZUluZGV4XX08L21vdGlvbi5oMj5cbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCIgbWQ6bXgtNjQgbXgtMTAgbXktMyBtZDpyb3VuZGVkLVs0MHB4XSByb3VuZGVkLVszMHB4XSBiYWNrZHJvcC1ibHVyLVsxMDBweF0gYmctd2hpdGUgYmctb3BhY2l0eS0xMCBzaGFkb3ctbWRcIj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmgyIGNsYXNzTmFtZT1cInotMjAgdGV4dC1zbSB0ZXh0LXdoaXRlIG1kOnRleHQteGwgZm9udC1UYWlwZWlCb2xkIG1kOm14LTE0IG14LTQgbXktNSB3aGl0ZXNwYWNlLXByZS1saW5lXCIgPntpbWFnZURlc2NyaXBbaW1hZ2VJbmRleF19PC9tb3Rpb24uaDI+XG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAga2V5PXtwYWdlfVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tpbWFnZUluZGV4XX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpcCByb3VuZGVkLTN4bCBtZDpoLVsxMDB2aF0gaC1bMzh2aF1cIlxuICAgICAgICAgICAgICAvLyBzdHlsZT17e21heFdpZHRoOiAnMzB2dycsIG1pbldpZHRoOiAnMzB2dycsIHdpZHRoOiAnYXV0byd9fVxuICAgICAgICAgICAgICBjdXN0b209e2RpcmVjdGlvbn1cbiAgICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgICAgICAgICBpbml0aWFsPVwiZW50ZXJcIlxuICAgICAgICAgICAgICBhbmltYXRlPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgZXhpdD1cImV4aXRcIlxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgeDogeyB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDMwMCwgZGFtcGluZzogNDAgfSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiB7IGR1cmF0aW9uOiAwLjEgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkcmFnPVwieFwiXG4gICAgICAgICAgICAgIGRyYWdDb25zdHJhaW50cz17eyBsZWZ0OiAwLCByaWdodDogMCB9fVxuICAgICAgICAgICAgICBkcmFnRWxhc3RpYz17MX1cbiAgICAgICAgICAgICAgb25EcmFnRW5kPXsoZSwgeyBvZmZzZXQsIHZlbG9jaXR5IH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzd2lwZSA9IHN3aXBlUG93ZXIob2Zmc2V0LngsIHZlbG9jaXR5LngpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN3aXBlIDwgLXN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICAgIHBhZ2luYXRlKDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3dpcGUgPiBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgIHBhZ2luYXRlKC0xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDwvbW90aW9uLmRpdj4gKi99XG4gICAgICAgICAgICB7LyogKSl9ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0IG10LTVcIiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZSgxKX0gc3R5bGU9e3tyaWdodDogJzclJywgaGVpZ2h0OiAnMCUnfX0+XG4gICAgICAgIHtcIuKAo1wifVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZcIiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZSgtMSl9IHN0eWxlPXt7bGVmdDogJzclJywgdHJhbnNmb3JtOiAnc2NhbGUoLTEpJ319PlxuICAgICAgICB7XCLigKNcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgLy8gPC9zZWN0aW9uPlxuICAgIDwvPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdNb3Rpb25TbGlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIndyYXAiLCJ2YXJpYW50cyIsImVudGVyIiwiZGlyZWN0aW9uIiwieCIsIm9wYWNpdHkiLCJjZW50ZXIiLCJ6SW5kZXgiLCJleGl0Iiwic3dpcGVDb25maWRlbmNlVGhyZXNob2xkIiwic3dpcGVQb3dlciIsIm9mZnNldCIsInZlbG9jaXR5IiwiTWF0aCIsImFicyIsImltYWdlcyIsImltYWdlVGV4dCIsIm5ld01vdGlvblNsaWRlciIsInBhZ2UiLCJzZXRQYWdlIiwiaW1hZ2VJbmRleCIsImxlbmd0aCIsInBhZ2luYXRlIiwibmV3RGlyZWN0aW9uIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImlkIiwiZGl2Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJoZWlnaHQiLCJpbml0aWFsIiwiY3VzdG9tIiwiaW1nIiwic3JjIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImR1cmF0aW9uIiwiZHJhZyIsImRyYWdDb25zdHJhaW50cyIsImxlZnQiLCJyaWdodCIsImRyYWdFbGFzdGljIiwib25EcmFnRW5kIiwiZSIsInN3aXBlIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MotionSlider.tsx\n"));

/***/ })

});