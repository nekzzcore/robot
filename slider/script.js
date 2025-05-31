const sliderContainer = document.querySelector('.slider-container');
    const slider = sliderContainer.querySelector('input[type="range"]');
    const sliderValue = sliderContainer.querySelector('.slider-value');

    slider.addEventListener('input', function() {
        sliderValue.textContent = this.value;
    });