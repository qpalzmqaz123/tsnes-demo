import { IEmulator, IOptions } from '../api/emulator';
import { IStandardController } from '../api/controller';
export declare class Emulator implements IEmulator {
    readonly standardController1: IStandardController;
    readonly standardController2: IStandardController;
    readonly sram: Uint8Array;
    private readonly cpu;
    private readonly ppu;
    private readonly cartridge;
    private readonly ppuRam;
    private readonly cpuRam;
    private readonly cpuBus;
    private readonly ppuBus;
    private readonly backgroundPalette;
    private readonly spritePalette;
    private readonly dma;
    private readonly interrupt;
    private readonly apu;
    constructor(nesData: Uint8Array, options?: IOptions);
    clock(): void;
    frame(): void;
    private parsePalettePixels;
    private parseOptions;
}
