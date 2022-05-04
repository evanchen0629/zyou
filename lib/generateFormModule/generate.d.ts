declare const _default: (data: any, pathParams: string, methodsPatams: string) => Promise<{
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
    responseJsonSchema: {
        definitions?: undefined;
        $ref?: undefined;
    } | {
        definitions: any;
        $ref: any;
    };
}>;
export default _default;
