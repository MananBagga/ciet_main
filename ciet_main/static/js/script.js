document.addEventListener("DOMContentLoaded", () => {
  const sliderInner = document.querySelector(".slider-inner");
  const sliderItems = document.querySelectorAll(".slider-item");
  const prevArrow = document.querySelector(".prev-arrow");
  const nextArrow = document.querySelector(".next-arrow");
  const dots = document.querySelectorAll(".slider-pagination .dot");

  // if (!sliderInner || sliderItems.length === 0) {
  //   console.warn("Slider not initialized. Missing sliderInner or slider items.");
  //   return;
  // }
  if (!sliderInner) return;

  sliderInner.style.transform = "translateX(0%)";

  let currentIndex = 0;
  const totalSlides = sliderItems.length;
  let slideInterval;

  const updateSliderPosition = () => {
    const offset = -currentIndex * 100;
    sliderInner.style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  };

  const showSlide = (index) => {
    currentIndex = (index + totalSlides) % totalSlides;
    updateSliderPosition();
  };

  const showNextSlide = () => showSlide(currentIndex + 1);
  const showPrevSlide = () => showSlide(currentIndex - 1);

  const startAutoSlide = () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(showNextSlide, 5000);
  };

  const resetAutoSlide = () => {
    clearInterval(slideInterval);
    startAutoSlide();
  };

  // Arrow Controls
  prevArrow?.addEventListener("click", () => {
    showPrevSlide();
    resetAutoSlide();
  });

  nextArrow?.addEventListener("click", () => {
    showNextSlide();
    resetAutoSlide();
  });

  // Dot Controls
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = parseInt(dot.dataset.slide, 10);
      if (!isNaN(slideIndex)) {
        showSlide(slideIndex);
        resetAutoSlide();
      }
    });
  });

  // Pause on hover
  sliderInner.addEventListener("mouseenter", () => clearInterval(slideInterval));
  sliderInner.addEventListener("mouseleave", startAutoSlide);

  // Initial Setup
  showSlide(0);
  startAutoSlide();
});




document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector(".carousel-track");
    if (!carouselTrack) return;
    // if (!carouselTrack) return console.warn("Carousel track not found.");

    const carouselLinks = Array.from(carouselTrack.querySelectorAll("a"));
    const carouselItems = carouselLinks.map(link => link.querySelector(".carousel-item")).filter(Boolean);

    // if (carouselItems.length === 0) {
    //     console.warn("No valid carousel items found.");
    //     return;
    // }

    const prevBtn = document.querySelector(".prev-arrow");
    const nextBtn = document.querySelector(".next-arrow");
    const dotsContainer = document.querySelector(".carousel-dots");

    let dots = [];
    const itemsPerView = 5;
    const scrollIntervalTime = 5000;
    let currentIndex;
    let autoScrollInterval;
    let itemWidth;

    const calculateItemWidth = () => {
        if (carouselItems.length > 0) {
            const itemStyle = getComputedStyle(carouselItems[0]);
            itemWidth = carouselItems[0].offsetWidth + parseFloat(itemStyle.marginRight);
        } else {
            itemWidth = 250;
        }
    };

    window.addEventListener("resize", () => {
        calculateItemWidth();
        updateCarouselPosition(false);
    });

    const updateCarouselPosition = (useTransition = true) => {
        if (!itemWidth) return;
        const offset = -currentIndex * itemWidth;
        carouselTrack.style.transition = useTransition ? "transform 0.5s ease-in-out" : "none";
        carouselTrack.style.transform = `translateX(${offset}px)`;
    };

    const updateDots = () => {
        if (!dotsContainer) return;
        const originalItemIndex = (currentIndex - itemsPerView + carouselItems.length) % carouselItems.length;
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === originalItemIndex);
        });
    };

    const startAutoScroll = () => {
        stopAutoScroll();
        autoScrollInterval = setInterval(nextSlide, scrollIntervalTime);
    };

    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval);
    };

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

    const initializeCarousel = () => {
        calculateItemWidth();

        document.querySelectorAll(".cloned").forEach(clone => clone.remove());

        // Prepend clones of last itemsPerView links
        for (let i = carouselLinks.length - itemsPerView; i < carouselLinks.length; i++) {
            if (!carouselLinks[i]) continue;
            const clonedLink = carouselLinks[i].cloneNode(true);
            const clonedItem = clonedLink.querySelector(".carousel-item");
            if (clonedItem) clonedItem.classList.add("cloned");
            carouselTrack.prepend(clonedLink);
        }

        // Append clones of first itemsPerView links
        for (let i = 0; i < itemsPerView; i++) {
            if (!carouselLinks[i]) continue;
            const clonedLink = carouselLinks[i].cloneNode(true);
            const clonedItem = clonedLink.querySelector(".carousel-item");
            if (clonedItem) clonedItem.classList.add("cloned");
            carouselTrack.appendChild(clonedLink);
        }

        if (dotsContainer) {
            dotsContainer.innerHTML = "";
            carouselItems.forEach((_, index) => {
                const dot = document.createElement("span");
                dot.classList.add("dot");
                dot.dataset.index = index;
                dotsContainer.appendChild(dot);
            });
            dots = Array.from(dotsContainer.querySelectorAll(".dot"));

            dots.forEach(dot => {
                dot.addEventListener("click", () => {
                    const slideIndex = parseInt(dot.dataset.index, 10);
                    if (!isNaN(slideIndex)) {
                        currentIndex = slideIndex + itemsPerView;
                        updateCarouselPosition(true);
                        updateDots();
                        startAutoScroll();
                    }
                });
            });
        }

        currentIndex = itemsPerView;
        updateCarouselPosition(false);
        updateDots();
        startAutoScroll();
    };

    prevBtn?.addEventListener("click", () => {
        prevSlide();
        startAutoScroll();
    });

    nextBtn?.addEventListener("click", () => {
        nextSlide();
        startAutoScroll();
    });

    initializeCarousel();
});





