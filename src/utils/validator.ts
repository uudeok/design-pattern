/** 숫자만 허용 (소수점 없음) */
export const allowOnlyInteger = (value: string) => {
    return value.replace(/[^0-9]/g, '');
};

/** 소수점 포함 숫자만 허용 */
export const allowDecimal = (value: string) => {
    return value.replace(/[^0-9.]/g, '');
};

/** 맨 앞 0 제거 */
export const removeLeadingZero = (value: string) => {
    return value.replace(/^0+(?=\d)/, '');
};

/** 소수점 이하 n자리까지만 허용 */
export const limitDecimalPlaces = (maxDecimalPlaces: number) => (value: string) => {
    if (!value.includes('.')) return value;

    const [intPart, decimalPart] = value.split('.');
    return `${intPart}.${decimalPart.slice(0, maxDecimalPlaces)}`;
};

/** 여러 제약 함수 합성 */
export const composeConstraints =
    (...fns: ((value: string) => string)[]) =>
    (value: string) =>
        fns.reduce((acc, fn) => fn(acc), value);
