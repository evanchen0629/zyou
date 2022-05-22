"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getConfig_1 = __importDefault(require("../generateAll/getConfig"));
const fs_1 = __importDefault(require("fs"));
const pathTemp = __importStar(require("path"));
const colors_1 = __importDefault(require("colors"));
const utils_1 = require("../utils");
const generate_1 = __importDefault(require("./generate"));
const writeData_1 = __importDefault(require("./writeData"));
const requestData_1 = __importDefault(require("../generateAll/requestData"));
const swc = require('@swc/core');
exports.default = async () => {
    const { generateFormModule: { path, urlMapping }, } = (0, getConfig_1.default)();
    const services = fs_1.default.readFileSync(`${path}/services.ts`, 'utf-8');
    // 如果目标目录下有配置文件则采用当前目录下的配置文件,如果没有采用全局的
    let urlMappingTemp = urlMapping;
    const configPath = pathTemp.resolve(`${path}/typesConfig.json`);
    if (configPath && fs_1.default.existsSync(configPath)) {
        urlMappingTemp = require(configPath).urlMapping;
    }
    // 解析目录下的service文件
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
    const urlMappingList = await Promise.all(Reflect.ownKeys(urlMappingTemp).map(async (item) => {
        const data = await (0, requestData_1.default)(urlMappingTemp[item]).catch((err) => {
            console.log(colors_1.default.red(err + '请确定url是否正确或接口地址能否正常访问'));
            process.exit();
        });
        return { key: item, data };
    }));
    if (fs_1.default.existsSync(`${path}/typings`)) {
        (0, utils_1.emptyDir)(`${path}/typings`);
        (0, utils_1.rmEmptyDir)(`${path}/typings`);
    }
    await (0, utils_1.dirExists)(`${path}/typings`);
    configList.forEach(async (item) => {
        let scrmData;
        if (item.prefix === 'Scrm') {
            scrmData = urlMappingList.find((temp) => temp.key === item.url.split('/')[0])?.data;
        }
        else {
            scrmData = urlMappingList.find((item) => item.key === 'agent')?.data;
        }
        try {
            const { paramsJsonSchema, responseJsonSchema } = await (0, generate_1.default)(scrmData, item.url.split('/').length === 3
                ? `${item.url.split('/').splice(1, 2).join('/')}`
                : item.url, item.method.toLocaleLowerCase());
            await (0, writeData_1.default)('params', item.name, paramsJsonSchema);
            await (0, writeData_1.default)('response', item.name, responseJsonSchema);
        }
        catch (error) {
            console.log(colors_1.default.red(`${item.url},该接口是否存在或者是否将该接口请求url配置到urlMapping中`));
            process.exit();
        }
    });
    console.log(colors_1.default.green(`生成成功: )`));
};
