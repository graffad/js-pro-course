import './style.css';

const container = document.getElementById('container');
const button = document.getElementById('show_more');
let counter = 0;
// const status = function (response) {
//   if (response.status == 200) {
//     return Promise.resolve(response);
//   }
//   return Promise.reject(new Error(response.statusText));
// };
// const inJson = function (response) {
//   return response.json();
// };


const url = 'https://jsonplaceholder.typicode.com/posts';
const url2 = 'https://jsonplaceholder.typicode.com/users';

function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((data1) => {
      fetch(url2)
        .then((response) => response.json())
        .then((data2) => {
          console.log(data2);
          console.log(data1);
          // createBlocks(data2);


          createBlocks(data1, data2);
          button.onclick = function () {
            createBlocks(data1, data2);
          };
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
}

getData();

function createBlocks(posts, users) {
  for (let i = 0; i < 5; i++) {
    const block = document.createElement('div');
    block.className = 'article-block';
    const title = document.createElement('h2');
    const text = document.createElement('p');
    const author = document.createElement('div');
    author.className = 'author';
    // let identifyer = `${posts[counter].userId}`;
    // author.setAttribute("userId",`${identifyer}`);

    for (let s = 0; s < users.length; s++) {
      if (posts[counter].userId === users[s].id) {
        // author.innerText = `Author: ${users[s].username}`;
        author.insertAdjacentHTML('afterbegin', `
<div class="author-info">Author: ${users[s].username}
<div class="modal-hidden">
<h3>${users[s].name}</h3>
<p>Address: <span>${users[s].address.city}, </span>
<span>${users[s].address.street}, </span>
<span>${users[s].address.suite}, </span>
</p>

<p>Email: ${users[s].email}</p>
<p><a href="tel:${users[s].phone}">${users[s].phone}</a></p>
<p><a href="#">${users[s].website}</a></p>
<button class="close-modal">Close</button>
</div>

</div>








`);
      }
    }
    title.innerText = posts[counter].title;
    text.innerText = posts[counter].body;
    block.appendChild(title);

    block.appendChild(text);
    block.appendChild(author);
    container.appendChild(block);
    counter++;
  }
}

const act = document.getElementsByClassName('modal-active');

document.addEventListener('click', (event) => {
  console.log(event);
  for (let k = 0; k < act.length; k++) {
    if (act[k] !== undefined) {
      act[k].className = 'modal-hidden';
    }
  }
  if (event.target.className === 'author-info') {
    event.path[0].children[0].setAttribute('class', 'modal-active');
  }
});

const closeModal = document.getElementsByClassName('close-modal');
closeModal.onclick = function () {
  for (let k = 0; k < act.length; k++) {
    if (act[k] !== undefined) {
      act[k].className = 'modal-hidden';
    }
  }
};
