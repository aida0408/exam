const allSmallImages = document.querySelectorAll('.small-img')
const bigImg = document.querySelector('.big-img img')



allSmallImages.forEach((item) => {
    item.addEventListener('click', () => {
        bigImg.src = item.src
    })
})
bigImg.addEventListener('mousemove', (e) => {
    bigImg.style.transform = "scale(2)"
    bigImg.style.transform = `translateX(${e.offsetX}px)`
})