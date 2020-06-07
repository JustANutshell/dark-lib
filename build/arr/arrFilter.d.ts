declare type arrFilterResponse = {
    content: {
        value: any;
        index: number;
    }[];
};
export declare function arrFilter(arr: any[], func: (arrEntry: any) => boolean): arrFilterResponse;
export declare function arrFilterFuncAsync(arr: any[], func: (arrEntry: any) => Promise<boolean>): Promise<arrFilterResponse>;
export declare function arrFilterAsync(arr: any[], func: (arrEntry: any) => boolean | Promise<boolean>): Promise<arrFilterResponse>;
export {};
