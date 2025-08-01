const changingText = document.getElementById("title-name");

const title-names = ["I'm Shamir Khan","I'm a Front-End Developer", "I'm a Web Developer" ];

let current-text-index = 0

function changeText(){
  changingText.textContent = title-names[current-text-index];
  current-text-index += 1;
if(current-text-index >= title-name.length){
 current-text-index = 0;
}
}
setInterval = (changeText, 2000);
