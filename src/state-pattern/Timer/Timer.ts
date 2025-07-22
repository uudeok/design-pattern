import { ReadyState } from './ReadyState';
import type { TimerState } from './TimerState';

export class Timer {
    private state: TimerState;
    private intervalId: ReturnType<typeof setInterval> | null = null;
    public time: number = 0;

    constructor() {
        this.state = new ReadyState(this);
    }

    // 상태 제어
    public setState(state: TimerState) {
        this.state = state;
    }

    // 시간 제어
    public setTime(value: number) {
        this.time = value;
    }

    public getTime(): number {
        return this.time;
    }

    // 인터벌 제어
    public startTicking() {
        this.stopTicking(); // 중복 방지
        this.intervalId = setInterval(() => {
            this.time += 1;
        }, 1000);
    }

    public stopTicking() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    // 외부 인터페이스
    public start() {
        this.state.start();
    }

    public pause() {
        this.state.pause();
    }

    public reset() {
        this.state.reset();
    }
}
