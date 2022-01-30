import sortByHealthLevel from '../app';

describe('This function should sort the characters by their health level (descending)', () => {
  const receivedList = sortByHealthLevel([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  const sortedList = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  test('array was sorted correctly', () => {
    expect(sortByHealthLevel(receivedList)).toEqual(sortedList);
  });

  test('array was NOT sorted using .toBe', () => {
    expect(receivedList).not.toBe(sortedList);
  });
});
