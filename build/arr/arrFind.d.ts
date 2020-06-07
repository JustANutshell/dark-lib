declare type arrFindResponse = {
    foundAnything: true;
    value: any;
    index: number;
} | {
    foundAnything: false;
};
export declare function arrFind(arr: any[], func: (arrEntry: any) => boolean): arrFindResponse;
export declare function arrFindFuncAsync(arr: any[], func: (arrEntry: any) => Promise<boolean>): Promise<arrFindResponse>;
export declare function arrFindAsync(arr: any[], func: (arrEntry: any) => boolean | Promise<boolean>): Promise<arrFindResponse>;
export {};
