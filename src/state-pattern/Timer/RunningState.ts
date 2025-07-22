import type { TimerState } from './TimerState';
import { Timer } from './Timer';
import { ReadyState } from './ReadyState';
import { PausedState } from './PausedState';

export class RunningState implements TimerState {
    constructor(private timer: Timer) {}

    start() {
        console.warn('⏱ 이미 실행 중입니다.');
    }

    pause() {
        this.timer.stopTicking();
        this.timer.setState(new PausedState(this.timer));
    }

    reset() {
        this.timer.stopTicking();
        this.timer.setTime(0);
        this.timer.setState(new ReadyState(this.timer));
    }
}
