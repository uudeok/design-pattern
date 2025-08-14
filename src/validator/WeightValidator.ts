import { Validator } from './Validator';

export const WEIGHT_RANGE = { MIN: 30, MAX: 160 };

export class WeightValidator extends Validator {
    validate(): boolean {
        const value = this.value.trim();

        if (!/^[1-9][0-9]*(\.[0-9])?$/.test(value)) return false;
        const weight = Number(value);
        return weight >= WEIGHT_RANGE.MIN && weight <= WEIGHT_RANGE.MAX;
    }

    getErrorMessage(): string | null {
        if (!this.value.trim()) return '몸무게를 입력해주세요.';
        if (!/^[1-9][0-9]*(\.[0-9])?$/.test(this.value))
            return '숫자만 입력 가능하며, 소수점은 한 자리까지만 허용됩니다.';

        const weight = Number(this.value);
        if (weight < WEIGHT_RANGE.MIN || weight > WEIGHT_RANGE.MAX) {
            return `몸무게는 ${WEIGHT_RANGE.MIN}kg 이상 ${WEIGHT_RANGE.MAX}kg 이하만 가능합니다.`;
        }

        return null;
    }
}
