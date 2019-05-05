function addSwimlane() {
    let swimlane = document.createElement("div");
    swimlane.setAttribute("class", "swimlane");

    let container = document.getElementById("container");
    container.appendChild(swimlane);
}