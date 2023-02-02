"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/cohere";
exports.ids = ["pages/api/cohere"];
exports.modules = {

/***/ "cohere-ai":
/*!****************************!*\
  !*** external "cohere-ai" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("cohere-ai");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/cohere.js":
/*!*********************************!*\
  !*** ./src/pages/api/cohere.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler),\n/* harmony export */   \"fetchConflict\": () => (/* binding */ fetchConflict),\n/* harmony export */   \"fetchOptions\": () => (/* binding */ fetchOptions),\n/* harmony export */   \"fetchResolution\": () => (/* binding */ fetchResolution),\n/* harmony export */   \"fetchSetting\": () => (/* binding */ fetchSetting)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst cohere = __webpack_require__(/*! cohere-ai */ \"cohere-ai\");\ncohere.init(\"FEOSf1ZmJfkWKBcgsE5eClAShxABsSC2TEbzn4o2\");\nconst pronounMap = new Map();\npronounMap.set(\"he/him\", [\n    \"he\",\n    \"him\",\n    \"his\",\n    \"himself\"\n]);\npronounMap.set(\"she/her\", [\n    \"she\",\n    \"her\",\n    \"hers\",\n    \"herself\"\n]);\npronounMap.set(\"they/them\", [\n    \"they\",\n    \"them\",\n    \"theirs\",\n    \"themselves\"\n]);\npronounMap.set(\"Xe/Xir\", [\n    \"Xe\",\n    \"Xir\",\n    \"Xem\",\n    \"Xeir\"\n]);\nasync function handler(req, res) {\n    /*\n    const dbDir = path.join(process.cwd(), 'db');\n    const db = dbDir + '/history.txt'\n\n\n    if (section == 'introduction') {\n        fs.writeFile(db, \"\")\n    }\n    if (section == 'middle' || section == 'conclusion') {\n        fs.appendFile(db, \"\\n\" + action)\n    }\n\n    const promptHistory = await fs.readFile(db, 'utf8');\n\n    const promptHistory = \"\"\n    */ const response_text = await fetchSetting(req);\n    /*\n    if (section != 'option' && section != 'middle') {\n        fs.appendFile(db, response_text)\n    }\n\n     */ res.status(200).json({\n        text: response_text\n    });\n}\nasync function fetchOptions() {\n    let prompt = \"\";\n    let response = await cohere.generate({\n        model: \"command-xlarge-20221108\",\n        prompt: prompt,\n        max_tokens: 100,\n        temperature: 1.0,\n        k: 0,\n        p: 0.75,\n        frequency_penalty: 1,\n        presence_penalty: 1,\n        stop_sequences: [],\n        return_likelihoods: \"NONE\"\n    });\n    return response;\n}\nasync function fetchSetting(req) {\n    let prompt = \"Our hero \" + req.body[\"name\"] + \", finds \" + pronounMap.get(req.body[\"pronouns\"])[3] + \" feeling \" + req.body[\"feeling\"] + \" today. So \" + pronounMap.get(req.body[\"pronouns\"])[0] + \" decides to \" + req.body[\"action\"] + \"What happens next? Write the introduction to \" + req.body[\"name\"] + \"'s story.\";\n    let response = await cohere.generate({\n        model: \"command-xlarge-20221108\",\n        prompt: prompt,\n        max_tokens: 300,\n        temperature: 2.0,\n        k: 0,\n        p: 0.75,\n        frequency_penalty: 1,\n        presence_penalty: 1,\n        stop_sequences: [],\n        return_likelihoods: \"NONE\"\n    });\n    return response.body.generations[0].text;\n}\nasync function fetchConflict() {}\nasync function fetchResolution() {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NvaGVyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0I7QUFDWTtBQUVwQyxNQUFNRyxTQUFTQyxtQkFBT0EsQ0FBQztBQUV2QkQsT0FBT0UsSUFBSSxDQUFDO0FBRVosTUFBTUMsYUFBYSxJQUFJQztBQUN2QkQsV0FBV0UsR0FBRyxDQUFDLFVBQVU7SUFBQztJQUFNO0lBQU87SUFBTztDQUFVO0FBQ3hERixXQUFXRSxHQUFHLENBQUMsV0FBVztJQUFDO0lBQU87SUFBTztJQUFRO0NBQVU7QUFDM0RGLFdBQVdFLEdBQUcsQ0FBQyxhQUFhO0lBQUM7SUFBUTtJQUFRO0lBQVU7Q0FBYTtBQUNwRUYsV0FBV0UsR0FBRyxDQUFDLFVBQVU7SUFBQztJQUFNO0lBQU87SUFBTztDQUFPO0FBRXRDLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDOzs7Ozs7Ozs7Ozs7Ozs7SUFlQSxHQUVBLE1BQU1DLGdCQUFnQixNQUFNQyxhQUFhSDtJQUd6Qzs7Ozs7S0FLQyxHQUVEQyxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLE1BQU1KO0lBQWE7QUFDOUMsQ0FBQztBQUVNLGVBQWVLLGVBQWU7SUFDakMsSUFBSUMsU0FBUztJQUNiLElBQUlDLFdBQVcsTUFBTWhCLE9BQU9pQixRQUFRLENBQUM7UUFDakNDLE9BQU87UUFDUEgsUUFBUUE7UUFDUkksWUFBWTtRQUNaQyxhQUFhO1FBQ2JDLEdBQUc7UUFDSEMsR0FBRztRQUNIQyxtQkFBbUI7UUFDbkJDLGtCQUFrQjtRQUNsQkMsZ0JBQWdCLEVBQUU7UUFDbEJDLG9CQUFvQjtJQUN4QjtJQUNBLE9BQU9WO0FBQ1gsQ0FBQztBQUVNLGVBQWVOLGFBQWFILEdBQUcsRUFBRTtJQUNwQyxJQUFJUSxTQUFTLGNBQWNSLElBQUlvQixJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWF4QixXQUFXeUIsR0FBRyxDQUFDckIsSUFBSW9CLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsY0FDL0ZwQixJQUFJb0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0J4QixXQUFXeUIsR0FBRyxDQUFDckIsSUFBSW9CLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsaUJBQWlCcEIsSUFBSW9CLElBQUksQ0FBQyxTQUFTLEdBQ3JILGtEQUFrRHBCLElBQUlvQixJQUFJLENBQUMsT0FBTyxHQUFHO0lBRXpFLElBQUlYLFdBQVcsTUFBTWhCLE9BQU9pQixRQUFRLENBQUM7UUFDakNDLE9BQU87UUFDUEgsUUFBUUE7UUFDUkksWUFBWTtRQUNaQyxhQUFhO1FBQ2JDLEdBQUc7UUFDSEMsR0FBRztRQUNIQyxtQkFBbUI7UUFDbkJDLGtCQUFrQjtRQUNsQkMsZ0JBQWdCLEVBQUU7UUFDbEJDLG9CQUFvQjtJQUN4QjtJQUNBLE9BQU9WLFNBQVNXLElBQUksQ0FBQ0UsV0FBVyxDQUFDLEVBQUUsQ0FBQ2hCLElBQUk7QUFDNUMsQ0FBQztBQUVNLGVBQWVpQixnQkFBZ0IsQ0FFdEMsQ0FBQztBQUVNLGVBQWVDLGtCQUFrQixDQUV4QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BhZ2VzL2FwaS9jb2hlcmUuanM/YjhkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnO1xuXG5jb25zdCBjb2hlcmUgPSByZXF1aXJlKCdjb2hlcmUtYWknKTtcblxuY29oZXJlLmluaXQoJ0ZFT1NmMVptSmZrV0tCY2dzRTVlQ2xBU2h4QUJzU0MyVEViem40bzInKVxuXG5jb25zdCBwcm9ub3VuTWFwID0gbmV3IE1hcCgpO1xucHJvbm91bk1hcC5zZXQoJ2hlL2hpbScsIFsnaGUnLCAnaGltJywgJ2hpcycsICdoaW1zZWxmJ10pXG5wcm9ub3VuTWFwLnNldCgnc2hlL2hlcicsIFsnc2hlJywgJ2hlcicsICdoZXJzJywgJ2hlcnNlbGYnXSlcbnByb25vdW5NYXAuc2V0KCd0aGV5L3RoZW0nLCBbJ3RoZXknLCAndGhlbScsICd0aGVpcnMnLCAndGhlbXNlbHZlcyddKVxucHJvbm91bk1hcC5zZXQoJ1hlL1hpcicsIFsnWGUnLCAnWGlyJywgJ1hlbScsICdYZWlyJ10pXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICAvKlxuICAgIGNvbnN0IGRiRGlyID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYicpO1xuICAgIGNvbnN0IGRiID0gZGJEaXIgKyAnL2hpc3RvcnkudHh0J1xuXG5cbiAgICBpZiAoc2VjdGlvbiA9PSAnaW50cm9kdWN0aW9uJykge1xuICAgICAgICBmcy53cml0ZUZpbGUoZGIsIFwiXCIpXG4gICAgfVxuICAgIGlmIChzZWN0aW9uID09ICdtaWRkbGUnIHx8IHNlY3Rpb24gPT0gJ2NvbmNsdXNpb24nKSB7XG4gICAgICAgIGZzLmFwcGVuZEZpbGUoZGIsIFwiXFxuXCIgKyBhY3Rpb24pXG4gICAgfVxuXG4gICAgY29uc3QgcHJvbXB0SGlzdG9yeSA9IGF3YWl0IGZzLnJlYWRGaWxlKGRiLCAndXRmOCcpO1xuXG4gICAgY29uc3QgcHJvbXB0SGlzdG9yeSA9IFwiXCJcbiAgICAqL1xuXG4gICAgY29uc3QgcmVzcG9uc2VfdGV4dCA9IGF3YWl0IGZldGNoU2V0dGluZyhyZXEpXG5cblxuICAgIC8qXG4gICAgaWYgKHNlY3Rpb24gIT0gJ29wdGlvbicgJiYgc2VjdGlvbiAhPSAnbWlkZGxlJykge1xuICAgICAgICBmcy5hcHBlbmRGaWxlKGRiLCByZXNwb25zZV90ZXh0KVxuICAgIH1cblxuICAgICAqL1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB0ZXh0OiByZXNwb25zZV90ZXh0fSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaE9wdGlvbnMoKSB7XG4gICAgbGV0IHByb21wdCA9IFwiXCJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBjb2hlcmUuZ2VuZXJhdGUoe1xuICAgICAgICBtb2RlbDogJ2NvbW1hbmQteGxhcmdlLTIwMjIxMTA4JyxcbiAgICAgICAgcHJvbXB0OiBwcm9tcHQsXG4gICAgICAgIG1heF90b2tlbnM6IDEwMCxcbiAgICAgICAgdGVtcGVyYXR1cmU6IDEuMCxcbiAgICAgICAgazogMCxcbiAgICAgICAgcDogMC43NSxcbiAgICAgICAgZnJlcXVlbmN5X3BlbmFsdHk6IDEsXG4gICAgICAgIHByZXNlbmNlX3BlbmFsdHk6IDEsXG4gICAgICAgIHN0b3Bfc2VxdWVuY2VzOiBbXSxcbiAgICAgICAgcmV0dXJuX2xpa2VsaWhvb2RzOiAnTk9ORSdcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoU2V0dGluZyhyZXEpIHtcbiAgICBsZXQgcHJvbXB0ID0gXCJPdXIgaGVybyBcIiArIHJlcS5ib2R5WyduYW1lJ10gKyBcIiwgZmluZHMgXCIgKyBwcm9ub3VuTWFwLmdldChyZXEuYm9keVsncHJvbm91bnMnXSlbM10gKyBcIiBmZWVsaW5nIFwiXG4gICAgICAgICsgcmVxLmJvZHlbJ2ZlZWxpbmcnXSArIFwiIHRvZGF5LiBTbyBcIiArIHByb25vdW5NYXAuZ2V0KHJlcS5ib2R5Wydwcm9ub3VucyddKVswXSArIFwiIGRlY2lkZXMgdG8gXCIgKyByZXEuYm9keVsnYWN0aW9uJ10gK1xuICAgICAgICBcIldoYXQgaGFwcGVucyBuZXh0PyBXcml0ZSB0aGUgaW50cm9kdWN0aW9uIHRvIFwiICsgcmVxLmJvZHlbJ25hbWUnXSArIFwiJ3Mgc3RvcnkuXCI7XG5cbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBjb2hlcmUuZ2VuZXJhdGUoe1xuICAgICAgICBtb2RlbDogJ2NvbW1hbmQteGxhcmdlLTIwMjIxMTA4JyxcbiAgICAgICAgcHJvbXB0OiBwcm9tcHQsXG4gICAgICAgIG1heF90b2tlbnM6IDMwMCxcbiAgICAgICAgdGVtcGVyYXR1cmU6IDIuMCxcbiAgICAgICAgazogMCxcbiAgICAgICAgcDogMC43NSxcbiAgICAgICAgZnJlcXVlbmN5X3BlbmFsdHk6IDEsXG4gICAgICAgIHByZXNlbmNlX3BlbmFsdHk6IDEsXG4gICAgICAgIHN0b3Bfc2VxdWVuY2VzOiBbXSxcbiAgICAgICAgcmV0dXJuX2xpa2VsaWhvb2RzOiAnTk9ORSdcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2UuYm9keS5nZW5lcmF0aW9uc1swXS50ZXh0XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaENvbmZsaWN0KCkge1xuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFJlc29sdXRpb24oKSB7XG5cbn1cbiJdLCJuYW1lcyI6WyJwYXRoIiwicHJvbWlzZXMiLCJmcyIsImNvaGVyZSIsInJlcXVpcmUiLCJpbml0IiwicHJvbm91bk1hcCIsIk1hcCIsInNldCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXNwb25zZV90ZXh0IiwiZmV0Y2hTZXR0aW5nIiwic3RhdHVzIiwianNvbiIsInRleHQiLCJmZXRjaE9wdGlvbnMiLCJwcm9tcHQiLCJyZXNwb25zZSIsImdlbmVyYXRlIiwibW9kZWwiLCJtYXhfdG9rZW5zIiwidGVtcGVyYXR1cmUiLCJrIiwicCIsImZyZXF1ZW5jeV9wZW5hbHR5IiwicHJlc2VuY2VfcGVuYWx0eSIsInN0b3Bfc2VxdWVuY2VzIiwicmV0dXJuX2xpa2VsaWhvb2RzIiwiYm9keSIsImdldCIsImdlbmVyYXRpb25zIiwiZmV0Y2hDb25mbGljdCIsImZldGNoUmVzb2x1dGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/cohere.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/cohere.js"));
module.exports = __webpack_exports__;

})();