function sort(arr) {
    function comparator(a, b) {
        let firstCrit = a.length - b.length
        if (firstCrit !== 0) {
            return firstCrit
        }
        else {
            return a.toUpperCase().localeCompare(b.toUpperCase())
        }


    }
    console.log(arr.sort(comparator).join('\n'))


}
sort(['alpha', 'beta', 'gamma'])