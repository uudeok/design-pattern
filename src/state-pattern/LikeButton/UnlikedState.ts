import { LikedState } from './LikedState';
import type { LikeState } from './LikeState';

export class UnlikedState implements LikeState {
    label: 'unliked' = 'unliked' as const;

    constructor(private context: LikeButton) {}

    toggle() {
        console.log('❤️ 좋아요 요청 (POST)');
        // TODO: 실제 POST 요청 보내기
        this.context.setState(new LikedState(this.context));
    }
}
