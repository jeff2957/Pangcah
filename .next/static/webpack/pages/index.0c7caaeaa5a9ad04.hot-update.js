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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import config from '../config/index.json';\nvar variants = {\n    enter: function(direction) {\n        return {\n            x: direction > 0 ? 10 : -10,\n            opacity: 0\n        };\n    },\n    center: {\n        zIndex: 1,\n        x: 0,\n        opacity: 1\n    },\n    exit: function(direction) {\n        return {\n            zIndex: 0,\n            x: direction < 0 ? 10 : -10,\n            opacity: 0\n        };\n    }\n};\nvar swipeConfidenceThreshold = 10000;\nvar swipePower = function(offset, velocity) {\n    return Math.abs(offset) * velocity;\n};\nvar images = [\n    \"/assets/market/WonderAdam.png\",\n    \"/assets/market/wonderland.png\",\n    \"/assets/market/今日工事.png\",\n    \"/assets/market/平和飯店.png\",\n    \"/assets/market/擠米掰掰飯.png\",\n    \"/assets/market/臺虎精釀.png\",\n    \"/assets/market/路邊烤肉.png\",\n    \"/assets/market/魚刺人.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936984/Vendor/Wonder_she5gv.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936981/Vendor/wonderland_mmfapd.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E4%BB%8A%E6%97%A5%E5%B7%A5%E4%BA%8B_j1qcdw.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%87%BA%E8%99%8E%E7%B2%BE%E9%87%80_azvsos.png\",\n    \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%8A%A2%E8%8B%92%E6%89%8B%E4%BD%9C%E8%97%9D%E5%BB%8A_kf4zpl.png\"\n];\n// const imagePoly = [\n// ];\nvar imageText = [\n    \"WonderAdam\",\n    \"奇幻地咖啡館\",\n    \"今日工事\",\n    \"平和飯店\",\n    \"擠米 掰掰飯\",\n    \"臺虎精釀\",\n    \"路邊烤肉\",\n    \"魚刺人\",\n    \"芢苒手作藝廊\"\n];\nvar imageDescrip = [\n    \"WonderAdam\",\n    \"奇幻地咖啡館\",\n    \"今日工事是一個結合雞蛋燒／選物的地方，不管是還吃一顆雞蛋燒或是買買送禮人的禮物或自己喜歡的東西，都可以來今日工事。\\n今日工事的雞蛋燒麵糊每日新鮮現打，堅持不使用預拌粉也不加泡打粉，只使用最單純的鮮奶、麵粉、砂糖、雞蛋，每週更換不同的限定口味，來吧，都可以讓這裡成為你的今日工事，每天都有驚喜。\",\n    \"平和飯店\",\n    \"擠米 掰掰飯\",\n    \"臺虎精釀\",\n    \"路邊烤肉\",\n    \"魚刺人\",\n    \"芢苒手作藝廊\"\n];\nvar newMotionSlider = function() {\n    _s();\n    // const { markets } = config;\n    // const { title, items: marketLists } = markets;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        0\n    ]), ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ref[0], 2), page = ref1[0], direction = ref1[1], setPage = ref[1];\n    // const imageIndex = wrap(0, imagesS.length, page);\n    var imageIndex = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.wrap)(0, images.length, page);\n    var paginate = function(newDirection) {\n        setPage([\n            page + newDirection,\n            newDirection\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"py-8 bg-black\",\n            id: \"markets\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex justify-center items-center mx-auto px-2 text-white\",\n                    style: {\n                        maxHeight: \"100vh\",\n                        minHeight: \"80vh\",\n                        height: \"auto\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                            initial: false,\n                            custom: direction,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 place-items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                                            className: \"z-20 text-4xl md:text-5xl font-black font-TaipeiBold\",\n                                            children: imageText[imageIndex]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                                            className: \"z-20 text-xl md:text-xl font-bold font-TaipeiBold mx-20\",\n                                            children: imageDescrip[imageIndex]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                                            src: images[imageIndex],\n                                            className: \"clip rounded-3xl md:h-96 h-1/3\",\n                                            // style={{maxWidth: '30vw', minWidth: '30vw', width: 'auto'}}\n                                            custom: direction,\n                                            variants: variants,\n                                            initial: \"enter\",\n                                            animate: \"center\",\n                                            exit: \"exit\",\n                                            transition: {\n                                                x: {\n                                                    type: \"spring\",\n                                                    stiffness: 300,\n                                                    damping: 40\n                                                },\n                                                opacity: {\n                                                    duration: 0.1\n                                                }\n                                            },\n                                            drag: \"x\",\n                                            dragConstraints: {\n                                                left: 0,\n                                                right: 0\n                                            },\n                                            dragElastic: 1,\n                                            onDragEnd: function(e, param) {\n                                                var offset = param.offset, velocity = param.velocity;\n                                                var swipe = swipePower(offset.x, velocity.x);\n                                                if (swipe < -swipeConfidenceThreshold) {\n                                                    console.log(e);\n                                                    paginate(1);\n                                                } else if (swipe > swipeConfidenceThreshold) {\n                                                    paginate(-1);\n                                                }\n                                            }\n                                        }, page, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"next\",\n                            onClick: function() {\n                                return paginate(1);\n                            },\n                            style: {\n                                right: \"10%\",\n                                height: \"0%\"\n                            },\n                            children: \"‣\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 146,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"prev\",\n                            onClick: function() {\n                                return paginate(-1);\n                            },\n                            style: {\n                                left: \"10%\",\n                                transform: \"scale(-1)\",\n                                height: \"1%\"\n                            },\n                            children: \"‣\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 149,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 7\n                }, _this),\n                \"// \"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n            lineNumber: 98,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_s(newMotionSlider, \"8Bx1Wl4uzlT5pCEkBvA3L8JklTA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (newMotionSlider);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1AsQ0FBQyxFQUFFUSxRQUFRLENBQUNSLENBQUMsQ0FBQztnREFFOUMsSUFBSStDLEtBQUssR0FBRyxDQUFDMUMsd0JBQXdCLEVBQUU7b0RBQ3JDMkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILENBQUMsQ0FBQztvREFDZDNCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztpREFDYixNQUFNLElBQUk0QixLQUFLLEdBQUcxQyx3QkFBd0IsRUFBRTtvREFDM0NjLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lEQUNkOzZDQUNGOzJDQXpCSUosSUFBSTs7OztpREEwQlA7Ozs7OzZDQUNJOzs7Ozs7cUNBR0Y7Ozs7O2lDQUNVO3NDQUd0Qiw4REFBQ1MsS0FBRzs0QkFBQ0YsU0FBUyxFQUFDLE1BQU07NEJBQUM0QixPQUFPLEVBQUU7dUNBQU0vQixRQUFRLENBQUMsQ0FBQyxDQUFDOzZCQUFBOzRCQUFFTSxLQUFLLEVBQUU7Z0NBQUNrQixLQUFLLEVBQUUsS0FBSztnQ0FBRWYsTUFBTSxFQUFFLElBQUk7NkJBQUM7c0NBQ2xGLEdBQUc7Ozs7O2lDQUNBO3NDQUNOLDhEQUFDSixLQUFHOzRCQUFDRixTQUFTLEVBQUMsTUFBTTs0QkFBQzRCLE9BQU8sRUFBRTt1Q0FBTS9CLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFBQTs0QkFBRU0sS0FBSyxFQUFFO2dDQUFDaUIsSUFBSSxFQUFFLEtBQUs7Z0NBQUVTLFNBQVMsRUFBRSxXQUFXO2dDQUFFdkIsTUFBTSxFQUFFLElBQUk7NkJBQUM7c0NBQzFHLEdBQUc7Ozs7O2lDQUNBOzs7Ozs7eUJBQ0E7Z0JBQUEsS0FDTDs7Ozs7O2lCQUFVO3FCQUNWLENBQ0o7Q0FDRjtHQTdFS2QsZUFBZTtBQStFckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb3Rpb25TbGlkZXIudHN4PzBhN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB3cmFwIH0gZnJvbSBcInBvcG1vdGlvblwiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCJyZWFjdGpzLXBvcHVwXCI7XG5cblxuLy8gaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvaW5kZXguanNvbic7XG5cbmNvbnN0IHZhcmlhbnRzID0ge1xuICBlbnRlcjogKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGRpcmVjdGlvbiA+IDAgPyAxMCA6IC0xMCxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9O1xuICB9LFxuICBjZW50ZXI6IHtcbiAgICB6SW5kZXg6IDEsXG4gICAgeDogMCxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIGV4aXQ6IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB6SW5kZXg6IDAsXG4gICAgICB4OiBkaXJlY3Rpb24gPCAwID8gMTAgOiAtMTAsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfTtcbiAgfVxufTtcblxuY29uc3Qgc3dpcGVDb25maWRlbmNlVGhyZXNob2xkID0gMTAwMDA7XG5jb25zdCBzd2lwZVBvd2VyID0gKG9mZnNldDogbnVtYmVyLCB2ZWxvY2l0eTogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBNYXRoLmFicyhvZmZzZXQpICogdmVsb2NpdHk7XG59O1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gIFwiL2Fzc2V0cy9tYXJrZXQvV29uZGVyQWRhbS5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC93b25kZXJsYW5kLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+S7iuaXpeW3peS6iy5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/lubPlkozpo6/lupcucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv5pOg57Gz5o6w5o6w6aOvLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+iHuuiZjueyvumHgC5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/ot6/pgorng6TogokucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv6a2a5Yi65Lq6LnBuZ1wiLFxuICAvLyBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTg0L1ZlbmRvci9Xb25kZXJfc2hlNWd2LnBuZ1wiLFxuICAvLyBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTgxL1ZlbmRvci93b25kZXJsYW5kX21tZmFwZC5wbmdcIixcbiAgLy8gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL2ltYWdlL3VwbG9hZC92MTY2MjkzNjk3OS9WZW5kb3IvJUU0JUJCJThBJUU2JTk3JUE1JUU1JUI3JUE1JUU0JUJBJThCX2oxcWNkdy5wbmdcIixcbiAgLy8gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL2ltYWdlL3VwbG9hZC92MTY2MjkzNjk3OS9WZW5kb3IvJUU4JTg3JUJBJUU4JTk5JThFJUU3JUIyJUJFJUU5JTg3JTgwX2F6dnNvcy5wbmdcIixcbiAgXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL2ltYWdlL3VwbG9hZC92MTY2MjkzNjk3OS9WZW5kb3IvJUU4JThBJUEyJUU4JThCJTkyJUU2JTg5JThCJUU0JUJEJTlDJUU4JTk3JTlEJUU1JUJCJThBX2tmNHpwbC5wbmdcIlxuXTtcblxuLy8gY29uc3QgaW1hZ2VQb2x5ID0gW1xuXG4vLyBdO1xuXG5jb25zdCBpbWFnZVRleHQgPSBbXG4gIFwiV29uZGVyQWRhbVwiLFxuICBcIuWlh+W5u+WcsOWSluWVoemkqFwiLFxuICBcIuS7iuaXpeW3peS6i1wiLFxuICBcIuW5s+WSjOmjr+W6l1wiLFxuICBcIuaToOexsyDmjrDmjrDpo69cIixcbiAgXCLoh7romY7nsr7ph4BcIixcbiAgXCLot6/pgorng6TogolcIixcbiAgXCLprZrliLrkurpcIixcbiAgXCLoiqLoi5LmiYvkvZzol53lu4pcIlxuXTtcblxuY29uc3QgaW1hZ2VEZXNjcmlwID0gW1xuICBcIldvbmRlckFkYW1cIixcbiAgXCLlpYflubvlnLDlkpbllaHppKhcIixcbiAgXCLku4rml6Xlt6XkuovmmK/kuIDlgIvntZDlkIjpm57om4vnh5LvvI/pgbjniannmoTlnLDmlrnvvIzkuI3nrqHmmK/pgoTlkIPkuIDpoYbpm57om4vnh5LmiJbmmK/osrfosrfpgIHnpq7kurrnmoTnpq7nianmiJboh6rlt7HllpzmraHnmoTmnbHopb/vvIzpg73lj6/ku6Xkvobku4rml6Xlt6XkuovjgIJcXG7ku4rml6Xlt6XkuovnmoTpm57om4vnh5LpurXns4rmr4/ml6XmlrDprq7nj77miZPvvIzloIXmjIHkuI3kvb/nlKjpoJDmi4znsonkuZ/kuI3liqDms6HmiZPnsonvvIzlj6rkvb/nlKjmnIDllq7ntJTnmoTprq7lpbbjgIHpurXnsonjgIHnoILns5bjgIHpm57om4vvvIzmr4/pgLHmm7Tmj5vkuI3lkIznmoTpmZDlrprlj6PlkbPvvIzkvoblkKfvvIzpg73lj6/ku6XorpPpgJnoo6HmiJDngrrkvaDnmoTku4rml6Xlt6XkuovvvIzmr4/lpKnpg73mnInpqZrllpzjgIJcIixcbiAgXCLlubPlkozpo6/lupdcIixcbiAgXCLmk6DnsbMg5o6w5o6w6aOvXCIsXG4gIFwi6Ie66JmO57K+6YeAXCIsXG4gIFwi6Lev6YKK54Ok6IKJXCIsXG4gIFwi6a2a5Yi65Lq6XCIsXG4gIFwi6Iqi6IuS5omL5L2c6Jed5buKXCJcbl07XG5cbmNvbnN0IG5ld01vdGlvblNsaWRlciA9ICgpID0+IHtcblxuICAvLyBjb25zdCB7IG1hcmtldHMgfSA9IGNvbmZpZztcblxuICAvLyBjb25zdCB7IHRpdGxlLCBpdGVtczogbWFya2V0TGlzdHMgfSA9IG1hcmtldHM7XG5cbiAgY29uc3QgW1twYWdlLCBkaXJlY3Rpb25dLCBzZXRQYWdlXSA9IHVzZVN0YXRlKFswLCAwXSk7XG5cbiAgLy8gY29uc3QgaW1hZ2VJbmRleCA9IHdyYXAoMCwgaW1hZ2VzUy5sZW5ndGgsIHBhZ2UpO1xuICBjb25zdCBpbWFnZUluZGV4ID0gd3JhcCgwLCBpbWFnZXMubGVuZ3RoLCBwYWdlKTtcblxuXG4gIGNvbnN0IHBhZ2luYXRlID0gKG5ld0RpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgc2V0UGFnZShbcGFnZSArIG5ld0RpcmVjdGlvbiwgbmV3RGlyZWN0aW9uXSk7XG4gIH07XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS04IGJnLWJsYWNrXCIgaWQ9XCJtYXJrZXRzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG14LWF1dG8gcHgtMiB0ZXh0LXdoaXRlYH0gc3R5bGU9e3ttYXhIZWlnaHQ6ICcxMDB2aCcsIG1pbkhlaWdodDogJzgwdmgnLCBoZWlnaHQ6ICdhdXRvJ319PlxuICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9IGN1c3RvbT17ZGlyZWN0aW9ufT5cbiAgICAgICAgICAgIHsvKiB7bWFya2V0TGlzdHMubWFwKChtYXJrZXQpID0+ICggKi99XG4gICAgICAgICAgICB7LyogPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgcGxhY2UtaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5oMiBjbGFzc05hbWU9XCJ6LTIwIHRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtYmxhY2sgZm9udC1UYWlwZWlCb2xkXCIgPntpbWFnZVRleHRbaW1hZ2VJbmRleF19PC9tb3Rpb24uaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uaDIgY2xhc3NOYW1lPVwiei0yMCB0ZXh0LXhsIG1kOnRleHQteGwgZm9udC1ib2xkIGZvbnQtVGFpcGVpQm9sZCBteC0yMFwiID57aW1hZ2VEZXNjcmlwW2ltYWdlSW5kZXhdfTwvbW90aW9uLmgyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAga2V5PXtwYWdlfVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tpbWFnZUluZGV4XX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpcCByb3VuZGVkLTN4bCBtZDpoLTk2IGgtMS8zXCJcbiAgICAgICAgICAgICAgLy8gc3R5bGU9e3ttYXhXaWR0aDogJzMwdncnLCBtaW5XaWR0aDogJzMwdncnLCB3aWR0aDogJ2F1dG8nfX1cbiAgICAgICAgICAgICAgY3VzdG9tPXtkaXJlY3Rpb259XG4gICAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgICAgICAgICAgaW5pdGlhbD1cImVudGVyXCJcbiAgICAgICAgICAgICAgYW5pbWF0ZT1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGV4aXQ9XCJleGl0XCJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgIHg6IHsgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiAzMDAsIGRhbXBpbmc6IDQwIH0sXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogeyBkdXJhdGlvbjogMC4xIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZHJhZz1cInhcIlxuICAgICAgICAgICAgICBkcmFnQ29uc3RyYWludHM9e3sgbGVmdDogMCwgcmlnaHQ6IDAgfX1cbiAgICAgICAgICAgICAgZHJhZ0VsYXN0aWM9ezF9XG4gICAgICAgICAgICAgIG9uRHJhZ0VuZD17KGUsIHsgb2Zmc2V0LCB2ZWxvY2l0eSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3dpcGUgPSBzd2lwZVBvd2VyKG9mZnNldC54LCB2ZWxvY2l0eS54KTtcblxuICAgICAgICAgICAgICAgIGlmIChzd2lwZSA8IC1zd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICBwYWdpbmF0ZSgxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlID4gc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICBwYWdpbmF0ZSgtMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8L21vdGlvbi5kaXY+ICovfVxuICAgICAgICAgICAgey8qICkpfSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dFwiIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKDEpfSBzdHlsZT17e3JpZ2h0OiAnMTAlJywgaGVpZ2h0OiAnMCUnfX0+XG4gICAgICAgIHtcIuKAo1wifVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZcIiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZSgtMSl9IHN0eWxlPXt7bGVmdDogJzEwJScsIHRyYW5zZm9ybTogJ3NjYWxlKC0xKScsIGhlaWdodDogJzElJ319PlxuICAgICAgICB7XCLigKNcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgLy8gPC9zZWN0aW9uPlxuICAgIDwvPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdNb3Rpb25TbGlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIndyYXAiLCJ2YXJpYW50cyIsImVudGVyIiwiZGlyZWN0aW9uIiwieCIsIm9wYWNpdHkiLCJjZW50ZXIiLCJ6SW5kZXgiLCJleGl0Iiwic3dpcGVDb25maWRlbmNlVGhyZXNob2xkIiwic3dpcGVQb3dlciIsIm9mZnNldCIsInZlbG9jaXR5IiwiTWF0aCIsImFicyIsImltYWdlcyIsImltYWdlVGV4dCIsImltYWdlRGVzY3JpcCIsIm5ld01vdGlvblNsaWRlciIsInBhZ2UiLCJzZXRQYWdlIiwiaW1hZ2VJbmRleCIsImxlbmd0aCIsInBhZ2luYXRlIiwibmV3RGlyZWN0aW9uIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImlkIiwiZGl2Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJoZWlnaHQiLCJpbml0aWFsIiwiY3VzdG9tIiwiaDIiLCJpbWciLCJzcmMiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZHVyYXRpb24iLCJkcmFnIiwiZHJhZ0NvbnN0cmFpbnRzIiwibGVmdCIsInJpZ2h0IiwiZHJhZ0VsYXN0aWMiLCJvbkRyYWdFbmQiLCJlIiwic3dpcGUiLCJjb25zb2xlIiwibG9nIiwib25DbGljayIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MotionSlider.tsx\n"));

/***/ })

});