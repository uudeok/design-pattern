import './App.css';

import { EmailForm } from './components/Form';
import { PaymentComponent } from './components/Payment';
import { SortComponent } from './components/Sort';
import { TimerComponent } from './components/Timer';

function App() {
    return (
        <>
            <TimerComponent />
            <EmailForm />
            <PaymentComponent />
            <SortComponent />
        </>
    );
}

export default App;
