(function (){
    function createArray(start, end){
        const result = [];
        for(i = start; i <= end; i++){
            result.push(i)
        }
        return result;
    }
    let arr = createArray(2, 15);
    console.log(arr);
})()