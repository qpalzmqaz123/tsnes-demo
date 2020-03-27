import { uint16, uint8 } from '../api/types';
import { IChannel } from '../api/apu';
export declare class Noise implements IChannel {
    volume: number;
    isEnabled: boolean;
    lengthCounter: number;
    private isLengthCounterHalt;
    private isConstantVolume;
    private envelopeValue;
    private envelopeVolume;
    private envelopeCounter;
    private isLoopNoise;
    private noisePeriod;
    private internalTimer;
    clock(): void;
    processEnvelope(): void;
    processLinearCounter(): void;
    processLengthCounter(): void;
    processSweep(): void;
    write(offset: uint16, data: uint8): void;
    private step;
}
