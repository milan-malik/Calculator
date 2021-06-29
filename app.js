const buttons = document.querySelectorAll(".active")
const textBox = document.getElementById('text')
const clear = document.querySelector('.clear')
const equals = document.querySelector('.equals')

textBox.innerHTML = ""

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (button.classList.contains('clear')) {
      textBox.innerHTML = ""
    }
    else {
      textBox.innerHTML += e.target.innerHTML
      textBox.style.cssText = "font-size: 80px; margin-right: 25px;"
    }
  })
})

equals.addEventListener('click', (e) => {
  console.log(textBox.innerHTML)
  textBox.innerHTML = eval(textBox.innerHTML)
})