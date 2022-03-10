import {addition, calculatorReducer, division, multiplication, subtraction} from "./calculator";

test('addition', () => {

    // Входящие данные
    const state = 12
    const num = 5
    // Вычисление
    let result = addition(state, num)
    // Ожидание
    expect(result).toBe(17)

})

test('subtraction', () => {
    expect(subtraction(10, 4)).toBe(6)
})

test('multiplication', () => {
    expect(multiplication(3, 4)).toBe(12)
})

test('division', () => {
    expect(division(24, 6)).toBe(4)
})

test('addition', () => {
    expect(calculatorReducer(10, {type: 'ADDITION', num: 8})).toBe(18)
})
test('subtraction', () => {
    expect(calculatorReducer(10, {type: 'SUBTRACTION', num: 8})).toBe(2)
})
test('multiplication', () => {
    expect(calculatorReducer(10, {type: 'MULTIPLICATION', num: 8})).toBe(80)
})
test('division', () => {
    expect(calculatorReducer(10, {type: 'DIVISION', num: 4})).toBe(2.5)
})