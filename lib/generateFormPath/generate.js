"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
exports.default = (data, pathParams, methodsPatams) => {
    const hasPath = Reflect.ownKeys(data.paths).includes(pathParams);
    if (!hasPath) {
        return Promise.reject(`${pathParams}地址不正确, 请输入正确的请求地址,例如/abc/test`);
    }
    const hasMethods = Reflect.ownKeys(data.paths?.[pathParams] ?? {}).includes(methodsPatams);
    if (!hasMethods) {
        return Promise.reject('请选择正确的请求方法');
    }
    const params = data.paths[pathParams][methodsPatams]?.parameters;
    const response = data.paths[pathParams][methodsPatams].responses['200'];
    const paramsJsonSchema = (0, utils_1.params2jsonschema)(params, data.definitions, methodsPatams, pathParams);
    const responseJsonSchema = (0, utils_1.response2jsonschema)(response, data.definitions);
    return Promise.resolve({ paramsJsonSchema, responseJsonSchema });
    //   Reflect.ownKeys(data.paths).forEach(async (path, index) => {
    //     try {
    //       Reflect.ownKeys(data.paths[path]).forEach(async (methods) => {
    //         const params = data.paths[path][methods]?.parameters
    //         const paramsJsonSchema = params2jsonschema(
    //           params,
    //           data.definitions,
    //           methods as string,
    //           path
    //         )
    //         const response = data.paths[path][methods].responses['200']
    //         const responseJsonSchema = response2jsonschema(
    //           response,
    //           data.definitions
    //         )
    //         if (pathParams === path) {
    //           return { paramsJsonSchema, responseJsonSchema }
    //         }
    //       })
    //     } catch (error) {
    //       console.log(path)
    //     }
    //   })
};
