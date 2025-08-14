import './App.css';
import { LoginForm } from './components/Form/LoginForm';
import UserForm from './components/Form/UserForm';
import { MemoApp } from './components/Memo';

import { PaymentComponent } from './components/Payment';
import { SortComponent } from './components/Sort';
import { TimerComponent } from './components/Timer';

function App() {
    return (
        <>
            <TimerComponent />
            <LoginForm />
            <PaymentComponent />
            <SortComponent />
            <UserForm />
            <MemoApp />
        </>
    );
}

export default App;
