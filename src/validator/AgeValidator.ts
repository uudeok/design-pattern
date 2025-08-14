import { Validator } from './Validator';

export const AGE_RANGE = { MIN: 1, MAX: 120 };

export class AgeValidator extends Validator {
    validate(): boolean {
        const value = this.value.trim();

        if (!/^[1-9][0-9]*$/.test(value)) return false; // 숫자만, 앞자리 0 금지
        const age = Number(value);
        return age >= AGE_RANGE.MIN && age <= AGE_RANGE.MAX;
    }

    getErrorMessage(): string | null {
        if (!this.value.trim()) return '나이를 입력해주세요.';
        if (!/^[1-9][0-9]*$/.test(this.value)) return '숫자만 입력 가능하며, 0으로 시작할 수 없습니다.';

        const age = Number(this.value);
        if (age < AGE_RANGE.MIN || age > AGE_RANGE.MAX) {
            return `나이는 ${AGE_RANGE.MIN}세 이상 ${AGE_RANGE.MAX}세 이하만 가능합니다.`;
        }

        return null;
    }
}
