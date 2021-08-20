import { IEmulator } from '../src/api/emulator';
export declare class ROM {
    private readonly emulator;
    private readonly element;
    private lastFrame;
    constructor(emulator: IEmulator, element: HTMLElement);
    private refresh;
}
