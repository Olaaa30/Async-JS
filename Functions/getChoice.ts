// import getRandomChoice from "/rps.js"

type EvenNumber = 2 | 4 | 6 | 8

const sumNums = (a: EvenNumber, b: number) => {
    return (a + b);
};

let res = sumNums(2, 6);
console.log(res)