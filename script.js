// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when a link is clicked
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
    
    // Activity Filter Functionality
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const activityCards = document.querySelectorAll('.activity-card');
    
    if (categoryFilter && activityCards.length > 0) {
        categoryFilter.addEventListener('change', filterActivities);
    }
    
    if (priceFilter && activityCards.length > 0) {
        priceFilter.addEventListener('change', filterActivities);
    }
    
    function filterActivities() {
        const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
        const selectedPrice = priceFilter ? priceFilter.value : 'all';
        
        activityCards.forEach(card => {
            const cardCategories = card.getAttribute('data-category');
            const cardPrice = card.getAttribute('data-price');
            
            let categoryMatch = selectedCategory === 'all' || cardCategories.includes(selectedCategory);
            let priceMatch = selectedPrice === 'all' || cardPrice.includes(selectedPrice);
            
            if (categoryMatch && priceMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Accommodation Filter Functionality
    const typeFilter = document.getElementById('type-filter');
    const locationFilter = document.getElementById('location-filter');
    const accommodationCards = document.querySelectorAll('.accommodation-card');
    
    if (typeFilter && accommodationCards.length > 0) {
        typeFilter.addEventListener('change', filterAccommodations);
    }
    
    if (document.getElementById('price-filter') && accommodationCards.length > 0) {
        document.getElementById('price-filter').addEventListener('change', filterAccommodations);
    }
    
    if (locationFilter && accommodationCards.length > 0) {
        locationFilter.addEventListener('change', filterAccommodations);
    }
    
    function filterAccommodations() {
        const selectedType = typeFilter ? typeFilter.value : 'all';
        const selectedPrice = document.getElementById('price-filter') ? document.getElementById('price-filter').value : 'all';
        const selectedLocation = locationFilter ? locationFilter.value : 'all';
        
        accommodationCards.forEach(card => {
            const cardType = card.getAttribute('data-type');
            const cardPrice = card.getAttribute('data-price');
            
            let typeMatch = selectedType === 'all' || cardType === selectedType;
            let priceMatch = selectedPrice === 'all' || cardPrice.includes(selectedPrice);
            
            // Location filtering would require data-location attributes on cards
            // For now, we'll skip location filtering since it's not in the HTML
            
            if (typeMatch && priceMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert('Thank you for subscribing! You will receive updates at: ' + email);
            this.reset();
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#about' && href !== '#contact' && href !== '#faq') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
