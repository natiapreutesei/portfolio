// Import our custom CSS
import '../scss/styles.scss'
import '../scss/mycss.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Scroll when button arrow down pressed
function scrollDown() {
    const targetElement = document.getElementById('myservices');
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

// IMPORT MASONRY
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';


document.addEventListener('DOMContentLoaded', function () {
    var masonryContainer = document.querySelector('.masonry-container');

    // Hide images initially to prevent layout shifts
    masonryContainer.querySelectorAll('img').forEach(img => {
        img.style.display = 'none';
    });

    // Use imagesLoaded library to wait for all images to be loaded
    imagesLoaded(masonryContainer, function () {
        // Show images
        masonryContainer.querySelectorAll('img').forEach(img => {
            img.style.display = 'block';
        });

        // Initialize Masonry after images are loaded
        var masonry = new Masonry(masonryContainer, {
            itemSelector: '.masonry-item',
        });
    });
});

//IMPORT ODOMETER
/*import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-minimal.css';

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        const odometer = new Odometer({
            el: document.querySelector('#clients'),
            value: 456,
        });
    }, 10); // Delay initialization by 1 second
});*/
