export abstract class Validator {
    protected value: string = '';

    constructor(value: string) {
        this.value = value;
    }

    abstract validate(): boolean;

    abstract getErrorMessage(): string | null;
}
