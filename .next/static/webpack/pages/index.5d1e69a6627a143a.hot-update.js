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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import config from '../config/index.json';\nvar variants = {\n    enter: function(direction) {\n        return {\n            x: direction > 0 ? 10 : -10,\n            opacity: 0\n        };\n    },\n    center: {\n        zIndex: 1,\n        x: 0,\n        opacity: 1\n    },\n    exit: function(direction) {\n        return {\n            zIndex: 0,\n            x: direction < 0 ? 10 : -10,\n            opacity: 0\n        };\n    }\n};\nvar swipeConfidenceThreshold = 10000;\nvar swipePower = function(offset, velocity) {\n    return Math.abs(offset) * velocity;\n};\nvar images = [\n    \"/assets/market/WonderAdam.png\",\n    \"/assets/market/wonderland.png\",\n    \"/assets/market/今日工事.png\",\n    \"/assets/market/平和飯店.png\",\n    \"/assets/market/擠米掰掰飯.png\",\n    \"/assets/market/臺虎精釀.png\",\n    \"/assets/market/路邊烤肉.png\",\n    \"/assets/market/魚刺人.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936984/Vendor/Wonder_she5gv.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936981/Vendor/wonderland_mmfapd.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E4%BB%8A%E6%97%A5%E5%B7%A5%E4%BA%8B_j1qcdw.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%87%BA%E8%99%8E%E7%B2%BE%E9%87%80_azvsos.png\",\n    \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%8A%A2%E8%8B%92%E6%89%8B%E4%BD%9C%E8%97%9D%E5%BB%8A_kf4zpl.png\"\n];\n// const imagePoly = [\n// ];\nvar imageText = [\n    \"WonderAdam\",\n    \"奇幻地咖啡館\",\n    \"今日工事\",\n    \"平和飯店\",\n    \"擠米 掰掰飯\",\n    \"臺虎精釀\",\n    \"路邊烤肉\",\n    \"魚刺人\",\n    \"芢苒手作藝廊\"\n];\nvar MotionSlider = function() {\n    _s();\n    // const { markets } = config;\n    // const { title, items: marketLists } = markets;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        0\n    ]), ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ref[0], 2), page = ref1[0], direction = ref1[1], setPage = ref[1];\n    // const imageIndex = wrap(0, imagesS.length, page);\n    var imageIndex = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.wrap)(0, images.length, page);\n    var paginate = function(newDirection) {\n        setPage([\n            page + newDirection,\n            newDirection\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"py-8 \",\n            id: \"markets\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 place-items-center mx-auto px-2 pt-4 pb-14 text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"z-20 text-4xl md:text-5xl font-black font-TaipeiBold\",\n                        children: imageText[imageIndex]\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 place-items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"prev\",\n                                onClick: function() {\n                                    return paginate(-1);\n                                },\n                                style: {\n                                    left: \"10%\",\n                                    transform: \"scale(-1)\"\n                                },\n                                children: \"‣\"\n                            }, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                                initial: false,\n                                custom: direction,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                                    src: images[imageIndex],\n                                    className: \" rounded-3xl lg:h-4/6 md:h-2/6 h-1/3\",\n                                    custom: direction,\n                                    variants: variants,\n                                    initial: \"enter\",\n                                    animate: \"center\",\n                                    exit: \"exit\",\n                                    transition: {\n                                        x: {\n                                            type: \"spring\",\n                                            stiffness: 300,\n                                            damping: 40\n                                        },\n                                        opacity: {\n                                            duration: 0\n                                        }\n                                    },\n                                    drag: \"x\",\n                                    dragConstraints: {\n                                        left: 0,\n                                        right: 0\n                                    },\n                                    dragElastic: 1,\n                                    onDragEnd: function(e, param) {\n                                        var offset = param.offset, velocity = param.velocity;\n                                        var swipe = swipePower(offset.x, velocity.x);\n                                        if (swipe < -swipeConfidenceThreshold) {\n                                            console.log(e);\n                                            paginate(1);\n                                        } else if (swipe > swipeConfidenceThreshold) {\n                                            paginate(-1);\n                                        }\n                                    }\n                                }, page, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"next\",\n                                onClick: function() {\n                                    return paginate(1);\n                                },\n                                children: \"‣\"\n                            }, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n            lineNumber: 84,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_s(MotionSlider, \"8Bx1Wl4uzlT5pCEkBvA3L8JklTA=\");\n_c = MotionSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MotionSlider);\nvar _c;\n$RefreshReg$(_c, \"MotionSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lDQUNkO3FDQUNGO21DQXhCSUosSUFBSTs7Ozt5Q0F5QlA7Ozs7O3FDQUNjOzBDQUNsQiw4REFBQ1csUUFBTTtnQ0FBQ0osU0FBUyxFQUFDLE1BQU07Z0NBQUNLLE9BQU8sRUFBRTsyQ0FBTVIsUUFBUSxDQUFDLENBQUMsQ0FBQztpQ0FBQTswQ0FBRSxHQUFDOzs7OztxQ0FBUzs7Ozs7OzZCQUMzRDs7Ozs7O3FCQU9GOzs7OztpQkFDRTtxQkFDUCxDQUNKO0NBQ0Y7R0FsRUtMLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQW9FbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb3Rpb25TbGlkZXIudHN4PzBhN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB3cmFwIH0gZnJvbSBcInBvcG1vdGlvblwiO1xuXG4vLyBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9pbmRleC5qc29uJztcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIGVudGVyOiAoZGlyZWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZGlyZWN0aW9uID4gMCA/IDEwIDogLTEwLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH07XG4gIH0sXG4gIGNlbnRlcjoge1xuICAgIHpJbmRleDogMSxcbiAgICB4OiAwLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgZXhpdDogKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpJbmRleDogMCxcbiAgICAgIHg6IGRpcmVjdGlvbiA8IDAgPyAxMCA6IC0xMCxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQgPSAxMDAwMDtcbmNvbnN0IHN3aXBlUG93ZXIgPSAob2Zmc2V0OiBudW1iZXIsIHZlbG9jaXR5OiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGguYWJzKG9mZnNldCkgKiB2ZWxvY2l0eTtcbn07XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAgXCIvYXNzZXRzL21hcmtldC9Xb25kZXJBZGFtLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L3dvbmRlcmxhbmQucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv5LuK5pel5bel5LqLLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+W5s+WSjOmjr+W6ly5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/mk6DnsbPmjrDmjrDpo68ucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv6Ie66JmO57K+6YeALnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+i3r+mCiueDpOiCiS5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/prZrliLrkuroucG5nXCIsXG4gIC8vIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5ODQvVmVuZG9yL1dvbmRlcl9zaGU1Z3YucG5nXCIsXG4gIC8vIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5ODEvVmVuZG9yL3dvbmRlcmxhbmRfbW1mYXBkLnBuZ1wiLFxuICAvLyBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTc5L1ZlbmRvci8lRTQlQkIlOEElRTYlOTclQTUlRTUlQjclQTUlRTQlQkElOEJfajFxY2R3LnBuZ1wiLFxuICAvLyBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTc5L1ZlbmRvci8lRTglODclQkElRTglOTklOEUlRTclQjIlQkUlRTklODclODBfYXp2c29zLnBuZ1wiLFxuICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTc5L1ZlbmRvci8lRTglOEElQTIlRTglOEIlOTIlRTYlODklOEIlRTQlQkQlOUMlRTglOTclOUQlRTUlQkIlOEFfa2Y0enBsLnBuZ1wiXG5dO1xuXG4vLyBjb25zdCBpbWFnZVBvbHkgPSBbXG5cbi8vIF07XG5cbmNvbnN0IGltYWdlVGV4dCA9IFtcbiAgXCJXb25kZXJBZGFtXCIsXG4gIFwi5aWH5bm75Zyw5ZKW5ZWh6aSoXCIsXG4gIFwi5LuK5pel5bel5LqLXCIsXG4gIFwi5bmz5ZKM6aOv5bqXXCIsXG4gIFwi5pOg57GzIOaOsOaOsOmjr1wiLFxuICBcIuiHuuiZjueyvumHgFwiLFxuICBcIui3r+mCiueDpOiCiVwiLFxuICBcIumtmuWIuuS6ulwiLFxuICBcIuiKouiLkuaJi+S9nOiXneW7ilwiXG5dO1xuXG5jb25zdCBNb3Rpb25TbGlkZXIgPSAoKSA9PiB7XG5cbiAgLy8gY29uc3QgeyBtYXJrZXRzIH0gPSBjb25maWc7XG5cbiAgLy8gY29uc3QgeyB0aXRsZSwgaXRlbXM6IG1hcmtldExpc3RzIH0gPSBtYXJrZXRzO1xuXG4gIGNvbnN0IFtbcGFnZSwgZGlyZWN0aW9uXSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShbMCwgMF0pO1xuXG4gIC8vIGNvbnN0IGltYWdlSW5kZXggPSB3cmFwKDAsIGltYWdlc1MubGVuZ3RoLCBwYWdlKTtcbiAgY29uc3QgaW1hZ2VJbmRleCA9IHdyYXAoMCwgaW1hZ2VzLmxlbmd0aCwgcGFnZSk7XG5cblxuICBjb25zdCBwYWdpbmF0ZSA9IChuZXdEaXJlY3Rpb246IG51bWJlcikgPT4ge1xuICAgIHNldFBhZ2UoW3BhZ2UgKyBuZXdEaXJlY3Rpb24sIG5ld0RpcmVjdGlvbl0pO1xuICB9O1xuICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktOCBcIiBpZD1cIm1hcmtldHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ3JpZCBncmlkLWNvbHMtMSBwbGFjZS1pdGVtcy1jZW50ZXIgbXgtYXV0byBweC0yIHB0LTQgcGItMTQgdGV4dC13aGl0ZWB9PlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiei0yMCB0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWJsYWNrIGZvbnQtVGFpcGVpQm9sZFwiPntpbWFnZVRleHRbaW1hZ2VJbmRleF19PC9oNT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJldlwiIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKC0xKX0gc3R5bGU9e3tsZWZ0OiAnMTAlJywgdHJhbnNmb3JtOiAnc2NhbGUoLTEpJ319PuKAozwvYnV0dG9uPlxuICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9IGN1c3RvbT17ZGlyZWN0aW9ufT5cbiAgICAgICAgICAgIHsvKiA8bW90aW9uLmgyIGNsYXNzTmFtZT1cInotMjAgdGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1ibGFjayBmb250LVRhaXBlaUJvbGRcIiBzdHlsZT17e21heEhlaWdodDogJzc2dmgnLCBtaW5IZWlnaHQ6ICc3NXZoJywgaGVpZ2h0OidhdXRvJ319PntpbWFnZVRleHRbaW1hZ2VJbmRleF19PC9tb3Rpb24uaDI+ICovfVxuICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgICAgIHNyYz17aW1hZ2VzW2ltYWdlSW5kZXhdfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtM3hsIGxnOmgtNC82IG1kOmgtMi82IGgtMS8zXCJcbiAgICAgICAgICAgIGN1c3RvbT17ZGlyZWN0aW9ufVxuICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgICAgICAgaW5pdGlhbD1cImVudGVyXCJcbiAgICAgICAgICAgIGFuaW1hdGU9XCJjZW50ZXJcIlxuICAgICAgICAgICAgZXhpdD1cImV4aXRcIlxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICB4OiB7IHR5cGU6IFwic3ByaW5nXCIsIHN0aWZmbmVzczogMzAwLCBkYW1waW5nOiA0MCB9LFxuICAgICAgICAgICAgICBvcGFjaXR5OiB7IGR1cmF0aW9uOiAwIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBkcmFnPVwieFwiXG4gICAgICAgICAgICBkcmFnQ29uc3RyYWludHM9e3sgbGVmdDogMCwgcmlnaHQ6IDAgfX1cbiAgICAgICAgICAgIGRyYWdFbGFzdGljPXsxfVxuICAgICAgICAgICAgb25EcmFnRW5kPXsoZSwgeyBvZmZzZXQsIHZlbG9jaXR5IH0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3dpcGUgPSBzd2lwZVBvd2VyKG9mZnNldC54LCB2ZWxvY2l0eS54KTtcblxuICAgICAgICAgICAgICBpZiAoc3dpcGUgPCAtc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICBwYWdpbmF0ZSgxKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChzd2lwZSA+IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIHBhZ2luYXRlKC0xKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0XCIgb25DbGljaz17KCkgPT4gcGFnaW5hdGUoMSl9PuKAozwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJuZXh0IGJnLXByaW1hcnlHcmVlbiB6LTUwXCIgb25DbGljaz17KCkgPT4gcGFnaW5hdGUoMSl9IHN0eWxlPXt7d2lkdGg6ICc1MHB4J319PlxuICAgICAgICAgICAg4oCjXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2XCIgb25DbGljaz17KCkgPT4gcGFnaW5hdGUoLTEpfSBzdHlsZT17e2xlZnQ6ICcxMCUnLCB0cmFuc2Zvcm06ICdzY2FsZSgtMSknLCBoZWlnaHQ6ICcxJSd9fT5cbiAgICAgICAgICAgIHtcIuKAo1wifVxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW90aW9uU2xpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJ3cmFwIiwidmFyaWFudHMiLCJlbnRlciIsImRpcmVjdGlvbiIsIngiLCJvcGFjaXR5IiwiY2VudGVyIiwiekluZGV4IiwiZXhpdCIsInN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCIsInN3aXBlUG93ZXIiLCJvZmZzZXQiLCJ2ZWxvY2l0eSIsIk1hdGgiLCJhYnMiLCJpbWFnZXMiLCJpbWFnZVRleHQiLCJNb3Rpb25TbGlkZXIiLCJwYWdlIiwic2V0UGFnZSIsImltYWdlSW5kZXgiLCJsZW5ndGgiLCJwYWdpbmF0ZSIsIm5ld0RpcmVjdGlvbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImRpdiIsImg1IiwiYnV0dG9uIiwib25DbGljayIsInN0eWxlIiwibGVmdCIsInRyYW5zZm9ybSIsImluaXRpYWwiLCJjdXN0b20iLCJpbWciLCJzcmMiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZHVyYXRpb24iLCJkcmFnIiwiZHJhZ0NvbnN0cmFpbnRzIiwicmlnaHQiLCJkcmFnRWxhc3RpYyIsIm9uRHJhZ0VuZCIsImUiLCJzd2lwZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MotionSlider.tsx\n"));

/***/ })

});