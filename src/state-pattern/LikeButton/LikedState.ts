import type { LikeButton } from '.';
import type { LikeState } from './LikeState';
import { UnlikedState } from './UnlikedState';

export class LikedState implements LikeState {
    label: 'liked' = 'liked' as const;

    constructor(private context: LikeButton) {}

    toggle() {
        console.log('💔 좋아요 취소 요청 (DELETE)');
        // TODO: 실제 DELETE 요청 보내기
        this.context.setState(new UnlikedState(this.context));
    }
}
