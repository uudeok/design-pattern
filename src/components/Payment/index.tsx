import { useRef } from 'react';
import { CardPayment } from '../../strategy-pattern/Payment/CardPaymant';
import { CashPayment } from '../../strategy-pattern/Payment/CashPayment';
import { Order } from '../../strategy-pattern/Payment/Order';
import styles from './Payment.module.css';

export function PaymentComponent() {
    const orderRef = useRef(new Order(new CashPayment()));

    const handleCashPayment = () => {
        orderRef.current.setPaymentStrategy(new CashPayment());
        orderRef.current.pay(10000);
    };

    const handleCardPayment = () => {
        orderRef.current.setPaymentStrategy(new CardPayment());
        orderRef.current.pay(20000);
    };

    return (
        <div>
            <button className={styles.button} onClick={handleCardPayment}>
                카드 결제
            </button>
            <button className={styles.button} onClick={handleCashPayment}>
                현금 결제
            </button>
        </div>
    );
}
