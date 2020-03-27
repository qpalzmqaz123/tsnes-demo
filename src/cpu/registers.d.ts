import { IRegisters } from '../api/cpu';
import { uint16, uint8 } from '../api/types';
export declare class Registers implements IRegisters {
    PC: uint16;
    SP: uint8;
    P: uint8;
    A: uint8;
    X: uint8;
    Y: uint8;
}
