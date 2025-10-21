// Download page version accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const versionItems = document.querySelectorAll('.version-item');
    
    versionItems.forEach(item => {
        const toggle = item.querySelector('.version-toggle');
        
        toggle.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other version items
            versionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
    
    // Open the latest version (first item) by default
    if (versionItems.length > 0) {
        versionItems[0].classList.add('active');
    }
});
