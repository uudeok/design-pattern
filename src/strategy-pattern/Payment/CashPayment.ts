import type { PaymentStrategy } from './PaymentStrategy';

export class CashPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`💵 현금으로 ${amount}원을 결제합니다.`);
    }
}
