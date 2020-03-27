import { IEmulator } from '../src/api/emulator';
export declare class ParttenTable {
    private readonly emulator;
    private readonly canvas;
    private readonly ppuAddress;
    private readonly context;
    private readonly imageData;
    private interval;
    constructor(emulator: IEmulator, canvas: HTMLCanvasElement, ppuAddress: number, context?: CanvasRenderingContext2D, imageData?: ImageData);
    start(): void;
    stop(): void;
    private refresh;
}
