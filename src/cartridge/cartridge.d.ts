import { IMapper } from 'src/api/mapper';
import { ICartridge, IROMInfo } from '../api/cartridge';
export declare class Cartridge implements ICartridge {
    readonly mapper: IMapper;
    readonly info: IROMInfo;
    constructor(data: Uint8Array, sram: Uint8Array);
    private parseROMInfo;
    private static checkConstant;
}
