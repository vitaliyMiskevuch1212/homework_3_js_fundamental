(function (){
   function randArray(k) {
       const arr = [];
       for (i = 0; i < k; i++){
           arr.push(Math.floor(Math.random() * 500) +1)
       }
       return arr
   }
   console.log(randArray(6))
})();