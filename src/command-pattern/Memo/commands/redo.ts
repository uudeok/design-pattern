import { MemoManager } from '../manager';
import type { Command } from './command';

export class Redo implements Command {
    apply(manager: MemoManager) {
        if (manager.future.length === 0) return;
        const next = manager.future.shift()!;
        manager.past.push([...manager.memos]);
        manager.memos = next;
    }
}
