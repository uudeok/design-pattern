import { FormContext } from './FormContext';
import type { FormState } from './FormState';
import { InvalidState } from './InvalidState';
import { ValidState } from './ValidState';

export class TypingState implements FormState {
    constructor(private context: FormContext) {}

    handleChange(value: string): void {
        this.context.setValue(value);

        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (isValidEmail) {
            this.context.setState(new ValidState(this.context));
        } else {
            this.context.setState(new InvalidState(this.context));
        }
    }

    getMessage(): string {
        return '유효성 검사 중...';
    }

    isValid(): boolean {
        return false;
    }
}
