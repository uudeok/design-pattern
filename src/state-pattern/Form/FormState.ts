export interface FormState {
    handleChange(value: string): void;
    getMessage(): string;
    isValid(): boolean;
}
