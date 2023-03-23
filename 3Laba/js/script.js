/*створення пошукового меню, гамбургер меню */

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

/*при натискані фотки збільшуються*/

let previewContainer = document.querySelector(".products-preview");
let previewBox = previewContainer.querySelectorAll(".preview");

document.querySelectorAll(".box-container .box").forEach((product) => {
  product.onclick = () => {
    previewContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    previewContainer.style.display = "none";
  };
});

/*кнопка прокруту вгору при натискані*/

(function () {
  "use strict";

  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add("back_to_top-show");
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove("back_to_top-show");
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -1230);
      setTimeout(backToTop, 0);
    }
  }

  let goTopBtn = document.querySelector(".back_to_top");

  window.addEventListener("scroll", trackScroll);
  goTopBtn.addEventListener("click", backToTop);
})();

// попап при загрузці про рекламу
let dialog = document.querySelector("dialog");

let popUP = parseInt(localStorage.getItem("popu")) || 1;

function opDialog() {
  dialog.close();
  popUP = popUP + 1;
  localStorage.setItem("popu", popUP);
}

let closeDialog = document.getElementById("closeDialog");
let closeeDialog = document.getElementById("closeeDialog");

function showDialog() {
  dialog.show();
}
closeDialog.addEventListener("click", closDialog);

function closDialog() {
  dialog.close();
}

closeeDialog.addEventListener("click", opDialog);

if (popUP == 1) {
  window.onload = showDialog();
}

/* вікно при запуску через вказаний час*/

let delay_popup = 10000;
let delay_popup1 = 15000;
setTimeout(
  "document.getElementById('bg_popup').style.display='block'",
  delay_popup
);
setTimeout(
  "document.getElementById('close').style.display='block'",
  delay_popup1
);

// масив завантаження об'єктів

let crocks = [
  {
    name: "ЧОЛОВІЧІ ЧЕРЕВИКИ NH100 ДЛЯ ТУРИЗМУ - ЧОРНІ",
    information:
      "rabitur ullamcorper. Magnis etiam dictumst curae facilisi id augue suspendisse, a magna integer viverra nunc po",
    photo: "img/1.jpg",
  },
  {
    name: "ЧЕРЕВИКИ ЧОЛОВІЧІ TREK 100 ДЛЯ ГІРСЬКОГО ТРЕКІНГУ",
    information:
      "Finibus suspendisse gravida mattis sociosqu phasellus eget porttitor duis at",
    photo: "img/2.jpg",
  },
  {
    name: "КРОСІВКИ ЧОЛОВІЧІ PW 100 ДЛЯ СПОРТИВНОЇ ХОДЬБИ - СІРІ",
    information:
      "Est ridiculus placerat turpis lectus potenti sociosqu inceptos fringilla ligula finibus",
    photo: "img/3.jpg",
  },
  {
    name: "ЧЕРЕВИКИ ШКІРЯНІ CROSSHUNT 100 D ДЛЯ ПОЛЮВАННЯ ВОДОВІДШТОВХУВАЛЬНІ",
    information:
      "dignissim habitant consequat morbi per tempor vel cursus. Erat luctus montes integer ac viverra magnis magna",
    photo: "img/4.jpg",
  },
  {
    name: "ЧОЛОВІЧІ ЧЕРЕВИКИ NH100 ДЛЯ ТУРИЗМУ - ЧОРНІ",
    information: "per vehicula bibendum porttitor habitant sed ornare.",
    photo: "img/5.jpg",
  },
  {
    name: "ЧЕРЕВИКИ ШКІРЯНІ CROSSHUNT 100 D ДЛЯ ПОЛЮВАННЯ ВОДОВІДШТОВХУВАЛЬНІ",
    information:
      "Est ridiculus placerat turpis lectus potenti sociosqu inceptos fringilla ligula finibus",
    photo: "img/6.jpg",
  },
  {
    name: "ЧОЛОВІЧІ ЧЕРЕВИКИ NH100 ДЛЯ ТУРИЗМУ - ЧОРНІ",
    information:
      "blandit, dignissim habitant consequat morbi per tempor vel cursus. Erat luctus montes integer ac viver",
    photo: "img/11.jpg",
  },
  {
    name: "ЧОЛОВІЧІ ЧОБОТИ SH100 Х-WARM ДЛЯ ЗИМОВОГО ТУРИЗМУ - ЧОРНІ",
    information:
      "Nibh malesuada dignissim blandit id cursus ullamcorper sollicitudin egestas semper rutrum tristique",
    photo: "img/12.jpg",
  },
  {
    name: "ЧОЛОВІЧІ ЧОБОТИ SH100 Х-WARM ДЛЯ ЗИМОВОГО ТУРИЗМУ - ЧОРНІ",
    information: "per vehicula bibendum porttitor habitant sed ornare.",
    photo: "img/13.jpg",
  },
  {
    name: "ЧЕРЕВИКИ ШКІРЯНІ CROSSHUNT 100 D ДЛЯ ПОЛЮВАННЯ ВОДОВІДШТОВХУВАЛЬНІ",
    information:
      "dignissim habitant consequat morbi per tempor vel cursus. Erat luctus montes integer ac viverra magnis magna",
    photo: "img/5.jpg",
  },
];

let i = 0;
function loadCrocks() {
  let elem = document.getElementById("crocks");
  let n = Number(document.getElementById("number").value);
  if (n > i) {
    for (; i < n; i++) {
      let div = document.createElement("div");
      div.className = "crocks";
      div.innerHTML = `<img src=${crocks[i].photo}></img>`;
      div.innerHTML += `<h3 class="crocks_name">${crocks[i].name}</h3>`;
      div.innerHTML += `<p class="additional">${crocks[i].information}</p`;
      elem.prepend(div);
    }
  } else if (n < i) {
    let b = i - n;
    i = n;
    console.log(i);
    for (; b > 0; b--) {
      var crock = document.querySelector(".crocks");
      crock.removeChild(crock.firstChild);
    }
  }
}
