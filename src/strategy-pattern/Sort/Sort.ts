import type { SortStrategy } from './SortStrategy';

export class Sort {
    private sortStrategy: SortStrategy;

    constructor(strategy: SortStrategy) {
        this.sortStrategy = strategy;
    }

    setStrategy(strategy: SortStrategy) {
        this.sortStrategy = strategy;
    }

    sort(data: number[]): number[] {
        return this.sortStrategy.sort(data);
    }
}
