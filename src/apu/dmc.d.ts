import { uint8 } from '../api/types';
import { IBus } from '../api/bus';
import { IInterrupt } from '../api/interrupt';
export declare class Dmc {
    volume: number;
    isEnabled: boolean;
    cpuBus: IBus;
    bytesRemainingCounter: number;
    interrupt: IInterrupt;
    interruptFlag: boolean;
    private isMuted;
    private isIrqEnabled;
    private isLoopEnabled;
    private frequency;
    private loadCounter;
    private sampleAddress;
    private sampleLength;
    private clocks;
    private sampleBuffer;
    private addressCounter;
    private bitsRemainingCounter;
    clock(): void;
    write(offset: uint8, data: uint8): void;
    private restartSample;
    private memoryReader;
    private outputUnit;
}
