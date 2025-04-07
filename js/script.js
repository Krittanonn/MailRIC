document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.my-button');
    const triangle = document.querySelector('.triangle');
    const paper = document.querySelector('.paper');
    let isTriangleRotated = false;

    button.addEventListener('click', function() {
        if (isTriangleRotated) {
            triangle.classList.remove('triangle-rotated');
            paper.classList.remove('show');
            isTriangleRotated = false;
        } else {
            triangle.classList.add('triangle-rotated');
            paper.classList.add('show');
            isTriangleRotated = true;

            setTimeout(() => {
                window.location.href = "https://www.youtube.com/watch?v=BBJa32lCaaY";
            }, 5500);
        }

        console.log("Triangle is rotated: " + isTriangleRotated);
    });
});
