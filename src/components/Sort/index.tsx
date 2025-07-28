import { useState } from 'react';
import { Sort } from '../../strategy-pattern/Sort/Sort';
import { AscSort } from '../../strategy-pattern/Sort/AscSort';
import { DescSort } from '../../strategy-pattern/Sort/DescSort';
import { CustomSort } from '../../strategy-pattern/Sort/CustomSort';

export function SortComponent() {
    const [data] = useState([5, 1, 8, 3, 2, 7]);
    const [sortedData, setSortedData] = useState<number[]>([]);
    const [context] = useState(() => new Sort(new AscSort()));

    const handleSort = (type: 'asc' | 'desc' | 'custom') => {
        switch (type) {
            case 'asc':
                context.setStrategy(new AscSort());
                break;
            case 'desc':
                context.setStrategy(new DescSort());
                break;
            case 'custom':
                context.setStrategy(new CustomSort());
                break;
        }

        const result = context.sort(data);
        setSortedData(result);
    };

    return (
        <div>
            <h2>📊 정렬 전략 패턴 예제</h2>
            <p>원본 데이터: {JSON.stringify(data)}</p>
            <p>정렬 결과: {JSON.stringify(sortedData)}</p>

            <button onClick={() => handleSort('asc')}>오름차순</button>
            <button onClick={() => handleSort('desc')}>내림차순</button>
            <button onClick={() => handleSort('custom')}>커스텀 (홀수 우선)</button>
        </div>
    );
}
