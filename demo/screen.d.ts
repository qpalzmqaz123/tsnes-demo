import { IEmulator } from '../src/api/emulator';
export declare class Screen {
    private readonly canvas;
    private readonly context;
    emulator: IEmulator;
    isTrimBorder: boolean;
    private readonly hiddenCanvasElement;
    private readonly hiddenCanvasContext;
    private readonly hiddenScreenImgData;
    private readonly hiddenImage;
    constructor(canvas: HTMLCanvasElement, context?: CanvasRenderingContext2D);
    onFrame(frame: Uint32Array): void;
}
