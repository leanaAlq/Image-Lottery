// this code is a reult of modifying the shuffle image example from [link]


var total = 100;
let rand = Math.floor(Math.random() * total)+1;
const cnt = document.getElementById("container");
const reset = document.querySelector(".reset");
//   const img = "https://picsum.photos/500/80/?random";
var arr = [];
const n = Math.sqrt(total);
const m = Math.sqrt(total);
const pos = [];
const shuffled = [];

cnt.style.width = "100vw";
cnt.style.height = "100vh";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let x = i * (total / n);
    let y = j * (total / n);
    pos.push([x, y]);
    shuffled.push([x, y]);
  }
}

shuffle(shuffled);
let num = 1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let box = document.createElement("div");
    let x = pos[(total / n) * i + j][0];
    let y = pos[total / n + j][1];

    let bx = shuffled[(total / n) * i + j][0];
    let by = shuffled[(total / n) * i + j][1];

    box.classList.add("box");
    box.style.left = `${x}vw`;
    box.style.top = `${y}vh`;
    box.style.width = `${total / n}vw`;
    box.style.height = `${total / n}vh`;
    //images here
    console.log(num);
    // path to your small images folder (150 * 80 pixels)
    // box.style.background = `url("small/IMG_${( num < 10)?('000'+num):('00'+num)}.jpg")`;
    box.style.background = `url("https://picsum.photos/150/80/?image=1${num}")`;
    // const img = "https://picsum.photos/150/80/?random"
    num++;
    cnt.appendChild(box);
  }
}

setTimeout(() => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box, idx) => {
    box.style.left = `${shuffled[idx][0]}vw`;
    box.style.top = `${shuffled[idx][1]}vh`;
  });
}, 1500);

// Shuffle function from https://www.frankmitchell.org/2015/01/fisher-yates/
function shuffle(array) {
  var i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
//your original images path 
// $("img.result").attr(
//     "src", `images/IMG_${(rand<10) ?('000'+rand): ('00'+rand)}.jpg`);
$("img.result").attr(
    "src", `https://picsum.photos/500/350/?random
    `);
console.log($("img.result"));
reset.addEventListener("click", () => {
  $(".result").animate({opacity:0}, 3000);
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box, idx) => {
    box.style.left = `${pos[idx][0]}vw`;
    box.style.top = `${pos[idx][1]}vh`;
  });

  setTimeout(() => {
    boxes.forEach((box, idx) => {
      box.style.left = `${shuffled[idx][0]}vw`;
      box.style.top = `${shuffled[idx][1]}vh`;
    });
  }, 1500);
  $(document).ready(function() {
    setTimeout(() => {
      $(".result").animate({ opacity: 1 }, 1500);
      
    }, 1500);
  });
});