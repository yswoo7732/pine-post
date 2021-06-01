window.onload = function () {
    const bg = document.getElementById("intro_img");
    const height = window.innerHeight;
    const per = height / 300;
    const imgHeight = height / 3 * 2;

    console.log(imgHeight);

    window.addEventListener('scroll', function () {

        if (pageYOffset <= imgHeight) {
            console.log(window.pageYOffset);

            bg.style.backgroundSize = 300 - +window.pageYOffset / per + '%';
        }
    });
};
