document.addEventListener('DOMContentLoaded', function() {
    
    const images = [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop'
    ];

    let selectedColor = 'Olive Green';
    let selectedSize = 'Large';
    let quantity = 1;

    // Thumbnail clicks
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const index = parseInt(thumb.dataset.index);
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            mainImage.src = images[index];
        });
    });

    // Color selection
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(color => {
        color.addEventListener('click', () => {
            colorOptions.forEach(c => c.classList.remove('active'));
            color.classList.add('active');
            selectedColor = color.dataset.color;
        });
    });

    // Size selection
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(size => {
        size.addEventListener('click', () => {
            sizeOptions.forEach(s => s.classList.remove('active'));
            size.classList.add('active');
            selectedSize = size.textContent;
        });
    });

    // Quantity controls
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const quantityDisplay = document.querySelector('.quantity');

    minusBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });

    plusBtn.addEventListener('click', () => {
        quantity++;
        quantityDisplay.textContent = quantity;
    });

    // Add to cart
    const addToCartBtn = document.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', () => {
        alert(`🛒 Added to Cart!\n\nProduct: ONE LIFE GRAPHIC T-SHIRT\nColor: ${selectedColor}\nSize: ${selectedSize}\nQuantity: ${quantity}\nTotal: $${260 * quantity}`);
    });

    // Search
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && searchInput.value.trim()) {
            alert(`🔍 Searching for: "${searchInput.value}"`);
        }
    });

    // Header icons
    const cartBtn = document.querySelector('.header-icons .icon-btn:first-child');
    const userBtn = document.querySelector('.header-icons .icon-btn:last-child');
    
    cartBtn.addEventListener('click', () => alert('🛒 Shopping Cart'));
    userBtn.addEventListener('click', () => alert('👤 User Account'));

    // Navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            alert(`Navigate to: ${link.textContent}`);
        });
    });

    // Breadcrumb
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
    breadcrumbLinks.forEach(link => {
        link.addEventListener('click', () => {
            alert(`Navigate to: ${link.textContent}`);
        });
    });

    // Tabs functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // FAQ toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('span:last-child');
            
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.textContent = '▼';
            } else {
                // Close all other FAQs
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.style.display = 'none';
                });
                document.querySelectorAll('.faq-question span:last-child').forEach(ic => {
                    ic.textContent = '▼';
                });
                
                answer.style.display = 'block';
                icon.textContent = '▲';
            }
        });
    });

    // Load more reviews
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            alert('Loading more reviews...');
        });
    }

    // Write review button
    const writeReviewBtn = document.querySelector('.write-review-btn');
    if (writeReviewBtn) {
        writeReviewBtn.addEventListener('click', () => {
            alert('Write a Review form would open here!');
        });
    }

    // Product cards in "You Might Also Like"
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productName = card.querySelector('.product-name').textContent;
            alert(`Viewing product: ${productName}`);
        });
    });

    // Social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            alert('Opening social media...');
        });
    });

    console.log('✅ Product page loaded successfully!');
});

