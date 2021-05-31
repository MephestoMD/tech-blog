const editFormHandler = async () => {

    const title = document.querySelector('#title-input').value;
    const content = document.querySelector('#text-area').value;
    const id = document.querySelector('.edit-post-form').id;

    if (title && content) {
      const response = await fetch(`/api/posts/update/${id}`, {
        method: 'PUT',
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

  const deleteHandler = async () => {

    const id = document.querySelector('.edit-post-form').id;

    if (id) {
      const response = await fetch(`/api/posts/delete/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };