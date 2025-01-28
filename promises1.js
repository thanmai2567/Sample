


function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Fetched user data');
        resolve({ userId: userId, name: 'John Doe' });
      }, 1000);
    });
  }
  
 
  function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Fetched posts for user');
        resolve([{ postId: 1, title: 'Post 1' }, { postId: 2, title: 'Post 2' }]);
      }, 1000);
    });
  }
  
  
  function fetchPostComments(postId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Fetched comments for post', postId);
        resolve([{ commentId: 1, text: 'Great post!' }, { commentId: 2, text: 'Nice one!' }]);
      }, 1000);
    });
  }
  
  
  fetchUserData(1)
    .then(user => {
      return fetchUserPosts(user.userId); 
    })
    .then(posts => {
      const postPromises = posts.map(post => fetchPostComments(post.postId)); 
      return Promise.all(postPromises); 
    })
    .then(comments => {
      console.log('Fetched all comments:', comments);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  