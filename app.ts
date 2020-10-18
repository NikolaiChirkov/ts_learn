const number1: number = 5;
const number2: number = 2.8;
const printResult: boolean = true;
const resultPhrase: string = "The result is: ";

const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
    const result: number = n1 + n2;

    if (showResult) {
        console.log(phrase + result);
    }

    return result;
}

add(number1, number2, printResult, resultPhrase);