import { Validator } from './Validator';

export class PasswordValidator extends Validator {
    validate(): boolean {
        return (
            this.value.length >= 9 &&
            /[A-Z]/.test(this.value) &&
            /[a-z]/.test(this.value) &&
            /[^A-Za-z0-9]/.test(this.value) &&
            !/\s/.test(this.value)
        );
    }

    getErrorMessage(): string | null {
        return this.validate() ? null : '대문자,소문자,특수문자를 포함한 9자 이상이여야 합니다.';
    }
}
