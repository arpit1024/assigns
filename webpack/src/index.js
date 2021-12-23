import('./index.css');
import img from './img.png'
import {publish} from './logic'

const logo = document.createElement('img');
logo.src = img;
const head = document.createElement("h1");
head.innerHTML = "NOTE MAKING APPLICATION";
head.classList.add("redcolor")

const usertext = document.createElement("TEXTAREA");
usertext.rows = "10";
usertext.cols = "50";
const txtAreaHeading =  document.createElement("h3");
const publicBtn =  document.createElement("div");
publicBtn.textContent = 'Click here to Publish'
publicBtn.classList.add('btn')
txtAreaHeading.innerText = 'Enter your Notes Here'
document.getElementById("userTxt").append(txtAreaHeading, usertext,publicBtn);
document.getElementById("root").append(logo,head);

publicBtn.onclick = ()=>{
    publish(usertext.value)
}