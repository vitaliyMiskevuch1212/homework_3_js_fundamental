(function (){
    function separateTypes(arr) {
        const result = [];
        const types = {};

        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            const type = typeof item;
            if (type === "number" && isNaN(item)) {
                continue;
            }
            if (Array.isArray(item)) {
                const nestedResult = separateTypes(item);
                for (let j = 0; j < nestedResult.length; j++) {
                    const nestedType = typeof nestedResult[j];
                    if (nestedType === "number" && isNaN(nestedResult[j])) {
                        continue;
                    }
                    if (!types[nestedType]) {
                        types[nestedType] = [];
                    }
                    types[nestedType].push(nestedResult[j]);
                }
            } else {
                if (!types[type]) {
                    types[type] = [];
                }
                types[type].push(item);
            }
        }

        for (let type in types) {
            result.push(types[type]);
        }
        return result;
    }
    let arr1 = [5, "limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "brown"];
    console.log(separateTypes(arr1));
})()