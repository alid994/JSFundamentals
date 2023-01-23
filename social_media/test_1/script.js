// Fetch JSON data
fetch('posts.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    displayPosts(data.posts);
  });

// Display posts on the page
function displayPosts(posts) {
  var postsContainer = document.getElementById('posts');

  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];

    var postDiv = document.createElement('div');
    postDiv.classList.add('post');

    var postText = document.createElement('p');
    postText.innerText = post.text;
    postDiv.appendChild(postText);

    var postUsername = document.createElement('p');
    postUsername.innerText = post.username;
    postDiv.appendChild(postUsername);

    var postDate = document.createElement('p');
    postDate.innerText = post.date;
    postDiv.appendChild(postDate);

    postsContainer.appendChild(postDiv);
  }
}

// Handle post form submission
var postForm = document.querySelector('form');
postForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var postText = document.getElementById('post-text').value;
    var date = new Date();
    date = date.toString();
    var post = {
        text: postText,
        username: "",
        date: date
    }
    var posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.unshift(post);
    localStorage.setItem("posts", JSON.stringify(posts));
    displayPosts(posts);
});
