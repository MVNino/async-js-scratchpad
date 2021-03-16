// Data

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
            output += `<li>${post.title}</li>`
        });

        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong!');
            }

        }, 2000);
    });
}

/**
 * Promise method
 */
// getPosts()

// createPost({
//     title: 'Post Four',
//     body: 'Post Four'
// })
//     .then(getPosts)
//     .catch(err => console.log(err));


/**
 * Promise.all
 */
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye');
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4])
//     .then((values) => console.log(values));


/**
 * Async / Await 
 */
// async function init() {
//     await createPost({
//         title: 'Post Four',
//         body: 'Post Four'
//     });

//     getPosts();
// }

// init();


/**
 * Async / Await / Fetch 
 */ 
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    document.body.innerHTML = `${data}`;

    let output = '<ul>';
    data.forEach((datum, index) => {
        output += `<li>${datum.name}</li>`;
    });

    document.body.innerHTML = output;
}

fetchUsers();