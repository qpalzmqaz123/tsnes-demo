import { IInterrupt } from '../api/interrupt';
import { ICPU } from '../api/cpu';
export declare class Interrupt implements IInterrupt {
    cpu: ICPU;
    irq(): void;
    nmi(): void;
}
