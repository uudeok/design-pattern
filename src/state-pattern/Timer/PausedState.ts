import type { TimerState } from './TimerState';
import { Timer } from './Timer';
import { RunningState } from './RunningState';
import { ReadyState } from './ReadyState';

export class PausedState implements TimerState {
    constructor(private timer: Timer) {}

    start() {
        this.timer.startTicking();
        this.timer.setState(new RunningState(this.timer));
    }

    pause() {
        console.warn('⏸️ 이미 일시정지 상태입니다.');
    }

    reset() {
        this.timer.setTime(0);
        this.timer.setState(new ReadyState(this.timer));
    }
}
