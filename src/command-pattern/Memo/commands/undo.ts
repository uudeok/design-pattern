import { MemoManager } from '../manager';
import type { Command } from './command';

export class Undo implements Command {
    apply(manager: MemoManager) {
        if (manager.past.length === 0) return;
        const previous = manager.past.pop()!;
        manager.future.unshift([...manager.memos]);
        manager.memos = previous;
    }
}
