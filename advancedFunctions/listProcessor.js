function listProcessor(arr) {
    let innerCollection = [];

    for (let command of arr) {
        let [action, string] = command.split(' ');

        if (action == 'add') {
            innerCollection.push(string);
        } else if (action == 'remove') {
            if (innerCollection.includes(string)) {
                while (innerCollection.includes(string)) {
                    innerCollection.splice(innerCollection.indexOf(string), 1);
                }
            }
        } else {
            console.log(innerCollection.join(','));
        }

    }

}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])