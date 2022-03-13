import {getBanknoteList, getSum, getTriangleType, isEvenIndexSumGreater, isSquareGreater, sum} from "./tasks";

test('sum', () => {
    expect(sum(3, 5, 7, 6, 4, 9)).toBe(34)
    expect(sum(1, 1, 1, 6)).toBe(9)
    expect(sum(0)).toBe(0)
})

test('get Triangle Type', () => {
    expect(getTriangleType(1, 1, 1)).toBe('10')
    expect(getTriangleType(2, 3, 3)).toBe('01')
    expect(getTriangleType(4, 5, 3)).toBe('11')
    expect(getTriangleType(10, 2, 2)).toBe('00')
})

test('get Sum', () => {
expect(getSum(1000)).toBe(1)
expect(getSum(1234)).toBe(10)
expect(getSum(23071980)).toBe(30)
expect(getSum(2345)).toBe(14)
expect(getSum(0)).toBe(0)
})

test('is Even Index Sum Greater', () => {
expect(isEvenIndexSumGreater([2,3,4,5,6])).toBe(true)
expect(isEvenIndexSumGreater([2,3,4,5,6,3,20,10])).toBe(true)
expect(isEvenIndexSumGreater([2,3,4,5,6,0,4,0])).toBe(true)
})

test('is Square Greater', () => {
    expect(isSquareGreater(32, 64)).toBe(true)
    expect(isSquareGreater(64, 64)).toBe(false)
    expect(isSquareGreater(50, 64)).toBe(true)
    expect(isSquareGreater(51, 64)).toBe(false)

})

test('get Banknote List', () => {
expect(getBanknoteList(1500)).toStrictEqual([1000, 500])
expect(getBanknoteList(1600)).toStrictEqual([1000, 500, 100])
expect(getBanknoteList(1501)).toStrictEqual([1000, 500, 1])
expect(getBanknoteList(2501)).toStrictEqual([1000, 1000, 500, 1])
expect(getBanknoteList(3823)).toStrictEqual([1000, 1000, 1000, 500, 100, 100, 100, 20, 2, 1])
})