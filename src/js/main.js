// Import our custom CSS
import '../scss/styles.scss'
import '../scss/mycss.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

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
            // Other options...
        });
    });
});