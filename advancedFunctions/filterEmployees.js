function filterEmployees(data, criteria) {
    let objects = JSON.parse(data);
    let [dataOfObject, criteriaOfObject] = criteria.split("-");
    let count = -1;
    for (let object of objects) {
        if (object[dataOfObject] == criteriaOfObject) {
            count++;
            console.log(`${count}. ${object.first_name} ${object.last_name} - ${object.email}`);

        }
    }


}
filterEmployees(`[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`,
    
    'gender-Female')