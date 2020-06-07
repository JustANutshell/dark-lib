declare type arrEntryResponse = {
    existing: true;
    value: any;
    index: number;
} | {
    existing: false;
};
declare enum arrEntryTypePickType {
    first = 0,
    lastWhenTrue = 1,
    last = 2
}
export declare function arrEntry(arr: any[], pickType: arrEntryTypePickType, fromBeginning: boolean, func: (entry: any) => boolean): arrEntryResponse;
export declare function arrEntryGetFirstEntry(arr: any[], func?: (entry: any) => boolean): arrEntryResponse;
export declare function arrEntryGetLastFirstMissEntry(arr: any[], func?: (entry: any) => boolean): arrEntryResponse;
export declare function arrEntryGetFirstMissEntry(arr: any[], func?: (entry: any) => boolean): arrEntryResponse;
export declare function arrEntryGetLastEntry(arr: any[], func?: (entry: any) => boolean): arrEntryResponse;
export declare function arrEntryGetFirstLastMissEntry(arr: any[], func?: (entry: any) => boolean): arrEntryResponse;
export declare function arrEntryGetLastMissEntry(arr: any[], func?: (entry: any) => boolean): arrEntryResponse;
export {};
