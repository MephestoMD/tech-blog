const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('textarea').value;
    const post_id = document.querySelector('textarea').id;
    console.log(content)
    console.log(post_id)
    if (post_id && content) {
      const response = await fetch('/api/comments/add', {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('#add-comment-form')
  .addEventListener('submit', commentFormHandler);