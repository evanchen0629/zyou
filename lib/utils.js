"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.response2jsonschema = exports.getParams2jsonschema = exports.params2jsonschema = exports.mkdirsSync = exports.search = exports.firstLowerCase = exports.firstUpperCase = exports.formatParamsInterface = exports.formatAlias = exports.formatResponseName = exports.formatParamsName = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const formatParamsName = (name) => {
    return `I${name}Request`;
};
exports.formatParamsName = formatParamsName;
const formatResponseName = (name) => {
    return `I${name}Response`;
};
exports.formatResponseName = formatResponseName;
const formatAlias = (name) => {
    const list = name.split('/');
    const tempname = list.reduce((acc, cur, i) => {
        if (i === 0) {
            return (acc += cur);
        }
        return (acc += (0, exports.firstUpperCase)(cur.split('')));
    }, '');
    return (0, exports.firstLowerCase)(tempname.split(''));
};
exports.formatAlias = formatAlias;
const formatParamsInterface = (name, type) => {
    const list = name.split('/');
    const tempname = list.reduce((acc, cur, i) => {
        if (i === 0) {
            return (acc += cur);
        }
        return (acc += (0, exports.firstUpperCase)(cur.split('')));
    }, '');
    return `I${tempname}${type === 'params' ? 'Request' : 'Response'}`;
};
exports.formatParamsInterface = formatParamsInterface;
const firstUpperCase = ([first, ...rest]) => first.toUpperCase() + rest.join('');
exports.firstUpperCase = firstUpperCase;
const firstLowerCase = ([first, ...rest]) => first.toLowerCase() + rest.join('');
exports.firstLowerCase = firstLowerCase;
const search = (object, value) => {
    for (let key in object) {
        if (key === value)
            return [key];
        if (typeof object[key] === 'object') {
            let temp = (0, exports.search)(object[key], value);
            if (temp)
                return [key, temp].flat();
        }
    }
};
exports.search = search;
function mkdirsSync(dirname) {
    if (fs_1.default.existsSync(dirname)) {
        return true;
    }
    else {
        if (mkdirsSync(path_1.default.dirname(dirname))) {
            if (dirname.endsWith('ts')) {
                fs_1.default.writeFileSync(dirname, '', { flag: 'w' });
            }
            else {
                fs_1.default.mkdirSync(dirname);
            }
            return true;
        }
    }
}
exports.mkdirsSync = mkdirsSync;
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
        return (0, exports.getParams2jsonschema)(params);
    }
};
exports.params2jsonschema = params2jsonschema;
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
exports.getParams2jsonschema = getParams2jsonschema;
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
exports.response2jsonschema = response2jsonschema;
