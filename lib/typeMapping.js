"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeMapping = exports.prompList = void 0;
const init_1 = __importDefault(require("./init"));
const generateAll_1 = __importDefault(require("./generateAll"));
const generateFormPath_1 = __importDefault(require("./generateFormPath"));
exports.prompList = [
    {
        type: 'list',
        message: '请选择',
        name: 'type',
        choices: [
            { name: '初始化文件', value: 'init' },
            { name: '生成全部', value: 'generateAll' },
            { name: '生成单条接口', value: 'generateFormPath' },
        ],
    },
];
exports.typeMapping = {
    init: init_1.default,
    generateAll: generateAll_1.default,
    generateFormPath: generateFormPath_1.default,
};
