import { MemoManager } from '../manager';
import type { Command } from './command';

export class EditMemo implements Command {
    constructor(private index: number, private text: string) {}

    apply(manager: MemoManager) {
        if (this.index < 0 || this.index >= manager.memos.length) return;
        manager.past.push([...manager.memos]);
        manager.memos[this.index] = this.text;
        manager.future = [];
    }
}
