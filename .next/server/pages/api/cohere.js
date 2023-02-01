"use strict";
(() => {
var exports = {};
exports.id = 88;
exports.ids = [88];
exports.modules = {

/***/ 500:
/***/ ((module) => {

module.exports = require("cohere-ai");

/***/ }),

/***/ 909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: ./src/pages/api/cohere.js


const cohere = __webpack_require__(500);
cohere.init("FEOSf1ZmJfkWKBcgsE5eClAShxABsSC2TEbzn4o2");
async function handler(req, res) {
    const name = req.body["name"];
    const feeling = req.body["feeling"];
    const action = req.body["action"];
    const pronouns = req.body["pronouns"];
    const section = req.body["section"];
    const pronounMap = new Map();
    pronounMap.set("he/him", [
        "he",
        "him",
        "his",
        "himself"
    ]);
    pronounMap.set("she/her", [
        "she",
        "her",
        "hers",
        "herself"
    ]);
    pronounMap.set("they/them", [
        "they",
        "them",
        "theirs",
        "themselves"
    ]);
    pronounMap.set("Xe/Xir", [
        "Xe",
        "Xir",
        "Xem",
        "Xeir"
    ]);
    const dbDir = external_path_default().join(process.cwd(), "db");
    const db = dbDir + "/history.txt";
    /*
    if (section == 'introduction') {
        fs.writeFile(db, "")
    }
    if (section == 'middle' || section == 'conclusion') {
        fs.appendFile(db, "\n" + action)
    }

    const promptHistory = await fs.readFile(db, 'utf8');
*/ const promptHistory = "";
    const prompt = setPrompt();
    function setPrompt() {
        if (section == "introduction") {
            return "Write me the first paragraph to a chaotic situation where our hero " + name + ", finds " + pronounMap.get(pronouns)[3] + " feeling " + feeling + " today. So " + pronounMap.get(pronouns)[0] + " decides to " + action + ". What does " + pronounMap.get(pronouns)[0] + " see?";
        } else if (section == "option") {
            return "Read this: " + promptHistory + "\nNow give an indexed list of four actions the character could take.";
        } else if (section == "middle") {
            return "Continue this story: " + promptHistory + "\nDescribe a problem the hero faces next.";
        } else if (section == "conclusion") {
            return promptHistory + "\n Now write a conclusion as to how the hero resolves the conflict.";
        }
    }
    const response = await cohere.generate({
        model: "command-xlarge-20221108",
        prompt: prompt,
        max_tokens: 454,
        temperature: 1.0,
        k: 0,
        p: 0.75,
        frequency_penalty: 1,
        presence_penalty: 1,
        stop_sequences: [],
        return_likelihoods: "NONE"
    });
    const response_text = response.body.generations[0].text;
    console.log("\n");
    console.log("\n");
    console.log(section);
    console.log("\n");
    console.log(action);
    console.log("\n");
    console.log(prompt);
    console.log("\n");
    console.log("\n");
    if (section != "option" && section != "middle") {
        external_fs_namespaceObject.promises.appendFile(db, response_text);
    }
    res.status(200).json({
        text: response_text
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(909));
module.exports = __webpack_exports__;

})();