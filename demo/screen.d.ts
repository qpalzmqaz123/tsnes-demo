import { IEmulator } from '../src/api/emulator';
export declare class Screen {
    private readonly canvas;
    private readonly scaleFactor;
    private readonly context;
    private readonly screenImgData;
    emulator: IEmulator;
    isTrimBorder: boolean;
    constructor(canvas: HTMLCanvasElement, scaleFactor?: number, context?: CanvasRenderingContext2D, screenImgData?: ImageData);
    onFrame(frame: Uint8Array): void;
}
