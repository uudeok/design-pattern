import { FormContext } from './FormContext';
import type { FormState } from './FormState';
import { InvalidState } from './InvalidState';

export class ValidState implements FormState {
    constructor(private context: FormContext) {}

    handleChange(value: string): void {
        this.context.setValue(value);

        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (!isValidEmail) {
            this.context.setState(new InvalidState(this.context));
        }
    }

    getMessage(): string {
        return '✅ 유효한 이메일입니다!';
    }

    isValid(): boolean {
        return true;
    }
}
