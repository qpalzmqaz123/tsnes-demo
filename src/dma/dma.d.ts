import { IDMA } from '../api/dma';
import { IPPU } from '../api/ppu';
import { ICPU } from '../api/cpu';
export declare class DMA implements IDMA {
    cpu: ICPU;
    ppu: IPPU;
    copy(cpuBusAddr: number): void;
}
