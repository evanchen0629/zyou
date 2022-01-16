export declare const formatParamsName: (name: string) => string;
export declare const formatResponseName: (name: string) => string;
export declare const formatAlias: (name: string) => string;
export declare const formatParamsInterface: (name: string, type: 'params' | 'response') => string;
export declare const firstUpperCase: ([first, ...rest]: string[]) => string;
export declare const firstLowerCase: ([first, ...rest]: string[]) => string;
export declare const search: (object: Record<string, any>, value: string) => any;
export declare function mkdirsSync(dirname: any): true | undefined;
