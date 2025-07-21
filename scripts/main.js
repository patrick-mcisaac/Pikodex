import { generatePikomonHTML } from "./pikomon.js"
const container = document.querySelector('#container')

const pikomonHTML = generatePikomonHTML()
container.innerHTML = pikomonHTML