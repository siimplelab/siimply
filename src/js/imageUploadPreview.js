export const fileUpload = (() => {
  const init = (elements) => {
    elements.forEach(({ uploadButtonId, imageInputId, fileChosenId, previewContainerId }) => {
      const uploadButton = document.getElementById(uploadButtonId);
      const imageInput = document.getElementById(imageInputId);
      const fileChosen = document.getElementById(fileChosenId);
      const previewContainer = document.getElementById(previewContainerId);

      if (uploadButton && imageInput && fileChosen && previewContainer) {
        uploadButton.addEventListener('click', () => {
          imageInput.click();
        });
        
        imageInput.addEventListener('change', (event) => { // Added event parameter here
          if (imageInput.files && imageInput.files.length > 0) {
            fileChosen.textContent = imageInput.files[0].name;
            const file = event.target.files[0];
            if (file) {
              const reader = new FileReader();
              // const imageNumber = event.target.getAttribute('data-name');
              console.log(event.target);
              const parentElem = event.target.parentElement;
              console.log(parentElem.nextElementSibling);
              parentElem.nextElementSibling.classList.remove('hidden');
              // event.target.nextElementSibling.classList.remove('hidden');

              reader.onload = function (e) {
                previewContainer.innerHTML = ''; // Clear the preview container
                const img = document.createElement('img');
                img.src = e.target.result;
                previewContainer.appendChild(img);
              };
              reader.readAsDataURL(file);

              previewContainer.classList.add('active');
            }
          } else {
            fileChosen.textContent = 'No file chosen';
            previewContainer.classList.remove('active');
          }
        });
      } else {
        console.warn('FileUploadModule: One or more elements were not found.');
      }
    });
  };

  return {
    init: init
  };
})();
