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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import config from '../config/index.json';\nvar variants = {\n    enter: function(direction) {\n        return {\n            x: direction > 0 ? 10 : -10,\n            opacity: 0\n        };\n    },\n    center: {\n        zIndex: 1,\n        x: 0,\n        opacity: 1\n    },\n    exit: function(direction) {\n        return {\n            zIndex: 0,\n            x: direction < 0 ? 10 : -10,\n            opacity: 0\n        };\n    }\n};\nvar swipeConfidenceThreshold = 10000;\nvar swipePower = function(offset, velocity) {\n    return Math.abs(offset) * velocity;\n};\nvar images = [\n    \"/assets/market/WonderAdam.png\",\n    \"/assets/market/wonderland.png\",\n    \"/assets/market/今日工事.png\",\n    \"/assets/market/平和飯店.png\",\n    \"/assets/market/擠米掰掰飯.png\",\n    \"/assets/market/臺虎精釀.png\",\n    \"/assets/market/路邊烤肉.png\",\n    \"/assets/market/魚刺人.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936984/Vendor/Wonder_she5gv.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936981/Vendor/wonderland_mmfapd.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E4%BB%8A%E6%97%A5%E5%B7%A5%E4%BA%8B_j1qcdw.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%87%BA%E8%99%8E%E7%B2%BE%E9%87%80_azvsos.png\",\n    \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%8A%A2%E8%8B%92%E6%89%8B%E4%BD%9C%E8%97%9D%E5%BB%8A_kf4zpl.png\"\n];\n// const imagePoly = [\n// ];\nvar imageText = [\n    \"WonderAdam\",\n    \"奇幻地咖啡館\",\n    \"今日工事\",\n    \"平和飯店\",\n    \"擠米 掰掰飯\",\n    \"臺虎精釀\",\n    \"路邊烤肉\",\n    \"魚刺人\",\n    \"芢苒質感手作藝廊\"\n];\nvar imageDescrip = [\n    \"氣味的療癒力，讓美好的氣味環繞並將它穿在身上\\nWear essence of wonderadam——————by Adam\\n運用純天然的植物精油，讓噴香水 wear perfume這件事情，變成fabric perfume，穿在身上，如同曖曖內含光一樣美好\",\n    \"座落在花蓮市區二樓，有著煙霧花海、精油香氛、以及美味餐點的療癒系咖啡館。\\nBehind the Neverland, is Wonderland。\\n本次選用在地有機蔬果與野菇，搭配自製醃燻鮭魚、手撕豬，最後淋上清爽莎莎醬而成的蔬果溫沙拉。使用自家栽種的長濱有機米，製作而成的無麩質米吐司，做成米三明治。\",\n    \"今日工事是一個結合雞蛋燒／選物的地方，不管是還吃一顆雞蛋燒或是買買送禮人的禮物或自己喜歡的東西，都可以來今日工事。\\n今日工事的雞蛋燒麵糊每日新鮮現打，堅持不使用預拌粉也不加泡打粉，只使用最單純的鮮奶、麵粉、砂糖、雞蛋，每週更換不同的限定口味，來吧，都可以讓這裡成為你的今日工事，每天都有驚喜。\",\n    \"我們是平和飯店\",\n    \"我們是專注在食物真實性的一個新型態餐飲，穿梭在市集、野外、實驗教室與各式各樣真實食物發生的地方；我們將以濃縮生活經驗的方式把食材組合，將腦海中的味道具現化，更重要的是任何人都可以嚐到我們引以為傲的風味光譜。 就讓春日微風與日光做引，笑聲點綴盤中飧，一同體驗擠米主廚的絕妙手藝吧。\",\n    \"臺虎精釀是一間臺灣在地釀酒廠，自2014年起，立志以好喝的啤酒結交朋友、做有趣的事，突破傳統框架，以不甘無聊的品牌精神挑戰各種創意極限。除了持續於國內外拓展品飲市場與空間據點，臺虎精釀始終致力發揚本土文化，探索在地更多可能性，以多元融合的精神，我們敢於冒險，無畏挑戰，只為酒友們帶來豐富繽紛的品飲體驗。\",\n    \"座落於好山好水好chill的花蓮，位處於市中心民國路美食林立的一級戰區，臨近大型停車場與各式旅館民宿，店鋪風格保留老屋特色結合大量金屬與原木元素完美結合，明亮的用餐空間搭配嚴選的音樂，提供最舒適的用餐體驗，全開放式的廚房讓我們為你表演一場出菜秀。\",\n    \"我們都深愛著家鄉，與有故事的回憶。\\n因為對於兒時記憶中的傳統⾹氣念念不忘，⿎起勇氣 創業、延續這份情感，以復古情懷，搭配創意的巧  思，建⽴起全新的感受。⽤故鄉的英⽂諧⾳-「⿂池⼈」為名，從鄉下來到都 市，向更多⼈介紹⾃⼰的家鄉，原本為默默無聞的街⾓的⼩攤，因為對品質的堅持與真誠待⼈的態度，慢 慢建⽴起知名度，消費者⼝⽿⾹傳、媒體主動採訪之 下，建⽴起品牌獨⼀無⼆的價值。\",\n    \"無論是在地或是從其他城鎮來到這個地方的我們，日日環繞在山林水浚、田野渠流，以及夜裡無涯的星空。經過一段時間的沉澱後不僅僅是看見了美好，更看見了生命的力量。我們各自憑藉著自己的雙手，擷取來自身旁最容易取得的素材，創作著生活中我們喜愛的那份美好。\"\n];\nvar newMotionSlider = function() {\n    _s();\n    // const { markets } = config;\n    // const { title, items: marketLists } = markets;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        0\n    ]), ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ref[0], 2), page = ref1[0], direction = ref1[1], setPage = ref[1];\n    // const imageIndex = wrap(0, imagesS.length, page);\n    var imageIndex = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.wrap)(0, images.length, page);\n    var paginate = function(newDirection) {\n        setPage([\n            page + newDirection,\n            newDirection\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"py-8\",\n            id: \"markets\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex justify-center items-center mx-auto px-2 text-white\",\n                    style: {\n                        maxHeight: \"100vh\",\n                        minHeight: \"80vh\",\n                        height: \"auto\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                            initial: false,\n                            custom: direction,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 place-items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                                            className: \"z-20 text-4xl md:text-5xl font-black font-TaipeiBold whitespace-pre-line\",\n                                            children: imageText[imageIndex]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" md:mx-48 mx-5 my-3 md:rounded-[70px] rounded-[10px] backdrop-blur-xl opacity-90 shadow-md\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                                            className: \"z-20 text-md text-white md:text-xl font-TaipeiBold mx-20 md:mx-10 mb-5 my-3 whitespace-pre-line\",\n                                            children: imageDescrip[imageIndex]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                                            src: images[imageIndex],\n                                            className: \"clip rounded-3xl md:h-96 h-52\",\n                                            // style={{maxWidth: '30vw', minWidth: '30vw', width: 'auto'}}\n                                            custom: direction,\n                                            variants: variants,\n                                            initial: \"enter\",\n                                            animate: \"center\",\n                                            exit: \"exit\",\n                                            transition: {\n                                                x: {\n                                                    type: \"spring\",\n                                                    stiffness: 300,\n                                                    damping: 40\n                                                },\n                                                opacity: {\n                                                    duration: 0.1\n                                                }\n                                            },\n                                            drag: \"x\",\n                                            dragConstraints: {\n                                                left: 0,\n                                                right: 0\n                                            },\n                                            dragElastic: 1,\n                                            onDragEnd: function(e, param) {\n                                                var offset = param.offset, velocity = param.velocity;\n                                                var swipe = swipePower(offset.x, velocity.x);\n                                                if (swipe < -swipeConfidenceThreshold) {\n                                                    console.log(e);\n                                                    paginate(1);\n                                                } else if (swipe > swipeConfidenceThreshold) {\n                                                    paginate(-1);\n                                                }\n                                            }\n                                        }, page, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"next\",\n                            onClick: function() {\n                                return paginate(1);\n                            },\n                            style: {\n                                right: \"10%\",\n                                height: \"0%\"\n                            },\n                            children: \"‣\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 146,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"prev\",\n                            onClick: function() {\n                                return paginate(-1);\n                            },\n                            style: {\n                                left: \"10%\",\n                                transform: \"scale(-1)\",\n                                height: \"1%\"\n                            },\n                            children: \"‣\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 149,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 7\n                }, _this),\n                \"// \"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n            lineNumber: 98,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_s(newMotionSlider, \"8Bx1Wl4uzlT5pCEkBvA3L8JklTA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (newMotionSlider);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dEQUMvQixJQUFNdUMsS0FBSyxHQUFHekMsVUFBVSxDQUFDQyxNQUFNLENBQUNQLENBQUMsRUFBRVEsUUFBUSxDQUFDUixDQUFDLENBQUM7Z0RBRTlDLElBQUkrQyxLQUFLLEdBQUcsQ0FBQzFDLHdCQUF3QixFQUFFO29EQUNyQzJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxDQUFDLENBQUM7b0RBQ2QzQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7aURBQ2IsTUFBTSxJQUFJNEIsS0FBSyxHQUFHMUMsd0JBQXdCLEVBQUU7b0RBQzNDYyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpREFDZDs2Q0FDRjsyQ0F6QklKLElBQUk7Ozs7aURBMEJQOzs7Ozs2Q0FDSTs7Ozs7O3FDQUdGOzs7OztpQ0FDVTtzQ0FHdEIsOERBQUNTLEtBQUc7NEJBQUNGLFNBQVMsRUFBQyxNQUFNOzRCQUFDNEIsT0FBTyxFQUFFO3VDQUFNL0IsUUFBUSxDQUFDLENBQUMsQ0FBQzs2QkFBQTs0QkFBRU0sS0FBSyxFQUFFO2dDQUFDa0IsS0FBSyxFQUFFLEtBQUs7Z0NBQUVmLE1BQU0sRUFBRSxJQUFJOzZCQUFDO3NDQUNsRixHQUFHOzs7OztpQ0FDQTtzQ0FDTiw4REFBQ0osS0FBRzs0QkFBQ0YsU0FBUyxFQUFDLE1BQU07NEJBQUM0QixPQUFPLEVBQUU7dUNBQU0vQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7NkJBQUE7NEJBQUVNLEtBQUssRUFBRTtnQ0FBQ2lCLElBQUksRUFBRSxLQUFLO2dDQUFFUyxTQUFTLEVBQUUsV0FBVztnQ0FBRXZCLE1BQU0sRUFBRSxJQUFJOzZCQUFDO3NDQUMxRyxHQUFHOzs7OztpQ0FDQTs7Ozs7O3lCQUNBO2dCQUFBLEtBQ0w7Ozs7OztpQkFBVTtxQkFDVixDQUNKO0NBQ0Y7R0E3RUtkLGVBQWU7QUErRXJCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW90aW9uU2xpZGVyLnRzeD8wYTdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgd3JhcCB9IGZyb20gXCJwb3Btb3Rpb25cIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwicmVhY3Rqcy1wb3B1cFwiO1xuXG5cbi8vIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2luZGV4Lmpzb24nO1xuXG5jb25zdCB2YXJpYW50cyA9IHtcbiAgZW50ZXI6IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBkaXJlY3Rpb24gPiAwID8gMTAgOiAtMTAsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfTtcbiAgfSxcbiAgY2VudGVyOiB7XG4gICAgekluZGV4OiAxLFxuICAgIHg6IDAsXG4gICAgb3BhY2l0eTogMVxuICB9LFxuICBleGl0OiAoZGlyZWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgekluZGV4OiAwLFxuICAgICAgeDogZGlyZWN0aW9uIDwgMCA/IDEwIDogLTEwLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH07XG4gIH1cbn07XG5cbmNvbnN0IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCA9IDEwMDAwO1xuY29uc3Qgc3dpcGVQb3dlciA9IChvZmZzZXQ6IG51bWJlciwgdmVsb2NpdHk6IG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5hYnMob2Zmc2V0KSAqIHZlbG9jaXR5O1xufTtcblxuY29uc3QgaW1hZ2VzID0gW1xuICBcIi9hc3NldHMvbWFya2V0L1dvbmRlckFkYW0ucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQvd29uZGVybGFuZC5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/ku4rml6Xlt6XkuosucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv5bmz5ZKM6aOv5bqXLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+aToOexs+aOsOaOsOmjry5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/oh7romY7nsr7ph4AucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv6Lev6YKK54Ok6IKJLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+mtmuWIuuS6ui5wbmdcIixcbiAgLy8gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL2ltYWdlL3VwbG9hZC92MTY2MjkzNjk4NC9WZW5kb3IvV29uZGVyX3NoZTVndi5wbmdcIixcbiAgLy8gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL2ltYWdlL3VwbG9hZC92MTY2MjkzNjk4MS9WZW5kb3Ivd29uZGVybGFuZF9tbWZhcGQucG5nXCIsXG4gIC8vIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5NzkvVmVuZG9yLyVFNCVCQiU4QSVFNiU5NyVBNSVFNSVCNyVBNSVFNCVCQSU4Ql9qMXFjZHcucG5nXCIsXG4gIC8vIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5NzkvVmVuZG9yLyVFOCU4NyVCQSVFOCU5OSU4RSVFNyVCMiVCRSVFOSU4NyU4MF9henZzb3MucG5nXCIsXG4gIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcHJvamVjdGFydGljaG9rZS9pbWFnZS91cGxvYWQvdjE2NjI5MzY5NzkvVmVuZG9yLyVFOCU4QSVBMiVFOCU4QiU5MiVFNiU4OSU4QiVFNCVCRCU5QyVFOCU5NyU5RCVFNSVCQiU4QV9rZjR6cGwucG5nXCJcbl07XG5cbi8vIGNvbnN0IGltYWdlUG9seSA9IFtcblxuLy8gXTtcblxuY29uc3QgaW1hZ2VUZXh0ID0gW1xuICBcIldvbmRlckFkYW1cIixcbiAgXCLlpYflubvlnLDlkpbllaHppKhcIixcbiAgXCLku4rml6Xlt6XkuotcIixcbiAgXCLlubPlkozpo6/lupdcIixcbiAgXCLmk6DnsbMg5o6w5o6w6aOvXCIsXG4gIFwi6Ie66JmO57K+6YeAXCIsXG4gIFwi6Lev6YKK54Ok6IKJXCIsXG4gIFwi6a2a5Yi65Lq6XCIsXG4gIFwi6Iqi6IuS6LOq5oSf5omL5L2c6Jed5buKXCJcbl07XG5cbmNvbnN0IGltYWdlRGVzY3JpcCA9IFtcbiAgXCLmsKPlkbPnmoTnmYLnmZLlipvvvIzorpPnvo7lpb3nmoTmsKPlkbPnkrDnuZ7kuKblsIflroPnqb/lnKjouqvkuIpcXG5XZWFyIGVzc2VuY2Ugb2Ygd29uZGVyYWRhbeKAlOKAlOKAlOKAlOKAlOKAlGJ5IEFkYW1cXG7pgYvnlKjntJTlpKnnhLbnmoTmpI3niannsr7msrnvvIzorpPlmbTpppnmsLQgd2VhciBwZXJmdW1l6YCZ5Lu25LqL5oOF77yM6K6K5oiQZmFicmljIHBlcmZ1bWXvvIznqb/lnKjouqvkuIrvvIzlpoLlkIzmm5bmm5blhaflkKvlhYnkuIDmqKPnvo7lpb1cIixcbiAgXCLluqfokL3lnKjoirHok67luILljYDkuozmqJPvvIzmnInokZfnhZnpnKfoirHmtbfjgIHnsr7msrnpppnmsJvjgIHku6Xlj4rnvo7lkbPppJDpu57nmoTnmYLnmZLns7vlkpbllaHppKjjgIJcXG5CZWhpbmQgdGhlIE5ldmVybGFuZCwgaXMgV29uZGVybGFuZOOAglxcbuacrOasoemBuOeUqOWcqOWcsOacieapn+iUrOaenOiIh+mHjuiPh++8jOaQremFjeiHquijvemGg+eHu+muremtmuOAgeaJi+aSleixrO+8jOacgOW+jOa3i+S4iua4heeIveiOjuiOjumGrOiAjOaIkOeahOiUrOaenOa6q+aymeaLieOAguS9v+eUqOiHquWutuagveeorueahOmVt+a/seacieapn+exs++8jOijveS9nOiAjOaIkOeahOeEoem6qeizquexs+WQkOWPuO+8jOWBmuaIkOexs+S4ieaYjuayu+OAglwiLFxuICBcIuS7iuaXpeW3peS6i+aYr+S4gOWAi+e1kOWQiOmbnuibi+eHku+8j+mBuOeJqeeahOWcsOaWue+8jOS4jeeuoeaYr+mChOWQg+S4gOmhhumbnuibi+eHkuaIluaYr+iyt+iyt+mAgeemruS6uueahOemrueJqeaIluiHquW3seWWnOatoeeahOadseilv++8jOmDveWPr+S7peS+huS7iuaXpeW3peS6i+OAglxcbuS7iuaXpeW3peS6i+eahOmbnuibi+eHkum6teeziuavj+aXpeaWsOmuruePvuaJk++8jOWgheaMgeS4jeS9v+eUqOmgkOaLjOeyieS5n+S4jeWKoOazoeaJk+eyie+8jOWPquS9v+eUqOacgOWWrue0lOeahOmuruWltuOAgem6teeyieOAgeegguezluOAgembnuibi++8jOavj+mAseabtOaPm+S4jeWQjOeahOmZkOWumuWPo+WRs++8jOS+huWQp++8jOmDveWPr+S7peiuk+mAmeijoeaIkOeCuuS9oOeahOS7iuaXpeW3peS6i++8jOavj+WkqemDveaciempmuWWnOOAglwiLFxuICBcIuaIkeWAkeaYr+W5s+WSjOmjr+W6l1wiLCAvL+W5s+WSjOmjr+W6l1xuICBcIuaIkeWAkeaYr+WwiOazqOWcqOmjn+eJqeecn+WvpuaAp+eahOS4gOWAi+aWsOWei+aFi+mkkOmjsu+8jOepv+aireWcqOW4gumbhuOAgemHjuWkluOAgeWvpumpl+aVmeWupOiIh+WQhOW8j+WQhOaoo+ecn+Wvpumjn+eJqeeZvOeUn+eahOWcsOaWue+8m+aIkeWAkeWwh+S7pea/g+e4rueUn+a0u+e2k+mpl+eahOaWueW8j+aKiumjn+adkOe1hOWQiO+8jOWwh+iFpua1t+S4reeahOWRs+mBk+WFt+ePvuWMlu+8jOabtOmHjeimgeeahOaYr+S7u+S9leS6uumDveWPr+S7peWakOWIsOaIkeWAkeW8leS7peeCuuWCsueahOmiqOWRs+WFieitnOOAgiDlsLHorpPmmKXml6Xlvq7poqjoiIfml6XlhYnlgZrlvJXvvIznrJHogbLpu57ntrTnm6TkuK3po6fvvIzkuIDlkIzpq5TpqZfmk6DnsbPkuLvlu5rnmoTntZXlppnmiYvol53lkKfjgIJcIixcbiAgXCLoh7romY7nsr7ph4DmmK/kuIDplpPoh7rngaPlnKjlnLDph4DphZLlu6DvvIzoh6oyMDE05bm06LW377yM56uL5b+X5Lul5aW95Zad55qE5ZWk6YWS57WQ5Lqk5pyL5Y+L44CB5YGa5pyJ6Laj55qE5LqL77yM56qB56C05YKz57Wx5qGG5p6277yM5Lul5LiN55SY54Sh6IGK55qE5ZOB54mM57K+56We5oyR5oiw5ZCE56iu5Ym15oSP5qW16ZmQ44CC6Zmk5LqG5oyB57qM5pa85ZyL5YWn5aSW5ouT5bGV5ZOB6aOy5biC5aC06IiH56m66ZaT5pOa6bue77yM6Ie66JmO57K+6YeA5aeL57WC6Ie05Yqb55m85o+a5pys5Zyf5paH5YyW77yM5o6i57Si5Zyo5Zyw5pu05aSa5Y+v6IO95oCn77yM5Lul5aSa5YWD6J6N5ZCI55qE57K+56We77yM5oiR5YCR5pWi5pa85YaS6Zqq77yM54Sh55WP5oyR5oiw77yM5Y+q54K66YWS5Y+L5YCR5bi25L6G6LGQ5a+M57m957Sb55qE5ZOB6aOy6auU6amX44CCXCIsXG4gIFwi5bqn6JC95pa85aW95bGx5aW95rC05aW9Y2hpbGznmoToirHok67vvIzkvY3omZXmlrzluILkuK3lv4PmsJHlnIvot6/nvo7po5/mnpfnq4vnmoTkuIDntJrmiLDljYDvvIzoh6jov5HlpKflnovlgZzou4rloLToiIflkITlvI/ml4XppKjmsJHlrr/vvIzlupfpi6rpoqjmoLzkv53nlZnogIHlsYvnibnoibLntZDlkIjlpKfph4/ph5HlsazoiIfljp/mnKjlhYPntKDlroznvo7ntZDlkIjvvIzmmI7kuq7nmoTnlKjppJDnqbrplpPmkK3phY3lmrTpgbjnmoTpn7PmqILvvIzmj5DkvpvmnIDoiJLpgannmoTnlKjppJDpq5TpqZfvvIzlhajplovmlL7lvI/nmoTlu5rmiL/orpPmiJHlgJHngrrkvaDooajmvJTkuIDloLTlh7roj5znp4DjgIJcIiwgLy/ot6/pgorng6TogolcbiAgXCLmiJHlgJHpg73mt7HmhJvokZflrrbphInvvIzoiIfmnInmlYXkuovnmoTlm57mhrbjgIJcXG7lm6DngrrlsI3mlrzlhZLmmYLoqJjmhrbkuK3nmoTlgrPntbHivrnmsKPlv7Xlv7XkuI3lv5jvvIziv47otbfli4fmsKMg5Ym15qWt44CB5bu257qM6YCZ5Lu95oOF5oSf77yM5Lul5b6p5Y+k5oOF5oe377yM5pCt6YWN5Ym15oSP55qE5benICDmgJ3vvIzlu7rivbTotbflhajmlrDnmoTmhJ/lj5fjgILivaTmlYXphInnmoToi7HivYLoq6fivrMt44CM4r+C5rGg4ryI44CN54K65ZCN77yM5b6e6YSJ5LiL5L6G5Yiw6YO9IOW4gu+8jOWQkeabtOWkmuK8iOS7i+e0ueK+g+K8sOeahOWutumEie+8jOWOn+acrOeCuum7mOm7mOeEoeiBnueahOihl+K+k+eahOK8qeaUpO+8jOWboOeCuuWwjeWTgeizqueahOWgheaMgeiIh+ecn+iqoOW+heK8iOeahOaFi+W6pu+8jOaFoiDmhaLlu7rivbTotbfnn6XlkI3luqbvvIzmtojosrvogIXivJ3ivb/ivrnlgrPjgIHlqpLpq5TkuLvli5XmjqHoqKrkuYsg5LiL77yM5bu64r206LW35ZOB54mM542o4ryA54Sh4ryG55qE5YO55YC844CCXCIsXG4gIFwi54Sh6KuW5piv5Zyo5Zyw5oiW5piv5b6e5YW25LuW5Z+O6Y6u5L6G5Yiw6YCZ5YCL5Zyw5pa555qE5oiR5YCR77yM5pel5pel55Kw57me5Zyo5bGx5p6X5rC05rWa44CB55Sw6YeO5rig5rWB77yM5Lul5Y+K5aSc6KOh54Sh5rav55qE5pif56m644CC57aT6YGO5LiA5q615pmC6ZaT55qE5rKJ5r6x5b6M5LiN5YOF5YOF5piv55yL6KaL5LqG576O5aW977yM5pu055yL6KaL5LqG55Sf5ZG955qE5Yqb6YeP44CC5oiR5YCR5ZCE6Ieq5oaR6JeJ6JGX6Ieq5bex55qE6ZuZ5omL77yM5pO35Y+W5L6G6Ieq6Lqr5peB5pyA5a655piT5Y+W5b6X55qE57Sg5p2Q77yM5Ym15L2c6JGX55Sf5rS75Lit5oiR5YCR5Zac5oSb55qE6YKj5Lu9576O5aW944CCXCJcbl07XG5cbmNvbnN0IG5ld01vdGlvblNsaWRlciA9ICgpID0+IHtcblxuICAvLyBjb25zdCB7IG1hcmtldHMgfSA9IGNvbmZpZztcblxuICAvLyBjb25zdCB7IHRpdGxlLCBpdGVtczogbWFya2V0TGlzdHMgfSA9IG1hcmtldHM7XG5cbiAgY29uc3QgW1twYWdlLCBkaXJlY3Rpb25dLCBzZXRQYWdlXSA9IHVzZVN0YXRlKFswLCAwXSk7XG5cbiAgLy8gY29uc3QgaW1hZ2VJbmRleCA9IHdyYXAoMCwgaW1hZ2VzUy5sZW5ndGgsIHBhZ2UpO1xuICBjb25zdCBpbWFnZUluZGV4ID0gd3JhcCgwLCBpbWFnZXMubGVuZ3RoLCBwYWdlKTtcblxuXG4gIGNvbnN0IHBhZ2luYXRlID0gKG5ld0RpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgc2V0UGFnZShbcGFnZSArIG5ld0RpcmVjdGlvbiwgbmV3RGlyZWN0aW9uXSk7XG4gIH07XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS04XCIgaWQ9XCJtYXJrZXRzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG14LWF1dG8gcHgtMiB0ZXh0LXdoaXRlYH0gc3R5bGU9e3ttYXhIZWlnaHQ6ICcxMDB2aCcsIG1pbkhlaWdodDogJzgwdmgnLCBoZWlnaHQ6ICdhdXRvJ319PlxuICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9IGN1c3RvbT17ZGlyZWN0aW9ufT5cbiAgICAgICAgICAgIHsvKiB7bWFya2V0TGlzdHMubWFwKChtYXJrZXQpID0+ICggKi99XG4gICAgICAgICAgICB7LyogPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgcGxhY2UtaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5oMiBjbGFzc05hbWU9XCJ6LTIwIHRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtYmxhY2sgZm9udC1UYWlwZWlCb2xkIHdoaXRlc3BhY2UtcHJlLWxpbmVcIiA+e2ltYWdlVGV4dFtpbWFnZUluZGV4XX08L21vdGlvbi5oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1kOm14LTQ4IG14LTUgbXktMyBtZDpyb3VuZGVkLVs3MHB4XSByb3VuZGVkLVsxMHB4XSBiYWNrZHJvcC1ibHVyLXhsIG9wYWNpdHktOTAgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5oMiBjbGFzc05hbWU9XCJ6LTIwIHRleHQtbWQgdGV4dC13aGl0ZSBtZDp0ZXh0LXhsIGZvbnQtVGFpcGVpQm9sZCBteC0yMCBtZDpteC0xMCBtYi01IG15LTMgd2hpdGVzcGFjZS1wcmUtbGluZVwiID57aW1hZ2VEZXNjcmlwW2ltYWdlSW5kZXhdfTwvbW90aW9uLmgyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAga2V5PXtwYWdlfVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tpbWFnZUluZGV4XX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpcCByb3VuZGVkLTN4bCBtZDpoLTk2IGgtNTJcIlxuICAgICAgICAgICAgICAvLyBzdHlsZT17e21heFdpZHRoOiAnMzB2dycsIG1pbldpZHRoOiAnMzB2dycsIHdpZHRoOiAnYXV0byd9fVxuICAgICAgICAgICAgICBjdXN0b209e2RpcmVjdGlvbn1cbiAgICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgICAgICAgICBpbml0aWFsPVwiZW50ZXJcIlxuICAgICAgICAgICAgICBhbmltYXRlPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgZXhpdD1cImV4aXRcIlxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgeDogeyB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDMwMCwgZGFtcGluZzogNDAgfSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiB7IGR1cmF0aW9uOiAwLjEgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkcmFnPVwieFwiXG4gICAgICAgICAgICAgIGRyYWdDb25zdHJhaW50cz17eyBsZWZ0OiAwLCByaWdodDogMCB9fVxuICAgICAgICAgICAgICBkcmFnRWxhc3RpYz17MX1cbiAgICAgICAgICAgICAgb25EcmFnRW5kPXsoZSwgeyBvZmZzZXQsIHZlbG9jaXR5IH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzd2lwZSA9IHN3aXBlUG93ZXIob2Zmc2V0LngsIHZlbG9jaXR5LngpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN3aXBlIDwgLXN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICAgIHBhZ2luYXRlKDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3dpcGUgPiBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgIHBhZ2luYXRlKC0xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDwvbW90aW9uLmRpdj4gKi99XG4gICAgICAgICAgICB7LyogKSl9ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0XCIgb25DbGljaz17KCkgPT4gcGFnaW5hdGUoMSl9IHN0eWxlPXt7cmlnaHQ6ICcxMCUnLCBoZWlnaHQ6ICcwJSd9fT5cbiAgICAgICAge1wi4oCjXCJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldlwiIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKC0xKX0gc3R5bGU9e3tsZWZ0OiAnMTAlJywgdHJhbnNmb3JtOiAnc2NhbGUoLTEpJywgaGVpZ2h0OiAnMSUnfX0+XG4gICAgICAgIHtcIuKAo1wifVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAvLyA8L3NlY3Rpb24+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ld01vdGlvblNsaWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwid3JhcCIsInZhcmlhbnRzIiwiZW50ZXIiLCJkaXJlY3Rpb24iLCJ4Iiwib3BhY2l0eSIsImNlbnRlciIsInpJbmRleCIsImV4aXQiLCJzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQiLCJzd2lwZVBvd2VyIiwib2Zmc2V0IiwidmVsb2NpdHkiLCJNYXRoIiwiYWJzIiwiaW1hZ2VzIiwiaW1hZ2VUZXh0IiwiaW1hZ2VEZXNjcmlwIiwibmV3TW90aW9uU2xpZGVyIiwicGFnZSIsInNldFBhZ2UiLCJpbWFnZUluZGV4IiwibGVuZ3RoIiwicGFnaW5hdGUiLCJuZXdEaXJlY3Rpb24iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJkaXYiLCJzdHlsZSIsIm1heEhlaWdodCIsIm1pbkhlaWdodCIsImhlaWdodCIsImluaXRpYWwiLCJjdXN0b20iLCJoMiIsImltZyIsInNyYyIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJkdXJhdGlvbiIsImRyYWciLCJkcmFnQ29uc3RyYWludHMiLCJsZWZ0IiwicmlnaHQiLCJkcmFnRWxhc3RpYyIsIm9uRHJhZ0VuZCIsImUiLCJzd2lwZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrIiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MotionSlider.tsx\n"));

/***/ })

});