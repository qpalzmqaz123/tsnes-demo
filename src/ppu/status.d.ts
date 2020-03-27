import { IStatus } from '../api/ppu';
import { uint8 } from '../api/types';
export declare class Status implements IStatus {
    isSpriteOverflow: boolean;
    isZeroSpriteHit: boolean;
    isVBlankStarted: boolean;
    get data(): uint8;
}
