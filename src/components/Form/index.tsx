import styles from './Form.module.css';
import { EmailValidator } from '../../validator/EmailValidator';
import { PasswordValidator } from '../../validator/PasswordValidator';
import { NicknameValidator } from '../../validator/NicknameValidator';
import { useValidatorInput } from '../../hooks/useValidator';

export const EmailForm = () => {
    const email = useValidatorInput(EmailValidator);
    const password = useValidatorInput(PasswordValidator);
    const nickname = useValidatorInput(NicknameValidator);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isValid = email.validate() && password.validate() && nickname.validate();

        if (isValid) {
            alert('모든 유효성 검사 통과!');
        }
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <label className={styles.heading}>📮 이메일 입력</label>
            <input
                type="text"
                value={email.value}
                onChange={email.onChange}
                placeholder="you@example.com"
                className={styles.input}
            />
            {email.error && <p className={styles.errorMsg}>{email.error}</p>}

            <label className={styles.heading}>🔐 비밀번호 입력</label>
            <input
                type="password"
                value={password.value}
                onChange={password.onChange}
                placeholder="대문자, 소문자, 특수문자를 포함한 9자 이상"
                className={styles.input}
            />
            {password.error && <p className={styles.errorMsg}>{password.error}</p>}

            <label className={styles.heading}>🔎 닉네임</label>
            <input
                value={nickname.value}
                onChange={nickname.onChange}
                placeholder="2글자 이상 한글만 가능"
                className={styles.input}
            />
            {nickname.error && <p className={styles.errorMsg}>{nickname.error}</p>}

            <button className={styles.button}>확인</button>
        </form>
    );
};

// import { useEffect, useRef, useState } from 'react';
// import { FormContext } from '../../state-pattern/Form/FormContext';
// import styles from './Form.module.css';

// export const EmailForm = () => {
//     const formRef = useRef<FormContext | null>(null);
//     const [value, setValue] = useState('');
//     const [message, setMessage] = useState('');
//     const [isValid, setIsValid] = useState(false);

//     useEffect(() => {
//         formRef.current = new FormContext();
//         setMessage(formRef.current.getMessage());
//     }, []);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const newValue = e.target.value;
//         formRef.current?.handleChange(newValue);

//         setValue(newValue);
//         setMessage(formRef.current?.getMessage() || '');
//         setIsValid(formRef.current?.isValid() || false);
//     };

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         alert(`전송 완료: ${value}`);
//     };

//     return (
//         <form className={styles.container} onSubmit={handleSubmit}>
//             <h2 className={styles.heading}>📮 이메일 입력</h2>
//             <input
//                 type="email"
//                 value={value}
//                 onChange={handleChange}
//                 placeholder="you@example.com"
//                 className={styles.input}
//             />
//             <p className={`${styles.message} ${isValid ? styles.valid : styles.invalid}`}>{message}</p>
//             <button className={styles.button} disabled={!isValid}>
//                 확인
//             </button>
//         </form>
//     );
// };
