const container = document.querySelector("#container");
const loading = document.querySelector(".loading");

getPosts();
getPosts();
getPosts();

window.addEventListener("scroll", ()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

    if(clientHeight +scrollTop >= scrollHeight -5) {
        showLoading();
    }
});

function showLoading() {
    loading.classList.add('show');
    setTimeout(getPosts, 0);
}


async function getPosts() {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${getRandomNr()}`)
    const postData = await postResponse.json();
    const data = postData;
    addDataToDOM(data);
}
function getRandomNr() {
    return Math.floor(Math.random()*100)+1;
}

function addDataToDOM(data) {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');
    postElement.innerHTML = `
        <h2 class="title">${data.title}</h2>
        <p class="text">${data.body}</p>
    `;
    container.append(postElement);
    loading.classList.remove('show');
} 