document.addEventListener("DOMContentLoaded", function () {
  // --- Move variable declarations to the top of the scope ---
  const sliderInner = document.querySelector(".slider-inner");
  const sliderItems = document.querySelectorAll(".slider-item");
  const prevArrow = document.querySelector(".prev-arrow");
  const nextArrow = document.querySelector(".next-arrow");
  const dots = document.querySelectorAll(".slider-pagination .dot"); // More specific selector

  // Now you can safely access sliderInner
  sliderInner.style.transform = "translateX(0%)"; // <-- MOVED THIS LINE HERE

  let currentIndex = 0;
  const totalSlides = sliderItems.length;
  let slideInterval;

  function updateSliderPosition() {
    const offset = -currentIndex * 100;
    sliderInner.style.transform = `translateX(${offset}%)`;

    // Ensure all dots are deactivated first, then activate the current one
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
        // console.log(`[updateSliderPosition] Dot ${index} removed active class.`); // Uncomment for more verbosity
      }
    });
  }

  function showSlide(index) {
    const previousIndex = currentIndex;
    currentIndex = (index + totalSlides) % totalSlides;
    updateSliderPosition();
  }

  function showNextSlide() {
    showSlide(currentIndex + 1);
  }

  function showPrevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(showNextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  // Event Listeners
  if (nextArrow) { // Add checks if these elements might not always exist on the page
    nextArrow.addEventListener("click", () => {
      showNextSlide();
      resetAutoSlide();
    });
  }

  if (prevArrow) { // Add checks
    prevArrow.addEventListener("click", () => {
      showPrevSlide();
      resetAutoSlide();
    });
  }

  if (dots.length > 0) { // Add check for dots as well
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const slideIndex = parseInt(dot.dataset.slide, 10);
        showSlide(slideIndex);
        resetAutoSlide();
      });
    });
  }

  if (sliderInner) { // Add check for sliderInner
    sliderInner.addEventListener("mouseenter", () => {
      clearInterval(slideInterval);
    });

    sliderInner.addEventListener("mouseleave", () => {
      startAutoSlide();
    });
  }

  if (dots.length > 0) {
    dots.forEach(dot => dot.classList.remove("active"));

    showSlide(0); // This sets currentIndex to 0 and calls updateSliderPosition()

    startAutoSlide(); // Start the automatic rotation
  } else {
    console.warn("No pagination dots found for the main slider. Check selector '.slider-pagination .dot'");
  }
});

// --------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector(".carousel-track");

    // --- CORRECTION 1: Select the parent <a> tags for cloning ---
    // Instead of selecting '.carousel-item', we select the <a> tags within the track.
    const carouselLinks = Array.from(
        carouselTrack.querySelectorAll("a")
    );

    // This gets the original items (divs) for width calculation.
    const carouselItems = carouselLinks.map(link => link.querySelector('.carousel-item'));


    let allCarouselItems = []; // Will contain original + clones

    const prevBtn = document.querySelector(".prev-arrow");
    const nextBtn = document.querySelector(".next-arrow");
    const dotsContainer = document.querySelector(".carousel-dots");
    let dots = [];

    // Configuration
    const itemsPerView = 5;
    const scrollIntervalTime = 5000;
    let currentIndex;
    let autoScrollInterval;
    let itemWidth;

    const calculateItemWidth = () => {
        // We calculate width based on the .carousel-item div as before.
        if (carouselItems.length > 0) {
            const itemStyle = getComputedStyle(carouselItems[0]);
            itemWidth =
                carouselItems[0].offsetWidth + parseFloat(itemStyle.marginRight);
        } else {
            itemWidth = 250; // Fallback
        }
    };

    window.addEventListener("resize", () => {
        calculateItemWidth();
        updateCarouselPosition(false);
    });

    const updateCarouselPosition = (useTransition = true) => {
        if (!carouselTrack || !itemWidth) return;
        const offset = -currentIndex * itemWidth;
        carouselTrack.style.transition = useTransition
            ? "transform 0.5s ease-in-out"
            : "none";
        carouselTrack.style.transform = `translateX(${offset}px)`;
    };

    // (The rest of the functions like updateDots, startAutoScroll, nextSlide, etc. remain the same)
    const updateDots = () => {
        if (!dotsContainer) return;
        dots.forEach((dot, index) => {
            const originalItemIndex = (currentIndex - itemsPerView + carouselItems.length) % carouselItems.length;
            dot.classList.toggle("active", index === originalItemIndex);
        });
    };

    const startAutoScroll = () => {
        stopAutoScroll();
        autoScrollInterval = setInterval(() => {
            nextSlide();
        }, scrollIntervalTime);
    };

    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval);
    };

    // const nextSlide = () => {
    //     currentIndex++;
    //     updateCarouselPosition(true);
    //     if (currentIndex >= carouselTrack.children.length - itemsPerView) {
    //         setTimeout(() => {
    //             carouselTrack.style.transition = "none";
    //             currentIndex = itemsPerView;
    //             updateCarouselPosition(false);
    //         }, 500);
    //     }
    //     updateDots();
    // };

    // const prevSlide = () => {
    //     currentIndex--;
    //     updateCarouselPosition(true);
    //     if (currentIndex < itemsPerView) {
    //         setTimeout(() => {
    //             carouselTrack.style.transition = "none";
    //             currentIndex = carouselTrack.children.length - (itemsPerView * 2);
    //             updateCarouselPosition(false);
    //         }, 500);
    //     }
    //     updateDots();
    // };




