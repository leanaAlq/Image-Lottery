// this code is a result of modifying the shuffle image example from [https://codepen.io/FlorinPop17/pen/MEYrJW]

var total = 100;
const cnt = document.getElementById("container");
const reset = document.querySelector(".reset");
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

    // path to your small images folder (150 * 80 pixels)
    // box.style.background = `url("small/IMG_${randomWinner()}.jpg")`;
    box.style.background = `url("https://picsum.photos/150/80/?image=1${randomnumber()}")`;

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

function randomWinner() {
  let r = Math.floor(Math.random() * total) + 1;
  return r < 10 ? "000" + r : "00" + r;
}
function randomnumber() {
  return Math.floor(Math.random() * total) + 1;
}
reset.addEventListener("click", () => {
  //your original images path
  // $("img.result").attr(
  //     "src", `images/IMG_${randomWinner()}.jpg`);
  $("img.result").attr(
    "src",
    `https://picsum.photos/500/300/?image=1${randomnumber()}
    `
  );
  $(".result").animate(
    {
      opacity: 0
    },
    100
  );
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
      $(".result").animate(
        {
          opacity: 1
        },
        1500
      );
    }, 1500);
  });
});
