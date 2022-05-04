"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getConfig_1 = __importDefault(require("../generateAll/getConfig"));
const fs_1 = __importDefault(require("fs"));
const colors_1 = __importDefault(require("colors"));
const utils_1 = require("../utils");
const generate_1 = __importDefault(require("./generate"));
const writeData_1 = __importDefault(require("./writeData"));
const requestData_1 = __importDefault(require("../generateAll/requestData"));
const swc = require('@swc/core');
exports.default = async () => {
    const { generateFormModule: { path, scrm, agent }, } = (0, getConfig_1.default)();
    const services = fs_1.default.readFileSync(`${path}/services.ts`, 'utf-8');
    const { body } = await swc.parse(services, {
        syntax: 'typescript',
    });
    const configList = body.map((item) => {
        return {
            name: item.declaration.declarations[0].id.value,
            prefix: item.declaration.declarations[0].init.properties[1].value.value,
            url: item.declaration.declarations[0].init.properties[0].value
                .properties[0].value.value,
            method: item.declaration.declarations[0].init.properties[0].value.properties[1]
                .value.value,
        };
    });
    const scrmData = await (0, requestData_1.default)(scrm);
    const agentData = await (0, requestData_1.default)(agent);
    if (fs_1.default.existsSync(`${path}/typings`)) {
        (0, utils_1.emptyDir)(`${path}/typings`);
        (0, utils_1.rmEmptyDir)(`${path}/typings`);
    }
    await (0, utils_1.dirExists)(`${path}/typings`);
    configList.forEach(async (item) => {
        try {
            const { paramsJsonSchema, responseJsonSchema } = await (0, generate_1.default)(item.prefix === 'Scrm' ? scrmData : agentData, item.url.split('/').length === 4
                ? `/${item.url.split('/').splice(2, 2).join('/')}`
                : item.url, item.method.toLocaleLowerCase());
            await (0, writeData_1.default)('params', item.name, paramsJsonSchema);
            await (0, writeData_1.default)('response', item.name, responseJsonSchema);
        }
        catch (error) {
            console.log(colors_1.default.red(error));
        }
    });
    console.log(colors_1.default.green(`生成成功: )`));
};
