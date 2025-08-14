import styles from './UserForm.module.css';
import { HeightValidator } from '../../validator/HeightValidator';
import { WeightValidator } from '../../validator/WeightValidator';
import { AgeValidator } from '../../validator/AgeValidator';
import { useValidatorInput } from '../../hooks/useValidator';
import {
    allowDecimal,
    allowOnlyInteger,
    composeConstraints,
    limitDecimalPlaces,
    removeLeadingZero,
} from '../../utils/validator';

export default function UserForm() {
    const height = useValidatorInput(HeightValidator);
    const weight = useValidatorInput(WeightValidator);
    const age = useValidatorInput(AgeValidator);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isValid = height.validate() && weight.validate() && age.validate();

        if (isValid) {
            alert('모든 유효성 검사 통과!');
            height.setValue('');
            weight.setValue('');
            age.setValue('');
        }
    };

    const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;

        const processedValue = composeConstraints(allowDecimal, removeLeadingZero, limitDecimalPlaces(1))(rawValue);

        height.setValue(processedValue);
    };

    const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;

        const processedValue = composeConstraints(allowDecimal, removeLeadingZero, limitDecimalPlaces(1))(rawValue);

        weight.setValue(processedValue);
    };

    const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;

        const processedValue = composeConstraints(allowOnlyInteger, removeLeadingZero)(rawValue);

        age.setValue(processedValue);
    };
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
                <label>키 (cm)</label>
                <input
                    type="text"
                    value={height.field.value}
                    className={height.error ? styles.errorInput : ''}
                    placeholder="0"
                    onChange={handleHeight}
                    maxLength={5}
                />
                {height.error && <p className={styles.error}>{height.error}</p>}
            </div>

            <div className={styles.inputGroup}>
                <label>몸무게 (kg)</label>
                <input
                    type="text"
                    value={weight.field.value}
                    className={weight.error ? styles.errorInput : ''}
                    placeholder="0"
                    onChange={handleWeight}
                    maxLength={5}
                />
                {weight.error && <p className={styles.error}>{weight.error}</p>}
            </div>

            <div className={styles.inputGroup}>
                <label>나이 (세)</label>
                <input
                    type="text"
                    value={age.field.value}
                    className={age.error ? styles.errorInput : ''}
                    placeholder="0"
                    onChange={handleAge}
                    maxLength={3}
                />
                {age.error && <p className={styles.error}>{age.error}</p>}
            </div>

            <button type="submit" className={styles.submitButton}>
                제출
            </button>
        </form>
    );
}
