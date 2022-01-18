import generateAll from './generateAll';
export declare const prompList: {
    type: string;
    message: string;
    name: string;
    choices: {
        name: string;
        value: string;
    }[];
}[];
export declare const typeMapping: {
    init: () => void;
    generateAll: typeof generateAll;
};
