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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import config from '../config/index.json';\nvar variants = {\n    enter: function(direction) {\n        return {\n            x: direction > 0 ? 10 : -10,\n            opacity: 0\n        };\n    },\n    center: {\n        zIndex: 1,\n        x: 0,\n        opacity: 1\n    },\n    exit: function(direction) {\n        return {\n            zIndex: 0,\n            x: direction < 0 ? 10 : -10,\n            opacity: 0\n        };\n    }\n};\nvar swipeConfidenceThreshold = 10000;\nvar swipePower = function(offset, velocity) {\n    return Math.abs(offset) * velocity;\n};\nvar images = [\n    \"/assets/market/WonderAdam.png\",\n    \"/assets/market/wonderland.png\",\n    \"/assets/market/今日工事.png\",\n    \"/assets/market/平和飯店.png\",\n    \"/assets/market/擠米掰掰飯.png\",\n    \"/assets/market/臺虎精釀.png\",\n    \"/assets/market/路邊烤肉.png\",\n    \"/assets/market/魚刺人.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936984/Vendor/Wonder_she5gv.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936981/Vendor/wonderland_mmfapd.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E4%BB%8A%E6%97%A5%E5%B7%A5%E4%BA%8B_j1qcdw.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%87%BA%E8%99%8E%E7%B2%BE%E9%87%80_azvsos.png\",\n    \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%8A%A2%E8%8B%92%E6%89%8B%E4%BD%9C%E8%97%9D%E5%BB%8A_kf4zpl.png\"\n];\n// const imagePoly = [\n// ];\nvar imageText = [\n    \"WonderAdam\",\n    \"奇幻地咖啡館\",\n    \"今日工事\",\n    \"平和飯店\",\n    \"擠米 掰掰飯\",\n    \"臺虎精釀\",\n    \"路邊烤肉\",\n    \"魚刺人\",\n    \"芢苒手作藝廊\"\n];\nvar imageDescrip = [\n    \"WonderAdam\",\n    \"奇幻地咖啡館\",\n    \"今日工事是一個結合雞蛋燒／選物的地方，不管是還吃一顆雞蛋燒或是買買送禮人的禮物或自己喜歡的東西，都可以來今日工事。\\n今日工事的雞蛋燒麵糊每日新鮮現打，堅持不使用預拌粉也不加泡打粉，只使用最單純的鮮奶、麵粉、砂糖、雞蛋，每週更換不同的限定口味，來吧，都可以讓這裡成為你的今日工事，每天都有驚喜。\",\n    \"平和飯店\",\n    \"擠米 掰掰飯\",\n    \"臺虎精釀\",\n    \"路邊烤肉\",\n    \"魚刺人\",\n    \"芢苒手作藝廊\"\n];\nvar newMotionSlider = function() {\n    _s();\n    // const { markets } = config;\n    // const { title, items: marketLists } = markets;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        0\n    ]), ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ref[0], 2), page = ref1[0], direction = ref1[1], setPage = ref[1];\n    // const imageIndex = wrap(0, imagesS.length, page);\n    var imageIndex = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.wrap)(0, images.length, page);\n    var paginate = function(newDirection) {\n        setPage([\n            page + newDirection,\n            newDirection\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"py-8 bg-black\",\n            id: \"markets\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex justify-center items-center mx-auto px-2 text-white\",\n                    style: {\n                        maxHeight: \"100vh\",\n                        minHeight: \"80vh\",\n                        height: \"auto\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                            initial: false,\n                            custom: direction,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 place-items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                                            className: \"z-20 text-4xl md:text-5xl font-black font-TaipeiBold\",\n                                            children: imageText[imageIndex]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                                            className: \"z-20 text-xl md:text-2xl font-bold font-TaipeiBold\",\n                                            style: {\n                                                maxHeight: \"76vh\",\n                                                minHeight: \"75vh\",\n                                                height: \"auto\"\n                                            },\n                                            children: imageDescrip[imageIndex]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                                            src: images[imageIndex],\n                                            className: \"clip rounded-3xl md:h-94 h-1/3\",\n                                            // style={{maxWidth: '30vw', minWidth: '30vw', width: 'auto'}}\n                                            custom: direction,\n                                            variants: variants,\n                                            initial: \"enter\",\n                                            animate: \"center\",\n                                            exit: \"exit\",\n                                            transition: {\n                                                x: {\n                                                    type: \"spring\",\n                                                    stiffness: 300,\n                                                    damping: 40\n                                                },\n                                                opacity: {\n                                                    duration: 0.1\n                                                }\n                                            },\n                                            drag: \"x\",\n                                            dragConstraints: {\n                                                left: 0,\n                                                right: 0\n                                            },\n                                            dragElastic: 1,\n                                            onDragEnd: function(e, param) {\n                                                var offset = param.offset, velocity = param.velocity;\n                                                var swipe = swipePower(offset.x, velocity.x);\n                                                if (swipe < -swipeConfidenceThreshold) {\n                                                    console.log(e);\n                                                    paginate(1);\n                                                } else if (swipe > swipeConfidenceThreshold) {\n                                                    paginate(-1);\n                                                }\n                                            }\n                                        }, page, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"next\",\n                            onClick: function() {\n                                return paginate(1);\n                            },\n                            style: {\n                                right: \"10%\",\n                                height: \"0%\"\n                            },\n                            children: \"‣\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 146,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"prev\",\n                            onClick: function() {\n                                return paginate(-1);\n                            },\n                            style: {\n                                left: \"10%\",\n                                transform: \"scale(-1)\",\n                                height: \"1%\"\n                            },\n                            children: \"‣\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 149,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 7\n                }, _this),\n                \"// \"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n            lineNumber: 98,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_s(newMotionSlider, \"8Bx1Wl4uzlT5pCEkBvA3L8JklTA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (newMotionSlider);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b21wb25lbnRzL01vdGlvblNsaWRlci50c3g/MGE3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHdyYXAgfSBmcm9tIFwicG9wbW90aW9uXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcInJlYWN0anMtcG9wdXBcIjtcblxuXG4vLyBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9pbmRleC5qc29uJztcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIGVudGVyOiAoZGlyZWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZGlyZWN0aW9uID4gMCA/IDEwIDogLTEwLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH07XG4gIH0sXG4gIGNlbnRlcjoge1xuICAgIHpJbmRleDogMSxcbiAgICB4OiAwLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgZXhpdDogKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpJbmRleDogMCxcbiAgICAgIHg6IGRpcmVjdGlvbiA8IDAgPyAxMCA6IC0xMCxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQgPSAxMDAwMDtcbmNvbnN0IHN3aXBlUG93ZXIgPSAob2Zmc2V0OiBudW1iZXIsIHZlbG9jaXR5OiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGguYWJzKG9mZnNldCkgKiB2ZWxvY2l0eTtcbn07XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAgXCIvYXNzZXRzL21hcmtldC9Xb25kZXJBZGFtLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L3dvbmRlcmxhbmQucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv5LuK5pel5bel5LqLLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+W5s+WSjOmjr+W6ly5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/mk6DnsbPmjrDmjrDpo68ucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv6Ie66JmO57K+6YeALnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+i3r+mCiueDpOiCiS5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/prZrliLrkuroucG5nXCIsXG4gIC8vIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5ODQvVmVuZG9yL1dvbmRlcl9zaGU1Z3YucG5nXCIsXG4gIC8vIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5ODEvVmVuZG9yL3dvbmRlcmxhbmRfbW1mYXBkLnBuZ1wiLFxuICAvLyBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTc5L1ZlbmRvci8lRTQlQkIlOEElRTYlOTclQTUlRTUlQjclQTUlRTQlQkElOEJfajFxY2R3LnBuZ1wiLFxuICAvLyBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTc5L1ZlbmRvci8lRTglODclQkElRTglOTklOEUlRTclQjIlQkUlRTklODclODBfYXp2c29zLnBuZ1wiLFxuICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTc5L1ZlbmRvci8lRTglOEElQTIlRTglOEIlOTIlRTYlODklOEIlRTQlQkQlOUMlRTglOTclOUQlRTUlQkIlOEFfa2Y0enBsLnBuZ1wiXG5dO1xuXG4vLyBjb25zdCBpbWFnZVBvbHkgPSBbXG5cbi8vIF07XG5cbmNvbnN0IGltYWdlVGV4dCA9IFtcbiAgXCJXb25kZXJBZGFtXCIsXG4gIFwi5aWH5bm75Zyw5ZKW5ZWh6aSoXCIsXG4gIFwi5LuK5pel5bel5LqLXCIsXG4gIFwi5bmz5ZKM6aOv5bqXXCIsXG4gIFwi5pOg57GzIOaOsOaOsOmjr1wiLFxuICBcIuiHuuiZjueyvumHgFwiLFxuICBcIui3r+mCiueDpOiCiVwiLFxuICBcIumtmuWIuuS6ulwiLFxuICBcIuiKouiLkuaJi+S9nOiXneW7ilwiXG5dO1xuXG5jb25zdCBpbWFnZURlc2NyaXAgPSBbXG4gIFwiV29uZGVyQWRhbVwiLFxuICBcIuWlh+W5u+WcsOWSluWVoemkqFwiLFxuICBcIuS7iuaXpeW3peS6i+aYr+S4gOWAi+e1kOWQiOmbnuibi+eHku+8j+mBuOeJqeeahOWcsOaWue+8jOS4jeeuoeaYr+mChOWQg+S4gOmhhumbnuibi+eHkuaIluaYr+iyt+iyt+mAgeemruS6uueahOemrueJqeaIluiHquW3seWWnOatoeeahOadseilv++8jOmDveWPr+S7peS+huS7iuaXpeW3peS6i+OAglxcbuS7iuaXpeW3peS6i+eahOmbnuibi+eHkum6teeziuavj+aXpeaWsOmuruePvuaJk++8jOWgheaMgeS4jeS9v+eUqOmgkOaLjOeyieS5n+S4jeWKoOazoeaJk+eyie+8jOWPquS9v+eUqOacgOWWrue0lOeahOmuruWltuOAgem6teeyieOAgeegguezluOAgembnuibi++8jOavj+mAseabtOaPm+S4jeWQjOeahOmZkOWumuWPo+WRs++8jOS+huWQp++8jOmDveWPr+S7peiuk+mAmeijoeaIkOeCuuS9oOeahOS7iuaXpeW3peS6i++8jOavj+WkqemDveaciempmuWWnOOAglwiLFxuICBcIuW5s+WSjOmjr+W6l1wiLFxuICBcIuaToOexsyDmjrDmjrDpo69cIixcbiAgXCLoh7romY7nsr7ph4BcIixcbiAgXCLot6/pgorng6TogolcIixcbiAgXCLprZrliLrkurpcIixcbiAgXCLoiqLoi5LmiYvkvZzol53lu4pcIlxuXTtcblxuY29uc3QgbmV3TW90aW9uU2xpZGVyID0gKCkgPT4ge1xuXG4gIC8vIGNvbnN0IHsgbWFya2V0cyB9ID0gY29uZmlnO1xuXG4gIC8vIGNvbnN0IHsgdGl0bGUsIGl0ZW1zOiBtYXJrZXRMaXN0cyB9ID0gbWFya2V0cztcblxuICBjb25zdCBbW3BhZ2UsIGRpcmVjdGlvbl0sIHNldFBhZ2VdID0gdXNlU3RhdGUoWzAsIDBdKTtcblxuICAvLyBjb25zdCBpbWFnZUluZGV4ID0gd3JhcCgwLCBpbWFnZXNTLmxlbmd0aCwgcGFnZSk7XG4gIGNvbnN0IGltYWdlSW5kZXggPSB3cmFwKDAsIGltYWdlcy5sZW5ndGgsIHBhZ2UpO1xuXG5cbiAgY29uc3QgcGFnaW5hdGUgPSAobmV3RGlyZWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICBzZXRQYWdlKFtwYWdlICsgbmV3RGlyZWN0aW9uLCBuZXdEaXJlY3Rpb25dKTtcbiAgfTtcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTggYmctYmxhY2tcIiBpZD1cIm1hcmtldHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXgtYXV0byBweC0yIHRleHQtd2hpdGVgfSBzdHlsZT17e21heEhlaWdodDogJzEwMHZoJywgbWluSGVpZ2h0OiAnODB2aCcsIGhlaWdodDogJ2F1dG8nfX0+XG4gICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0gY3VzdG9tPXtkaXJlY3Rpb259PlxuICAgICAgICAgICAgey8qIHttYXJrZXRMaXN0cy5tYXAoKG1hcmtldCkgPT4gKCAqL31cbiAgICAgICAgICAgIHsvKiA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBwbGFjZS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmgyIGNsYXNzTmFtZT1cInotMjAgdGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1ibGFjayBmb250LVRhaXBlaUJvbGRcIiA+e2ltYWdlVGV4dFtpbWFnZUluZGV4XX08L21vdGlvbi5oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5oMiBjbGFzc05hbWU9XCJ6LTIwIHRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1ib2xkIGZvbnQtVGFpcGVpQm9sZFwiIHN0eWxlPXt7bWF4SGVpZ2h0OiAnNzZ2aCcsIG1pbkhlaWdodDogJzc1dmgnLCBoZWlnaHQ6J2F1dG8nfX0+e2ltYWdlRGVzY3JpcFtpbWFnZUluZGV4XX08L21vdGlvbi5oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgICAgICAgc3JjPXtpbWFnZXNbaW1hZ2VJbmRleF19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaXAgcm91bmRlZC0zeGwgbWQ6aC05NCBoLTEvM1wiXG4gICAgICAgICAgICAgIC8vIHN0eWxlPXt7bWF4V2lkdGg6ICczMHZ3JywgbWluV2lkdGg6ICczMHZ3Jywgd2lkdGg6ICdhdXRvJ319XG4gICAgICAgICAgICAgIGN1c3RvbT17ZGlyZWN0aW9ufVxuICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICAgICAgICAgIGluaXRpYWw9XCJlbnRlclwiXG4gICAgICAgICAgICAgIGFuaW1hdGU9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBleGl0PVwiZXhpdFwiXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICB4OiB7IHR5cGU6IFwic3ByaW5nXCIsIHN0aWZmbmVzczogMzAwLCBkYW1waW5nOiA0MCB9LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHsgZHVyYXRpb246IDAuMSB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRyYWc9XCJ4XCJcbiAgICAgICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7IGxlZnQ6IDAsIHJpZ2h0OiAwIH19XG4gICAgICAgICAgICAgIGRyYWdFbGFzdGljPXsxfVxuICAgICAgICAgICAgICBvbkRyYWdFbmQ9eyhlLCB7IG9mZnNldCwgdmVsb2NpdHkgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN3aXBlID0gc3dpcGVQb3dlcihvZmZzZXQueCwgdmVsb2NpdHkueCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3dpcGUgPCAtc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgcGFnaW5hdGUoMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzd2lwZSA+IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgcGFnaW5hdGUoLTEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPC9tb3Rpb24uZGl2PiAqL31cbiAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5leHRcIiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZSgxKX0gc3R5bGU9e3tyaWdodDogJzEwJScsIGhlaWdodDogJzAlJ319PlxuICAgICAgICB7XCLigKNcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2XCIgb25DbGljaz17KCkgPT4gcGFnaW5hdGUoLTEpfSBzdHlsZT17e2xlZnQ6ICcxMCUnLCB0cmFuc2Zvcm06ICdzY2FsZSgtMSknLCBoZWlnaHQ6ICcxJSd9fT5cbiAgICAgICAge1wi4oCjXCJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIC8vIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3TW90aW9uU2xpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJ3cmFwIiwidmFyaWFudHMiLCJlbnRlciIsImRpcmVjdGlvbiIsIngiLCJvcGFjaXR5IiwiY2VudGVyIiwiekluZGV4IiwiZXhpdCIsInN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCIsInN3aXBlUG93ZXIiLCJvZmZzZXQiLCJ2ZWxvY2l0eSIsIk1hdGgiLCJhYnMiLCJpbWFnZXMiLCJpbWFnZVRleHQiLCJpbWFnZURlc2NyaXAiLCJuZXdNb3Rpb25TbGlkZXIiLCJwYWdlIiwic2V0UGFnZSIsImltYWdlSW5kZXgiLCJsZW5ndGgiLCJwYWdpbmF0ZSIsIm5ld0RpcmVjdGlvbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImRpdiIsInN0eWxlIiwibWF4SGVpZ2h0IiwibWluSGVpZ2h0IiwiaGVpZ2h0IiwiaW5pdGlhbCIsImN1c3RvbSIsImgyIiwiaW1nIiwic3JjIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImR1cmF0aW9uIiwiZHJhZyIsImRyYWdDb25zdHJhaW50cyIsImxlZnQiLCJyaWdodCIsImRyYWdFbGFzdGljIiwib25EcmFnRW5kIiwiZSIsInN3aXBlIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MotionSlider.tsx\n"));

/***/ })

});