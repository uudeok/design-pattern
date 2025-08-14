import { Validator } from './Validator';

export const HEIGHT_VALIDATION_RULES = {
    min: 120,
    max: 200,
    allowDecimal: true,
    maxDecimalDigits: 1,
    disallowLeadingZero: true,
};

type HeightValidationOptions = {
    min: number;
    max: number;
    allowDecimal: boolean;
    maxDecimalDigits: number;
    disallowLeadingZero: boolean;
};

export class HeightValidator extends Validator {
    private options: HeightValidationOptions;

    constructor(value: string, options: Partial<HeightValidationOptions> = {}) {
        super(value);
        this.options = {
            ...HEIGHT_VALIDATION_RULES,
            ...options, // 외부에서 덮어쓰기 가능
        };
    }

    validate(): boolean {
        const { min, max, allowDecimal, maxDecimalDigits, disallowLeadingZero } = this.options;

        if (!this.value) return false;

        if (disallowLeadingZero && /^0\d/.test(this.value)) return false;

        const regex = allowDecimal ? new RegExp(`^\\d+(\\.\\d{0,${maxDecimalDigits}})?$`) : /^\d+$/;

        if (!regex.test(this.value)) return false;

        const num = Number(this.value);
        if (isNaN(num)) return false;

        return num >= min && num <= max;
    }

    getErrorMessage(): string | null {
        if (this.validate()) return null;

        const { min, max, allowDecimal, maxDecimalDigits, disallowLeadingZero } = this.options;

        if (!this.value) return '키를 입력해주세요.';

        if (disallowLeadingZero && /^0\d/.test(this.value)) {
            return '앞자리에 0은 올 수 없습니다.';
        }

        const regex = allowDecimal ? new RegExp(`^\\d+(\\.\\d{0,${maxDecimalDigits}})?$`) : /^\d+$/;

        if (!regex.test(this.value)) {
            return allowDecimal
                ? `숫자만 입력 가능하며, 소수점은 최대 ${maxDecimalDigits}자리까지 입력 가능합니다.`
                : '숫자만 입력해주세요.';
        }

        const num = Number(this.value);
        if (num < min || num > max) {
            return `${min} 이상 ${max} 이하의 값을 입력해주세요.`;
        }

        return '잘못된 입력입니다.';
    }
}
