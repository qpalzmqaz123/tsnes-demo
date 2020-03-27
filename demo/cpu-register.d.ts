import { IEmulator } from '../src/api/emulator';
export declare class CpuRegister {
    private readonly emulator;
    private readonly element;
    private interval;
    constructor(emulator: IEmulator, element: HTMLElement);
    start(): void;
    stop(): void;
    private refresh;
}
