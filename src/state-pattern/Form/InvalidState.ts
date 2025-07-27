import { FormContext } from './FormContext';
import type { FormState } from './FormState';
import { ValidState } from './ValidState';

export class InvalidState implements FormState {
    constructor(private context: FormContext) {}

    handleChange(value: string): void {
        this.context.setValue(value);

        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (isValidEmail) {
            this.context.setState(new ValidState(this.context));
        }
    }

    getMessage(): string {
        return '❌ 이메일 형식이 올바르지 않습니다.';
    }

    isValid(): boolean {
        return false;
    }
}
