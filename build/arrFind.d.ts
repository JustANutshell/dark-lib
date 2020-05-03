declare type arrFindResponse = {
    foundAnything: true;
    foundValue: any;
    foundIndex: number;
} | {
    foundAnything: false;
};
export declare function arrFind(arr: object, func: (arrEntry: any) => boolean): arrFindResponse;
export declare function arrFindAsync(arr: object, func: (arrEntry: any) => boolean): Promise<arrFindResponse>;
export {};
