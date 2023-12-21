document.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    var images = document.querySelectorAll('.scrolling img');

    images.forEach(function(image, index) {
        var translateY = (index + 1) * scrolled * 0.1;
        image.style.transform = 'translateY(' + translateY + 'px)';
    });
});
