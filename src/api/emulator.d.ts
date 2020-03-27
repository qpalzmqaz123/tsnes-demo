import { IStandardController } from './controller';
export interface IOptions {
    sampleRate: number;
    onSample: (volume: number) => void;
    onFrame: (frame: Uint8Array) => void;
    sramLoad?: Uint8Array;
}
export interface IEmulator {
    readonly standardController1: IStandardController;
    readonly standardController2: IStandardController;
    readonly sram: Uint8Array;
    clock(): void;
    frame(): void;
}
