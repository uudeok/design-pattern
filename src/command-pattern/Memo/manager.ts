import type { Command } from './commands/command';

export class MemoManager {
    memos: string[]; // 현재 메모
    past: string[][]; // undo 히스토리
    future: string[][]; // redo 히스토리
    maxLength: number; // 최대 메모 개수

    constructor(maxLength = 10) {
        this.memos = [];
        this.past = [];
        this.future = [];
        this.maxLength = maxLength;
    }

    execute(action: Command) {
        action.apply(this);
    }
}
