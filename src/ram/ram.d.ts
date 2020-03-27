import { IRAM } from '../api/ram';
import { uint16, uint8 } from '../api/types';
export declare class RAM implements IRAM {
    private readonly offset;
    private readonly ram;
    constructor(size: number, offset?: number);
    read(address: uint16): uint8;
    write(address: uint16, data: uint8): void;
}
