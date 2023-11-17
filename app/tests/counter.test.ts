import { expect, test } from 'vitest';
import { decrementCounter } from '../src/counter';

test('devrait décrémenter le compteur de 1', () => {
    const count = 5;  
    const newCount = decrementCounter(count);
    expect(newCount).toEqual(4)
});