const postFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-input').value;
    const content = document.querySelector('#text-area').value;
  
    if (title && content) {
      const response = await fetch('/api/posts/new', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
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
  .querySelector('#create-post-form')
  .addEventListener('submit', postFormHandler);