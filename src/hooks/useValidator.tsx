import { useState, useMemo } from 'react';
import type { Validator } from '../validator/Validator';

export const useValidatorInput = <T extends Validator>(ValidatorClass: new (value: string) => T, initialValue = '') => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState<string | null>(null);

    const validator = useMemo(() => new ValidatorClass(value), [value]);

    const validate = () => {
        // const validator = new ValidatorClass(value);
        const errorMsg = validator.getErrorMessage();
        setError(errorMsg);
        return !errorMsg;
    };

    return {
        value,
        setValue,
        error,
        validate,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    };
};
