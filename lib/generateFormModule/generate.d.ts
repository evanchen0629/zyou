declare const _default: (data: any, path: string, methodsPatams: string) => Promise<{
    paramsJsonSchema: {
        type?: undefined;
        properties?: undefined;
    } | {
        type: string;
        properties: any;
    } | {
        definitions: any;
        $ref: any;
    } | undefined;
    responseJsonSchema: any;
}>;
export default _default;
