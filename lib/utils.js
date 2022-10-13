"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rmEmptyDir = exports.emptyDir = exports.dirExists = exports.response2jsonschema = exports.getParams2jsonschema = exports.params2jsonschema = exports.mkdirsSync = exports.search = exports.firstLowerCase = exports.firstUpperCase = exports.formatParamsInterface = exports.formatAlias = exports.formatResponseName = exports.formatParamsName = void 0;
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
            if (!definitionsKey) {
                return {
                    definitions,
                    $ref: params[0].schema.items.$ref,
                };
            }
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
            return { ...response.schema };
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
/**
 * 读取路径信息
 * @param {string} path 路径
 */
function getStat(path) {
    return new Promise((resolve, reject) => {
        fs_1.default.stat(path, (err, stats) => {
            if (err) {
                resolve(false);
            }
            else {
                resolve(stats);
            }
        });
    });
}
/**
 * 创建路径
 * @param {string} dir 路径
 */
function mkdir(dir) {
    return new Promise((resolve, reject) => {
        fs_1.default.mkdir(dir, (err) => {
            if (err) {
                resolve(false);
            }
            else {
                resolve(true);
            }
        });
    });
}
/**
 * 路径是否存在，不存在则创建
 * @param {string} dir 路径
 */
async function dirExists(dir) {
    let isExists = (await getStat(dir));
    //如果该路径且不是文件，返回true
    if (isExists && isExists.isDirectory()) {
        return true;
    }
    else if (isExists) {
        //如果该路径存在但是文件，返回false
        return false;
    }
    //如果该路径不存在
    let tempDir = path_1.default.parse(dir).dir; //拿到上级路径
    //递归判断，如果上级目录也不存在，则会代码会在此处继续循环执行，直到目录存在
    let status = await dirExists(tempDir);
    let mkdirStatus;
    if (status) {
        mkdirStatus = await mkdir(dir);
    }
    return mkdirStatus;
}
exports.dirExists = dirExists;
//删除所有的文件(将所有文件夹置空)
function emptyDir(filePath) {
    const files = fs_1.default.readdirSync(filePath); //读取该文件夹
    files.forEach((file) => {
        const nextFilePath = `${filePath}/${file}`;
        const states = fs_1.default.statSync(nextFilePath);
        if (states.isDirectory()) {
            emptyDir(nextFilePath);
        }
        else {
            fs_1.default.unlinkSync(nextFilePath);
        }
    });
}
exports.emptyDir = emptyDir;
//删除所有的空文件夹
function rmEmptyDir(filePath) {
    const files = fs_1.default.readdirSync(filePath);
    if (files.length === 0) {
        fs_1.default.rmdirSync(filePath);
    }
    else {
        let tempFiles = 0;
        files.forEach((file) => {
            tempFiles++;
            const nextFilePath = `${filePath}/${file}`;
            rmEmptyDir(nextFilePath);
        });
        //删除母文件夹下的所有字空文件夹后，将母文件夹也删除
        if (tempFiles === files.length) {
            fs_1.default.rmdirSync(filePath);
        }
    }
}
exports.rmEmptyDir = rmEmptyDir;
