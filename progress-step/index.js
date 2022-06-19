window.addEventListener("load", () => {
  //  获取元素节点
  const left = document.getElementById("left");
  const right = document.getElementById("right");
  const others = document.querySelectorAll(".other");
  const span = document.querySelectorAll("span");
  const em = document.querySelectorAll("em");
  // 定义全局变量控制样式添加
  let num = 0;
  btnDisabled()
  // 点击那个按钮那个按钮亮起
  left.addEventListener("click", () => {
    if (num > 0) {
      num--;
      span[num].style = "transition: all .4s";
      span[num].classList.remove("bgc");
      em[num].style = "transition: all .4s";
      em[num].classList.remove("actives");
    } else if(num == 0) {
      num = 0;
    }
    btnDisabled()
  });
  right.addEventListener("click", () => {
    if (num < others.length) {
      span[num].classList.add("bgc");
      em[num].classList.add("actives");
      num++;
    }
    btnDisabled()
  });

  function btnDisabled() {
    if(num===0) {
      left.disabled = true
    } else if (num === others.length) {
      right.disabled = true
    } else  {
     right.disabled = false
     left.disabled = false
    }
  }
});
