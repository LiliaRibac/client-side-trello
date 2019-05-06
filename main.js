function addSwimlane() {
    let swimlane = document.createElement("div");
    swimlane.setAttribute("class", "swimlane");

    let container = document.getElementById("container");
    container.appendChild(swimlane);

    let nameContainer = document.createElement("div");
    nameContainer.setAttribute("class", "swimlane-name-container");

    let nameInput = document.createElement("input");
    nameInput.setAttribute("placeholder", "Enter swimlane name");
    nameContainer.appendChild(nameInput);

    let saveButton = document.createElement("button");
    saveButton.setAttribute("class", "saveBtn");
    saveButton.innerText = "Save Name";
    saveButton.addEventListener("click", saveName);
    nameContainer.appendChild(saveButton);

    let nameText = document.createElement("h3");
    nameText.style.display = "none"; //hide name text
    nameContainer.appendChild(nameText);

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "editBtn");
    editButton.innerText = "Edit name";
    editButton.style.display = "none" //hide edit button
    editButton.addEventListener("click", editName);
    nameContainer.appendChild(editButton);

    let addCardButton = document.createElement("button");
    addCardButton.innerText = "Add card";
    addCardButton.addEventListener("click", addCard);
    swimlane.appendChild(addCardButton);

    swimlane.appendChild(nameContainer);
}

function saveName() {
    let inputBox = this.parentElement.childNodes[0]; // input textbox
    let input = inputBox.value; //get user input

    if (input) { //textbox not empty 
        let name = this.parentElement.childNodes[2]; //name text
        name.innerText = input; //change name text
        name.style.display = "block"; // show name text;

        let edit = this.parentElement.childNodes[3]; //edit button
        let save = this.parentElement.childNodes[1]; //save button

        edit.style.display = "block"; //show edit button
        save.style.display = "none"; //hide save button
        inputBox.style.display = "none" //hide input box
        inputBox.style.backgroundColor = "white"
        inputBox.value = "" // clear textbox 

    } else { //textbox is empty
        inputBox.style.backgroundColor = "red";
    }

}


function editName() {
    let inputBox = this.parentElement.childNodes[0]; //input textbox
    let save = this.parentElement.childNodes[1]; //save button
    let name = this.parentElement.childNodes[2]; //name text
    let edit = this.parentElement.childNodes[3]; //edit button

    inputBox.style.display = "block" // show input textbox
    save.style.display = "block"; // show save button
    name.style.display = "none"; //hide name text
    edit.style.display = "none" //hide name text
}

function addCard() {

    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let cardTitleInput = document.createElement("input");
    cardTitleInput.setAttribute("placeholder", "Enter card title");
    card.appendChild(cardTitleInput);

    let cardTitle = document.createElement("h3");
    cardTitle.style.display = "none";
    card.appendChild(cardTitle);

    let cardDescriptionInput = document.createElement("input");
    cardDescriptionInput.setAttribute("placeholder", "Enter card description");
    card.appendChild(cardDescriptionInput);

    let cardDescription = document.createElement("p");
    cardDescription.style.display = "none";
    card.appendChild(cardDescription);

    let saveCardButton = document.createElement("button");
    saveCardButton.innerText = "Save Card";
    saveCardButton.addEventListener("click", saveCard);
    card.appendChild(saveCardButton);

    let editCardButton = document.createElement("button");
    editCardButton.innerHTML = "Edit card"
    editCardButton.addEventListener("click", editCard);
    card.appendChild(editCardButton);

    this.parentElement.appendChild(card)

}

function saveCard() {
    let inputTitleBox = this.parentElement.childNodes[0]; //input textbox
    let inputTitle = inputTitleBox.value //get user input
    let inputDescriptionBox = this.parentElement.childNodes[2]; //input textbox
    let inputDescription = inputDescriptionBox.value //get user input

    if (inputTitle && inputDescription) { //textboxe are not empty
        let title = this.parentElement.childNodes[1] // title text 
        title.innerText = inputTitle; //change title
        title.style.display = "block"; // show title text

        let description = this.parentElement.childNodes[3]; // description text
        description.innerText = inputDescription; //change description
        description.style.display = "block"; // show description text

        let edit = this.parentElement.childNodes[5]; //edit button
        let save = this.parentElement.childNodes[4]; //save button
        edit.style.display = "block"; // show edit button
        save.style.display = "none"; // hide save button

        inputTitleBox.style.display = "none"; //hide title textbox
        inputDescriptionBox.style.display = "none" //hide description textbox
        inputTitleBox.style.backgroundColor = "white";
        inputDescriptionBox.style.backgroundColor = "white";
        //inputTitleBox.value = ""; // clear textbox
        //inputDescriptionBox.value = "";
    } else {
        if (!inputTitle && inputDescription) //title textbox empty
            inputTitleBox.style.backgroundColor = "red";
        inputDescriptionBox.style.backgroundColor = "white";
    }
    if (inputTitle && !inputDescription){ // description textbox empty
        inputTitleBox.style.backgroundColor = "white";
    inputDescriptionBox.style.backgroundColor = "red";
    } if (!inputTitle && !inputDescription){
        inputTitleBox.style.backgroundColor = "red";
        inputDescriptionBox.style.backgroundColor = "red";
    }
}   

function editCard() {
    let inputTitleBox = this.parentElement.childNodes[0]; //input title textbox
    let title = this.parentElement.childNodes[1]; //title text
    let inputDescriptionBox = this.parentElement.childNodes[2]; // input description textbox
    let description = this.parentElement.childNodes[3]; // description text 
    let save = this.parentElement.childNodes[4]; //save button
    let edit = this.parentElement.childNodes[5]; //edit button
    inputTitleBox.style.display = "block"; //show input title textbox
    inputDescriptionBox.style.display = "block" // show input description textbox
    save.style.display = "block" //show save button

    title.style.display = "none" //hide input title textbox
    description.style.display = "none" //hide input description textbox
    edit.style.display = "none";

}