(function (){
    function findUnique(arr) {
        const uniqueArr = [...arr];
        uniqueArr.sort();
        for (let i = 0; i < uniqueArr.length - 1; i++) {
            if (uniqueArr[i] === uniqueArr[i + 1]) {
                return false;
            }
        }
        return true;
    }
    console.log(findUnique([1, 2, 3, 5, 3]));
    console.log(findUnique([1, 2, 3, 5, 11]));
})()