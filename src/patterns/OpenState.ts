import { ClosedState } from './ClosedState';
import { Door } from './Door';
import type { DoorState } from './DoorState';

export class OpenState implements DoorState {
    constructor(private door: Door) {}

    toggle() {
        console.log('🔒 문을 닫습니다');
        this.door.setState(new ClosedState(this.door));
    }
}
