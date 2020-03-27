import { IBus } from '../api/bus';
import { uint16, uint8 } from '../api/types';
import { IRAM } from '../api/ram';
import { IPPU } from '../api/ppu';
import { ICartridge } from '../api/cartridge';
import { IController } from '../api/controller';
import { IDMA } from '../api/dma';
import { IAPU } from '../api/apu';
export declare class CPUBus implements IBus {
    cartridge: ICartridge;
    ram: IRAM;
    ppu: IPPU;
    dma: IDMA;
    controller1: IController;
    controller2: IController;
    apu: IAPU;
    writeByte(address: uint16, data: uint8): void;
    writeWord(address: uint16, data: uint16): void;
    readByte(address: uint16): uint8;
    readWord(address: uint16): uint16;
}
