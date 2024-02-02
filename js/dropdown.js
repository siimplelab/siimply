function initializeDropdowns() {

  // Query all dropdown buttons
  const dropdownButtons = document.querySelectorAll('.dropdown > button');

  // Function to toggle dropdown
  function toggleDropdown(event) {
    let currentButton = event.target;
    let currentContent = currentButton.nextElementSibling;
    let expanded = currentButton.getAttribute('aria-expanded') === 'true';

    // Set the expanded state on the button that was clicked
    currentButton.setAttribute('aria-expanded', !expanded);
    // Toggle the display of the associated dropdown content
    currentContent.style.display = expanded ? 'none' : 'block';
    
    // Set the top position of the dropdown content to the bottom of the trigger
    let triggerBottom = currentContent.parentElement.clientHeight;
    currentContent.style.top = `${triggerBottom}px`;
    // currentContent.style.top = expanded ? `${triggerBottom}px` : '';
    // Reset the top position after the content being hidden
    currentContent.addEventListener('transitionend', function () {
      if (currentContent.style.display === 'none') {
        currentContent.style.top = '';
      }
    });
  }

  // Add click event listener to each dropdown button
  dropdownButtons.forEach(button => {
    button.addEventListener('click', toggleDropdown);
  });

  // Click event listener for the document to handle closing dropdowns
  document.addEventListener('click', function (event) {
    // If the clicked target is not a dropdown button or a descendant of a dropdown-content
    if (!event.target.matches('.dropdown > button') && !event.target.closest('.dropdown-content')) {
      // Close all dropdowns
      dropdownButtons.forEach(button => {
        button.setAttribute('aria-expanded', 'false');
        button.nextElementSibling.style.display = 'none';
      });
    }
  });
}

export default initializeDropdowns;