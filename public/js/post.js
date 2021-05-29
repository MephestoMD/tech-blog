const postFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-input').value.trim();
    const content = document.querySelector('#text-area').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts/new', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Oops! Something went wrong. Verify that you have entered both a title and post content');
      }
    }
  };

  document
  .querySelector('#create-post-form')
  .addEventListener('submit', postFormHandler);