document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const noAnnouncementMessage = document.querySelector('.no-announcement-message');

    // if (!filterButtons.length || !noAnnouncementMessage) {
    //     console.warn("Filter buttons or announcement message container not found.");
    //     return;
    // }
    if (!noAnnouncementMessage) return; 

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

            const category = button.dataset.category || 'all';
            updateAnnouncementContent(category);
        });
    });

    const updateAnnouncementContent = (category) => {
        const message = announcementsData[category] || "Content not available for this category.";
        noAnnouncementMessage.textContent = message;
    };

    updateAnnouncementContent('all');
});



          
document.addEventListener("DOMContentLoaded", () => {
  // Font Size Control
  const body = document.body;
  const textSizeButtons = document.querySelectorAll(".text-size-btn");
  const defaultFontSize = 16; // Default body font size in px
  let currentStep = 0; // 0 = default, -3 to +4 range allowed

  const applyFontSize = () => {
    const newSize = defaultFontSize + currentStep * 2; // Change font by steps of 2px
    body.style.fontSize = newSize + "px";
  };

  textSizeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const action = btn.dataset.action;

      if (action === "decrease" && currentStep > -3) {
        currentStep--;
      } else if (action === "increase" && currentStep < 4) {
        currentStep++;
      } else if (action === "normal") {
        currentStep = 0;
      }

      applyFontSize();
    });
  });

  applyFontSize(); // Set default font size on load

  // Date Display
  // const dateElement = document.getElementById("current-date");
  // if (dateElement) {
  //   const today = new Date();
  //   const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  //   dateElement.textContent = today
  //     .toLocaleDateString("en-GB", options)
  //     .replace(/ /g, "/");
  // }

  function updateClock() {
  const now = new Date();
  document.getElementById("current-time").textContent = now.toLocaleTimeString();
  document.getElementById("current-date").textContent = now.toLocaleDateString();
}
setInterval(updateClock, 1000);
updateClock();

  // Navbar Toggle
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarItems = document.getElementById("navbar-items");
  if (navbarToggle && navbarItems) {
    navbarToggle.addEventListener("click", () => {
      navbarItems.classList.toggle("show");
    });
  }

  // Topbar Toggle
  const topbarToggle = document.getElementById("topbar-toggle");
  const topbarRight = document.getElementById("topbar-right");
  if (topbarToggle && topbarRight) {
    topbarToggle.addEventListener("click", () => {
      topbarRight.classList.toggle("show");
    });
  }
});

function showTab(tabId) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove active class from all buttons
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active");
  });

  // Show the selected tab content
  document.getElementById(tabId).classList.add("active");

  // Add active class to the clicked button
  document
    .querySelector(`button[onclick="showTab('${tabId}')"]`)
    .classList.add("active");
}



