const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "The result is: ";

const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
    const result: number = n1 + n2;

    if (showResult) {
        console.log(phrase + result);
    }

    return result;
}

add(number1, number2, printResult, resultPhrase);