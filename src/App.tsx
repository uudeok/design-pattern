import './App.css';
import { LikeButton } from './patterns/LikeButton';
import { useState } from 'react';

function App() {
    const likeButton = new LikeButton();

    const [status, setStatus] = useState<'liked' | 'unliked'>(likeButton.getStateLabel());

    const handleLiked = () => {
        likeButton.toggle();
        setStatus(likeButton.getStateLabel());
    };

    return (
        <>
            <div>hello world</div>
            <button onClick={handleLiked}>{status === 'liked' ? '♥️' : '🤍'}</button>
        </>
    );
}

export default App;
