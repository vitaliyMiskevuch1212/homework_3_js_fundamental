(function (){
    function calc(){
        const a = prompt("введіть значення А: ");
        const b = prompt("введіть значення Б: ");
        const op = prompt("введіть арифметичну дію(1 - 4): ");
        switch (op) {
            case 1:
                return a - b;
             break
            case 2:
                return a * b;
             break
            case 3:
                return a / b;
             break
            default:
                return a + b;
            break
        }
    }
    console.log(calc())
})()