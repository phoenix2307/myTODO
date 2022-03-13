// 1. Функция sum приниамет параметром целые положительные
//числа (неопределенное количество) и возвращает их сумму (rest)

export const sum = (...nums: Array<any>): number => {
    return nums.reduce((acc, el) => acc + el)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника
// Функция доджна возвращать:
// - "10", если треугольник равносторонний,
// - "01", если треугольник равнобедренный,
// - "11", если треугольник обычный,
// - "00", если такого треугольника не существует

export const getTriangleType = (a: number, b: number, c: number): string => {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && a === c && b === c) {
            return '10'
        } else if (a === b || a === c || b === c) {
            return '01'
        }
        return '11'
    } else return '00'
}

// Вариант 2
/*export const getTriangleType = (a: number, b: number, c: number): string => {
    const isTriangle = a + b > c && a + c > b && b + c > a // проверка на правильность треугольника

    if (a === b && a === c && b === c) {
        return '10'
    } else if (isTriangle && (a === b || a === c || b === c)) {
        return '01'
    } else if (isTriangle) {
        return '11'
    } else return '00'
}*/

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export const getSum = (num: number): number => {
    const result = Array.from(num.toString())
        .map(item => Number(item))
        .reduce((acc, el) => acc + el)
    return result
}

// 4. Функция isEvenIndexSumGreater принимает параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let sumEven = arr.filter((item, index) => index % 2 > 0 ? item : null)
        .reduce((acc, elem) => acc + elem)
    let sumOdd = arr.filter((item, index) => index % 2 === 0 ? item : null)
        .reduce((acc, elem) => acc + elem)
    if (sumOdd > sumEven) {
        return true
    } else return false
}

// 5. Функция isSquareGreater принимает два параметраЖ площадь круга и
// площадь квадрата. Функция должна возвращеать true если круг не будет выступать за пределы
// квадрата и false в противном случае. Центры фигур совпадают.

export const isSquareGreater = (areaCr: number, areaSq: number) => {
    const side = Math.sqrt(areaSq)
    const radius = Math.sqrt(areaCr / Math.PI)
    if ((2 * radius) <= side) {
        return true
    } else return false
}
// Вариант 2
// export const isSquareGreater = (areaCr: number, areaSq: number) => areaCr / areaSq <= Math.PI / 4

// 6. Функция-банкомат принимает параметром целое число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

// Д.З.:
export const getBanknoteList = (amountOfMoney: number): number[] => {
    const banknotes = [1000, 500, 100, 50, 20, 10, 2, 1]
        .sort((a, b) => a - b)
        .reverse()
    let numberOfBanknotes: number[] = []
    for (let i = 0; i < banknotes.length; i++){
        if(amountOfMoney >= banknotes[i]){
            amountOfMoney = amountOfMoney - banknotes[i]
            numberOfBanknotes.push(banknotes[i])
            i = i -1
        }
    }
    return numberOfBanknotes
}