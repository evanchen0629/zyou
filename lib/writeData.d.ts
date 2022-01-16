export default function writeData(type: 'params' | 'response', path: string, data: any): Promise<void>;
export declare const typeMapping: (config: any) => {
    params: {
        format: (name: string) => string;
        writePath: string;
    };
    response: {
        format: (name: string) => string;
        writePath: string;
    };
};
