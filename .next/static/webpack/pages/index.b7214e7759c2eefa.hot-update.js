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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import config from '../config/index.json';\nvar variants = {\n    enter: function(direction) {\n        return {\n            x: direction > 0 ? 1000 : -1000,\n            opacity: 0\n        };\n    },\n    center: {\n        zIndex: 1,\n        x: 0,\n        opacity: 1\n    },\n    exit: function(direction) {\n        return {\n            zIndex: 0,\n            x: direction < 0 ? 1000 : -1000,\n            opacity: 0\n        };\n    }\n};\nvar swipeConfidenceThreshold = 10000;\nvar swipePower = function(offset, velocity) {\n    return Math.abs(offset) * velocity;\n};\nvar images = [\n    \"https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png\",\n    \"https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png\",\n    \"https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png\"\n];\n// const imagePoly = [\n// ];\nvar imageText = [\n    \"市集一\",\n    \"市集二\",\n    \"市集三\",\n    \"市集四\",\n    \"市集五\",\n    \"市集六\"\n];\nvar MotionSlider = function() {\n    _s();\n    // const { markets } = config;\n    // const { title, items: marketLists } = markets;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        0\n    ]), ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ref[0], 2), page = ref1[0], direction = ref1[1], setPage = ref[1];\n    // const imageIndex = wrap(0, imagesS.length, page);\n    var imageIndex = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.wrap)(0, images.length, page);\n    var paginate = function(newDirection) {\n        setPage([\n            page + newDirection,\n            newDirection\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative flex justify-center items-center mx-auto my-auto px-2 pt-4 pb-14 text-white\",\n            style: {\n                maxHeight: \"100vh\",\n                minHeight: \"80vh\",\n                height: \"auto\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                    initial: false,\n                    custom: direction,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                            className: \"z-20 text-5xl font-black font-TaipeiBold\",\n                            style: {\n                                height: \"80%\"\n                            },\n                            children: imageText[imageIndex]\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                            src: images[imageIndex],\n                            className: \"absolute clip rounded-full\",\n                            style: {\n                                maxWidth: \"70vw\",\n                                minWidth: \"20vw\",\n                                width: \"auto\"\n                            },\n                            custom: direction,\n                            variants: variants,\n                            initial: \"enter\",\n                            animate: \"center\",\n                            exit: \"exit\",\n                            transition: {\n                                x: {\n                                    type: \"spring\",\n                                    stiffness: 300,\n                                    damping: 40\n                                },\n                                opacity: {\n                                    duration: 0.1\n                                }\n                            },\n                            drag: \"x\",\n                            dragConstraints: {\n                                left: 0,\n                                right: 0\n                            },\n                            dragElastic: 1,\n                            onDragEnd: function(e, param) {\n                                var offset = param.offset, velocity = param.velocity;\n                                var swipe = swipePower(offset.x, velocity.x);\n                                if (swipe < -swipeConfidenceThreshold) {\n                                    console.log(e);\n                                    paginate(1);\n                                } else if (swipe > swipeConfidenceThreshold) {\n                                    paginate(-1);\n                                }\n                            }\n                        }, page, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"next\",\n                    onClick: function() {\n                        return paginate(1);\n                    },\n                    style: {\n                        right: \"15%\",\n                        height: \"0%\"\n                    },\n                    children: \"‣\"\n                }, void 0, false, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"prev\",\n                    onClick: function() {\n                        return paginate(-1);\n                    },\n                    style: {\n                        left: \"15%\",\n                        transform: \"scale(-1)\",\n                        height: \"1%\"\n                    },\n                    children: \"‣\"\n                }, void 0, false, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(MotionSlider, \"8Bx1Wl4uzlT5pCEkBvA3L8JklTA=\");\n_c = MotionSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MotionSlider);\nvar _c;\n$RefreshReg$(_c, \"MotionSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7cUJBQUM7OEJBQ2xGLEdBQUc7Ozs7O3lCQUNBOzhCQUNOLDhEQUFDTCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsTUFBTTtvQkFBQzZCLE9BQU8sRUFBRTsrQkFBTWhDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFBQTtvQkFBRUksS0FBSyxFQUFFO3dCQUFDb0IsSUFBSSxFQUFFLEtBQUs7d0JBQUVTLFNBQVMsRUFBRSxXQUFXO3dCQUFFMUIsTUFBTSxFQUFFLElBQUk7cUJBQUM7OEJBQzFHLEdBQUc7Ozs7O3lCQUNBOzs7Ozs7aUJBQ0E7cUJBRUwsQ0FDSjtDQUNGO0dBbEVLWixZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUFvRWxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW90aW9uU2xpZGVyLnRzeD8wYTdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgd3JhcCB9IGZyb20gXCJwb3Btb3Rpb25cIjtcblxuLy8gaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvaW5kZXguanNvbic7XG5cbmNvbnN0IHZhcmlhbnRzID0ge1xuICBlbnRlcjogKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGRpcmVjdGlvbiA+IDAgPyAxMDAwIDogLTEwMDAsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfTtcbiAgfSxcbiAgY2VudGVyOiB7XG4gICAgekluZGV4OiAxLFxuICAgIHg6IDAsXG4gICAgb3BhY2l0eTogMVxuICB9LFxuICBleGl0OiAoZGlyZWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgekluZGV4OiAwLFxuICAgICAgeDogZGlyZWN0aW9uIDwgMCA/IDEwMDAgOiAtMTAwMCxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQgPSAxMDAwMDtcbmNvbnN0IHN3aXBlUG93ZXIgPSAob2Zmc2V0OiBudW1iZXIsIHZlbG9jaXR5OiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGguYWJzKG9mZnNldCkgKiB2ZWxvY2l0eTtcbn07XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAgXCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0L2RkMjM3MDhlYmM0MDUzNTUxYmIzM2UxOGI3MTc0ZTczYjZlMTcxMGIvZGVhMjQvc3RhdGljL2ltYWdlcy93YWxscGFwZXJzL3NoYXJlZC1jb2xvcnNAMngucG5nXCIsXG4gIFwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC80OWRlMzQ5ZDEyZGI4NTE5NTJjNTU1NmYzYzYzN2NhNzcyNzQ1MzE2L2NmYzU2L3N0YXRpYy9pbWFnZXMvd2FsbHBhcGVycy9icmlkZ2UtMDJAMngucG5nXCIsXG4gIFwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC81OTRkZTY2NDY5MDc5YzIxZmM1NGMxNGRiMDU5MTMwNWExMTk4ZGQ2LzNmNGIxL3N0YXRpYy9pbWFnZXMvd2FsbHBhcGVycy9icmlkZ2UtMDFAMngucG5nXCJcbl07XG5cbi8vIGNvbnN0IGltYWdlUG9seSA9IFtcblxuLy8gXTtcblxuY29uc3QgaW1hZ2VUZXh0ID0gW1xuICBcIuW4gumbhuS4gFwiLFxuICBcIuW4gumbhuS6jFwiLFxuICBcIuW4gumbhuS4iVwiLFxuICBcIuW4gumbhuWbm1wiLFxuICBcIuW4gumbhuS6lFwiLFxuICBcIuW4gumbhuWFrVwiXG5dO1xuXG5jb25zdCBNb3Rpb25TbGlkZXIgPSAoKSA9PiB7XG5cbiAgLy8gY29uc3QgeyBtYXJrZXRzIH0gPSBjb25maWc7XG5cbiAgLy8gY29uc3QgeyB0aXRsZSwgaXRlbXM6IG1hcmtldExpc3RzIH0gPSBtYXJrZXRzO1xuXG4gIGNvbnN0IFtbcGFnZSwgZGlyZWN0aW9uXSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShbMCwgMF0pO1xuXG4gIC8vIGNvbnN0IGltYWdlSW5kZXggPSB3cmFwKDAsIGltYWdlc1MubGVuZ3RoLCBwYWdlKTtcbiAgY29uc3QgaW1hZ2VJbmRleCA9IHdyYXAoMCwgaW1hZ2VzLmxlbmd0aCwgcGFnZSk7XG5cblxuICBjb25zdCBwYWdpbmF0ZSA9IChuZXdEaXJlY3Rpb246IG51bWJlcikgPT4ge1xuICAgIHNldFBhZ2UoW3BhZ2UgKyBuZXdEaXJlY3Rpb24sIG5ld0RpcmVjdGlvbl0pO1xuICB9O1xuICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTggYmctYmxhY2tcIiBpZD1cIm1hcmtldHNcIj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG14LWF1dG8gbXktYXV0byBweC0yIHB0LTQgcGItMTQgdGV4dC13aGl0ZWB9IHN0eWxlPXt7bWF4SGVpZ2h0OiAnMTAwdmgnLCBtaW5IZWlnaHQ6ICc4MHZoJywgaGVpZ2h0OiAnYXV0byd9fT5cbiAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9IGN1c3RvbT17ZGlyZWN0aW9ufT5cbiAgICAgICAgey8qIHttYXJrZXRMaXN0cy5tYXAoKG1hcmtldCkgPT4gKCAqL31cbiAgICAgICAgey8qIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+ICovfVxuICAgICAgICAgIDxtb3Rpb24uaDIgY2xhc3NOYW1lPVwiei0yMCB0ZXh0LTV4bCBmb250LWJsYWNrIGZvbnQtVGFpcGVpQm9sZFwiIHN0eWxlPXt7aGVpZ2h0OiAnODAlJ319PntpbWFnZVRleHRbaW1hZ2VJbmRleF19PC9tb3Rpb24uaDI+XG4gICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICBrZXk9e3BhZ2V9XG4gICAgICAgICAgc3JjPXtpbWFnZXNbaW1hZ2VJbmRleF19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgY2xpcCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6ICc3MHZ3JywgbWluV2lkdGg6ICcyMHZ3Jywgd2lkdGg6ICdhdXRvJyx9fVxuICAgICAgICAgIGN1c3RvbT17ZGlyZWN0aW9ufVxuICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgICAgICBpbml0aWFsPVwiZW50ZXJcIlxuICAgICAgICAgIGFuaW1hdGU9XCJjZW50ZXJcIlxuICAgICAgICAgIGV4aXQ9XCJleGl0XCJcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICB4OiB7IHR5cGU6IFwic3ByaW5nXCIsIHN0aWZmbmVzczogMzAwLCBkYW1waW5nOiA0MCB9LFxuICAgICAgICAgICAgb3BhY2l0eTogeyBkdXJhdGlvbjogMC4xIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIGRyYWc9XCJ4XCJcbiAgICAgICAgICBkcmFnQ29uc3RyYWludHM9e3sgbGVmdDogMCwgcmlnaHQ6IDAgfX1cbiAgICAgICAgICBkcmFnRWxhc3RpYz17MX1cbiAgICAgICAgICBvbkRyYWdFbmQ9eyhlLCB7IG9mZnNldCwgdmVsb2NpdHkgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3dpcGUgPSBzd2lwZVBvd2VyKG9mZnNldC54LCB2ZWxvY2l0eS54KTtcblxuICAgICAgICAgICAgaWYgKHN3aXBlIDwgLXN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICBwYWdpbmF0ZSgxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3dpcGUgPiBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgcGFnaW5hdGUoLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgey8qIDwvbW90aW9uLmRpdj4gKi99XG4gICAgICAgIHsvKiApKX0gKi99XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dFwiIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKDEpfSBzdHlsZT17e3JpZ2h0OiAnMTUlJywgaGVpZ2h0OiAnMCUnfX0+XG4gICAgICAgIHtcIuKAo1wifVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZcIiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZSgtMSl9IHN0eWxlPXt7bGVmdDogJzE1JScsIHRyYW5zZm9ybTogJ3NjYWxlKC0xKScsIGhlaWdodDogJzElJ319PlxuICAgICAgICB7XCLigKNcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgey8qIC8vIDwvc2VjdGlvbj4gKi99XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdGlvblNsaWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwid3JhcCIsInZhcmlhbnRzIiwiZW50ZXIiLCJkaXJlY3Rpb24iLCJ4Iiwib3BhY2l0eSIsImNlbnRlciIsInpJbmRleCIsImV4aXQiLCJzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQiLCJzd2lwZVBvd2VyIiwib2Zmc2V0IiwidmVsb2NpdHkiLCJNYXRoIiwiYWJzIiwiaW1hZ2VzIiwiaW1hZ2VUZXh0IiwiTW90aW9uU2xpZGVyIiwicGFnZSIsInNldFBhZ2UiLCJpbWFnZUluZGV4IiwibGVuZ3RoIiwicGFnaW5hdGUiLCJuZXdEaXJlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1heEhlaWdodCIsIm1pbkhlaWdodCIsImhlaWdodCIsImluaXRpYWwiLCJjdXN0b20iLCJoMiIsImltZyIsInNyYyIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJ3aWR0aCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJkdXJhdGlvbiIsImRyYWciLCJkcmFnQ29uc3RyYWludHMiLCJsZWZ0IiwicmlnaHQiLCJkcmFnRWxhc3RpYyIsIm9uRHJhZ0VuZCIsImUiLCJzd2lwZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrIiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MotionSlider.tsx\n"));

/***/ })

});