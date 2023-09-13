// Randomizer
let img_root = typeof (img_rel_root) == 'undefined' ? 'imgs/bgs' : img_rel_root;
let bg_imgs = ['chocolate', 'ballena', 'bmx', 'bmx', 'caballo', 'moto', 'gato', 'lindo'];

let questions = [
  {
    pregunta: '¿Cuál es el "apellido" de Venus?',
    respuesta: 'silvestra'
  },
  {
    pregunta: '¿Cómo se llama Katherine?',
    respuesta: 'catalina'
  },
  {
    pregunta: 'Tu cumple es el 13, el mío es el...',
    respuesta: '20',
    pista: '¿Si te acuerdas? Escribe solo el número, sin el mes'
  }];

let bg_colors = ['#FFAFCC', '#A2D2FF', '#BBDB9B']

function bgRandomImg(element) {
  let random_idx = Math.round((Math.random() * (bg_imgs.length - 1)));
  let img = bg_imgs[random_idx];
  // console.log(random_idx + " img index " + bg_imgs[random_idx])
  element.style.backgroundImage = `url("${img_root}/${img}.png")`;
}

function bgRandomColor(element) {
  let random_idx = Math.round((Math.random() * (bg_colors.length - 1)));
  element.style.setProperty('--bg-color', bg_colors[random_idx]);
  // console.log(bg_colors[random_idx])
  // console.log(element.style)
}


export { bgRandomImg, bgRandomColor };