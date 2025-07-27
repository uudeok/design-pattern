import { useEffect, useRef, useState } from 'react';
import { FormContext } from '../../state-pattern/Form/FormContext';
import styles from './Form.module.css';

export const EmailForm = () => {
    const formRef = useRef<FormContext | null>(null);
    const [value, setValue] = useState('');
    const [message, setMessage] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        formRef.current = new FormContext();
        setMessage(formRef.current.getMessage());
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        formRef.current?.handleChange(newValue);

        setValue(newValue);
        setMessage(formRef.current?.getMessage() || '');
        setIsValid(formRef.current?.isValid() || false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`전송 완료: ${value}`);
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <h2 className={styles.heading}>📮 이메일 입력</h2>
            <input
                type="email"
                value={value}
                onChange={handleChange}
                placeholder="you@example.com"
                className={styles.input}
            />
            <p className={`${styles.message} ${isValid ? styles.valid : styles.invalid}`}>{message}</p>
            <button className={styles.button} disabled={!isValid}>
                확인
            </button>
        </form>
    );
};
