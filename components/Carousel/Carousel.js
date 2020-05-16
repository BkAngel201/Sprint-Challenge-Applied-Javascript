/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let imgShown = 1
let setIntervalVar

const carouselMaker = () => {
  const carousel = document.createElement('div')
  carousel.classList.add('carousel')

  

  const img1 = document.createElement('img')
  img1.src = "./assets/carousel/mountains.jpeg"
  img1.setAttribute('data-order', '1')
  img1.classList.add('shown')
  carousel.appendChild(img1)

  const img2 = document.createElement('img')
  img2.src = "./assets/carousel/computer.jpeg"
  img2.setAttribute('data-order', '2')
  carousel.appendChild(img2)

  const img3 = document.createElement('img')
  img3.src = "./assets/carousel/trees.jpeg"
  img3.setAttribute('data-order', '3')
  carousel.appendChild(img3)

  const img4 = document.createElement('img')
  img4.src = "./assets/carousel/turntable.jpeg"
  img4.setAttribute('data-order', '4')
  carousel.appendChild(img4)

  const leftBtn = document.createElement('div')
  leftBtn.classList.add('left-button')
  leftBtn.textContent = '<'
  leftBtn.addEventListener('click', changeCarouselImgDown)
  leftBtn.addEventListener('mousedown', () => {
    setIntervalVar = setInterval(changeCarouselImgDown, 1000)
  })
  leftBtn.addEventListener('mouseup', () => {
    clearInterval(setIntervalVar)
  })
  carousel.prepend(leftBtn)

  const rightBtn = document.createElement('div')
  rightBtn.classList.add('right-button')
  rightBtn.textContent = '>'
  

  rightBtn.addEventListener('click', changeCarouselImgUp)
  rightBtn.addEventListener('mousedown', () => {
    setIntervalVar = setInterval(changeCarouselImgUp, 1000)
  })
  rightBtn.addEventListener('mouseup', () => {
    clearInterval(setIntervalVar)
  })
  carousel.appendChild(rightBtn)

  return carousel
}

document.querySelector('div.carousel-container').appendChild(carouselMaker())


function changeCarouselImgDown() {
  document.querySelectorAll('.carousel img').forEach((el) => {
    el.classList.remove('shown')
  })
  if(imgShown == 1) {
    imgShown = 4  
  } else {
    imgShown --
  }
  document.querySelector(`.carousel img[data-order="${imgShown}"]`).classList.add('shown')
}

function changeCarouselImgUp() {
  document.querySelectorAll('.carousel img').forEach((el) => {
    el.classList.remove('shown')
  })
  if(imgShown == 4) {
    imgShown = 1  
  } else {
    imgShown ++
  }
  document.querySelector(`.carousel img[data-order="${imgShown}"]`).classList.add('shown')
}