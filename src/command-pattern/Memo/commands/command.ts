import type { MemoManager } from '../manager';

export interface Command {
    apply(manager: MemoManager): void;
}
