import { IEmulator } from '../src/api/emulator';
export declare class Audio {
    emulator: IEmulator;
    private ctx;
    private source;
    private scriptNode;
    private buffer;
    start(): void;
    get sampleRate(): number;
    onSample(volume: number): void;
    private process;
    private waitSample;
}
