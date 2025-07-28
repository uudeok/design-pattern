import type { SortStrategy } from './SortStrategy';

export class DescSort implements SortStrategy {
    sort(data: number[]): number[] {
        return [...data].sort((a, b) => b - a);
    }
}
