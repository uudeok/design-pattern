import { Validator } from './Validator';

export class EmailValidator extends Validator {
    validate(): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
    }

    getErrorMessage(): string | null {
        return this.validate() ? null : '유효한 이메일 형식이 아닙니다.';
    }
}
