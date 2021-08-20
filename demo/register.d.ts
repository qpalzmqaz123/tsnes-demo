import { IEmulator } from '../src/api/emulator';
export declare class Register {
    private readonly emulator;
    private readonly element;
    private interval;
    constructor(emulator: IEmulator, element: HTMLElement);
    start(): void;
    stop(): void;
    private refresh;
}
