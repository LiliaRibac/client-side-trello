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
     saveButton.setAttribute("class","saveBtn");
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
    

     swimlane.appendChild(nameContainer);
}

 function saveName(){
     let inputBox = this.parentElement.childNodes[0]; // input textbox
     let input = inputBox.value; //get user input

     if(input){ //textbox not empty 
      let name  = this.parentElement.childNodes[2]; //name text
      name.innerText = input; //change name text
      name.style.display = "block"; // show name text;
       
      let edit = this.parentElement.childNodes[3]; //edit button
      let save = this.parentElement.childNodes[1]; //save button

      edit.style.display = "block"; //show edit button
      save.style.display = "none"; //hide save button
      inputBox.style.display = "none" //hide input box
      inputBox.style.backgroundColor = "white"
      //inputBox.value = ""// clear textbox 

     } else { //textbox is empty
         inputBox.style.backgroundColor = "red";
     }

 }
 

function editName(){
    let inputBox = this.parentElement.childNodes[0]; //input textbox
    let save = this.parentElement.childNodes[1]; //save button
    let name = this.parentElement.childNodes[2]; //name text
    let edit = this. parentElement.childNodes[3]; //edit button

    inputBox.style.display = "block" // show input textbox
    save.style.display = "block"; // show save button
    name.style.display = "none"; //hide name text
    edit.style.display = "none" //hide name text
}