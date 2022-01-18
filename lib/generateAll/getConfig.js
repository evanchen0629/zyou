"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
exports.default = () => {
    const configPath = path_1.default.resolve('typesConfig.json');
    if (configPath && fs_1.default.existsSync(configPath)) {
        return require(configPath);
    }
    return require('../typesConfig.json');
};
