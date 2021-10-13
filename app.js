const ball = document.querySelector('.circle')

// начальное положение мяча
const initialBallPosition = {
  x: window.innerWidth - ball.clientWidth - 50,
  y: window.innerHeight / 2 - ball.clientHeight / 2
}

// в этой переменной будем хранить текущее положение мяча
const currentBallPosition = {
  x: null,
  y: null
}

setBallPosition(initialBallPosition)

// флаг, показывающий, начали мы таскание элемента или просто мышкой возим туда-сюда
let isMoving = false

const prevMousePosition = {
  x: null,
  y: null,
}

// по клику на элемент запоминаем координаты клика и выставляем флаг "движение начато"
ball.addEventListener('mousedown', (e) => {
  isMoving = true
  ball.style.cursor = 'grabbing'
  prevMousePosition.x = e.clientX
  prevMousePosition.y = e.clientY
})

// по отпусканию мышки выставляем флаг "движение прекращено"
ball.addEventListener('mouseup', () => {
  isMoving = false
  ball.style.cursor = 'grab'
})

// по даблклику возвращаем шар на изначальное место
ball.addEventListener('dblclick', () => {
  setBallPosition(initialBallPosition)
})

document.body.addEventListener('mousemove', (e) => {
  if (!isMoving) {
    return
  }

  // смотрим, на сколько мышка подвинулась
  const deltaMouseX = e.clientX - prevMousePosition.x
  const deltaMouseY = e.clientY - prevMousePosition.y

  // на сколько, на столько надо и шар подвинуть
  const newBallPosition = {
    x: currentBallPosition.x + deltaMouseX,
    y: currentBallPosition.y + deltaMouseY
  }

  setBallPosition(newBallPosition)

  // не забудем обновить положение мышки
  prevMousePosition.x = e.clientX
  prevMousePosition.y = e.clientY
})

function setBallPosition(position) {
  currentBallPosition.x = position.x
  currentBallPosition.y = position.y

  ball.style.transform = `translate(${currentBallPosition.x}px, ${currentBallPosition.y}px)`
}