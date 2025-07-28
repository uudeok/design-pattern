import type { SortStrategy } from './SortStrategy';

export class AscSort implements SortStrategy {
    sort(data: number[]): number[] {
        return [...data].sort((a, b) => a - b);
    }
}
