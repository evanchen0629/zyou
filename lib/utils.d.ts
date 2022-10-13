export declare const formatParamsName: (name: string) => string;
export declare const formatResponseName: (name: string) => string;
export declare const formatAlias: (name: string) => string;
export declare const formatParamsInterface: (name: string, type: 'params' | 'response') => string;
export declare const firstUpperCase: ([first, ...rest]: string[]) => string;
export declare const firstLowerCase: ([first, ...rest]: string[]) => string;
export declare const search: (object: Record<string, any>, value: string) => any;
export declare function mkdirsSync(dirname: string): true | undefined;
export declare const params2jsonschema: (params: any[], definitions: any, methods: string, path: any) => {
    type?: undefined;
    properties?: undefined;
} | {
    type: string;
    properties: any;
} | {
    definitions: any;
    $ref: any;
} | undefined;
export declare const getParams2jsonschema: (params: any[]) => {
    type?: undefined;
    properties?: undefined;
} | {
    type: string;
    properties: any;
};
export declare const response2jsonschema: (response: any, definitions: any) => any;
/**
 * 路径是否存在，不存在则创建
 * @param {string} dir 路径
 */
export declare function dirExists(dir: string): Promise<unknown>;
export declare function emptyDir(filePath: string): void;
export declare function rmEmptyDir(filePath: string): void;