const nextSlide = () => {
    currentIndex++;
    updateCarouselPosition(true);
    
    if (currentIndex >= carouselTrack.children.length - itemsPerView) {
        setTimeout(handleNextLoopReset, 500);
    }
    
    updateDots();
};

const handleNextLoopReset = () => {
    carouselTrack.style.transition = "none";
    currentIndex = itemsPerView;
    updateCarouselPosition(false);
};

const prevSlide = () => {
    currentIndex--;
    updateCarouselPosition(true);
    
    if (currentIndex < itemsPerView) {
        setTimeout(handlePrevLoopReset, 500);
    }
    
    updateDots();
};

const handlePrevLoopReset = () => {
    carouselTrack.style.transition = "none";
    currentIndex = carouselTrack.children.length - (itemsPerView * 2);
    updateCarouselPosition(false);
};







    // Initial setup
    const initializeCarousel = () => {
        if (carouselLinks.length === 0) return; // Exit if there are no items to clone

        calculateItemWidth();

        // Clear existing clones if this runs multiple times
        document
            .querySelectorAll(".cloned")
            .forEach((clone) => clone.remove());

        // --- CORRECTION 2: Clone the <a> tags (carouselLinks) ---
        // 1. Prepend clones of the LAST 'itemsPerView' links
        for (let i = carouselLinks.length - itemsPerView; i < carouselLinks.length; i++) {
            if(!carouselLinks[i]) continue;
            const clonedLink = carouselLinks[i].cloneNode(true);
            // Add 'cloned' class to the div inside the cloned <a> tag
            clonedLink.querySelector('.carousel-item').classList.add("cloned");
            carouselTrack.prepend(clonedLink);
        }

        // 2. Append clones of the FIRST 'itemsPerView' links
        for (let i = 0; i < itemsPerView; i++) {
            if(!carouselLinks[i]) continue;
            const clonedLink = carouselLinks[i].cloneNode(true);
            clonedLink.querySelector('.carousel-item').classList.add("cloned");
            carouselTrack.appendChild(clonedLink);
        }
        
        // No need for a separate click handler if the <a> tags are correct
        // The browser will handle the click automatically.

        // Create dots dynamically
        if (dotsContainer) {
            dotsContainer.innerHTML = ''; // Clear existing dots
            carouselItems.forEach((_, index) => {
                const dot = document.createElement("span");
                dot.classList.add("dot");
                dot.dataset.index = index;
                dotsContainer.appendChild(dot);
            });
            dots = Array.from(document.querySelectorAll(".dot"));
        }

        // Initial position
        currentIndex = itemsPerView;
        updateCarouselPosition(false);
        updateDots();
        startAutoScroll();
    };

    initializeCarousel();
});

// ---------------------------------------------------announcements_Messages--------------------------------------------------------------------

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