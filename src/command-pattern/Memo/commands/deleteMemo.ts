import { MemoManager } from '../manager';
import type { Command } from './command';

export class DeleteMemo implements Command {
    constructor(private index: number) {}

    apply(manager: MemoManager) {
        if (this.index < 0 || this.index >= manager.memos.length) return;
        manager.past.push([...manager.memos]);
        manager.memos.splice(this.index, 1);
        manager.future = [];
    }
}
