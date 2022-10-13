"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const getConfig_1 = __importDefault(require("../generateAll/getConfig"));
const requestData_1 = __importDefault(require("../generateAll/requestData"));
const generate_1 = __importDefault(require("./generate"));
const writeData_1 = __importDefault(require("./writeData"));
const clear_1 = __importDefault(require("./clear"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.default = async () => {
    const { path, methods } = await inquirer_1.default.prompt([
        {
            type: 'input',
            message: '请求地址',
            name: 'path',
        },
        {
            type: 'list',
            message: '请求方法',
            name: 'methods',
            choices: ['get', 'post', 'put', 'delete'],
        },
    ]);
    const config = (0, getConfig_1.default)();
    (0, clear_1.default)(config);
    let data;
    if (config.type && config.type === 'zapi') {
        const configPath = path_1.default.resolve('swaggerApi.json');
        if (configPath && fs_1.default.existsSync(configPath)) {
            data = require(configPath);
        }
    }
    else {
        data = await (0, requestData_1.default)(config.path);
    }
    try {
        const { paramsJsonSchema, responseJsonSchema } = await (0, generate_1.default)(data, path, methods);
        await (0, writeData_1.default)('params', path, paramsJsonSchema);
        await (0, writeData_1.default)('response', path, responseJsonSchema);
    }
    catch (error) {
    }
};
