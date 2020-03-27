import { IMapper } from './mapper';
export declare enum Mirror {
    HORIZONTAL = 0,
    VERTICAL = 1,
    FOUR_SCREEN = 2,
    SINGLE_SCREEN_LOWER_BANK = 3,
    SINGLE_SCREEN_UPPER_BANK = 4
}
export interface IROMInfo {
    prg: number;
    chr: number;
    mapper: number;
    mirror: Mirror;
    hasBatteryBacked: boolean;
    isTrained: boolean;
}
export interface ICartridge {
    readonly info: IROMInfo;
    readonly mapper: IMapper;
}
