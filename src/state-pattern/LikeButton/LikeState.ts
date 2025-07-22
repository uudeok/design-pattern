export interface LikeState {
    toggle(): void;
    label: 'liked' | 'unliked';
}
