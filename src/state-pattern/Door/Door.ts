import { ClosedState } from './ClosedState';
import type { DoorState } from './DoorState';

export class Door {
    private state: DoorState;

    constructor() {
        this.state = new ClosedState(this); // 초기 상태는 닫힘
    }

    setState(state: DoorState) {
        this.state = state;
    }

    toggle() {
        this.state.toggle(); // 현재 상태에 따라 동작이 달라짐
    }
}
