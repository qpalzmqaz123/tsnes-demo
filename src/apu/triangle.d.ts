import { uint8 } from '../api/types';
import { IChannel } from '../api/apu';
export declare class Triangle implements IChannel {
    volume: number;
    lengthCounter: number;
    private lenghtCounterHalt;
    private linearCounterLoad;
    private linearCounterReloadFlag;
    private linearCounterValue;
    private timer;
    private internalTimer;
    private counter;
    private enable;
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    clock(): void;
    processEnvelope(): void;
    processLinearCounter(): void;
    processLengthCounter(): void;
    processSweep(): void;
    write(offset: uint8, data: uint8): void;
    private step;
}
