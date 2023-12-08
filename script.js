document.getElementById('imageInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');

  const formData1 = new FormData();
  formData1.append('file', file);

  const formData2 = new FormData();
  formData2.append('file', file);

  const fetchImage = (url, formData, targetImage) => {
    return fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        return response.blob();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(blob => {
      targetImage.src = URL.createObjectURL(blob);
    })
    .catch(error => {
      console.error('There was an error processing the image:', error);
    });
  };

  Promise.all([
    fetchImage('http://127.0.0.1:5000/process_image1', formData1, image1),
    fetchImage('http://127.0.0.1:5000/process_image2', formData2, image2)
  ])
  .catch(error => {
    console.error('Error in one of the fetch requests:', error);
  });
});