document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting in the traditional way
    
    // Simply redirect to the campus-tour page regardless of input
    window.location.href = "campus-tour.html";
});
