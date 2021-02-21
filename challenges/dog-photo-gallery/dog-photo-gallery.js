
// function to create images 
function dogGallery() {
    let divContainer = document.getElementById("root");
    let button = document.createElement("button");
    let ulElement = document.createElement("ul");
    let liElement = document.createElement("li");
    let imgElement = document.createElement("img");

    divContainer.appendChild(buttonOne);
    divContainer.appendChild(ulElement);

    button.addEventListener("click",function() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(data => data.json).then(
          

            liElement.appendChild(imgElement),
            ulElement.appendChild(liElement)
        )
    })
}