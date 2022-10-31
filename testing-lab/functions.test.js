let functions = require("functions.js")

test('should return 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('should return sum of 2 and 1', () => {
    expect(add(1, 2)).toEqual(3)
})

test('should return sum of 5 and 9', () => {
    expect(add(5, 9)).toEqual(14)
})

test('should return Hello, James', () => {
    expect(greeting(James)).toEqual("Hello, James")
})

test('should return Hello, Jill', () => {
    expect(greeting(Jill)).toEqual("Hello, Jill")
})