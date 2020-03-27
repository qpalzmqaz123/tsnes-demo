import { uint16, uint8 } from './types';
export declare enum Flags {
    C = 1,
    Z = 2,
    I = 4,
    D = 8,
    B = 16,
    U = 32,
    V = 64,
    N = 128
}
export interface IRegisters {
    readonly PC: uint16;
    readonly SP: uint8;
    readonly P: uint8;
    readonly A: uint8;
    readonly X: uint8;
    readonly Y: uint8;
}
export interface ICPU {
    reset(): void;
    clock(): void;
    irq(): void;
    nmi(): void;
}
