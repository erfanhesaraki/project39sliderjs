let turn = 0;

let _li = document.querySelectorAll("ul>li");
_li.forEach(function (val, index) {
  val.addEventListener("click", function () {
    let temp = val.firstChild.getAttribute("src");
    turn = index;
    showImg(temp);
  });
});

document
  .getElementsByClassName("right")[0]
  .addEventListener("click", function () {
    if (turn < _li.length - 1) {
      turn++;
    } else {
      turn = 0;
    }
    let temp = _li[turn].firstChild.getAttribute("src");
    showImg(temp);
  });

document
  .getElementsByClassName("left")[0]
  .addEventListener("click", function () {
    if (turn == 0) {
      turn = _li.length - 1;
    } else {
      turn--;
    }
    let temp = _li[turn].firstChild.getAttribute("src");
    showImg(temp);
  });

function showImg(temp) {
  document.querySelector(".pic>img").setAttribute("src", temp);
  _border();
}

function _border() {
  _li.forEach(function (para) {
    para.style.border = "2px solid white";
  });
  _li[turn].style.border = "5px solid black";
}
