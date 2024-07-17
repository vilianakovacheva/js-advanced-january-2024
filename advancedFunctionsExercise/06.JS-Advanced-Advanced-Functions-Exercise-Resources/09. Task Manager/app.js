function solve() {
    let [addTaskSection, openSection, inProgressSection, completeSection] = Array.from(document.querySelectorAll("section"));
    let taskRef = document.getElementById("task");
    let descriptionRef = document.getElementById("description");
    let dueDateRef = document.getElementById("date");
    let addButton = document.getElementById("add");
    addButton.addEventListener("click", add);

    function add(e) {
        e.preventDefault();
        if (taskRef.value != '' && descriptionRef.value != '' && dueDateRef.value != '') {
            let div = openSection.children[1];
            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            h3.textContent = taskRef.value;
            article.appendChild(h3);
            let p1 = document.createElement('p');
            p1.textContent = `Description: ${descriptionRef.value}`;
            article.appendChild(p1);
            let p2 = document.createElement('p');
            p2.textContent = `Due Date: ${dueDateRef.value}`;
            article.appendChild(p2);
            let divWithButtons = document.createElement('div');
            divWithButtons.className = "flex";
            let button1 = document.createElement("button");
            button1.className = "green";
            button1.textContent = 'Start';
            button1.addEventListener('click', start);
            divWithButtons.appendChild(button1);
            let button2 = document.createElement("button");
            button2.className = "red";
            button2.textContent = 'Delete';
            button2.addEventListener('click', deleteIt);
            divWithButtons.appendChild(button2);
            article.appendChild(divWithButtons);
            div.appendChild(article);
            

        }
    }
    function start(event) {
        let articleOfOpenSection = event.target.parentElement.parentElement;
        let div = inProgressSection.children[1];
        let divWithButtons = articleOfOpenSection.querySelector("div");
        articleOfOpenSection.removeChild(divWithButtons);
        let divWithNewButtons = document.createElement('div');
        divWithNewButtons.className = "flex";
        let button1 = document.createElement("button");
        button1.className = "red";
        button1.textContent = 'Delete';
        button1.addEventListener('click', deleteIt);
        divWithNewButtons.appendChild(button1);
        let button2 = document.createElement("button");
        button2.className = "orange";
        button2.textContent = 'Finish';
        button2.addEventListener('click', finish);
        divWithNewButtons.appendChild(button2);
        articleOfOpenSection.appendChild(divWithNewButtons);
        div.appendChild(articleOfOpenSection);

    }

    function deleteIt(event) {
        let article = event.currentTarget.parentElement.parentElement;
        let div = event.currentTarget.parentElement.parentElement.parentElement;
        div.removeChild(article);

    }

    function finish() {
        let articleOfInProgress = inProgressSection.children[1].querySelector('article');
        let divWithButtons = articleOfInProgress.querySelector("div");
        articleOfInProgress.removeChild(divWithButtons);
        let div = completeSection.children[1];
        div.appendChild(articleOfInProgress);
    }
}