"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clearFile_1 = __importDefault(require("./clearFile"));
const generateDefinitions_1 = __importDefault(require("./generateDefinitions"));
const getConfig_1 = __importDefault(require("./getConfig"));
const requestData_1 = __importDefault(require("./requestData"));
const colors_1 = __importDefault(require("colors"));
async function generateAll() {
    const config = (0, getConfig_1.default)();
    (0, clearFile_1.default)(config);
    const data = await (0, requestData_1.default)(config.path);
    (0, generateDefinitions_1.default)(data);
    process.on('exit', function () {
        // TODO: 程序结束时(读写文件完成), 要去重
        console.log(`The source code is at ${colors_1.default.green('https://github.com/evanchen0629/zyou')}. If you have any questions, please ask in issue, or you can email me at ${colors_1.default.green('chenchengzuo@zhongan.com')}`);
    });
}
exports.default = generateAll;
