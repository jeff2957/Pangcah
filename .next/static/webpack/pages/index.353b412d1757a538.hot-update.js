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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import config from '../config/index.json';\nvar variants = {\n    enter: function(direction) {\n        return {\n            x: direction > 0 ? 10 : -10,\n            opacity: 0\n        };\n    },\n    center: {\n        zIndex: 1,\n        x: 0,\n        opacity: 1\n    },\n    exit: function(direction) {\n        return {\n            zIndex: 0,\n            x: direction < 0 ? 10 : -10,\n            opacity: 0\n        };\n    }\n};\nvar swipeConfidenceThreshold = 10000;\nvar swipePower = function(offset, velocity) {\n    return Math.abs(offset) * velocity;\n};\nvar images = [\n    \"/assets/market/WonderAdam.png\",\n    \"/assets/market/wonderland.png\",\n    \"/assets/market/今日工事.png\",\n    \"/assets/market/平和飯店.png\",\n    \"/assets/market/擠米掰掰飯.png\",\n    \"/assets/market/臺虎精釀.png\",\n    \"/assets/market/路邊烤肉.png\",\n    \"/assets/market/魚刺人.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936984/Vendor/Wonder_she5gv.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936981/Vendor/wonderland_mmfapd.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E4%BB%8A%E6%97%A5%E5%B7%A5%E4%BA%8B_j1qcdw.png\",\n    // \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%87%BA%E8%99%8E%E7%B2%BE%E9%87%80_azvsos.png\",\n    \"https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%8A%A2%E8%8B%92%E6%89%8B%E4%BD%9C%E8%97%9D%E5%BB%8A_kf4zpl.png\"\n];\n// const imagePoly = [\n// ];\nvar imageText = [\n    \"WonderAdam\",\n    \"奇幻地咖啡館\",\n    \"今日工事\",\n    \"平和飯店\",\n    \"擠米 掰掰飯\",\n    \"臺虎精釀\",\n    \"路邊烤肉\",\n    \"魚刺人\",\n    \"芢苒質感手作藝廊\"\n];\nvar imageDescrip = [\n    \"氣味的療癒力，讓美好的氣味環繞並將它穿在身上。\\nWear essence of wonderadam - by Adam\\n運用純天然的植物精油，讓噴香水 wear perfume這件事情，變成fabric perfume，穿在身上，如同曖曖內含光一樣美好。\",\n    \"座落在花蓮市區二樓，有著煙霧花海、精油香氛、以及美味餐點的療癒系咖啡館。\\nBehind the Neverland, is Wonderland。\\n本次選用在地有機蔬果與野菇，搭配自製醃燻鮭魚、手撕豬，最後淋上清爽莎莎醬而成的蔬果溫沙拉。使用自家栽種的長濱有機米，製作而成的無麩質米吐司，做成米三明治。\",\n    \"今日工事是一個結合雞蛋燒／選物的地方，不管是還吃一顆雞蛋燒或是買買送禮人的禮物或自己喜歡的東西，都可以來今日工事。\\n今日工事的雞蛋燒麵糊每日新鮮現打，堅持不使用預拌粉也不加泡打粉，只使用最單純的鮮奶、麵粉、砂糖、雞蛋，每週更換不同的限定口味，來吧，都可以讓這裡成為你的今日工事，每天都有驚喜。\",\n    \"我們是平和飯店\",\n    \"我們是專注在食物真實性的一個新型態餐飲，穿梭在市集、野外、實驗教室與各式各樣真實食物發生的地方；我們將以濃縮生活經驗的方式把食材組合，將腦海中的味道具現化，更重要的是任何人都可以嚐到我們引以為傲的風味光譜。 就讓春日微風與日光做引，笑聲點綴盤中飧，一同體驗擠米主廚的絕妙手藝吧。\",\n    \"臺虎精釀是一間臺灣在地釀酒廠，自2014年起，立志以好喝的啤酒結交朋友、做有趣的事，突破傳統框架，以不甘無聊的品牌精神挑戰各種創意極限。除了持續於國內外拓展品飲市場與空間據點，臺虎精釀始終致力發揚本土文化，探索在地更多可能性，以多元融合的精神，我們敢於冒險，無畏挑戰，只為酒友們帶來豐富繽紛的品飲體驗。\",\n    \"座落於好山好水好chill的花蓮，位處於市中心民國路美食林立的一級戰區，臨近大型停車場與各式旅館民宿，店鋪風格保留老屋特色結合大量金屬與原木元素完美結合，明亮的用餐空間搭配嚴選的音樂，提供最舒適的用餐體驗，全開放式的廚房讓我們為你表演一場出菜秀。\",\n    \"我們都深愛著家鄉，與有故事的回憶。\\n因為對於兒時記憶中的傳統⾹氣念念不忘，⿎起勇氣 創業、延續這份情感，以復古情懷，搭配創意的巧  思，建⽴起全新的感受。⽤故鄉的英⽂諧⾳-「⿂池⼈」為名，從鄉下來到都 市，向更多⼈介紹⾃⼰的家鄉，原本為默默無聞的街⾓的⼩攤，因為對品質的堅持與真誠待⼈的態度，慢 慢建⽴起知名度，消費者⼝⽿⾹傳、媒體主動採訪之 下，建⽴起品牌獨⼀無⼆的價值。\",\n    \"無論是在地或是從其他城鎮來到這個地方的我們，日日環繞在山林水浚、田野渠流，以及夜裡無涯的星空。經過一段時間的沉澱後不僅僅是看見了美好，更看見了生命的力量。我們各自憑藉著自己的雙手，擷取來自身旁最容易取得的素材，創作著生活中我們喜愛的那份美好。\"\n];\nvar newMotionSlider = function() {\n    _s();\n    // const { markets } = config;\n    // const { title, items: marketLists } = markets;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        0\n    ]), ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ref[0], 2), page = ref1[0], direction = ref1[1], setPage = ref[1];\n    // const imageIndex = wrap(0, imagesS.length, page);\n    var imageIndex = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.wrap)(0, images.length, page);\n    var paginate = function(newDirection) {\n        setPage([\n            page + newDirection,\n            newDirection\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"py-8\",\n            id: \"markets\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex justify-center items-center mx-auto px-2 text-white\",\n                    style: {\n                        maxHeight: \"100vh\",\n                        minHeight: \"80vh\",\n                        height: \"auto\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                            initial: false,\n                            custom: direction,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 place-items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                                            className: \"z-20 text-4xl md:text-5xl font-black font-TaipeiBold whitespace-pre-line\",\n                                            children: imageText[imageIndex]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" md:mx-64 mx-10 my-3 md:rounded-[40px] rounded-[30px] backdrop-blur-[100px] bg-white bg-opacity-10 shadow-md\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                                            className: \"z-20 text-sm text-white md:text-xl font-TaipeiBold md:mx-14 mx-4 my-5 whitespace-pre-line\",\n                                            children: imageDescrip[imageIndex]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                                            src: images[imageIndex],\n                                            className: \"clip rounded-3xl md:h-96 h-56\",\n                                            // style={{maxWidth: '30vw', minWidth: '30vw', width: 'auto'}}\n                                            custom: direction,\n                                            variants: variants,\n                                            initial: \"enter\",\n                                            animate: \"center\",\n                                            exit: \"exit\",\n                                            transition: {\n                                                x: {\n                                                    type: \"spring\",\n                                                    stiffness: 300,\n                                                    damping: 40\n                                                },\n                                                opacity: {\n                                                    duration: 0.1\n                                                }\n                                            },\n                                            drag: \"x\",\n                                            dragConstraints: {\n                                                left: 0,\n                                                right: 0\n                                            },\n                                            dragElastic: 1,\n                                            onDragEnd: function(e, param) {\n                                                var offset = param.offset, velocity = param.velocity;\n                                                var swipe = swipePower(offset.x, velocity.x);\n                                                if (swipe < -swipeConfidenceThreshold) {\n                                                    console.log(e);\n                                                    paginate(1);\n                                                } else if (swipe > swipeConfidenceThreshold) {\n                                                    paginate(-1);\n                                                }\n                                            }\n                                        }, page, false, {\n                                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"next mt-5\",\n                            onClick: function() {\n                                return paginate(1);\n                            },\n                            style: {\n                                right: \"7%\",\n                                height: \"0%\"\n                            },\n                            children: \"‣\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 146,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"prev\",\n                            onClick: function() {\n                                return paginate(-1);\n                            },\n                            style: {\n                                left: \"7%\",\n                                transform: \"scale(-1)\"\n                            },\n                            children: \"‣\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                            lineNumber: 149,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 7\n                }, _this),\n                \"// \"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luuu/Desktop/pangcah_final/src/components/MotionSlider.tsx\",\n            lineNumber: 98,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_s(newMotionSlider, \"8Bx1Wl4uzlT5pCEkBvA3L8JklTA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (newMotionSlider);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dEQUMvQixJQUFNdUMsS0FBSyxHQUFHekMsVUFBVSxDQUFDQyxNQUFNLENBQUNQLENBQUMsRUFBRVEsUUFBUSxDQUFDUixDQUFDLENBQUM7Z0RBRTlDLElBQUkrQyxLQUFLLEdBQUcsQ0FBQzFDLHdCQUF3QixFQUFFO29EQUNyQzJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxDQUFDLENBQUM7b0RBQ2QzQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7aURBQ2IsTUFBTSxJQUFJNEIsS0FBSyxHQUFHMUMsd0JBQXdCLEVBQUU7b0RBQzNDYyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpREFDZDs2Q0FDRjsyQ0F6QklKLElBQUk7Ozs7aURBMEJQOzs7Ozs2Q0FDSTs7Ozs7O3FDQUdGOzs7OztpQ0FDVTtzQ0FHdEIsOERBQUNTLEtBQUc7NEJBQUNGLFNBQVMsRUFBQyxXQUFXOzRCQUFDNEIsT0FBTyxFQUFFO3VDQUFNL0IsUUFBUSxDQUFDLENBQUMsQ0FBQzs2QkFBQTs0QkFBRU0sS0FBSyxFQUFFO2dDQUFDa0IsS0FBSyxFQUFFLElBQUk7Z0NBQUVmLE1BQU0sRUFBRSxJQUFJOzZCQUFDO3NDQUN0RixHQUFHOzs7OztpQ0FDQTtzQ0FDTiw4REFBQ0osS0FBRzs0QkFBQ0YsU0FBUyxFQUFDLE1BQU07NEJBQUM0QixPQUFPLEVBQUU7dUNBQU0vQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7NkJBQUE7NEJBQUVNLEtBQUssRUFBRTtnQ0FBQ2lCLElBQUksRUFBRSxJQUFJO2dDQUFFUyxTQUFTLEVBQUUsV0FBVzs2QkFBQztzQ0FDM0YsR0FBRzs7Ozs7aUNBQ0E7Ozs7Ozt5QkFDQTtnQkFBQSxLQUNMOzs7Ozs7aUJBQVU7cUJBQ1YsQ0FDSjtDQUNGO0dBN0VLckMsZUFBZTtBQStFckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb3Rpb25TbGlkZXIudHN4PzBhN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB3cmFwIH0gZnJvbSBcInBvcG1vdGlvblwiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCJyZWFjdGpzLXBvcHVwXCI7XG5cblxuLy8gaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvaW5kZXguanNvbic7XG5cbmNvbnN0IHZhcmlhbnRzID0ge1xuICBlbnRlcjogKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGRpcmVjdGlvbiA+IDAgPyAxMCA6IC0xMCxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9O1xuICB9LFxuICBjZW50ZXI6IHtcbiAgICB6SW5kZXg6IDEsXG4gICAgeDogMCxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIGV4aXQ6IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB6SW5kZXg6IDAsXG4gICAgICB4OiBkaXJlY3Rpb24gPCAwID8gMTAgOiAtMTAsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfTtcbiAgfVxufTtcblxuY29uc3Qgc3dpcGVDb25maWRlbmNlVGhyZXNob2xkID0gMTAwMDA7XG5jb25zdCBzd2lwZVBvd2VyID0gKG9mZnNldDogbnVtYmVyLCB2ZWxvY2l0eTogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBNYXRoLmFicyhvZmZzZXQpICogdmVsb2NpdHk7XG59O1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gIFwiL2Fzc2V0cy9tYXJrZXQvV29uZGVyQWRhbS5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC93b25kZXJsYW5kLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+S7iuaXpeW3peS6iy5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/lubPlkozpo6/lupcucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv5pOg57Gz5o6w5o6w6aOvLnBuZ1wiLFxuICBcIi9hc3NldHMvbWFya2V0L+iHuuiZjueyvumHgC5wbmdcIixcbiAgXCIvYXNzZXRzL21hcmtldC/ot6/pgorng6TogokucG5nXCIsXG4gIFwiL2Fzc2V0cy9tYXJrZXQv6a2a5Yi65Lq6LnBuZ1wiLFxuICAvLyBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTg0L1ZlbmRvci9Xb25kZXJfc2hlNWd2LnBuZ1wiLFxuICAvLyBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3Byb2plY3RhcnRpY2hva2UvaW1hZ2UvdXBsb2FkL3YxNjYyOTM2OTgxL1ZlbmRvci93b25kZXJsYW5kX21tZmFwZC5wbmdcIixcbiAgLy8gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL2ltYWdlL3VwbG9hZC92MTY2MjkzNjk3OS9WZW5kb3IvJUU0JUJCJThBJUU2JTk3JUE1JUU1JUI3JUE1JUU0JUJBJThCX2oxcWNkdy5wbmdcIixcbiAgLy8gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL2ltYWdlL3VwbG9hZC92MTY2MjkzNjk3OS9WZW5kb3IvJUU4JTg3JUJBJUU4JTk5JThFJUU3JUIyJUJFJUU5JTg3JTgwX2F6dnNvcy5wbmdcIixcbiAgXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcm9qZWN0YXJ0aWNob2tlL2ltYWdlL3VwbG9hZC92MTY2MjkzNjk3OS9WZW5kb3IvJUU4JThBJUEyJUU4JThCJTkyJUU2JTg5JThCJUU0JUJEJTlDJUU4JTk3JTlEJUU1JUJCJThBX2tmNHpwbC5wbmdcIlxuXTtcblxuLy8gY29uc3QgaW1hZ2VQb2x5ID0gW1xuXG4vLyBdO1xuXG5jb25zdCBpbWFnZVRleHQgPSBbXG4gIFwiV29uZGVyQWRhbVwiLFxuICBcIuWlh+W5u+WcsOWSluWVoemkqFwiLFxuICBcIuS7iuaXpeW3peS6i1wiLFxuICBcIuW5s+WSjOmjr+W6l1wiLFxuICBcIuaToOexsyDmjrDmjrDpo69cIixcbiAgXCLoh7romY7nsr7ph4BcIixcbiAgXCLot6/pgorng6TogolcIixcbiAgXCLprZrliLrkurpcIixcbiAgXCLoiqLoi5Los6rmhJ/miYvkvZzol53lu4pcIlxuXTtcblxuY29uc3QgaW1hZ2VEZXNjcmlwID0gW1xuICBcIuawo+WRs+eahOeZgueZkuWKm++8jOiuk+e+juWlveeahOawo+WRs+eSsOe5nuS4puWwh+Wug+epv+WcqOi6q+S4iuOAglxcbldlYXIgZXNzZW5jZSBvZiB3b25kZXJhZGFtIC0gYnkgQWRhbVxcbumBi+eUqOe0lOWkqeeEtueahOakjeeJqeeyvuayue+8jOiuk+WZtOmmmeawtCB3ZWFyIHBlcmZ1bWXpgJnku7bkuovmg4XvvIzorormiJBmYWJyaWMgcGVyZnVtZe+8jOepv+WcqOi6q+S4iu+8jOWmguWQjOabluabluWFp+WQq+WFieS4gOaoo+e+juWlveOAglwiLFxuICBcIuW6p+iQveWcqOiKseiTruW4guWNgOS6jOaok++8jOacieiRl+eFmemcp+iKsea1t+OAgeeyvuayuemmmeawm+OAgeS7peWPiue+juWRs+mkkOm7nueahOeZgueZkuezu+WSluWVoemkqOOAglxcbkJlaGluZCB0aGUgTmV2ZXJsYW5kLCBpcyBXb25kZXJsYW5k44CCXFxu5pys5qyh6YG455So5Zyo5Zyw5pyJ5qmf6JSs5p6c6IiH6YeO6I+H77yM5pCt6YWN6Ieq6KO96YaD54e76a6t6a2a44CB5omL5pKV6LGs77yM5pyA5b6M5reL5LiK5riF54i96I6O6I6O6Yas6ICM5oiQ55qE6JSs5p6c5rqr5rKZ5ouJ44CC5L2/55So6Ieq5a625qC956iu55qE6ZW35r+x5pyJ5qmf57Gz77yM6KO95L2c6ICM5oiQ55qE54Sh6bqp6LOq57Gz5ZCQ5Y+477yM5YGa5oiQ57Gz5LiJ5piO5rK744CCXCIsXG4gIFwi5LuK5pel5bel5LqL5piv5LiA5YCL57WQ5ZCI6Zue6JuL54eS77yP6YG454mp55qE5Zyw5pa577yM5LiN566h5piv6YKE5ZCD5LiA6aGG6Zue6JuL54eS5oiW5piv6LK36LK36YCB56au5Lq655qE56au54mp5oiW6Ieq5bex5Zac5q2h55qE5p2x6KW/77yM6YO95Y+v5Lul5L6G5LuK5pel5bel5LqL44CCXFxu5LuK5pel5bel5LqL55qE6Zue6JuL54eS6bq157OK5q+P5pel5paw6a6u54++5omT77yM5aCF5oyB5LiN5L2/55So6aCQ5ouM57KJ5Lmf5LiN5Yqg5rOh5omT57KJ77yM5Y+q5L2/55So5pyA5Zau57SU55qE6a6u5aW244CB6bq157KJ44CB56CC57OW44CB6Zue6JuL77yM5q+P6YCx5pu05o+b5LiN5ZCM55qE6ZmQ5a6a5Y+j5ZGz77yM5L6G5ZCn77yM6YO95Y+v5Lul6K6T6YCZ6KOh5oiQ54K65L2g55qE5LuK5pel5bel5LqL77yM5q+P5aSp6YO95pyJ6ama5Zac44CCXCIsXG4gIFwi5oiR5YCR5piv5bmz5ZKM6aOv5bqXXCIsIC8v5bmz5ZKM6aOv5bqXXG4gIFwi5oiR5YCR5piv5bCI5rOo5Zyo6aOf54mp55yf5a+m5oCn55qE5LiA5YCL5paw5Z6L5oWL6aSQ6aOy77yM56m/5qKt5Zyo5biC6ZuG44CB6YeO5aSW44CB5a+m6amX5pWZ5a6k6IiH5ZCE5byP5ZCE5qij55yf5a+m6aOf54mp55m855Sf55qE5Zyw5pa577yb5oiR5YCR5bCH5Lul5r+D57iu55Sf5rS757aT6amX55qE5pa55byP5oqK6aOf5p2Q57WE5ZCI77yM5bCH6IWm5rW35Lit55qE5ZGz6YGT5YW354++5YyW77yM5pu06YeN6KaB55qE5piv5Lu75L2V5Lq66YO95Y+v5Lul5ZqQ5Yiw5oiR5YCR5byV5Lul54K65YKy55qE6aKo5ZGz5YWJ6K2c44CCIOWwseiuk+aYpeaXpeW+rumiqOiIh+aXpeWFieWBmuW8le+8jOeskeiBsum7nue2tOebpOS4remjp++8jOS4gOWQjOmrlOmpl+aToOexs+S4u+W7mueahOe1leWmmeaJi+iXneWQp+OAglwiLFxuICBcIuiHuuiZjueyvumHgOaYr+S4gOmWk+iHuueBo+WcqOWcsOmHgOmFkuW7oO+8jOiHqjIwMTTlubTotbfvvIznq4vlv5fku6Xlpb3llp3nmoTllaTphZLntZDkuqTmnIvlj4vjgIHlgZrmnInotqPnmoTkuovvvIznqoHnoLTlgrPntbHmoYbmnrbvvIzku6XkuI3nlJjnhKHogYrnmoTlk4HniYznsr7npZ7mjJHmiLDlkITnqK7libXmhI/mpbXpmZDjgILpmaTkuobmjIHnuozmlrzlnIvlhaflpJbmi5PlsZXlk4Hpo7LluILloLToiIfnqbrplpPmk5rpu57vvIzoh7romY7nsr7ph4Dlp4vntYLoh7Tlipvnmbzmj5rmnKzlnJ/mlofljJbvvIzmjqLntKLlnKjlnLDmm7TlpJrlj6/og73mgKfvvIzku6XlpJrlhYPono3lkIjnmoTnsr7npZ7vvIzmiJHlgJHmlaLmlrzlhpLpmqrvvIznhKHnlY/mjJHmiLDvvIzlj6rngrrphZLlj4vlgJHluLbkvobosZDlr4znub3ntJvnmoTlk4Hpo7Lpq5TpqZfjgIJcIixcbiAgXCLluqfokL3mlrzlpb3lsbHlpb3msLTlpb1jaGlsbOeahOiKseiTru+8jOS9jeiZleaWvOW4guS4reW/g+awkeWci+i3r+e+jumjn+ael+eri+eahOS4gOe0muaIsOWNgO+8jOiHqOi/keWkp+Wei+WBnOi7iuWgtOiIh+WQhOW8j+aXhemkqOawkeWuv++8jOW6l+mLqumiqOagvOS/neeVmeiAgeWxi+eJueiJsue1kOWQiOWkp+mHj+mHkeWxrOiIh+WOn+acqOWFg+e0oOWujOe+jue1kOWQiO+8jOaYjuS6rueahOeUqOmkkOepuumWk+aQremFjeWatOmBuOeahOmfs+aogu+8jOaPkOS+m+acgOiIkumBqeeahOeUqOmkkOmrlOmpl++8jOWFqOmWi+aUvuW8j+eahOW7muaIv+iuk+aIkeWAkeeCuuS9oOihqOa8lOS4gOWgtOWHuuiPnOengOOAglwiLCAvL+i3r+mCiueDpOiCiVxuICBcIuaIkeWAkemDvea3seaEm+iRl+WutumEie+8jOiIh+acieaVheS6i+eahOWbnuaGtuOAglxcbuWboOeCuuWwjeaWvOWFkuaZguiomOaGtuS4reeahOWCs+e1seK+ueawo+W/teW/teS4jeW/mO+8jOK/jui1t+WLh+awoyDlibXmpa3jgIHlu7bnuozpgJnku73mg4XmhJ/vvIzku6Xlvqnlj6Tmg4Xmh7fvvIzmkK3phY3libXmhI/nmoTlt6cgIOaAne+8jOW7uuK9tOi1t+WFqOaWsOeahOaEn+WPl+OAguK9pOaVhemEieeahOiLseK9guirp+K+sy3jgIziv4LmsaDivIjjgI3ngrrlkI3vvIzlvp7phInkuIvkvobliLDpg70g5biC77yM5ZCR5pu05aSa4ryI5LuL57S54r6D4ryw55qE5a626YSJ77yM5Y6f5pys54K66buY6buY54Sh6IGe55qE6KGX4r6T55qE4ryp5pSk77yM5Zug54K65bCN5ZOB6LOq55qE5aCF5oyB6IiH55yf6Kqg5b6F4ryI55qE5oWL5bqm77yM5oWiIOaFouW7uuK9tOi1t+efpeWQjeW6pu+8jOa2iOiyu+iAheK8neK9v+K+ueWCs+OAgeWqkumrlOS4u+WLleaOoeioquS5iyDkuIvvvIzlu7rivbTotbflk4HniYznjajivIDnhKHivIbnmoTlg7nlgLzjgIJcIixcbiAgXCLnhKHoq5bmmK/lnKjlnLDmiJbmmK/lvp7lhbbku5bln47pjq7kvobliLDpgJnlgIvlnLDmlrnnmoTmiJHlgJHvvIzml6Xml6XnkrDnuZ7lnKjlsbHmnpfmsLTmtZrjgIHnlLDph47muKDmtYHvvIzku6Xlj4rlpJzoo6HnhKHmtq/nmoTmmJ/nqbrjgILntpPpgY7kuIDmrrXmmYLplpPnmoTmsonmvrHlvozkuI3lg4Xlg4XmmK/nnIvopovkuobnvo7lpb3vvIzmm7TnnIvopovkuobnlJ/lkb3nmoTlipvph4/jgILmiJHlgJHlkIToh6rmhpHol4nokZfoh6rlt7HnmoTpm5nmiYvvvIzmk7flj5bkvoboh6rouqvml4HmnIDlrrnmmJPlj5blvpfnmoTntKDmnZDvvIzlibXkvZzokZfnlJ/mtLvkuK3miJHlgJHllpzmhJvnmoTpgqPku73nvo7lpb3jgIJcIlxuXTtcblxuY29uc3QgbmV3TW90aW9uU2xpZGVyID0gKCkgPT4ge1xuXG4gIC8vIGNvbnN0IHsgbWFya2V0cyB9ID0gY29uZmlnO1xuXG4gIC8vIGNvbnN0IHsgdGl0bGUsIGl0ZW1zOiBtYXJrZXRMaXN0cyB9ID0gbWFya2V0cztcblxuICBjb25zdCBbW3BhZ2UsIGRpcmVjdGlvbl0sIHNldFBhZ2VdID0gdXNlU3RhdGUoWzAsIDBdKTtcblxuICAvLyBjb25zdCBpbWFnZUluZGV4ID0gd3JhcCgwLCBpbWFnZXNTLmxlbmd0aCwgcGFnZSk7XG4gIGNvbnN0IGltYWdlSW5kZXggPSB3cmFwKDAsIGltYWdlcy5sZW5ndGgsIHBhZ2UpO1xuXG5cbiAgY29uc3QgcGFnaW5hdGUgPSAobmV3RGlyZWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICBzZXRQYWdlKFtwYWdlICsgbmV3RGlyZWN0aW9uLCBuZXdEaXJlY3Rpb25dKTtcbiAgfTtcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LThcIiBpZD1cIm1hcmtldHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXgtYXV0byBweC0yIHRleHQtd2hpdGVgfSBzdHlsZT17e21heEhlaWdodDogJzEwMHZoJywgbWluSGVpZ2h0OiAnODB2aCcsIGhlaWdodDogJ2F1dG8nfX0+XG4gICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0gY3VzdG9tPXtkaXJlY3Rpb259PlxuICAgICAgICAgICAgey8qIHttYXJrZXRMaXN0cy5tYXAoKG1hcmtldCkgPT4gKCAqL31cbiAgICAgICAgICAgIHsvKiA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBwbGFjZS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmgyIGNsYXNzTmFtZT1cInotMjAgdGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1ibGFjayBmb250LVRhaXBlaUJvbGQgd2hpdGVzcGFjZS1wcmUtbGluZVwiID57aW1hZ2VUZXh0W2ltYWdlSW5kZXhdfTwvbW90aW9uLmgyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWQ6bXgtNjQgbXgtMTAgbXktMyBtZDpyb3VuZGVkLVs0MHB4XSByb3VuZGVkLVszMHB4XSBiYWNrZHJvcC1ibHVyLVsxMDBweF0gYmctd2hpdGUgYmctb3BhY2l0eS0xMCBzaGFkb3ctbWRcIj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmgyIGNsYXNzTmFtZT1cInotMjAgdGV4dC1zbSB0ZXh0LXdoaXRlIG1kOnRleHQteGwgZm9udC1UYWlwZWlCb2xkIG1kOm14LTE0IG14LTQgbXktNSB3aGl0ZXNwYWNlLXByZS1saW5lXCIgPntpbWFnZURlc2NyaXBbaW1hZ2VJbmRleF19PC9tb3Rpb24uaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgICAgICBrZXk9e3BhZ2V9XG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VzW2ltYWdlSW5kZXhdfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlwIHJvdW5kZWQtM3hsIG1kOmgtOTYgaC01NlwiXG4gICAgICAgICAgICAgIC8vIHN0eWxlPXt7bWF4V2lkdGg6ICczMHZ3JywgbWluV2lkdGg6ICczMHZ3Jywgd2lkdGg6ICdhdXRvJ319XG4gICAgICAgICAgICAgIGN1c3RvbT17ZGlyZWN0aW9ufVxuICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICAgICAgICAgIGluaXRpYWw9XCJlbnRlclwiXG4gICAgICAgICAgICAgIGFuaW1hdGU9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBleGl0PVwiZXhpdFwiXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICB4OiB7IHR5cGU6IFwic3ByaW5nXCIsIHN0aWZmbmVzczogMzAwLCBkYW1waW5nOiA0MCB9LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHsgZHVyYXRpb246IDAuMSB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRyYWc9XCJ4XCJcbiAgICAgICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7IGxlZnQ6IDAsIHJpZ2h0OiAwIH19XG4gICAgICAgICAgICAgIGRyYWdFbGFzdGljPXsxfVxuICAgICAgICAgICAgICBvbkRyYWdFbmQ9eyhlLCB7IG9mZnNldCwgdmVsb2NpdHkgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN3aXBlID0gc3dpcGVQb3dlcihvZmZzZXQueCwgdmVsb2NpdHkueCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3dpcGUgPCAtc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgcGFnaW5hdGUoMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzd2lwZSA+IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgcGFnaW5hdGUoLTEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPC9tb3Rpb24uZGl2PiAqL31cbiAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5leHQgbXQtNVwiIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKDEpfSBzdHlsZT17e3JpZ2h0OiAnNyUnLCBoZWlnaHQ6ICcwJSd9fT5cbiAgICAgICAge1wi4oCjXCJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldlwiIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKC0xKX0gc3R5bGU9e3tsZWZ0OiAnNyUnLCB0cmFuc2Zvcm06ICdzY2FsZSgtMSknfX0+XG4gICAgICAgIHtcIuKAo1wifVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAvLyA8L3NlY3Rpb24+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ld01vdGlvblNsaWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwid3JhcCIsInZhcmlhbnRzIiwiZW50ZXIiLCJkaXJlY3Rpb24iLCJ4Iiwib3BhY2l0eSIsImNlbnRlciIsInpJbmRleCIsImV4aXQiLCJzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQiLCJzd2lwZVBvd2VyIiwib2Zmc2V0IiwidmVsb2NpdHkiLCJNYXRoIiwiYWJzIiwiaW1hZ2VzIiwiaW1hZ2VUZXh0IiwiaW1hZ2VEZXNjcmlwIiwibmV3TW90aW9uU2xpZGVyIiwicGFnZSIsInNldFBhZ2UiLCJpbWFnZUluZGV4IiwibGVuZ3RoIiwicGFnaW5hdGUiLCJuZXdEaXJlY3Rpb24iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJkaXYiLCJzdHlsZSIsIm1heEhlaWdodCIsIm1pbkhlaWdodCIsImhlaWdodCIsImluaXRpYWwiLCJjdXN0b20iLCJoMiIsImltZyIsInNyYyIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJkdXJhdGlvbiIsImRyYWciLCJkcmFnQ29uc3RyYWludHMiLCJsZWZ0IiwicmlnaHQiLCJkcmFnRWxhc3RpYyIsIm9uRHJhZ0VuZCIsImUiLCJzd2lwZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrIiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MotionSlider.tsx\n"));

/***/ })

});