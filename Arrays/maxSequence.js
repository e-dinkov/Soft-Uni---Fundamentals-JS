function fundamentals(arr) {
    let bigSeqNumber = arr[0];
    let bigCounter = 0;
    let seqNumber = arr[0];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        if (currentElement === seqNumber) {
            counter++;
            continue;
        }
        if (counter > bigCounter) {
            bigCounter = counter;
            bigSeqNumber = seqNumber;
        }
        seqNumber = currentElement;
        counter = 1;


    }
    let output = ''
    for(let i = 0; i < bigCounter ; i ++)
    {
        output += ` ${bigSeqNumber}`
    }
    console.log(output.slice(1))



}
fundamentals([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])