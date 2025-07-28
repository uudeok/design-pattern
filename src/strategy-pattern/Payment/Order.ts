import type { PaymentStrategy } from './PaymentStrategy';

export class Order {
    private paymentStrategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.paymentStrategy = strategy;
    }

    setPaymentStrategy(strategy: PaymentStrategy): void {
        this.paymentStrategy = strategy;
    }

    pay(amount: number): void {
        this.paymentStrategy.pay(amount);
        this.paymentStrategy.rewardPoint(amount);
    }
}
