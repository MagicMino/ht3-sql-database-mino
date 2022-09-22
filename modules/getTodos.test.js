import getTodos from './getTodos.js'

import { test,expect } from '@jest/globals';
describe (' search tests', () => {
test('expects errors', async () => {
    //ARRANGE
    const actual = await getTodos();
    //ACT
    const expected = ["",];
    //ASSERT
    expect(actual).toEqual(expected);
});
});