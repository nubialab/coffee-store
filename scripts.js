const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")

function showModal() {
  modal.style.left = '50%'
  mascara.style.visibility = 'visible'
  
}

function closeModal() {
  modal.style.left = '-90%'
  mascara.style.visibility = 'hidden'
}