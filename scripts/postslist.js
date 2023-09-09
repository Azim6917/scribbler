document.addEventListener("DOMContentLoaded", function () {
    // Get all delete buttons by their class name
    var deleteButtons = document.querySelectorAll(".fa-trash");
  
    // Get the modal elements
    var modal = document.getElementById("modal-t");
    var yesButton = document.getElementById("yes");
    var noButton = document.getElementById("no");
  
    // Store the post elements to be deleted
    var postToDelete = null;
  
    // Attach a click event listener to each delete button
    deleteButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Show the confirmation modal when a delete button is clicked
        modal.style.display = "block";
  
        // Store the post element to be deleted
        postToDelete = button.closest(".posts");
      });
    });
  
    // Handle the "Yes" button click in the confirmation modal
    yesButton.addEventListener("click", function () {
      // Check if there's a post to delete
      if (postToDelete) {
        // Remove the post element
        postToDelete.remove();
      }
  
      // Hide the confirmation modal
      modal.style.display = "none";
  
      // Reset the post to delete
      postToDelete = null;
    });
  
    // Handle the "No" button click in the confirmation modal
    noButton.addEventListener("click", function () {
      // Hide the confirmation modal without removing the post
      modal.style.display = "none";
  
      // Reset the post to delete
      postToDelete = null;
    });
  
    // Prevent the form from submitting (which would reload the page)
    var modalForm = document.getElementById("modal-cnt4");
    modalForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  });
  