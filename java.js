function redirectTo(link) {
    // Navigate to the specified link
    window.location.href = link;
}


function handleSearch() {
    var searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        filterPosts('all'); // Reset the category filter when typing in the search field
    });
}
