import { MemoManager } from '../manager';
import type { Command } from './command';

export class AddMemo implements Command {
    constructor(private text: string) {}

    apply(manager: MemoManager) {
        manager.past.push([...manager.memos]);
        manager.memos.push(this.text);
        if (manager.memos.length > manager.maxLength) {
            manager.memos.shift();
        }
        manager.future = [];
    }
}
