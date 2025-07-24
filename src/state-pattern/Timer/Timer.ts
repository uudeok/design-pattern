import type { TimerState } from './TimerState';
import { ReadyState } from './ReadyState';

export class Timer {
    private state: TimerState;
    private intervalId: ReturnType<typeof setInterval> | null = null;
    private time = 0;
    private onTickCallback: ((time: number) => void) | null = null;

    constructor() {
        this.state = new ReadyState(this);
    }

    setOnTick(callback: (time: number) => void) {
        this.onTickCallback = callback;
    }

    setState(state: TimerState) {
        this.state = state;
    }

    getTime() {
        return this.time;
    }

    setTime(time: number) {
        this.time = time;
        this.notifyTick();
    }

    startTicking() {
        if (this.intervalId) return;
        this.intervalId = setInterval(() => {
            this.time++;
            this.notifyTick();
        }, 1000);
    }

    stopTicking() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    private notifyTick() {
        this.onTickCallback?.(this.time);
    }

    start() {
        this.state.start();
    }

    pause() {
        this.state.pause();
    }

    reset() {
        this.state.reset();
    }
}

// 비교해보기 위해 주석처리

// import { ReadyState } from './ReadyState';
// import type { TimerState } from './TimerState';

// export class Timer {
//     private state: TimerState;
//     private intervalId: ReturnType<typeof setInterval> | null = null;
//     public time: number = 0;

//     constructor() {
//         this.state = new ReadyState(this);
//     }

//     // 상태 제어
//     public setState(state: TimerState) {
//         this.state = state;
//     }

//     // 시간 제어
//     public setTime(value: number) {
//         this.time = value;
//     }

//     public getTime(): number {
//         return this.time;
//     }

//     // 인터벌 제어
//     public startTicking() {
//         this.stopTicking(); // 중복 방지
//         this.intervalId = setInterval(() => {
//             this.time += 1;
//         }, 1000);
//     }

//     public stopTicking() {
//         if (this.intervalId) {
//             clearInterval(this.intervalId);
//             this.intervalId = null;
//         }
//     }

//     // 외부 인터페이스
//     public start() {
//         this.state.start();
//     }

//     public pause() {
//         this.state.pause();
//     }

//     public reset() {
//         this.state.reset();
//     }
// }
