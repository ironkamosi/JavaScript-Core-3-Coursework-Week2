function renderImage() {
    let divContainer = document.getElementById("root");
    let img = document.createElement("img")
    img.setAttribute("id", "img");
    divContainer.appendChild(img);


    fetch("https://xkcd.now.sh/?comic=latest") // gathers the data from the api
    .then(data => data.json().then(data=>img.src=data.img))  // processes the data
    
    .catch(error => console.log(error)) // gathers the error 
}
renderImage()