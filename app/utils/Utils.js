export const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')
  return `#${randomColor}`
}

export function generateDarkColorHex() {
  let color = '#'
  for (let i = 0; i < 3; i++)
    color += ('0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)).slice(-2)
  return color
}

export function generateLightColorHex() {
  let color = '#'
  for (let i = 0; i < 3; i++)
    color += ('0' + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2)
  return color
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
