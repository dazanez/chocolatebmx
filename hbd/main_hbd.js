import { bgRandomImg, bgRandomColor } from '../js/randomizer.js';

// Main page
let body_element = document.body;
let root_element = document.documentElement;

bgRandomColor(root_element);
bgRandomImg(body_element);