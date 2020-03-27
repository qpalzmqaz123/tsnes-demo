import { IEmulator } from '../src/api/emulator';
export declare class Palette {
    private readonly emulator;
    private readonly canvas;
    private readonly ppuAddress;
    private readonly context;
    private interval;
    constructor(emulator: IEmulator, canvas: HTMLCanvasElement, ppuAddress: number, context?: CanvasRenderingContext2D);
    start(): void;
    stop(): void;
    private refresh;
}
