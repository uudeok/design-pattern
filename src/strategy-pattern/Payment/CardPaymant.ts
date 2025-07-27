import type { PaymentStrategy } from './PaymentStrategy';
export class CardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`💳 카드로 ${amount}원을 결제합니다.`);
    }
}
