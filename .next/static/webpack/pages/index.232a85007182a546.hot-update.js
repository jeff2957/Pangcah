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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import config from '../config/index.json';\nvar variants = {\n    enter: function(direction) {\n        return {\n            x: direction > 0 ? 10 : -10,\n            opacity: 0\n        };\n    },\n    center: {\n        zIndex: 1,\n        x: 0,\n        opacity: 1\n    },\n    exit: function(direction) {\n        return {\n            zIndex: 0,\n            x: direction < 0 ? 10 : -10,\n            opacity: 0\n        };\n    }\n};\nvar swipeConfidenceThreshold = 10000;\nvar swipePower = function(offset, velocity) {\n    return Math.abs(offset) * velocity;\n};\nvar images = [\n    \"/assets/market/WonderAdam.png\",\n    \"/assets/market/wonderland.png\",\n    \"/assets/market/今日工事.png\",\n    \"/assets/market/平和飯店.png\",\n    \"/assets/market/擠米掰掰飯.png\",\n    \"/assets/market/臺虎精釀.png\",\n    \"/assets/market/路邊烤肉.png\",\n    \"/assets/market/魚刺人.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936984/Vendor/Wonder_she5gv.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936981/Vendor/wonderland_mmfapd.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E4%BB%8A%E6%97%A5%E5%B7%A5%E4%BA%8B_j1qcdw.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%87%BA%E8%99%8E%E7%B2%BE%E9%87%80_azvsos.png\",\n    \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%8A%A2%E8%8B%92%E6%89%8B%E4%BD%9C%E8%97%9D%E5%BB%8A_kf4zpl.png\"\n];\n// const imagePoly = [\n// ];\nvar imageText = [\n    \"WonderAdam\",\n    \"奇幻地咖啡館\",\n    \"今日工事\",\n    \"平和飯店\",\n    \"擠米 掰掰飯\",\n    \"臺虎精釀\",\n    \"路邊烤肉\",\n    \"魚刺人\",\n    \"芢苒手作藝廊\"\n];\nvar MotionSlider = function() {\n    _s();\n    // const { markets } = config;\n    // const { title, items: marketLists } = markets;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        0\n    ]), ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ref[0], 2), page = ref1[0], direction = ref1[1], setPage = ref[1];\n    // const imageIndex = wrap(0, imagesS.length, page);\n    var imageIndex = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.wrap)(0, images.length, page);\n    var paginate = function(newDirection) {\n        setPage([\n            page + newDirection,\n            newDirection\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"py-8 \",\n            id: \"markets\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 place-items-center mx-auto px-2 pt-4 pb-14 text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"z-20 text-4xl md:text-5xl font-black font-TaipeiBold\",\n                        children: imageText[imageIndex]\n                    }, void 0, false, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 place-items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                                initial: false,\n                                custom: direction,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                                    src: images[imageIndex],\n                                    className: \" rounded-3xl lg:h-4/6 md:h-2/6 h-1/3\",\n                                    custom: direction,\n                                    variants: variants,\n                                    initial: \"enter\",\n                                    animate: \"center\",\n                                    exit: \"exit\",\n                                    transition: {\n                                        x: {\n                                            type: \"spring\",\n                                            stiffness: 300,\n                                            damping: 40\n                                        },\n                                        opacity: {\n                                            duration: 0.1\n                                        }\n                                    },\n                                    drag: \"x\",\n                                    dragConstraints: {\n                                        left: 0,\n                                        right: 0\n                                    },\n                                    dragElastic: 1,\n                                    onDragEnd: function(e, param) {\n                                        var offset = param.offset, velocity = param.velocity;\n                                        var swipe = swipePower(offset.x, velocity.x);\n                                        if (swipe < -swipeConfidenceThreshold) {\n                                            console.log(e);\n                                            paginate(1);\n                                        } else if (swipe > swipeConfidenceThreshold) {\n                                            paginate(-1);\n                                        }\n                                    }\n                                }, page, false, {\n                                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"next\",\n                                onClick: function() {\n                                    return paginate(1);\n                                },\n                                style: {\n                                    right: \"10%\",\n                                    height: \"0%\"\n                                },\n                                children: \"‣\"\n                            }, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"prev\",\n                                onClick: function() {\n                                    return paginate(-1);\n                                },\n                                style: {\n                                    left: \"10%\",\n                                    transform: \"scale(-1)\",\n                                    height: \"1%\"\n                                },\n                                children: \"‣\"\n                            }, void 0, false, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n            lineNumber: 84,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_s(MotionSlider, \"8Bx1Wl4uzlT5pCEkBvA3L8JklTA=\");\n_c = MotionSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MotionSlider);\nvar _c;\n$RefreshReg$(_c, \"MotionSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQUNSLEtBQUssRUFBRSxLQUFLO29DQUFFUyxNQUFNLEVBQUUsSUFBSTtpQ0FBQzswQ0FBRSxHQUV2Rjs7Ozs7cUNBQU07MENBQ04sOERBQUN4QixLQUFHO2dDQUFDRixTQUFTLEVBQUMsTUFBTTtnQ0FBQ3dCLE9BQU8sRUFBRTsyQ0FBTTNCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQ0FBQTtnQ0FBRTRCLEtBQUssRUFBRTtvQ0FBQ1QsSUFBSSxFQUFFLEtBQUs7b0NBQUVXLFNBQVMsRUFBRSxXQUFXO29DQUFFRCxNQUFNLEVBQUUsSUFBSTtpQ0FBQzswQ0FDMUcsR0FBRzs7Ozs7cUNBQ0E7Ozs7Ozs2QkFDRjs7Ozs7O3FCQUNGOzs7OztpQkFDRTtxQkFDUCxDQUNKO0NBQ0Y7R0FoRUtsQyxZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUFrRWxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW90aW9uU2xpZGVyLnRzeD8wYTdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgd3JhcCB9IGZyb20gXCJwb3Btb3Rpb25cIjtcblxuLy8gaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvaW5kZXguanNvbic7XG5cbmNvbnN0IHZhcmlhbnRzID0ge1xuICBlbnRlcjogKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGRpcmVjdGlvbiA+IDAgPyAxMCA6IC0xMCxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9O1xuICB9LFxuICBjZW50ZXI6IHtcbiAgICB6SW5kZXg6IDEsXG4gICAgeDogMCxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIGV4aXQ6IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB6SW5kZXg6IDAsXG4gICAgICB4OiBkaXJlY3Rpb24gPCAwID8gMTAgOiAtMTAsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfTtcbiAgfVxufTtcblxuY29uc3Qgc3dpcGVDb25maWRlbmNlVGhyZXNob2xkID0gMTAwMDA7XG5jb25zdCBzd2lwZVBvd2VyID0gKG9mZnNldDogbnVtYmVyLCB2ZWxvY2l0eTogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBNYXRoLmFicyhvZmZzZXQpICogdmVsb2NpdHk7XG59O1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gIFwiL2Fzc2V0cy9tYXJrZXQvV29uZGVyQWRhbS5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC93b25kZXJsYW5kLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+S7iuaXpeW3peS6iy5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/lubPlkozpo6/lupcucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv5pOg57Gz5o6w5o6w6aOvLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+iHuuiZjueyvumHgC5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/ot6/pgorng6TogokucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv6a2a5Yi65Lq6LnBuZ1wiLFxuICAvLyBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTg0L1ZlbmRvci9Xb25kZXJfc2hlNWd2LnBuZ1wiLFxuICAvLyBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTgxL1ZlbmRvci93b25kZXJsYW5kX21tZmFwZC5wbmdcIixcbiAgLy8gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL2ltYWdlL3VwbG9hZC92MTY2MjkzNjk3OS9WZW5kb3IvJUU0JUJCJThBJUU2JTk3JUE1JUU1JUI3JUE1JUU0JUJBJThCX2oxcWNkdy5wbmdcIixcbiAgLy8gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL2ltYWdlL3VwbG9hZC92MTY2MjkzNjk3OS9WZW5kb3IvJUU4JTg3JUJBJUU4JTk5JThFJUU3JUIyJUJFJUU5JTg3JTgwX2F6dnNvcy5wbmdcIixcbiAgXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL2ltYWdlL3VwbG9hZC92MTY2MjkzNjk3OS9WZW5kb3IvJUU4JThBJUEyJUU4JThCJTkyJUU2JTg5JThCJUU0JUJEJTlDJUU4JTk3JTlEJUU1JUJCJThBX2tmNHpwbC5wbmdcIlxuXTtcblxuLy8gY29uc3QgaW1hZ2VQb2x5ID0gW1xuXG4vLyBdO1xuXG5jb25zdCBpbWFnZVRleHQgPSBbXG4gIFwiV29uZGVyQWRhbVwiLFxuICBcIuWlh+W5u+WcsOWSluWVoemkqFwiLFxuICBcIuS7iuaXpeW3peS6i1wiLFxuICBcIuW5s+WSjOmjr+W6l1wiLFxuICBcIuaToOexsyDmjrDmjrDpo69cIixcbiAgXCLoh7romY7nsr7ph4BcIixcbiAgXCLot6/pgorng6TogolcIixcbiAgXCLprZrliLrkurpcIixcbiAgXCLoiqLoi5LmiYvkvZzol53lu4pcIlxuXTtcblxuY29uc3QgTW90aW9uU2xpZGVyID0gKCkgPT4ge1xuXG4gIC8vIGNvbnN0IHsgbWFya2V0cyB9ID0gY29uZmlnO1xuXG4gIC8vIGNvbnN0IHsgdGl0bGUsIGl0ZW1zOiBtYXJrZXRMaXN0cyB9ID0gbWFya2V0cztcblxuICBjb25zdCBbW3BhZ2UsIGRpcmVjdGlvbl0sIHNldFBhZ2VdID0gdXNlU3RhdGUoWzAsIDBdKTtcblxuICAvLyBjb25zdCBpbWFnZUluZGV4ID0gd3JhcCgwLCBpbWFnZXNTLmxlbmd0aCwgcGFnZSk7XG4gIGNvbnN0IGltYWdlSW5kZXggPSB3cmFwKDAsIGltYWdlcy5sZW5ndGgsIHBhZ2UpO1xuXG5cbiAgY29uc3QgcGFnaW5hdGUgPSAobmV3RGlyZWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICBzZXRQYWdlKFtwYWdlICsgbmV3RGlyZWN0aW9uLCBuZXdEaXJlY3Rpb25dKTtcbiAgfTtcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTggXCIgaWQ9XCJtYXJrZXRzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGdyaWQgZ3JpZC1jb2xzLTEgcGxhY2UtaXRlbXMtY2VudGVyIG14LWF1dG8gcHgtMiBwdC00IHBiLTE0IHRleHQtd2hpdGVgfT5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cInotMjAgdGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1ibGFjayBmb250LVRhaXBlaUJvbGRcIj57aW1hZ2VUZXh0W2ltYWdlSW5kZXhdfTwvaDU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBwbGFjZS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfSBjdXN0b209e2RpcmVjdGlvbn0+XG4gICAgICAgICAgICB7LyogPG1vdGlvbi5oMiBjbGFzc05hbWU9XCJ6LTIwIHRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtYmxhY2sgZm9udC1UYWlwZWlCb2xkXCIgc3R5bGU9e3ttYXhIZWlnaHQ6ICc3NnZoJywgbWluSGVpZ2h0OiAnNzV2aCcsIGhlaWdodDonYXV0byd9fT57aW1hZ2VUZXh0W2ltYWdlSW5kZXhdfTwvbW90aW9uLmgyPiAqL31cbiAgICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICBrZXk9e3BhZ2V9XG4gICAgICAgICAgICBzcmM9e2ltYWdlc1tpbWFnZUluZGV4XX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLTN4bCBsZzpoLTQvNiBtZDpoLTIvNiBoLTEvM1wiXG4gICAgICAgICAgICBjdXN0b209e2RpcmVjdGlvbn1cbiAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgICAgICAgIGluaXRpYWw9XCJlbnRlclwiXG4gICAgICAgICAgICBhbmltYXRlPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGV4aXQ9XCJleGl0XCJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgeDogeyB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDMwMCwgZGFtcGluZzogNDAgfSxcbiAgICAgICAgICAgICAgb3BhY2l0eTogeyBkdXJhdGlvbjogMC4xIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBkcmFnPVwieFwiXG4gICAgICAgICAgICBkcmFnQ29uc3RyYWludHM9e3sgbGVmdDogMCwgcmlnaHQ6IDAgfX1cbiAgICAgICAgICAgIGRyYWdFbGFzdGljPXsxfVxuICAgICAgICAgICAgb25EcmFnRW5kPXsoZSwgeyBvZmZzZXQsIHZlbG9jaXR5IH0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3dpcGUgPSBzd2lwZVBvd2VyKG9mZnNldC54LCB2ZWxvY2l0eS54KTtcblxuICAgICAgICAgICAgICBpZiAoc3dpcGUgPCAtc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICBwYWdpbmF0ZSgxKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChzd2lwZSA+IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIHBhZ2luYXRlKC0xKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0XCIgb25DbGljaz17KCkgPT4gcGFnaW5hdGUoMSl9IHN0eWxlPXt7cmlnaHQ6ICcxMCUnLCBoZWlnaHQ6ICcwJSd9fT5cbiAgICAgICAgICAgIOKAo1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldlwiIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKC0xKX0gc3R5bGU9e3tsZWZ0OiAnMTAlJywgdHJhbnNmb3JtOiAnc2NhbGUoLTEpJywgaGVpZ2h0OiAnMSUnfX0+XG4gICAgICAgICAgICB7XCLigKNcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdGlvblNsaWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwid3JhcCIsInZhcmlhbnRzIiwiZW50ZXIiLCJkaXJlY3Rpb24iLCJ4Iiwib3BhY2l0eSIsImNlbnRlciIsInpJbmRleCIsImV4aXQiLCJzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQiLCJzd2lwZVBvd2VyIiwib2Zmc2V0IiwidmVsb2NpdHkiLCJNYXRoIiwiYWJzIiwiaW1hZ2VzIiwiaW1hZ2VUZXh0IiwiTW90aW9uU2xpZGVyIiwicGFnZSIsInNldFBhZ2UiLCJpbWFnZUluZGV4IiwibGVuZ3RoIiwicGFnaW5hdGUiLCJuZXdEaXJlY3Rpb24iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJkaXYiLCJoNSIsImluaXRpYWwiLCJjdXN0b20iLCJpbWciLCJzcmMiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZHVyYXRpb24iLCJkcmFnIiwiZHJhZ0NvbnN0cmFpbnRzIiwibGVmdCIsInJpZ2h0IiwiZHJhZ0VsYXN0aWMiLCJvbkRyYWdFbmQiLCJlIiwic3dpcGUiLCJjb25zb2xlIiwibG9nIiwib25DbGljayIsInN0eWxlIiwiaGVpZ2h0IiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MotionSlider.tsx\n"));

/***/ })

});