import { Validator } from './Validator';

export class NicknameValidator extends Validator {
    validate(): boolean {
        return /^[가-힣]{2,10}$/.test(this.value);
    }

    getErrorMessage(): string | null {
        return this.validate() ? null : '닉네임은 2~10자 한글만 입력 가능합니다.';
    }
}
