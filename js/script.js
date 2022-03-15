

const allSmallImages = document.querySelectorAll('.small-wrapper')
const bigImg = document.querySelector('.big-img img')



allSmallImages.forEach((item) => {
    item.addEventListener('click', () => {
        bigImg.src = item.children[0].src
        allSmallImages.forEach(oneWrapper => oneWrapper.classList.remove('active'))
        item.classList.add('active')
    })
})

bigImg.addEventListener('mousemove', (e) => {
    bigImg.style.transform = `scale(2) translate(${e.offsetX /10}px,${e.offsetY / 10}px)`
})
bigImg.addEventListener('mouseout', (e) => {
    bigImg.style.transform = `scale(1) translate(0, 0)`
})