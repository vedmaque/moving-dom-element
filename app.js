const ball = document.querySelector('.circle')
const initialBallPosition = {
  x: window.innerWidth - ball.clientWidth - 50,
  y: window.innerHeight / 2 - ball.clientHeight / 2
}
ball.style.transform = `translate(${initialBallPosition.x}px, ${initialBallPosition.y}px)`

let isMoving = false
let initialMousePosition = {
  x: null,
  y: null
}
let ballPositionStart = {
  x: initialBallPosition.x,
  y: initialBallPosition.y
}
let currentBallPosition = {
  x: null,
  y: null
}

ball.addEventListener('mousedown', (e) => {
  isMoving = true
  ball.style.cursor = 'grabbing'
  initialMousePosition.x = e.clientX
  initialMousePosition.y = e.clientY
})

ball.addEventListener('mouseup', () => {
  isMoving = false
  ball.style.cursor = 'grab'
  ballPositionStart.x = currentBallPosition.x
  ballPositionStart.y = currentBallPosition.y
})

ball.addEventListener('dblclick', () => {
  ball.style.transform = `translate(${initialBallPosition.x}px, ${initialBallPosition.y}px)`
  currentBallPosition.x = initialBallPosition.x
  currentBallPosition.y = initialBallPosition.y
  ballPositionStart.x = initialBallPosition.x
  ballPositionStart.y = initialBallPosition.y
})

document.body.addEventListener('mousemove', (e) => {
  if (!isMoving) {
    return
  }

  const deltaMouseX = e.clientX - initialMousePosition.x
  const deltaMouseY = e.clientY - initialMousePosition.y
  currentBallPosition.x = ballPositionStart.x + deltaMouseX
  currentBallPosition.y = ballPositionStart.y + deltaMouseY

  ball.style.transform = `translate(${currentBallPosition.x}px, ${currentBallPosition.y}px)`
})