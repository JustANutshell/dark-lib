export default class timer {
    start: Date;
    name: string;
    expectedTimeLength: number;
    constructor(name: string, expectedTimeLength?: number);
    end(out?: any): void;
}
