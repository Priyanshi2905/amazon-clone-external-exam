document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');

    searchIcon.addEventListener('click', function() {
        const query = searchInput.value;
        if (query) {
            console.log("Searching for:", query);
            // You can add additional functionality here, such as redirecting to a search results page
            // window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        } else {
            console.log("Please enter a search term.");
        }
    });

    // Optional: Allow pressing 'Enter' to trigger the search
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchIcon.click();
        }
    });
});
