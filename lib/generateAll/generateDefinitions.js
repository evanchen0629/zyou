"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const writeData_1 = __importDefault(require("./writeData"));
exports.default = (data) => {
    Reflect.ownKeys(data.paths).forEach(async (path, index) => {
        try {
            Reflect.ownKeys(data.paths[path]).forEach(async (methods) => {
                const params = data.paths[path][methods]?.parameters;
                const paramsJsonSchema = params2jsonschema(params, data.definitions, methods, path);
                const response = data.paths[path][methods].responses['200'];
                const responseJsonSchema = response2jsonschema(response, data.definitions);
                // const template = fs.readFileSync('./src/template.ts', {
                //   encoding: 'utf8',
                // })
                // const a = ejs.render(template, {
                //   alias: formatAlias(path as string),
                //   path,
                //   methods,
                //   params: formatParamsInterface(path as string, 'params'),
                //   response: formatParamsInterface(path as string, 'response'),
                // })
                // console.log(a)
                await (0, writeData_1.default)('params', path, paramsJsonSchema);
                await (0, writeData_1.default)('response', path, responseJsonSchema);
            });
        }
        catch (error) {
            console.log(path);
        }
    });
};
const params2jsonschema = (params, definitions, methods, path) => {
    if (methods === 'post') {
        try {
            const definitionsKey = params[0].schema.$ref;
            if (!definitionsKey)
                return {};
            return {
                definitions,
                $ref: definitionsKey,
            };
        }
        catch (error) {
            return {};
        }
    }
    if (methods === 'get') {
        return getParams2jsonschema(params);
    }
};
const getParams2jsonschema = (params) => {
    if (!params)
        return {};
    const properties = params.reduce((acc, cur) => {
        acc[cur.name] = {
            type: cur.type,
            format: cur.format,
            description: cur.description,
            allowEmptyValue: false,
        };
        return acc;
    }, {});
    return {
        type: 'object',
        properties,
    };
};
const response2jsonschema = (response, definitions) => {
    try {
        const definitionsKey = response.schema.$ref;
        if (!definitionsKey)
            return {};
        return {
            definitions,
            $ref: definitionsKey,
        };
    }
    catch (error) {
        return {};
    }
};
