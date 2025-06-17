document.addEventListener('DOMContentLoaded', function() {
    const sliderInner = document.querySelector('.slider-inner');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;
    const totalSlides = sliderItems.length;
    let slideInterval;

    // Function to update the slider position
    function updateSliderPosition() {
        const offset = -currentIndex * 100; // Each slide is 100% width
        sliderInner.style.transform = `translateX(${offset}%)`;

        // Update active dot
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Function to show a specific slide
    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0; // Loop back to the first slide
        } else if (index < 0) {
            currentIndex = totalSlides - 1; // Loop to the last slide
        } else {
            currentIndex = index;
        }
        updateSliderPosition();
    }

    // Next slide
    function showNextSlide() {
        showSlide(currentIndex + 1);
    }

    // Previous slide
    function showPrevSlide() {
        showSlide(currentIndex - 1);
    }
    
    // Event Listeners for Arrows
    nextArrow.addEventListener('click', () => {
        showNextSlide();
        resetAutoSlide();
    });

    prevArrow.addEventListener('click', () => {
        showPrevSlide();
        resetAutoSlide();
    });

    // Event Listeners for Dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIndex = parseInt(dot.dataset.slide);
            showSlide(slideIndex);
            resetAutoSlide();
        });
    });

    // Auto-slide functionality
    function startAutoSlide() {
        slideInterval = setInterval(showNextSlide, 5000); // Change slide every 5 seconds
    }

    function resetAutoSlide() {
        clearInterval(slideInterval); // Clear existing interval
        startAutoSlide(); // Start a new one
    }

    // Initialize the slider
    updateSliderPosition(); // Set initial position
    startAutoSlide(); // Start auto-sliding

    // Optional: Pause on hover
    sliderInner.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    sliderInner.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
});


