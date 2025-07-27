import type { FormState } from './FormState';
import { ReadyState } from './ReadyState';

export class FormContext {
    private state: FormState;
    private value: string = '';

    constructor() {
        this.state = new ReadyState(this);
    }

    setState(state: FormState) {
        this.state = state;
    }

    setValue(value: string) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    handleChange(value: string) {
        this.state.handleChange(value);
    }

    getMessage() {
        return this.state.getMessage();
    }

    isValid() {
        return this.state.isValid();
    }
}
