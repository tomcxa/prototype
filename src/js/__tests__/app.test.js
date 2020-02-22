import { Character } from '../app';

test('should test', () => {
    const bobik = new Character('Bobik', 'Type');
    bobik.damage(1100);
    expect(-560).toBe(bobik.health);
});
