import { useEffect, useRef, useState } from 'react';
import type { TimerState } from '../state-pattern/Timer/TimerState';
import { ReadyState } from '../state-pattern/Timer/ReadyState';
import styles from './Timer.module.css';

export function Timer() {
    const [time, setTime] = useState(0);
    const [state, setState] = useState<TimerState | null>(null);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        const initialState = new ReadyState(timerAPI);
        setState(initialState);
    }, []);

    const startTicking = () => {
        intervalRef.current = window.setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
    };

    const stopTicking = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const setTimeExternally = (value: number) => {
        setTime(value);
    };

    const setStateExternally = (newState: TimerState) => {
        setState(() => newState);
    };

    const timerAPI = {
        startTicking,
        stopTicking,
        setTime: setTimeExternally,
        setState: setStateExternally,
    };

    return (
        <div className={styles.container}>
            <h1>⏱ Timer</h1>
            <div className={styles.display}>{time}s</div>
            <div className={styles.buttons}>
                <button onClick={() => state?.start()}>Start</button>
                <button onClick={() => state?.pause()}>Pause</button>
                <button onClick={() => state?.reset()}>Reset</button>
            </div>
        </div>
    );
}
