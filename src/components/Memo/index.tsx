import React, { useState } from 'react';

import styles from './Memo.module.css';
import { MemoManager } from '../../command-pattern/Memo/manager';
import { AddMemo } from '../../command-pattern/Memo/commands/addMemo';
import { EditMemo } from '../../command-pattern/Memo/commands/editMeme';
import { DeleteMemo } from '../../command-pattern/Memo/commands/deleteMemo';
import { Undo } from '../../command-pattern/Memo/commands/undo';
import { Redo } from '../../command-pattern/Memo/commands/redo';

const manager = new MemoManager();

export const MemoApp: React.FC = () => {
    const [, update] = useState(0); // 강제 리렌더용
    const [inputText, setInputText] = useState('');

    const forceUpdate = () => update((prev) => prev + 1);

    const handleAdd = () => {
        if (!inputText.trim()) return;
        manager.execute(new AddMemo(inputText));
        setInputText('');
        forceUpdate();
    };

    const handleEdit = (index: number) => {
        const newText = prompt('메모를 수정하세요:', manager.memos[index]);
        if (newText !== null) {
            manager.execute(new EditMemo(index, newText));
            forceUpdate();
        }
    };

    const handleDelete = (index: number) => {
        manager.execute(new DeleteMemo(index));
        forceUpdate();
    };

    const handleUndo = () => {
        manager.execute(new Undo());
        forceUpdate();
    };

    const handleRedo = () => {
        manager.execute(new Redo());
        forceUpdate();
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>메모 관리</h1>

            <div className={styles.inputArea}>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className={styles.input}
                    placeholder="새 메모 입력"
                />
                <button onClick={handleAdd} className={styles.addBtn}>
                    추가
                </button>
            </div>

            <div className={styles.buttons}>
                <button onClick={handleUndo} className={styles.undoBtn}>
                    UNDO
                </button>
                <button onClick={handleRedo} className={styles.redoBtn}>
                    REDO
                </button>
            </div>

            <ul className={styles.memoList}>
                {manager.memos.map((memo, idx) => (
                    <li key={idx} className={styles.memoItem}>
                        <span>{memo}</span>
                        <div className={styles.actions}>
                            <button onClick={() => handleEdit(idx)} className={styles.editBtn}>
                                수정
                            </button>
                            <button onClick={() => handleDelete(idx)} className={styles.deleteBtn}>
                                삭제
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
