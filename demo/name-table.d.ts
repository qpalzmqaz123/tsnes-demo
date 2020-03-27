import { IEmulator } from '../src/api/emulator';
export declare class NameTable {
    private readonly emulator;
    private readonly canvas;
    private readonly context;
    private readonly imageData;
    private readonly AddressTable;
    private interval;
    constructor(emulator: IEmulator, canvas: HTMLCanvasElement, context?: CanvasRenderingContext2D, imageData?: ImageData);
    start(): void;
    stop(): void;
    private refresh;
}
