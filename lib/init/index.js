"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const colors_1 = __importDefault(require("colors"));
exports.default = () => {
    const typesConfig = fs_1.default.readFileSync(path_1.default.join(path_1.default.dirname(__dirname), '../typesConfig.json'), { encoding: 'utf8' });
    fs_1.default.writeFileSync(path_1.default.join(path_1.default.resolve(process.cwd()), 'typesConfig.json'), typesConfig);
    console.log(colors_1.default.green('初始化配置文件成功'));
};
