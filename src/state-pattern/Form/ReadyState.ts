import { FormContext } from './FormContext';
import type { FormState } from './FormState';
import { TypingState } from './TypingState';

export class ReadyState implements FormState {
    constructor(private context: FormContext) {}

    handleChange(value: string): void {
        this.context.setValue(value);
        this.context.setState(new TypingState(this.context));
    }

    getMessage(): string {
        return '이메일을 입력해주세요.';
    }

    isValid(): boolean {
        return false;
    }
}
