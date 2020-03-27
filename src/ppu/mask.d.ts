import { IMask } from '../api/ppu';
import { uint8 } from '../api/types';
export declare class Mask implements IMask {
    isColorful: boolean;
    isShowBackgroundLeft8px: boolean;
    isShowSpriteLeft8px: boolean;
    isShowBackground: boolean;
    isShowSprite: boolean;
    isEmphasizeRed: boolean;
    isEmphasizeGreen: boolean;
    isEmphasizeBlue: boolean;
    set data(data: uint8);
    get data(): uint8;
}
