let container = document.getElementById('container');
let button = document.getElementById("show_more")
let counter = 0;
let status = function (response) {
    if (response.status == 200) {
       
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
};
let inJson = function (response) {
    return response.json();
};


let url = "https://jsonplaceholder.typicode.com/posts"
let url2 = "https://jsonplaceholder.typicode.com/users"

function getData() {
    fetch(url)
        .then(response => response.json())
        .then(function (data1) {
            fetch(url2)
              .then(response => response.json())
              .then(function (data2) {
                console.log(data2)
                console.log(data1)
                // createBlocks(data2);
                
                
        createBlocks(data1,data2)
        button.onclick = function(){
            createBlocks(data1,data2);  
        }








              })
              .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
}

getData();

function createBlocks(posts,users){
    for(let i =0; i<5; i++){
        let block = document.createElement("div");
        let title = document.createElement("h2");
        let text = document.createElement("p");
        let author = document.createElement("div");
        let identifyer = `${posts[counter].userId}`;
        author.setAttribute("userId",`${identifyer}`);
        
for(let s = 0; s < users.length; s++){
    if(posts[counter].userId === users[s].id) {
        // author.innerText = `Author: ${users[s].username}`;
       author.insertAdjacentHTML("afterbegin", `
<p>Author: ${users[s].username}</p>
<div class="modal">
<h3>${users[s].name}</h3>
<p>Address: <span>${users[s].address.city}, </span>
<span>${users[s].address.street}, </span>
<span>${users[s].address.suite}, </span>
</p>

<p>Email: ${users[s].email}</p>
<p><a href="tel:${users[s].phone}">${users[s].phone}</a></p>
<p><a href="#">${users[s].website}</a></p>

</div>










`)









    }
}
        title.innerText = posts[counter].title;
        text.innerText = posts[counter].body
        block.appendChild(title);

        block.appendChild(text);
        block.appendChild(author)
        container.appendChild(block)
        counter++
    }
    };
    
// document.addEventListener("click",)