import { IMapper } from '../api/mapper';
import { IInterrupt } from '../api/interrupt';
import { uint16, uint8 } from '../api/types';
import { ICartridge } from '../api/cartridge';
export declare class Mapper1 implements IMapper {
    private readonly cartridge;
    private readonly ram;
    private readonly prg;
    private readonly chr;
    private readonly prgBanks;
    interrupt: IInterrupt;
    private shiftRegister;
    private chrBankMode;
    private chrBanks;
    private prgBankMode;
    private prgBank;
    constructor(cartridge: ICartridge, ram: Uint8Array, prg: Uint8Array, chr: Uint8Array, prgBanks?: number);
    read(address: uint16): uint8;
    write(address: uint16, data: uint8): void;
    ppuClockHandle(scanLine: number, cycle: number): void;
    private loadRegister;
    private writeRegister;
    private readChr;
    private writeChr;
    private readPrg;
    private chrOffset;
    private prgOffset;
}
