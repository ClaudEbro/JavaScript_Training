function sumOfNumbers(p1, p2, p3, ...numbers) {
    console.log(numbers);
    console.log(p1);
    console.log(p2);
    console.log(p3);
    return numbers.reduce((sum, number) => sum+number,0);
}