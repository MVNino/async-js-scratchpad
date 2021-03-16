const posts = [
    {
        title: 'Post One',
        body: 'Post One Body',
    },
    {
        title: 'Post Two',
        body: 'Post Two Body',
    },
    {
        title: 'Post Three',
        body: 'Post Three Body',
    }
];

function getPosts() {
    let output = '';
    setTimeout(() => {
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);

}

createPost({
    title: 'Post Four',
    body: 'Post Four'
}, getPosts);