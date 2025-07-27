import './App.css';

import { EmailForm } from './components/Form';
import { PaymentComponent } from './components/Payment';
import { TimerComponent } from './components/Timer';

function App() {
    return (
        <>
            <TimerComponent />
            <EmailForm />
            <PaymentComponent />
        </>
    );
}

export default App;
