import { IEmulator } from '../src/api/emulator';
export declare class Status {
    private readonly emulator;
    private readonly element;
    private interval;
    private lastFrame;
    constructor(emulator: IEmulator, element: HTMLElement);
    start(): void;
    stop(): void;
    private refresh;
}
