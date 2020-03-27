import { IEmulator } from '../src/api/emulator';
export declare class DisASM {
    private readonly emulator;
    private readonly element;
    private cpuBus;
    private interval;
    constructor(emulator: IEmulator, element: HTMLElement);
    start(): void;
    stop(): void;
    private refresh;
    private disASM;
    private parseAddressingMode;
}
