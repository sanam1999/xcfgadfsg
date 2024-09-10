function createSlider(containerClass, imageClass, interval = 1000) {
    let currentIndex = 0;
    const images = document.querySelectorAll(`${containerClass} ${imageClass}`);
    
    function showSlide(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    // Automatically cycle through slides
    setInterval(nextSlide, interval);
}

// Create sliders for both containers
createSlider('.slider-containerr', '.slider-imagess img');
createSlider('.slider-container', '.slider-images img');
