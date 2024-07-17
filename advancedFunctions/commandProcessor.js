function solution() {
    let mainString = '';

    return {
        append: (string) => mainString += string,
        removeStart: (num) => mainString = mainString.substring(num),
        removeEnd: (num) => mainString = mainString.substring(0, mainString.length - num),
        print: () => console.log(mainString)

    }
    
}


let firstZeroTest = solution();

firstZeroTest.append('hello');

firstZeroTest.append('again');

firstZeroTest.removeStart(3);

firstZeroTest.removeEnd(4);

firstZeroTest.print();