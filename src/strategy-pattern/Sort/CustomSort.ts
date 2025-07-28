import type { SortStrategy } from './SortStrategy';

export class CustomSort implements SortStrategy {
    sort(data: number[]): number[] {
        return [...data].sort((a, b) => {
            const isAOdd = a % 2 !== 0;
            const isBOdd = b % 2 !== 0;

            if (isAOdd && !isBOdd) return -1;
            if (!isAOdd && isBOdd) return 1;
            return a - b;
        });
    }
}
