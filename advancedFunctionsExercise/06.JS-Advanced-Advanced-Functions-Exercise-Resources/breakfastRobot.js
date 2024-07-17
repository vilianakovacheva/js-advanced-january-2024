function breakfastRobot() {
    let shop = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },

        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },

        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },

        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },

        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }
    return function (data) {
        let [action, type, qty] = data.split(' ');

        if (action == 'restock') {
            return restock(type, qty);
        } else if (action == 'prepare') {
            return prepare(type, qty);
        } else if (action == 'report') {
            return report();
        }

    }
    function restock(type, qty) {
        shop[type] += Number(qty);
        return 'Success';
    }
    
    function prepare(type, qty) {
        let prepareRecipe = {};
        for (let [el, value] of Object.entries(recipes[type])) {
            let neededValue = value * Number(qty);
            if (shop[el] < neededValue) {
                return `Error: not enough ${el} in stock`;
            }
            prepareRecipe[el] = neededValue;
        }
        for (let [el,value] of Object.entries(prepareRecipe)) {
            shop[el] -= value;
        }
        return 'Success';
    
    }
    function report() {
        return `protein=${shop.protein} carbohydrate=${shop.carbohydrate} fat=${shop.fat} flavour=${shop.flavour}`;
    }

}


let manager = breakfastRobot();

console.log(manager("restock flavour 50")); // Success

console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in


