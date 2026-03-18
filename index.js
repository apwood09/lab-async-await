function displayPosts(posts) {
    const postList = document.getElementById('post-list'); 

    // loop through post 
    posts.forEach(post => {
        // create the li, h1, & p tags 
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        // add title & body as textContent 
        h1.textContent = post.title; 
        p.textContent = post.body; 

        // append h1 & p to li 
        li.appendChild(h1); 
        li.appendChild(p); 

        // append li to ul 
        postList.appendChild(li); 
    }); 
}

// function house fetch: async/await
async function fetchAndDisplayPosts() {
    try {
        // fetch to JSONPlacehilder
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // check for sucessful request 
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // apply await 
        const posts = await response.json(); 

        // call dusplayPosts() after fetch 
        displayPosts(posts); 

    } catch (error) {
        console.error('Error fetching or displaying posts:', error);
        const postList = document.getElementById('post-list'); 
        postList.innerHTML = '<li>Failed to load posts. Please try again later.</li>';
    }
}

// initiate function 
fetchAndDisplayPosts();