import { uint8 } from './types';
export declare enum StandardControllerButton {
    A = 128,
    B = 64,
    SELECT = 32,
    START = 16,
    UP = 8,
    DOWN = 4,
    LEFT = 2,
    RIGHT = 1
}
export interface IController {
    write(data: uint8): any;
    read(): uint8;
}
export interface IStandardController extends IController {
    updateButton(button: StandardControllerButton, isPressDown: boolean): any;
}
