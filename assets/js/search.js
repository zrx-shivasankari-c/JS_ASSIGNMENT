//Search album based on the title
const searchAlbum = async(e) =>{
    e.preventDefault();

    displayLoading();

    const form = document.getElementById("search");
    const submitter = document.querySelector("button[value=Search]");

    const data = new FormData(form, submitter);

    let api = "https://jsonplaceholder.typicode.com/albums?"
    for(let [key,value] of data){
        api += `${key}=${value}`;
    }

    const response = await fetch(api);
    const albums = await response.json();

    hideLoading();
    
    if(albums.length){
        displayTable();
        updateTable(albums);
    }
    else{
        document.getElementById("list").innerHTML = "<h1>Not found!</h>"
    }

    document.getElementById("list").innerHTML += `<button onclick="read()">Back to list</button>`;
    form.reset();  
    
}