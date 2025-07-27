import { CardPayment } from '../../strategy-pattern/Payment/CardPaymant';
import { CashPayment } from '../../strategy-pattern/Payment/CashPayment';
import { Order } from '../../strategy-pattern/Payment/Order';

export function PaymentComponent() {
    const order = new Order(new CashPayment());

    order.pay(10000);

    order.setPaymentStrategy(new CardPayment());
    order.pay(20000);

    return (
        <>
            <div></div>
        </>
    );
}
