"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const requestData_1 = __importDefault(require("./requestData"));
const generateDefinitions_1 = __importDefault(require("./generateDefinitions"));
const clearFile_1 = __importDefault(require("./clearFile"));
const getConfig_1 = __importDefault(require("./getConfig"));
const colors_1 = __importDefault(require("colors"));
async function main() {
    const config = (0, getConfig_1.default)();
    (0, clearFile_1.default)(config);
    const data = await (0, requestData_1.default)(config.path);
    (0, generateDefinitions_1.default)(data);
    process.on('exit', function () {
        console.log(`The source code is at ${colors_1.default.green('https://github.com/evanchen0629/zyou')}. If you have any questions, please ask in issue, or you can email me at ${colors_1.default.green('chenchengzuo@zhongan.com')}`);
    });
}
main();