// --------------------------------------------------------------------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = Array.from(document.querySelectorAll('.carousel-item:not(.cloned)'));
    let allCarouselItems = Array.from(document.querySelectorAll('.carousel-item'));
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    const dotsContainer = document.querySelector('.carousel-dots');
    const dots = Array.from(document.querySelectorAll('.dot'));
    const viewMoreButton = document.querySelector('.view-more-button');

    // Configuration
    const itemsPerView = 5; // How many items you want to see completely visible.
    const scrollIntervalTime = 3000; // 3 seconds for automatic scroll
    let currentIndex = 0; // Current logical index of the first visible item
    let autoScrollInterval;
    let itemWidth; // Will be calculated dynamically, includes margin

    // Function to calculate item width based on the first item
    const calculateItemWidth = () => {
        if (carouselItems.length > 0) {
            const itemStyle = getComputedStyle(carouselItems[0]);
            itemWidth = carouselItems[0].offsetWidth + parseFloat(itemStyle.marginRight); // Only consider margin-right
        } else {
            itemWidth = 250; // Fallback or a sensible default if no items (220px width + 30px margin-right from CSS)
        }
    };

    // Recalculate item width on window resize
    window.addEventListener('resize', () => {
        calculateItemWidth();
        // Recalculate currentIndex to account for newly prepended clones
        // and adjust position without transition.
        currentIndex = itemsPerView;
        updateCarouselPosition(false);
    });

    // Function to update carousel position
    const updateCarouselPosition = (useTransition = true) => {
        if (!carouselTrack || !itemWidth) return;

        const offset = -currentIndex * itemWidth;
        carouselTrack.style.transition = useTransition ? 'transform 0.5s ease-in-out' : 'none';
        carouselTrack.style.transform = `translateX(${offset}px)`;
    };

    // Function to update active dot
    const updateDots = () => {
        const originalItemIndex = (currentIndex - itemsPerView) % carouselItems.length;
        const dotIndex = originalItemIndex < 0 ? originalItemIndex + carouselItems.length : originalItemIndex;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === dotIndex);
        });
    };

    // Function for automatic scrolling
    const startAutoScroll = () => {
        stopAutoScroll(); // Clear any existing interval
        autoScrollInterval = setInterval(() => {
            nextSlide();
        }, scrollIntervalTime);
    };

    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval);
    };

    // Handle next slide
    const nextSlide = () => {
        currentIndex++;
        updateCarouselPosition();

        if (currentIndex >= carouselItems.length + itemsPerView) {
            setTimeout(() => {
                carouselTrack.style.transition = 'none';
                currentIndex = itemsPerView; // Reset to the first logical item
                carouselTrack.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
                carouselTrack.offsetHeight; // Force reflow
                carouselTrack.style.transition = 'transform 0.5s ease-in-out';
            }, 500); // Match CSS transition duration
        }
        updateDots();
    };

    // Handle previous slide
    const prevSlide = () => {
        currentIndex--;
        updateCarouselPosition();

        if (currentIndex < itemsPerView) {
            setTimeout(() => {
                carouselTrack.style.transition = 'none';
                currentIndex = carouselItems.length + currentIndex; // Adjust index for jump back
                carouselTrack.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
                carouselTrack.offsetHeight; // Force reflow
                carouselTrack.style.transition = 'transform 0.5s ease-in-out';
            }, 500); // Match CSS transition duration
        }
        updateDots();
    };

    // Handle dot click
    const goToSlide = (index) => {
        currentIndex = itemsPerView + index;
        updateCarouselPosition();
        updateDots();
        stopAutoScroll();
        startAutoScroll();
    };

    // Event Listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoScroll();
            prevSlide();
            startAutoScroll();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoScroll();
            nextSlide();
            startAutoScroll();
        });
    }

    if (dotsContainer) {
        dotsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('dot')) {
                const index = parseInt(e.target.dataset.index, 10);
                goToSlide(index);
            }
        });
    }

    // Pause/Resume auto-scroll on hover
    if (carouselTrack) {
        carouselTrack.addEventListener('mouseover', stopAutoScroll);
        carouselTrack.addEventListener('mouseleave', startAutoScroll);
    }

    // For the "View More" button
    if (viewMoreButton) {
        viewMoreButton.addEventListener('click', () => {
            alert('View More clicked! You can redirect to another page or show more content here.');
        });
    }

    // Initial setup
    const initializeCarousel = () => {
        calculateItemWidth();

        // Clear existing clones if this runs multiple times
        document.querySelectorAll('.carousel-item.cloned').forEach(clone => clone.remove());

        // Clone items for seamless loop:
        // Prepend clones of the LAST 'itemsPerView' original items to the beginning
        for (let i = 0; i < itemsPerView; i++) {
            const originalIndex = carouselItems.length - itemsPerView + i;
            if (originalIndex >= 0) {
                const clonedItem = carouselItems[originalIndex].cloneNode(true);
                clonedItem.classList.add('cloned');
                carouselTrack.prepend(clonedItem);
            }
        }

        // Append clones of the FIRST 'itemsPerView' original items to the end
        for (let i = 0; i < itemsPerView; i++) {
            const clonedItem = carouselItems[i].cloneNode(true);
            clonedItem.classList.add('cloned');
            carouselTrack.appendChild(clonedItem);
        }

        // After cloning, update allCarouselItems to include the new clones
        allCarouselItems = Array.from(document.querySelectorAll('.carousel-item'));

        // Initial position after prepending clones:
        // The first original item is now at the `itemsPerView`-th position (0-indexed).
        currentIndex = itemsPerView;
        updateCarouselPosition(false); // Set initial position without transition
        updateDots();
        startAutoScroll();
    };

    initializeCarousel();
});


document.addEventListener('DOMContentLoaded', () => {
    const viewAllButton = document.querySelector('.view-all-button');
    if (viewAllButton) {
        viewAllButton.addEventListener('click', () => {
            alert('View All Activity clicked! You can redirect to an activities page or load more content.');
        });
    }
});
// In your script.js file:

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const announcementContentBox = document.querySelector('.announcement-content-box');
    const noAnnouncementMessage = document.querySelector('.no-announcement-message');

    const announcementsData = {
        all: "No Announcement Found..",
        vacancies: "Currently no vacancies available.",
        notices: "No new notices at this time.",
        miscellaneous: "No miscellaneous announcements to display."
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.dataset.category;
            updateAnnouncementContent(category);
        });
    });

    function updateAnnouncementContent(category) {
        if (announcementsData[category]) {
            noAnnouncementMessage.innerHTML = announcementsData[category];
        } else {
            noAnnouncementMessage.innerHTML = "Content not available for this category.";
        }
    }
    updateAnnouncementContent('all');
});