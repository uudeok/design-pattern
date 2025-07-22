import type { LikeState } from './LikeState';
import { UnlikedState } from './UnlikedState';

export class LikeButton {
    private state: LikeState;

    constructor() {
        this.state = new UnlikedState(this); // 초기 상태: 좋아요 안 누름
    }

    setState(state: LikeState) {
        this.state = state;
    }

    toggle() {
        this.state.toggle();
    }

    getStateLabel(): 'liked' | 'unliked' {
        return this.state.label;
    }
}
