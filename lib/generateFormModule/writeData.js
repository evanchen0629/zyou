"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeMapping = void 0;
const quickType_1 = require("../quickType");
const utils_1 = require("../utils");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getConfig_1 = __importDefault(require("../generateAll/getConfig"));
async function writeData(type, path, data) {
    const config = (0, getConfig_1.default)();
    const { lines } = await (0, quickType_1.quicktypeJSONSchema)('TypeScript', (0, exports.typeMapping)(config)[type].format(path
        .split('')
        .map((item, i) => {
        if (i === 0) {
            return item.toUpperCase();
        }
        return item;
    })
        .join('')), JSON.stringify(data));
    fs_1.default.writeFileSync(`${(0, exports.typeMapping)(config)[type].writePath}/typings/${path}.ts`, lines.join('\n'), {
        flag: 'a+',
    });
}
exports.default = writeData;
const typeMapping = (config) => {
    return {
        params: {
            format: utils_1.formatParamsName,
            writePath: path_1.default.resolve(process.cwd(), config.generateFormModule.path),
        },
        response: {
            format: utils_1.formatResponseName,
            writePath: path_1.default.resolve(process.cwd(), config.generateFormModule.path),
        },
    };
};
exports.typeMapping = typeMapping;
