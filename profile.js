// Function to open the modal when the profile icon is clicked
document.getElementById("profile-icon").addEventListener("click", function() {
    document.getElementById("profile-modal").style.display = "block";
});

// Function to close the modal when the close button is clicked
document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("profile-modal").style.display = "none";
});
