import type { PaymentStrategy } from './PaymentStrategy';

export class CashPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`💵 현금으로 ${amount}원을 결제합니다.`);
    }

    rewardPoint(amount: number): void {
        const points = amount * 0.05;
        console.log(`✨ 현금 결제로 ${points.toFixed(0)} 포인트가 적립되었습니다.`);
    }
}
