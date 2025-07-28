import type { PaymentStrategy } from './PaymentStrategy';
export class CardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`💳 카드로 ${amount}원을 결제합니다.`);
    }

    rewardPoint(amount: number): void {
        const points = amount * 0.03;
        console.log(`✨ 카드 결제로 ${points.toFixed(0)} 포인트가 적립되었습니다.`);
    }
}
