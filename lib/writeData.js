"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeMapping = void 0;
const quickType_1 = require("./quickType");
const utils_1 = require("./utils");
const fs_1 = __importDefault(require("fs"));
const getConfig_1 = __importDefault(require("./getConfig"));
const path_1 = __importDefault(require("path"));
const colors_1 = __importDefault(require("colors"));
async function writeData(type, path, data) {
    const config = (0, getConfig_1.default)();
    const { lines } = await (0, quickType_1.quicktypeJSONSchema)('TypeScript', (0, exports.typeMapping)(config)[type].format(path), JSON.stringify(data));
    fs_1.default.writeFileSync((0, exports.typeMapping)(config)[type].writePath, lines.join('\n'), {
        flag: 'a+',
    });
    console.log(colors_1.default.yellow('generate: '), (0, utils_1.formatParamsInterface)(path, 'params'));
}
exports.default = writeData;
const typeMapping = (config) => {
    return {
        params: {
            format: utils_1.formatParamsName,
            writePath: `${path_1.default.resolve(process.cwd(), config.output)}/${config.paramsAlias}.ts`,
        },
        response: {
            format: utils_1.formatResponseName,
            writePath: `${path_1.default.resolve(process.cwd(), config.output)}/${config.responseAlias}.ts`,
        },
    };
};
exports.typeMapping = typeMapping;
