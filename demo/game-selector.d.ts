export declare class GameSelector {
    private readonly element;
    private readonly progressElement;
    onChange: (filename: string, data: Uint8Array) => void;
    constructor(element: HTMLSelectElement, progressElement?: HTMLParagraphElement);
    private fetchGameData;
}
