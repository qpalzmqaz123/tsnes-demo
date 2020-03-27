import { uint16, uint8 } from './types';
export declare enum SpriteSize {
    SIZE_8X8 = 8,
    SIZE_8X16 = 16
}
export interface IController {
    data: uint8;
    readonly baseNameTableAddress: uint16;
    readonly vramIncrementStepSize: uint8;
    readonly spritePatternTableAddress: uint16;
    readonly backgroundPatternTableAddress: uint16;
    readonly spriteSize: SpriteSize;
    readonly isNMIEnabled: boolean;
}
export interface IMask {
    data: uint8;
    readonly isColorful: boolean;
    readonly isShowBackgroundLeft8px: boolean;
    readonly isShowSpriteLeft8px: boolean;
    readonly isShowBackground: boolean;
    readonly isShowSprite: boolean;
    readonly isEmphasizeRed: boolean;
    readonly isEmphasizeGreen: boolean;
    readonly isEmphasizeBlue: boolean;
}
export interface IStatus {
    readonly data: uint8;
    isSpriteOverflow: boolean;
    isZeroSpriteHit: boolean;
    isVBlankStarted: boolean;
}
export interface IPPU {
    pixels: Uint8Array;
    clock(): void;
    cpuRead(address: uint16): uint8;
    cpuWrite(address: uint16, data: uint8): void;
    dmaCopy(data: Uint8Array): any;
}
