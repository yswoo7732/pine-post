window.onload = function () {
    const bg = document.getElementById("intro_img");

    window.addEventListener('scroll', function() {
        if (pageYOffset <= 564) {
            bg.style.backgroundSize = 300 - +window.pageYOffset/2.82+'%';

        }
        bg.style.backgroundPositionY = 0;
    });
};
