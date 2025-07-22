import type { TimerState } from './TimerState';
import { Timer } from './Timer';
import { RunningState } from './RunningState';

export class ReadyState implements TimerState {
    constructor(private timer: Timer) {}

    start() {
        this.timer.startTicking();
        this.timer.setState(new RunningState(this.timer));
    }

    pause() {
        console.warn('⏸️ 아직 시작되지 않았습니다.');
    }

    reset() {
        console.info('🔄 초기 상태입니다.');
    }
}
