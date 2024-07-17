function cars(arr) {
    let carsObj = {};

    for (let command of arr) {
        let [action, ...tokens] = command.split(' ')

        if (action == 'create') {
            let [name, inherit, parentName] = tokens;
            let obj = Object.create(inherit ? carsObj[parentName] : null)
            carsObj[name] = obj;
        } else if (action == 'set') {
            let [name, key, value] = tokens;
            carsObj[name][key] = value;
        } else {
            let [name] = tokens;
            let obj = carsObj[name];
            let output = [];
            for (let currentObject = obj; currentObject !== null; currentObject = Object.getPrototypeOf(currentObject)) {
                let entries = Object.entries(currentObject);
                for (let [key, value] of entries) {
                    output.push(`${key}:${value}`);
                }
            }

            console.log(output.join(','));
        }
    }

}
cars(['create c1',

    'create c2 inherit c1',

    'set c1 color red',

    'set c2 model new',

    'print c1',

    'print c2'])