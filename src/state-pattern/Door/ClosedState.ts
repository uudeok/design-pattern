import type { Door } from './Door';
import type { DoorState } from './DoorState';
import { OpenState } from './OpenState';

export class ClosedState implements DoorState {
    constructor(private door: Door) {}

    toggle() {
        console.log('🔓 문을 엽니다');
        this.door.setState(new OpenState(this.door));
    }
}
