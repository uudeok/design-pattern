export interface PaymentStrategy {
    pay(amount: number): void;
    rewardPoint(amount: number): void;
}
