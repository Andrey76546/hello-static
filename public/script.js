const counterElement = document.getElementById('counter')
const incrementButton = document.getElementById('increment')

let count = 0

incrementButton.addEventListener('click', () => {
  count += 1
  counterElement.textContent = String(count)
})
