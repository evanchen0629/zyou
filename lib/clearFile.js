"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("./utils");
function clearFile(config) {
    if (!fs_1.default.existsSync(path_1.default.resolve(process.cwd(), config.output))) {
        (0, utils_1.mkdirsSync)(path_1.default.resolve(process.cwd(), config.output));
    }
    if (fs_1.default.existsSync(`${path_1.default.resolve(process.cwd(), config.output)}/${config.paramsAlias}.ts`)) {
        fs_1.default.writeFileSync(`${path_1.default.resolve(process.cwd(), config.output)}/${config.paramsAlias}.ts`, '', { flag: 'w' });
    }
    if (fs_1.default.existsSync(`${path_1.default.resolve(process.cwd(), config.output)}/${config.responseAlias}.ts`)) {
        fs_1.default.writeFileSync(`${path_1.default.resolve(process.cwd(), config.output)}/${config.responseAlias}.ts`, '', { flag: 'w' });
    }
}
exports.default = clearFile;
