// // Randomizer
// let img_root = 'imgs/bgs';
// let bg_imgs = ['chocolate', 'ballena', 'bmx', 'bmx', 'caballo', 'moto', 'gato'];

// let bg_colors = ['#FFAFCC', '#A2D2FF', '#BBDB9B']

// function bgRandomImg(element) {
//   let random_idx = Math.round((Math.random() * (bg_imgs.length - 1)));
//   let img = bg_imgs[random_idx];
//   // console.log(random_idx + " img index " + bg_imgs[random_idx])
//   element.style.backgroundImage = `url("${img_root}/${img}.png")`;
// }

// function bgRandomColor(element) {
//   let random_idx = Math.round((Math.random() * (bg_colors.length - 1)));
//   element.style.setProperty('--bg-color', bg_colors[random_idx]);
//   // console.log(bg_colors[random_idx])
//   // console.log(element.style)
// }

import { bgRandomImg, bgRandomColor } from './js/randomizer.js';

// Main page
let body_element = document.body;
let root_element = document.documentElement;

bgRandomColor(root_element);
bgRandomImg(body_element);


